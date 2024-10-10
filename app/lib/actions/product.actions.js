import connectToDB from '../database/index'
import Product from '../database/models/product.model';
import { handleError } from "../utils"

export const fetchProducts = async(q , page) => {
    
    const regex = new RegExp(q , "i")
    const ItemsPerPage = 5;
    try {
     await connectToDB()
      const products = await Product.find({title :{$regex : regex}}).limit(ItemsPerPage).skip(ItemsPerPage * (page-1)) ;
      return products;  
    } catch (error) {
        handleError(error)
    }
}

export const fetchSingleProduct = async(id) => {
    try {
     await connectToDB()
      const product = await Product.findById(id)
      return product;  
    } catch (error) {
        handleError(error)
    }
}

export const fetchProductsCount = async(q) => {
    const regex = new RegExp(q , "i")
    try {
        await connectToDB()
         const count = await Product.find({title :{$regex : regex}}).countDocuments();
         return count; 
       } catch (error) {
           handleError(error)
       }
}