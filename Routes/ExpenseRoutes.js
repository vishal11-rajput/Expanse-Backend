const router = require('express').Router();
const expenseController = require('../Controller/ExpenseController');
router.post("/expense",expenseController.createExpense)
router.get("/expense",expenseController.getAllExpense)
router.delete("/expense/:id",expenseController.deleteExpense)
router.get("/user-expense/:id",expenseController.getExpenseByUserId)
router.get("/expense/:id",expenseController.getExpenseById)
router.put("/expense/:id",expenseController.updateExpense)
router.post("/upload", expenseController.billUpload)

module.exports = router;
