const mongoose = require('mongoose')

const transactionSchema = new mongoose.Schema({
  type: String, 
  amount: Number,
  from: String, 
  to: String,  
  
  createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Transaction', transactionSchema)
