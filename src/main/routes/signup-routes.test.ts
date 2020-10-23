import request from 'supertest'
import app from '../config/app'

describe('signup routes', () => {
    test('should return an account on success', async () => {
        await request(app)
            .post('/api/signup')
            .send({
                name: 'foo',
                email: 'bar@bar.com',
                password: 'foo',
                passwordConfirmation: '123'
            })
            .expect(200)
    });
})
