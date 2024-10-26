const mailService = require("../utils/sendMail");

const sendEmail = async (req, res) => {
    const { name, message, email, subject } = req.body;

    console.log(req.body)

    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    const htmlTemplate = `<body>
        <h1>Hey, <span style="color:blue">Mustapha</span> a client just send you an email</h1>
        <h3>Check it up!</h3>
        <p>From: ${name}, ${email}</p>
        <p>Time ${hour}:${minute}:${second}</p>
        <p style="color:blue">${message}</p>
    </body>`

    try {

        if(!name || !email || !message || !subject) throw Error("All fields must be fill")

        const info = await mailService(name, email, subject, message, htmlTemplate);

        if(!info) throw Error("Couldn't send email");

        return res.status(200).json({success: true, message: "Email sent successfully"})
    } catch (error) {
        console.log(error);
        return res.status(401).json({error: error.message})
    }
};

module.exports = { sendEmail };