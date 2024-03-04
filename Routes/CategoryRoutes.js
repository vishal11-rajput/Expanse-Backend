const router = require('express').Router();
const categoryController = require('../Controller/CategoryController');
router.post("/category",categoryController.createCategory)
 router.get("/category",categoryController.getAllCategory)
 router.delete("/category/:id",categoryController.deleteCategory)
 router.get("/category/:id",categoryController.getCategoryById)
 router.put("/category/:id",categoryController.updateCategory)

module.exports = router;
