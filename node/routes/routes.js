import express from "express";
import { getAllItems, getItem, updateItem } from "../controllers/dbController.js";
const router = express.Router()

router.get('/',getAllItems)
router.get('/search',getItem)

router.put('/:id',updateItem)
//router.post(('/',createItem))
//router.delete('/:id',deleteItem)


export default router