import { CompareFieldsValidation } from './compare-fields-validation'
import { InvalidParamError } from '../../presentation/errors'

const makeSut = (): CompareFieldsValidation => {
  return new CompareFieldsValidation('field', 'fieldToCompare')
}

describe('CompareFields Validation', () => {
  test('should return a missing param error if validation fails', () => {
    const sut = makeSut()
    const error = sut.validate({
      name: 'any_name',
      fieldToCompare: 'wrong_value'
    })
    expect(error).toEqual(new InvalidParamError('fieldToCompare'))
  })

  test('should not return if validation succeds', () => {
    const sut = makeSut()
    const error = sut.validate({
      name: 'any_value',
      fieldToCompareName: 'any_value'
    })
    expect(error).toBeFalsy()
  })
})
