import User from "../models/user.model.js";
import { Op } from "sequelize";

export const createUser = async (req,res)=>{
  try{
    const user = await User.create(req.body);
    res.json(user);
  }catch(e){
    res.status(500).json({error:e.message})
  }
}

export const getUsers = async (req,res)=>{
  const users = await User.findAll();
  res.json(users);
}

export const getUser = async (req,res)=>{
  const user = await User.findByPk(req.params.id);
  res.json(user);
}

export const updateUser = async (req,res)=>{
  const user = await User.findByPk(req.params.id);
  if(!user) return res.status(404).json({message:"not found"});
  await user.update(req.body);
  res.json(user);
}

export const deleteUser = async (req,res)=>{
  const user = await User.findByPk(req.params.id);
  if(!user) return res.status(404).json({message:"not found"});
  await user.destroy();
  res.json({message:"deleted"});
}

export const getUsersPagination = async (req,res)=>{

  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const search = req.query.search || "";
  const orderBy = req.query.orderBy || "id";
  const orderDir = req.query.orderDir || "DESC";

  const offset = (page-1)*limit;

  const where = {};

  if(search){
    where.username = {
      [Op.like]: `%${search}%`
    }
  }

  const {count,rows} = await User.findAndCountAll({
    where,
    attributes:["id","username","status"],
    limit,
    offset,
    order:[[orderBy,orderDir]]
  })

  const pages = Math.ceil(count/limit);

  res.json({
    total:count,
    page,
    pages,
    data:rows
  })
}