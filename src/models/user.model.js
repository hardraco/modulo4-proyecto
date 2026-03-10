import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const User = sequelize.define("User",{
  id:{
    type:DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true
  },
  username:{
    type:DataTypes.STRING,
    allowNull:false
  },
  status:{
    type:DataTypes.STRING,
    defaultValue:"ACTIVE"
  }
});

export default User;