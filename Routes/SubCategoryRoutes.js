const router = require('express').Router();
const subCategoryController = require('../Controller/SubCategoryController');
router.post("/subcategory",subCategoryController.createSubCategory)
router.get("/subcategory",subCategoryController.getAllSubCategory)
router.delete("/subcategory/:id",subCategoryController.deleteSubCategory)
router.get("/subcategory/:id",subCategoryController.getSubCategoryById)
router.put("/subcategory/:id",subCategoryController.updateSubCategory)

module.exports = router;
