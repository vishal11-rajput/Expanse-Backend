const router = require('express').Router();
const payeeController = require('../Controller/PayeeController');
router.post("/payee",payeeController.createPayee)
router.get("/payee",payeeController.getAllPayee)
router.delete("/payee/:id",payeeController.deletePayee)
router.get("/payee/:id",payeeController.getPayeeById)
router.put("/payee/:id",payeeController.updatePayee)

module.exports = router;
