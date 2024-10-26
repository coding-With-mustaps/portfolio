const nodeMailer = require("nodemailer");
const { google } = require('googleapis');
require("dotenv").config();

const client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    process.env.REDIRECT_URL
);

client.setCredentials({refresh_token: process.env.REFRESH_TOKEN});

const sendMail = async (name, email, subject, message, htmlTemplate) => {

    const { token } = await client.getAccessToken();

    const transporter = nodeMailer.createTransport({
        service: "gmail",
        auth: {
            type: "OAuth2",
            user: "akinti.munira85@gmail.com",
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            refreshToken: process.env.REFRESH_TOKEN,
            accessToken: token
        }
    });

    const mailOptions = {
        from: `${name}, <${email}>`,
        to: "akinti.munira85@gmail.com",
        subject: subject,
        text: message,
        html: htmlTemplate
    };

    const clientOptions = {
        from: "akinti.munira85@gmail.com",
        to: email,
        subject: "Response to mail",
        text: "Your email was receive successfully, I would attend to you very shortly",
        html: `<p>Your email was receive <span style="color: green">successfully</span>, I would attend to you very shortly</p>`
    }
    
    try {
        const info = await transporter.sendMail(mailOptions);
        await transporter.sendMail(clientOptions);
        return info;
    } catch (error) {
        console.log(error);
    }
};


module.exports = sendMail;