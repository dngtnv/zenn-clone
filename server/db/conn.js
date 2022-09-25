const dbURI = process.env.ATLAS_URI
const mongoose = require("mongoose")

const connectToServer = () => {
    try {
        mongoose.connect(dbURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log(`Successfully connected to Mongodb.`)
    } catch (err) {
        console.log(err)
    }
}
exports.connectToServer = connectToServer
