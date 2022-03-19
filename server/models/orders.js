const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderschema = new Schema({

    orderId: { type: String },
    orderedDateandTime: { type: String, default: new Date() },
    orderList: [{
        item: { type: String },
        count: { type: Number, default: 0 },
        wash: { type: Boolean, default: false },
        press: { type: Boolean, default: false },
        fold: { type: Boolean, default: false },
        pack: { type: Boolean, default: false },
        price: { type: Number, default: 0 }
    }],

    totalNumberOfItems: { type: Number, default: 0 },
    orderStatus: { type: String, default: "Ready to Pick-Up" },
    totalAmount: { type: Number, default: 0 },
})


const orders = mongoose.model("Order", orderschema);
module.exports = orders;
//  git pull origin main