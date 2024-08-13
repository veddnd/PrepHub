const express = require("express");
const path = require("path");
const app = express();
require("./db/conn");

const Authentication = require("./models/signup");

const hbs = require("hbs");

const port = process.env.PORT || 5000;

const static_path = path.join(__dirname, "../public")
const template_path = path.join(__dirname, "../templates/views");

//const parial_path = path.join(__dirname, "../templates/partials");
//hbs.registerPartials(parial_path);

app.set("view engine", "hbs");
app.set("views", template_path);
app.use(express.static(static_path));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, resp) => {
    resp.render("home");
});

app.get('/signUp', (req, resp) => {
    resp.render("signup");
});

app.get('/developers', (req, resp) => {
    resp.render("developer");
});

app.get('/loginverf', (req, resp) => {
    resp.render("loginverf");
});

app.get('/Google', (req, resp) => {
    resp.render("Gq");
});

app.get('/Amazon', (req, resp) => {
    resp.render("amaq");
});

app.get('/Microsoft', (req, resp) => {
    resp.render("microq");
});

app.get('/Flipkart', (req, resp) => {
    resp.render("flipq");
});


app.get('/Paytm', (req, resp) => {
    resp.render("paytmq");
});

app.get('/Samsung', (req, resp) => {
    resp.render("samq");
});

app.get('/', (req, resp) => {
    resp.render("loginverf");
});

app.get('/companies', (req, resp) => {
    resp.render("interview");
});

app.post('/loginverf', async (req, resp) => {
    const user_pass = req.body.password;

    const user = await Authentication.findOne({name: req.body.username});
    
    if (user) {
        if (user_pass === user.password) {
            resp.render('interview')
        }
        else {
            resp.render('loginverf', { errorMessage: 'Authentication failed! Incorrect password.' });
        }
    } 
    else {
        resp.render('loginverf', { errorMessage: 'Authentication failed! Incorrect Username.' });
    }

});


app.post('/signUp', async (req, res) => {
    
    try {
        const registerst = new Authentication({
            name: req.body.name,
            email: req.body.email,
            institute: req.body.institute,
            year: req.body.year,
            password: req.body.password,
        });

        const registered = await registerst.save();

        res.render("home");
    } catch (error) {
        console.error("Error during registration:", error.message);
        res.status(500).send("An error occurred during registration.");
    }
});



app.listen(port, () => {
    console.log("port is running at " + port);
});