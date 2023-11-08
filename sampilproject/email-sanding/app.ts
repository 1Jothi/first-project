let nodemailer=require('nodemailer')

let transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'rjothijesus@gmail.com',
        pass:'jpgxxykrfqahvkqa'
    },
    tls:{
        rejectUnauthorized:false
    }
})

let maioption={
    from:'rjothijesus@gmail.com',
    to: 'waseemahmed116@gmail.com',
    subject:'testing email',
    text:'hi sir how r u? i am jothi'
}

transporter.sendMail(maioption,(err:any,res:any)=>{
    if(err){
        console.log(err)
    }else{
        console.log('mail sent')
    }
})