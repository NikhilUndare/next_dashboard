"use server"
import {handleError} from '../utils'
import connectToDB from '../database/index'
import User from "../database/models/user.model"
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import bcrypt from 'bcrypt'
import Product from '../database/models/product.model'

export const addUser = async(formData) => {
  const {username , email ,password,phone,address,isAdmin,isActive} = Object.fromEntries(formData);

   try {
     await connectToDB();
     const salt = await bcrypt.genSalt(10);
     const hashedPassword = await bcrypt.hash(password ,salt);
     const newUser = new User({
      username , email ,password:hashedPassword,phone,address,isAdmin,isActive
     })
     await newUser.save();
   } catch (error) {
    handleError(error)
   }
   revalidatePath('/dashboard/users')
   redirect('/dashboard/users')
}

export const addProduct = async(formData) => {
  const {title,description,price,stock,color,size} = Object.fromEntries(formData);

   try {
     await connectToDB();
     
     const newProduct = new Product({
      title,description,price,stock,color,size
     })
     await newProduct.save();
   } catch (error) {
    handleError(error)
   }
   revalidatePath('/dashboard/products')
   redirect('/dashboard/products')
}

export const deleteUser = async(formData) => {
  const {id} = Object.fromEntries(formData);

   try {
     await connectToDB();
     await User.findByIdAndDelete(id);
   } catch (error) {
    handleError(error)
   }
   revalidatePath('/dashboard/users')
   
}

export const deleteProduct = async(formData) => {
  const {id} = Object.fromEntries(formData);

   try {
     await connectToDB();
     await Product.findByIdAndDelete(id);
   } catch (error) {
    handleError(error)
   }
   revalidatePath('/dashboard/products')
   
}