const { Router } = require("express");
const {
  addProduct,
  getProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");
const { BookmarkModel } = require("../models/BookMark.model");
const { ProductModel } = require("../models/Product.Model");

const productRouter = Router();

productRouter.post("/add", addProduct);
productRouter.get("/", getProduct);
productRouter.patch("/update/:id", updateProduct);
productRouter.delete("/delete/:id", deleteProduct);

productRouter.delete("/bookmarkdelete/:id", async (req, res) => {
  const { id } = req.params;
  const data = await BookmarkModel.findOne({ _id: id });
  if (data) {
    await BookmarkModel.deleteOne({ _id: id });
    res.send({ msg: "product is deleted", data: data });
  } else {
    res.send({ msg: "product not exist more" });
  }
  console.log(data);
});

productRouter.post("/createbookmark", async (req, res) => {
  const { id } = req.body;
  const data = await ProductModel.findOne({ _id: id });
  if (data) {
    const new_bookmark = new BookmarkModel({
      title: data.title,
      quantity: data.quantity,
      priority: data.priority,
      discription: data.discription,
    });
    console.log(new_bookmark);
    await new_bookmark.save();
    res.send({ msg: "product is add to bookmark", data: data });
  } else {
    res.send({ msg: "product does not  exist " });
  }

  // console.log(data)
});

productRouter.get("/bookmark", async (req, res) => {
  const data = await BookmarkModel.find();
  res.send({ data: data, msg: "hi" });
});

module.exports = {
  productRouter,
};
