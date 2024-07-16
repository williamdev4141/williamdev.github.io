// const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/node', {
//     useNewUrlParser: true, 
//     useUnifiedTopology: true,
//     useCreateIndex: true
// });

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/node');




// // Menambah 1 data
// const contact1 = new Contact({
//     nama: 'Erlang',
//     nohp: '08123123890',
//     email: 'sandhika@gmail.com'
// });

// // Simpan ke collection
// contact1.save().then((contact) => console.log(contact));