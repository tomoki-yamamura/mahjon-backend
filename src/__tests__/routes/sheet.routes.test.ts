import supertest from "supertest"
import createServer from "../../utils/server"

const app = createServer();
describe('/sheet', () => {
  describe('getSheet route', () => {
    describe('given a GET request', () => {
      it('should return a 200', async () => {
        const id = 1
        await supertest(app).get(`/sheets/${id}`).expect(200)
      })
    })
  })
})
