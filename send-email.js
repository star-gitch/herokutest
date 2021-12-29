const nodemailer = require("nodemailer");

const {credentials} = require('./credentials.js');

const sendEmail = async (from, to, subject, body)=>{

  const { user, pass } = credentials;

  let ret = 'no-result';
  
  /*
  // you can use this for testing if you dont have a real account
  let testAccount = await nodemailer.createTestAccount();
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
  });
  */


  let transporter = nodemailer.createTransport({
    host: "s11.cyberspaceindia.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    // tls: {
    //     ciphers:'SSLv3'
    // },    
    auth: {
		  	user: user,
		  	pass: pass,
    },
  });


  try{
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: from,
      to: to, // list of receivers
      subject: subject, // Subject line
      html: body, // html body
    });

    //console.log("Message sent: %s", info.messageId);

    ret = `Message sent: ${info.messageId}`;
    console.log(ret);

    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

  }catch(e){
    ret = 'error check console for details';
    console.log(e);
  }

  return ret;

}

exports.sendEmail = sendEmail;