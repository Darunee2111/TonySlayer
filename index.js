//front Book
// Description: Node.js HTML client
// requires: npm install express ejs axios body-parser
//ข้อควรระวัง!!! การที่คุณเห็น "/" แล้วไม่มีอะไรพิมต่อหลัง / มันผิด ต้องพิมพ์ชื่อเทเบิ้ลใส่หลัง / ทุกครั้ง เช่น "/books"


const express = require('express');
const axios = require('axios');
const app = express();
var bodyParser = require('body-parser');

// Base URL for the API
//const base_url = "https://api.example.com";
const base_url = "http://localhost:3000";
//const base_url = "http://node41091-noderest.proen.app.ruk-com.cloud";

// Set the template engine
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Serve static files
app.use(express.static(__dirname + '/public'));

app.get("/books", async (req, res) => { //บรรทัดนี้สำคัญต่อตัวท่านมากเพราะว่าต้องใส่ "/books" ้พราะก่อนหน้านี้มันจะให้เป็น "/" ซึ่งแล้วแต่เวรแต่กรรมที่อีโทนี่จะให้มา
    try {
        const response = await axios.get(base_url + '/books');
        res.render("books", { books: response.data });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error Access RootWEB');
    }
});

app.get("/book/:id", async (req, res) => {
    try {
        const response = await axios.get(base_url + '/books/' + req.params.id);
        res.render("book", { book: response.data });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error');
    }
});

app.get("/create", (req, res) => {
    res.render("create");
});

app.post("/create", async (req, res) => {
    try {
        const data = { title: req.body.title, author: req.body.author };
        await axios.post(base_url + '/books', data);
        res.redirect("/books");
    } catch (err) {
        console.error(err);
        res.status(500).send('Error');
    }
});

app.get("/update/:id", async (req, res) => {
    try {
        const response = await axios.get(
        base_url + '/books/' + req.params.id);
        res.render("update", { book: response.data });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error');
    }
});
            
app.post("/update/:id", async (req, res) => {
    try {
        const data = { title: req.body.title, author: req.body.author };
        await axios.put(base_url + '/books/' + req.params.id, data);
        res.redirect("/books");
    } catch (err) {
        console.error(err);
        res.status(500).send('Error');
    }
});
            
app.get("/delete/:id", async (req, res) => {
    try {
        await axios.delete(base_url + '/books/' + req.params.id);
            res.redirect("/books");
    } catch (err) {
        console.error(err);
        res.status(500).send('Error');
    }
});

//-----------------------------ploys-----------------------------------------------------------------------
   
app.get("/ploys", async (req, res) => { //บรรทัดนี้สำคัญต่อตัวท่านมากเพราะว่าต้องใส่ "/ploys" ้พราะก่อนหน้านี้มันจะให้เป็น "/" ซึ่งแล้วแต่เวรแต่กรรมที่อีโทนี่จะให้มา
    try {
        const response = await axios.get(base_url + '/ploys');
        res.render("ploys", { ploys: response.data });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error Access RootWEB');
    }
});

app.get("/ploy/:id_oo", async (req, res) => {
    try {
        const response = await axios.get(base_url + '/ploys/' + req.params.id_oo);
        res.render("ploy", { ploy: response.data });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error');
    }
});

app.get("/create2", (req, res) => {
    res.render("create2");
});

app.post("/create2", async (req, res) => {
    try {
        const data = { name: req.body.name, brith: req.body.brith, lastname: req.body.lastname };
        await axios.post(base_url + '/ploys', data);
        res.redirect("/ploys");
    } catch (err) {
        console.error(err);
        res.status(500).send('Error');
    }
});

app.get("/update2/:id_oo", async (req, res) => {
    try {
        const response = await axios.get(
        base_url + '/ploys/' + req.params.id_oo);
        res.render("update2", { ploy: response.data });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error');
    }
});
            
app.post("/update2/:id_oo", async (req, res) => {
    try {
        const data = { name: req.body.name, brith: req.body.brith, lastname: req.body.lastname };
        await axios.post(base_url + '/ploys', data);
        res.redirect("/ploys");
    } catch (err) {
        console.error(err);
        res.status(500).send('Error');
    }
});
            
app.get("/delete2/:id_oo", async (req, res) => {
    try {
        await axios.delete(base_url + '/ploys/' + req.params.id_oo);
            res.redirect("/ploys");
    } catch (err) {
        console.error(err);
        res.status(500).send('Error');
    }
});

//-----------------------------renjuns-----------------------------------------------------------------------
   
app.get("/renjuns", async (req, res) => { //บรรทัดนี้สำคัญต่อตัวท่านมากเพราะว่าต้องใส่ "/renjuns" ้พราะก่อนหน้านี้มันจะให้เป็น "/" ซึ่งแล้วแต่เวรแต่กรรมที่อีโทนี่จะให้มา
    try {
        const response = await axios.get(base_url + '/renjuns');
        res.render("renjuns", { renjuns: response.data });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error Access RootWEB');
    }
});

app.get("/renjun/:id_do", async (req, res) => {
    try {
        const response = await axios.get(base_url + '/renjun/' + req.params.id_do);
        res.render("renjun", { renjun: response.data });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error');
    }
});

app.get("/create3", (req, res) => {
    res.render("create3");
});

app.post("/create3", async (req, res) => {
    try {
        const data = { name: req.body.name, lastname: req.body.lastname };
        await axios.post(base_url + '/renjuns', data);
        res.redirect("/renjuns");
    } catch (err) {
        console.error(err);
        res.status(500).send('Error');
    }
});

app.get("/update3/:id_do", async (req, res) => {
    try {
        const response = await axios.get(
        base_url + '/renjuns/' + req.params.id_do);
        res.render("update3", { renjun: response.data });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error');
    }
});
            
app.post("/update3/:id_do", async (req, res) => {
    try {
        const data = { name: req.body.name, lastname: req.body.lastname };
        await axios.put(base_url + '/renjuns/' + req.params.id_do, data);
        res.redirect("/renjuns");
    } catch (err) {
        console.error(err);
        res.status(500).send('Error');
    }
});
            
app.get("/delete3/:id_do", async (req, res) => {
    try {
        await axios.delete(base_url + '/renjuns/' + req.params.id_do);
            res.redirect("/renjuns");
    } catch (err) {
        console.error(err);
        res.status(500).send('Error');
    }
});

app.listen(5500, () => {
            console.log('Server started on port 5500');
            });
            