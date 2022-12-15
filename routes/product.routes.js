const {Router} = require("express")
const { addProduct, getProduct, updateProduct, deleteProduct } = require("../controllers/productController")

 const productRouter = Router()

 productRouter.post("/add",addProduct)
 productRouter.get("/",getProduct)
 productRouter.patch("/update/:id",updateProduct)
 productRouter.delete("/delete/:id",deleteProduct)


 module.exports = {
 productRouter
 }