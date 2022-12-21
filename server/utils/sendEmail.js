const { createTransport } = require("nodemailer");

module.exports = async function sendResetEmail(email, resetToken) {
	try {
		const transporter = createTransport({
			service: process.env.MAIL_SERVICE,
			auth: {
				user: process.env.MAIL,
				pass: process.env.MAIL_PASS,
			},
		});

		const text = `
        WE GOT YOUR REQUEST TO RESET YOUR PASSWORD

        CLICK ON THE LINK BELOW WHICH WILL REDIRECT TO A PAGE WHERE YOU CAN SAFELY RESET YOUR PASSWORD

        LINK - ${process.env.BROWSER_URL}/reset-password/${resetToken}

        THANKS.
        `;

		const mailOptions = {
			from: process.env.MAIL,
			to: email,
			subject: "SHIVCHARAN JI BHIMRAJKA RESET PASSWORD",
			text,
		};

		await transporter.sendMail(mailOptions);
		return { success: true, message: "Mail sent successfully" };
	} catch (error) {
		console.log(error);
		return { success: false, message: "Unable to send e-mail" };
	}
};
