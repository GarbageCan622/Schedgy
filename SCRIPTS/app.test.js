import request from "supertest"
import makeApp from "./app.js"
import { jest } from '@jest/globals'

const createUser = jest.fn()
const app = makeApp({createUser})

describe("POST /users", () => {

  beforeEach(() => {
    createUser.mockReset()
  })

  describe("when passed a username and password", () => {
    // should save the username and password in the database
    // should contain the userId from the database in the json body
  })

})