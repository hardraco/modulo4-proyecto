import { User } from "../models/user.js"
import { Task } from "../models/task.js"
import logger from '../logs/logger.js'

async function create(req,res) {
  const {username, password} = req.body;
  try {
    const user = await User.create({
      username,
      password
    })
    console.log(newUser)
    return res.json(newUser)
  } catch (error) {
    logger.error(error)
    return error
  }
}

export default {
  create
}