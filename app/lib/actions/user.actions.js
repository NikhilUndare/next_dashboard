import connectToDB from '../database/index'
import User from "../database/models/user.model"
import { handleError } from "../utils"

export const fetchUsers = async(q , page) => {
    
    const regex = new RegExp(q , "i")
    const ItemsPerPage = 5;
    try {
     await connectToDB()
      const users = await User.find({username :{$regex : regex}}).limit(ItemsPerPage).skip(ItemsPerPage * (page-1)) ;
      return users;  
    } catch (error) {
        handleError(error)
    }
}

export const fetchSingleUser = async(userId) => {
    try {
     await connectToDB()
      const user = await User.findById(userId);
      return user;  
    } catch (error) {
        handleError(error)
    }
}

export const fetchUsersCount = async(q) => {
    const regex = new RegExp(q , "i")
    try {
        await connectToDB()
         const count = await User.find({username :{$regex : regex}}).countDocuments();
         return count; 
       } catch (error) {
           handleError(error)
       }
}