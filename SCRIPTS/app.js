import express from 'express'

export default function(database) {
  let app = express()

  app.use(express.json())
  app.post('/users', async (req, res) => {
    const { username, password } = req.body
    if (!username || !password) {
      res.send(400)
      return
    }

    res.send({userId: 0})
  })

  return app
}