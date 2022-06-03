import db from "../database/db.js";

import { DataTypes } from "sequelize";

const dbModel = db.define('products',{    
    ProductID : {type: DataTypes.STRING, primaryKey: true},
    ProductName : { type: DataTypes.STRING}
    
},
{
    timestamps: false
})

export default dbModel