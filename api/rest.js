//const { Helpers } = require('../../controllers/cashkick/helpers.js');
const { IdentityDAO } = require('../models/IdentityDAO');
console.log(".............. cashkick rest");

async function createCustomer(req,res){
    console.log("inside createCustomer..............");
    try{
        let customerData = req.body.data;
        console.log("for customerData.............::");
        console.log(customerData);
        await IdentityDAO.createCustomer(customerData);
        res.status(200).send("cashkick created successfully");
    }catch(err){
        throw new Error(`Error in creating cashkick::${JSON.stringify(err)}`);
    }
}

async function getCashkickPayments(req,res){
    console.log("inside getCashkickPayments..............");
}

async function createCashkick(req,res){
    console.log("inside createCashkick..............");
}

async function getMyCashKickAndContract(req,res){
    console.log("inside getMyCashKickAndContract..............");
}

async function getMyContract(req,res){
    console.log("inside getMyContract..............");
}


module.exports = {
    createCustomer,
    getCashkickPayments,
    createCashkick,
    getMyCashKickAndContract,
    getMyContract
};