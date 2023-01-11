//const { Helpers } = require('../../controllers/cashkick/helpers.js');

console.log(".............. cashkick rest");

async function getCashkickPayments(req,res){
    
}

async function createCashkick(req,res){
    let cashKickData = req.body.data;
    try{
        
    }catch(err){
        throw new Error(`Error in creating cashkick::${JSON.stringify(err)}`);
    }
}

async function getMyCashKickAndContract(req,res){
    console.log("inside getMyCashKickAndContract..............");
}

async function getMyContract(req,res){
    console.log("inside getMyContract..............");
}


module.exports = {
    getCashkickPayments,
    createCashkick,
    getMyCashKickAndContract,
    getMyContract
};