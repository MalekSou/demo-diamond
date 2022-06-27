module.exports.data = (req,res)=>{
    res.send('api working ...');
}

module.exports.CreateData = (req,res)=>{
    console.log(res.body,'data##')
    const nickname = req.body.nickname;
    const password = req.body.password;

let nameckqry = 'select nickname from user';
db.query(nameckqry,(err,result)=>{
    if(err) throw err;

    console.log(result.length,'check');
    if(result.length > 0)
    {

        res.send({
 
            status:false,
            errmsg:'nickname already exists'
        });

    }else
    {
        res.send({
            msg:'welcome'
        })
      
    }
})


}