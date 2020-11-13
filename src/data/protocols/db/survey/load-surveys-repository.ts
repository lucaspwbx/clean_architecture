import { SurveyModel } from '@/domain/models/survey'
import { AddSurveyModel } from '@/domain/usecases/add-survey'

export interface LoadSurveysRepository {
  loadAll: () => Promise<SurveyModel[]>
}
