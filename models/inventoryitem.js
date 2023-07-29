const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
  productname: {type: String, required: true},
  quantity: {type: Number, required: true},
  SKU: {type: String, required: true},
  user: {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true}
},{collection: 'inventoryitems'})

module.exports = mongoose.model('inventory', inventorySchema);