const router = require('express').Router();
const roleController = require('../Controller/RoleController');
router.post("/role",roleController.createRole)
router.get("/role",roleController.getAllRole)
router.delete("/role/:id",roleController.deleteRole)
router.get("/role/:id",roleController.getRoleById)
router.put("/role/:id",roleController.updateRole)

module.exports = router;
