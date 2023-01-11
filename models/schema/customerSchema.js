const mongoose = require("mongoose");
var Schema = mongoose.Schema;

const CustomerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  dob:{
    type: Date,
    required: true,
  },
  mobileNo: {
    type: String,
    required: true,
  },
  emailid:{
    type:String,
    required:true
  }
});

const Customer = mongoose.model("customer", CustomerSchema);

module.exports = Customer;