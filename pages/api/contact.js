
export default function (req, res){
    const email = process.env.EMAIL
    const password = process.env.PASSWORD
    const mailData ={
        from: email,
        to:email,
        subject:`Message from  ${req.body.user_name}`,
        text: req.body.user_message,
        html:`<div> <h1>${req.body.user_service}</h1>  ${req.body.user_message}</div><p>Sent from:
        ${req.body.user_email}</p>
        <h5>Other Information:</h5>
        ${req.body.user_extra_info}
        `
       
    }




    let nodemailer  =  require("nodemailer")
    const transporter =  nodemailer.createTransport({
        
        port:465,
        host: "smtp.gmail.com",
        auth:{
            user: email,
            pass: password
        },
        secure:true,
    });

    transporter.sendMail(mailData, function(err, info){
        if(err){
            console.log("we have encountered an error ")
            console.log(err)

        }else{
            console.log(info)
        }
    })
    

        return res.status(200).json(req.body)
}



