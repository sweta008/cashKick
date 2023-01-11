const customerModel = require('../models/schema/customerSchema');

const IdentityDAO = {};

IdentityDAO.createCustomer = async function(customerData){
    try{
        console.log("inside model createCustomer");
        console.log("for customerModel...............");
        console.log(customerModel);
        return await customerModel.save({name:"sweta kumari"});
    }catch(err){
        throw new Error(`Error in cashkick model insertion::${JSON.stringify(err)}`);
    }
}

module.exports = { IdentityDAO };