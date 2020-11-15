import { LogErrorRepository } from '@/data/protocols/db/account/log-error-repository'
import { MongoHelper } from '@/infra/db/mongodb/helpers/mongo-helper'

export class LogMongoRepository implements LogErrorRepository {
  async logError (stack: string): Promise<void> {
    const errorCollection = await MongoHelper.getCollection('errors')
    errorCollection.insertOne({
      stack,
      date: new Date()
    })
  }
}
