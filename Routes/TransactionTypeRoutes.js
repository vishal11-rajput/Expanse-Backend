const router = require("express").Router();
const transactionTypeController = require("../Controller/TransactionTypeController");

router.post(
  "/transactionType",
  transactionTypeController.createTransactionType
);
router.get(
  "/transactionType",
  transactionTypeController.getAllTransactionType
);
router.delete(
  "/transactionType/:id",
  transactionTypeController.deleteTransactionType
);
router.get(
  "/transactionType/:id",
  transactionTypeController.getTransactionTypeById
);
router.put(
  "/transactionType/:id",
  transactionTypeController.updateTransactionType
);

module.exports = router;
