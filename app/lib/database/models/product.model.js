import  mongoose, {  Schema } from "mongoose";

const productSchema = new Schema({
    title : {type : String , required : true , unique :true  },
    description : {type : String , required : true   },
    price: {type : Number , required : true , min : 0 },
    stock: {type : Number , required : true , min : 0 },
    color: {type : String  },
    size: {type : String  },
    img : {type : String},
} , {timestamps : true})

const Product = mongoose.models.Product || mongoose.model('Product' , productSchema)

export default Product;