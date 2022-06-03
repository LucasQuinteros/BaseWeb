import dbModel from "../models/dbModel.js";
import { Op } from "sequelize";

export const getAllItems = async(req, res) =>{
    console.log(req.params)
    console.log(req.query)
    try {
        const items = await dbModel.findAll()
        res.json(items)
    }catch (error){
        res.json( {message: error.message})
    }
}
/*
export const getItem = async(req, res) =>{
    console.log('getItem:'+ req.query)
    
    try {
        const item = await dbModel.findAll({
            where:{ProductID:req.query.id}
        })
        res.json(item)
    }catch (error){
        res.json( {message: error.message})
    }
    
}*/
export const getItem = async(req, res) =>{
    console.log(req.query)
    
    try {
        const item = await dbModel.findAll(
        {
            where:{ //ProductID: req.params.name
                [Op.and]:
                {
                    //ProductID: req.query.id,
                    ProductName:
                    {
                        [Op.substring]: req.query.name
                    }
                }
            }
        })
        
        
        res.json(item)
    }catch (error){
        res.json( {message: error.message})
        
    }
}


export const createItem = async(req, res) =>{
    try {
        await dbModel.create(req.body)
        res.json({"message": "Regsitro creado correctamente"})
        
    }catch (error){
        res.json( {message: error.message})
    }
}

export const updateItem = async(req, res) =>{
    try {
        await dbModel.update(req.body,{where:{id : req.params.id}})
        res.json({"message": "Regsitro actualizado correctamente"})
        
    }catch (error){
        res.json( {message: error.message})
    }
}

export const deleteItem = async(req, res) =>{
    try {
        await dbModel.destroy({where:{id : req.params.id}})
        res.json({"message": "Regsitro eliminado correctamente"})
        
    }catch (error){
        res.json( {message: error.message})
    }
}
