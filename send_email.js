var nodemailer = require("nodemailer");
var dotEnv=require('dotenv').config();

// email related variables
// here instead to my email we will use oliomart email 👍👍 


// send email code
var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAILID,
    pass: process.env.PASSWORD,
  },
});


// reset pass
// placed order
// seller verification
// product verificcation
// delivery completed
// template response email

function email_details(customer,sub,msges){
  var mailOptions = {
    from: process.env.EMAILID,
    to: customer,
    subject: sub,
    html: msges,
  };
  return mailOptions;
}
// to generate random alph-numeric string 
var ranDom =Math.random().toString(36).slice(2);

// function to send email when requested to reset the password
function resetPass(sendTo){
      var subject = "Request To Reset Password";
      var msg = `<body style="text-align:center">
                    <h1>Hello User</h1>
                    <br><br><br>
                    <hr>
                        <p style="font-size:30px;">This is a test e-mail .
                        Your password is changed to <b>${ranDom}<b></p>
                        <p>We can successfully send email using Node js now</p>
                </body>`;

               const mailOp= email_details(sendTo,subject,msg);
      
      transporter.sendMail(mailOp, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent to: " + sendTo);
        }
      });
}


resetPass('aniket.kote@ges-coengg.org');