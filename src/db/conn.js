const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/logininterviewsights", {
    //useNewUrlParser: true,
    //useUnifiedTopology: true
}).then(() => {
    console.log("connection successful");
}).catch((e) => {
    console.error("connection failed", e);
});
