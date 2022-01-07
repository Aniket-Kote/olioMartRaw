var nodemailer = require("nodemailer");
var dotEnv = require("dotenv").config();

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

function email_details(customer, sub, msges) {
  var mailOptions = {
    from: process.env.EMAILID,
    to: customer,
    subject: sub,
    html: msges,
  };
  return mailOptions;
}
// to generate random alph-numeric string
var ranDom = Math.random().toString(36).slice(2);

// function to send email when requested to reset the password
function resetPass(sendTo,userName) {
  var subject = "Request To Reset Password";
  var msg = `<body >
                    <h3>Hi ${userName},</h3>
                   <br><br>
                    
                        <p>You recently requested to reset the password for your Oliomart account. 
                            Below is your temporary Password 
                            <center><b>${ranDom}<b></center>
                           
                          <p style='color:red'><b>*Note:*</b>Change the password immediately as soon as you login.</p>
                            If you did not request a password reset, please ignore this email or reply to let us know. 
                            This password reset link is only valid for the next 30 minutes. </p>

                            <br>
                            <br>
                            <p>Thanks, Oliomart team</p>
                               
                </body>`;

  const mailOp = email_details(sendTo, subject, msg);

  transporter.sendMail(mailOp, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent to: " + userName);
    }
  });
}

// function to send email when requested to reset the password
function placeOrder(sendTo, orderNumber,userName,address,orderDate,totalPrice) {
  var subject = "Order Placed Successfully";
  var msg = `<body ">
                  <h1>Hi ${userName}</h1>
                  <br><br>
                  <p style="font-size:10px;">Woo hoo! Your order is on its way. Your order details can be found below.
                  
                  <b>ORDER SUMMARY:</b>
                  <br>
                  <ul style='list-style-type:none'>
                    <li>Order #: ${orderNumber}</li>
                    <li>Order Date: ${orderDate}</li>
                    <li>Order Total: : ${totalPrice} Rs</li>
                  </ul>
                  <br>
                  <b>SHIPPING ADDRESS: ${address}</b>
                  </p>
                  <br>
                  [Table with a list of items]
                  <br>
                  ITEMS SHIPPED 			     QTY				          PRICE
                  <p>Thanks, the Oliomart team</p>
                  </body>`;

  const mailOp = email_details(sendTo, subject, msg);

  transporter.sendMail(mailOp, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent to: " + sendTo);
    }
  });
}

function productDelivered(sendTo,userName,orderNumber,ordertime,orderDate,paymentMethod,address){
  var subject = "Product Delivered Successfully";
  var msg = `<body ">
                  <h1>Dear ${userName}</h1>
                  <br><br>
                  <p style="font-size:15px;">Thank you for shopping with us. Your order number ${orderNumber} has Delivered. 
                  You can review the order details below:.
                  
                  <b>INFORMATION ABOUT ORDER ${orderNumber}:</b>
                  <br>
                  <ul style='list-style-type:none'>
                    <li>Order number: ${orderNumber} placed at [${ordertime} pm and ${orderDate}]</li>
                    <li>Payment: ${paymentMethod}</li>
                    <li>DELIVERY ADDRESS :
                    ${address}</li>
                  </ul>
                  <br>
                  <b style='color:red'>If you want to invoke your right to return a purchase without giving a reason, our returns system makes the process simple and safe.</b>
                  </p>
                  <br>
                  Best,<BR>
                    Customer Service at Oliomart
                  <br>
                  <p style='color:red'>Attention: Before picking up your package, please check that it has not been damaged or tampered with. If the package is damaged, and you are afraid that the parcel may have been opened before it was delivered to you, remember to create a ticket with the courier. Only this way can we determine the guilty party and, if applicable, return your money or arrange another shipment.</p>
                  <p>Thanks, the Oliomart team</p>
                  </body>`;

  const mailOp = email_details(sendTo, subject, msg);

  transporter.sendMail(mailOp, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent to: " + sendTo);
    }
  });
}

resetPass("aniket.kote@ges-coengg.org","Aniket Kote");

placeOrder('aniket.kote@ges-coengg.org','abcXyz1234','Aniket Kote','6,shreejay apt,opp. Ganpati Mandir ,Govind Nagar,Nashik-9','7/1/2022','1050');

productDelivered('aniket.kote@ges-coengg.org','Aniket Kote','abcABC1234','2:30pm','7/1/2022','COD','6,shreejay apt,opp. Ganpati Mandir ,Govind Nagar,Nashik-9')
