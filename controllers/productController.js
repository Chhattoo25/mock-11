const { ProductModel } = require("../models/Product.Model.js");

const getProduct = async (req, res) => {
  const data = await ProductModel.find();
  res.json(data);
};

const addProduct = async (req, res) => {
  const { title, quantity, priority, description } = req.body;

  if (!title || !quantity || !priority || !description) {
    res.status(400);
    throw new Error("Please Fill all the Fields");
  } else {
    const data = new ProductModel({ title, quantity, priority, description });

    await data.save();

    res.status(201).json(data);
  }
};

const deleteProduct = async (req, res) => {
  const id = req.params.id;
  if (id) {
    const student_data = await ProductModel.deleteOne({
      _id: id,
    });
    res.send({ message: "product  Removed", student_data });
  } else {
    res.status(404);
    res.send({ msg: "something went wrong" });
  }
};

const updateProduct = async (req, res) => {
  const id = req.params.id;
  const updateData = req.body;

  const product_data = await ProductModel.updateOne(
    {
      _id: id,
    },
    updateData
  );
  res.send(product_data);
};
module.exports = {
  addProduct,
  getProduct,
  deleteProduct,
  updateProduct,
};
