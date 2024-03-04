const router = require('express').Router();
const labelController = require('../Controller/LabelController');
router.post("/label",labelController.createLabel)
router.get("/label",labelController.getAllLabel)
router.delete("/label/:id",labelController.deleteLabel)
router.get("/label/:id",labelController.getLabelById)
router.put("/label/:id",labelController.updateLabel)

module.exports = router;
