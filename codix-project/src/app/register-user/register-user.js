const {nickname,email, password, cpassword} = req.body;
let errors = [];
console.log(' nickname ' + nickname+ ' email :' + email+ ' pass:' + password+ 'phone' +phone+ 'country' +country);
if(!nickname || !email || !password || !cpassword) {
    errors.push({msg : "Please fill in all fields"})
}
//check if match
if(password !== cpassword) {
    errors.push({msg : "passwords dont match"});
}

//check if password is more than 6 characters
if(password.length < 6 ) {
    errors.push({msg : 'password atleast 6 characters'})
}
if(errors.length > 0 ) {
res.render('register', {
    errors : errors,
    nickname : nickname,
    email : email,
    password : password,
    cpassword : cpassword})
} else {
    //validation passed
   User.findOne({email : email}).exec((err,user)=>{
    console.log(user);   
    if(user) {
        errors.push({msg: 'email already registered'});
        render(res,errors,nickname,email,password,cpassword);
        
       } else {
        const newUser = new User({
            nickname : nickname,
            email : email,
            password : password,
     })}})}
