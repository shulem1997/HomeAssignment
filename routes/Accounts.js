const express = require('express');
var router = express.Router();

const accountController = require('../controllers/Accounts')


//match each request to its relevent function in controllers file:

//attention: account_id is a string, not a number

router.get("/:account_id/balance", accountController.getAccountBalance);

router.post("/:account_id/withdraw", accountController.withdraw);

router.post("/:account_id/deposit", accountController.makeDeposit);

module.exports = router;