const app = require('../../config/app'),
  chai = require('chai'),
  chaiHttp = require('chai-http');

chai.use(chaiHttp);

const expect = chai.expect;

describe('API Test', () => {
  it('fails, as expected', (done) => {
    chai.request(app)
      .get('/mockurl')
      .end((err, res) => {
        expect(res).to.have.status(404);
        done();
      });
  });
});
