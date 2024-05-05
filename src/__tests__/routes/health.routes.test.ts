import supertest from "supertest"
import createServer from "../../utils/server"

const app = createServer();

describe('/healthcheck', () => {
  describe('getHealth route', () => {
    describe('given a GET request', () => {
      it('should return a 200', async () => {
        await supertest(app).get('/health').expect(200)
      })
    })
  })
})