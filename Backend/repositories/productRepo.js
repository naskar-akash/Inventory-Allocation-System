import Product from "../models/product-model.js";

export const findProdById = async (productId) => {
    return await Product.findById(productId);
}

export const deductStock = async (productId, quantity) => {
  return await Product.findOneAndUpdate(
    { _id: productId, stock: { $gte: quantity } },
    { $inc: { stock: -quantity } },               
    { new: true }                                 
  );
};