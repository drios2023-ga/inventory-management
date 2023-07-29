var express = require("express");
var router = express.Router();
const inventoryCtrl = require('../../controllers/api/inventoryitems')

//get all items
router.get('/', inventoryCtrl.getAll);

//get one item
router.get('/:id', inventoryCtrl.show);

//add new
router.post('/new', inventoryCtrl.new);

//update
router.put("/:id/update", inventoryCtrl.update);

//delete
router.delete("/:id", inventoryCtrl.delete);





module.exports = router;