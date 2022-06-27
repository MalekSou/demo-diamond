const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const mysql = require ('mysql2');

const app = express();
const routes = require("./router/router");



app.use(cors());
app.use(bodyparser.json());

const db = mysql.createConnection({
 host: 'localhost',
 user: 'root',
 password:'',
 database: 'codix',
 port:3306
});

db.connect(err=>{
    if(err) {console.log('err'); }
    console.log('database connected ...');
})



























app.get('/user',(req,res)=>{

    let qr = 'select * from user';
    db.query(qr, (err,result)=>{
        if(err)
        {
            console.log(err,'errs')
        }
            if (result.length>0 ){
                res.send({
                    message:'all user data',
                    data:result
                }) ;
            }
 



    });
});

app.get('/user/nickname',(req,res)=>{
    let nickname = req.params.nickname;
    let qr = ` select * from user where nickname = ${nickname} `
    db.query(qr,(err,result)=>{
if (err){console.log(err);}
if (result.length>0 ){
    res.send({
        message:'get single data',
        data:result
    }) ;
}
else
{
    res.send({
        message:'data not found'

    });
}
    });
}
);
app.post('/user',(req,res)=>{
    console.log(req.body,'createdata');
    let nickname = req.body.nickname;
    let password = req.body.password;
    let cpassword = req.body.cpassword;
    let email = req.body.email;
    let phone = req.body.phone;
    let country = req.body.country;

    let qr = `insert into user(nickname,password,cpassword,email,phone,country)
     values('${nickname}','${password}','${cpassword}','${email}','${phone}','${country}')`
     db.query(qr,(err,result)=>{
          if(err){console.log(err);}
       console.log(result,'result')
       res.send({
        message:'data inserted',
       });

     })
});

app.put('/user/:nickname',(req,res)=>{
    console.log(req.body,'updatedata');
    let nickname = req.body.nickname;
    let password = req.body.password;
    let cpassword = req.body.cpassword;
    let email = req.params.email;
    let phone = req.body.phone;
    let country = req.body.country;

    let qr = `update user set nickname = ' nickname = ${nickname}', password = '${password}', cpassword = '${cpassword}', phone= '${phone}', country ='${country}'
    where email= '${email}'`;

    db.query(qr,(err,resut)=>{
        if(err) {console.log(err);}
        res.send({
            message:'data updated'
        });


    });

     })

app.delete('/user/:nickname',(req,res)=>{
   let nickname = req.params.nickname;
   let qr = `delete from user where nickname = '${nickname}'`;
   db.query(qr,(err,result)=>{
    if(err) {console.log(err);}
    res.send(
        {
            message:'data deleted'
        }
    )
   })

});


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/data.html');
  });
  

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/login.html');
  });

app.post('/login', (req, res) => {
    // Insert Login Code Here
    let nickname = req.body.nickname;
    let password = req.body.password;
    res.send(`nickname: ${nickname} Password: ${password}`);
  });

 
  function requiredtoken(req, res, next) {
    let headers = req.headers["token"];
    console.log(headers, "token##");
    if (typeof headers !== undefined && headers !== "") {
      req.token = headers;
      next();
    } else {
      res.send({
        status: false,
        msg: "token required ...",
      });
    }
  }
  

app.listen(3000,()=>{
    console.log('server running');
})