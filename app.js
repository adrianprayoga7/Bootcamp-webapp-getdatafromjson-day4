// const fs = require('fs');
// const http = require('http');

// const halamanHTML = (path, res) => {
//     fs.readFile(path, (err,data) => {
//         if (err) {
//             res.writeHead(404);
//             res.write('Error : page not found');
//         } else {
//             res.write(data);
//         }
//         res.end();
//     })
// }

// http.createServer((req,res) => {
//     const url = req.url;
//     console.log(url);
//     //200 adalah status code
//     res.writeHead(200, {
//         'Content-Type' : 'text/html',
//     });

//     if(url==='/about') {
//         halamanHTML('./about.html',res);    
//     } else if (url === '/contact') {
//         halamanHTML('./contact.html',res);
//     } else {
//         halamanHTML('./index.html',res);
//     }
// })
//     //3000 selalu dibarengi dengan url
//     .listen(3000,() => {
//         console.log('Server is listening on port 3000');
//     });

const express = require('express')
const expressLayouts = require('express-ejs-layouts');
const app = express()
const port = 3000

//untuk menginformasikan dengan menggunakan view engine ejs
app.set('view engine', 'ejs')
app.use(expressLayouts);

//data array untuk di pass ke ejs
const contacts = [
    {
        nama : 'adrian',
        tlp : '082128409933'
    },
    {
        nama : 'prayoga',
        tlp : '082128442233'
    }
]

app.get('/', (req, res) => {
//dirname untuk memberitahu bahwa lokasi file ada di directory
    res.render('index', {
        title : 'Home Page'
    })
})

//akses untuk ke halaman about
app.get('/about', (req,res) => {
    res.render('about', {
        title : 'About Page'
    })
})

//akses untuk ke halaman contact
app.get('/contact', (req,res) => {
    res.render('contact', {
        title : 'Contact Page',
        febChar : contacts
    });
})

// //untuk akses berdasarkan id
// app.get('/product/:id', (req,res) => {
//     res.send(req.params);
// })

//untuk akses tampilan 404 atau root
app.use('/',(req,res) => {
    res.status(404);
    res.send('PAGE NOT FOUND : 404');
})

//untuk menggunakan pada localhost dengan port 3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})