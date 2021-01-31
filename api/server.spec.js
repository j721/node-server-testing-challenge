const supertest = require("supertest");

const server = require("./server.js");
const db = require("../data/dbConfig.js");

const Foods = require ('../food/food-model');

afterEach(async ()=>{
    await db("foods").truncate();
})

describe("server", () => {
    it("can run the tests", () => {
      expect(true).toBeTruthy();
    });
})

describe ('server',()=>{
    describe("GET / all foods",()=>{
        it( 'returns http status code 200 OK',()=>{
          supertest(server)
          .get('/')
            .then(res=>{
                expect(res.type).toMatch(/json/i);
            })
        })
    })


describe("GET / ", () => {
    it("should return http status code 200 OK", () => {
      return (
        supertest(server)
          .get("/")
          // .expect(200) // from supertest
          .then(response => {
            // from jest
            expect(response.status).toBe(200);
          })
      );
    });

    it("should return { api: 'up' }", () => {
      return supertest(server)
        .get("/")
        .then(response => {
          expect(response.body).toEqual({  api: "Good to go!" });
          expect(response.body.api).toBeDefined();
          expect(response.body.api).toBe("Good to go!");
        });
    });
  });

  describe("GET /get all foods", () => {
    it("should return an object", async () => {
      const res = await supertest(server)
    
        .get("/api/list")
        console.log(res.body)
            expect(res.body).toMatchObject({message: 'Success! Getting foods list'})
        });

        it("should not return an array", ()=>{
            return supertest(server)
            .get("/api/list")
            .then(response => {
              expect(Array.isArray(response.body)).toBe(false);
            });
        })
  });

 


describe("POST/ add new food", ()=>{
    it("should add a new food item with status of 201", async ()=>{
        return supertest(server)
        .post('/api/list')
        .send({name: "grapes", category: "fruit"})
            .then((res)=>{
            expect (res.status).toBe(201);
        })

    })

    it('should send of status of 500 with no fruit item added in send request', async ()=>{
        return supertest(server)
        .post('/api/list')
        .then((res)=>{
            expect(res.status).toBe(500);
        })
    })
})

describe('DELETE /list/:id', ()=>{
    it('should have a status of 200 for deleted food item', async ()=>{

        return supertest(server)
        .delete('/api/list/1')
        .expect(200)
        .then(res=>{
            expect(res.body.message).toBe('Food item is removed from list.')
        })
    })

})

describe("DELETE /list/:id", ()=>{
    it('should remove the deleted food item object by id', ()=>{
        return supertest(server)
        .delete("/api/list/:id")
        .then((res)=>{
            expect( typeof res.body).toBe("object")
        })
    })
})
})