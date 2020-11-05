import { makeSignUpValidation } from './signup-validation-factory'
import { makeDbAuthentication } from '../usecases/authentication/db-authentication-factory'
import { Controller } from '../../../../presentation/protocols'
import { BcryptAdapter } from '../../../../infra/cryptography/bcrypt-adapter/bcrypt-adapter'
import { AccountMongoRepository } from '../../../../infra/db/mongodb/account/account-mongo-repository'
import { DbAddAccount } from '../../../../data/usecases/add-account/db-add-account'
import { LogMongoRepository } from '../../../../infra/db/mongodb/log/log-mongo-repository'
import { LogControllerDecorator } from '../../../../main/decorators/log-controller-decorator'
import { SignUpController } from '../../../../presentation/controllers/signup/signup-controller'

export const makeSignUpController = (): Controller => {
  const salt = 12
  const bcryptAdapter = new BcryptAdapter(salt)
  const accountMongoRepository = new AccountMongoRepository()
  const dbAddAccount = new DbAddAccount(bcryptAdapter, accountMongoRepository)
  const signUpController = new SignUpController(dbAddAccount, makeSignUpValidation(), makeDbAuthentication())
  const logMongoRepository = new LogMongoRepository()
  return new LogControllerDecorator(signUpController, logMongoRepository)
}