const inventory = require("../../models/inventoryitem");

module.exports = {
  getAll,
  show,
  new: newItem,
  update,
  delete: deleteItem,
};

async function getAll(req, res) {
  try {
    // get all items
    res.json(await inventory.find({user: req.user}).exec());
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
}

async function show(req, res) {
  try {
    // send one item
    console.log(req.params.id);
    res.json(await inventory.findById(req.params.id));
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
}

async function newItem(req, res) {
  try {
    // create new item
    req.body.user = req.user._id;
    console.log(req.user)
    res.json(await inventory.create(req.body));
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
}

async function update(req, res) {
  try {
    // update item by ID
    res.json(
      await inventory.findByIdAndUpdate(req.params.id, req.body, { new: true })
    );
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
}

async function deleteItem(req, res) {
  try {
    // delete item by ID
    res.json(await inventory.findByIdAndRemove(req.params.id));
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
}
