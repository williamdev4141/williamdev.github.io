const express = require('express');
const expressLayouts = require('express-ejs-layouts');

// 3 modul untuk flash messege saat data berhasil ditambahkan
const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');


require('./utils/db')
const Contact = require('./model/contact')

const app = express();
const port = 3000;

// Setup view engine EJS
app.set('view engine', 'ejs');
app.use(expressLayouts) 
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// konfigurasi flash
app.use(cookieParser('secret'));
app.use(session({
    cookie: { maxAge: 6000 },
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));
app.use(flash());

// Halaman Home
app.get('/', (req, res) => {
    const mahasiswa = [
        {
            nama : 'abdul',
            kelas : 'satu'
        },
        {
            nama : 'aziz',
            kelas : 'empat'
        },
        {
            nama : 'amir',
            kelas : 'enam'
        },
    ]; 
    res.render('index', {
        nama : 'Farand Darmika', 
        title : 'Halaman Home',
        mahasiswa, 
        layout : 'layouts/main-layout'
    })
});

// Halaman About 
app.get('/about', (req, res) => {
    res.render('about', { 
      layout : 'layouts/main-layout',
      title : 'Halaman About'
      })
  });

// Halaman Contact
app.get('/contact', async (req, res) => {
    const contacts = await Contact.find()
  
    res.render('contact', { 
      layout : 'layouts/main-layout',
      title : 'Halaman Contact',
      contacts,
      msg: req.flash('msg'),
      })
  });

 // routes untuk halaman detail contact
app.get('/contact/:nama', async (req, res) => {
    // const contact = findContact(req.params.nama);
    const contact = await Contact.findOne({ nama: req.params.nama });

    res.render('detail', { 
        layout : 'layouts/main-layout',
        title : 'Halaman Detail Contact',
        contact,
        })
})
  

app.listen(port, () => {
    console.log(`Mongo Contact App | Listening at http://localhost:${port}`)
    console.log(`hey`)
});
  
  

