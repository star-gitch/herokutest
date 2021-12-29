const app = require("express")();
var nodemailer = require('nodemailer');

const PORT = process.env.PORT || 3000;

app.get("/", (req,res) => {

	const transporter = nodemailer.createTransport({
		host: 's11.cyberspaceindia.com',
		port: 587,
	  	secure: true, // use TLS
		// tls: {
		//   	rejectUnauthorized: false,
		// },
	  	auth: {
		  	user: 'info1@sonamandhira.com',
		  	pass: 'sona@smpl#123',
		},
	});

	transporter.sendMail(
	{
		from: 'info1@sonamandhira.com',
		to: 'p.star.p@yandex.com',
		subject: 'nodemailer',
		html: '<h1>Hello Nodemailer</h1>',
	},
	function (err, result) {
		if (err) console.log(err);
		else {
			console.log("success send to email");
			console.log("from", 'info1@sonamandhira.com');
			console.log("to", 'p.star.p@yandex.com');
		}
	});
	res.send(`Hello World Email!!!`);
});

app.listen(PORT, ()=> {
	console.log(`App up at port ${PORT}`);
});