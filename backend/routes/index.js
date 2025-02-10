const express = require("express")
const app = express()

const auth_routes=require("./auth.routes")
const product_routes = require("./product.routes")
const admin_routes=require("./makeadmin.routes")


app.use("/",admin_routes)
app.use("/",product_routes)
app.use('/auth', auth_routes);

module.exports = app