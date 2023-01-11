const express = require('express'),
router = express.Router();
console.log('.............. index');

const cashkick = require('../api/rest');

router.post("/cashkick", cashkick.createCashkick);
router.get("/contracts/:customerid/:cashkickid", cashkick.getMyCashKickAndContract);
router.get("/contracts/:customerid", cashkick.getMyContract);
router.post("/customer", cashkick.createCustomer);
router.get("/payments/:customerid/:cashkickid", cashkick.getCashkickPayments);


module.exports = router;