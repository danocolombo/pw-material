const functions = require("firebase-functions");
const config = functions.config();
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
const cors = require("cors")({origin: true});

admin.initializeApp();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: config.user.email,
    pass: config.user.password,
  },
});

exports.sendAnEmail = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    const mailOptions = {
      from: "DColombo.com Web Site",
      to: "danocolombo@gmail.com",
      subject: "Just a Test",
      html: `
        <p style="font-size: 16px;">From: Dano</p>
        `,
    };
    try {
      transporter.sendMail(mailOptions);
      res.send("Message sent successfully.");
    } catch (error) {
      res.send(error);
    }
  });
});
