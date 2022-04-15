import app from "./app.js";
import mongoose from "mongoose";

//router(app);
const port = process.env.port || 3000;
app
    .listen(port, () => console.log(`Run on port ${port}`))
    .on('error', (err) => {
        console.log(err);
    });

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://LTdb:cr8prZoLc37GvhmZ@ltcluster.i61bg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})