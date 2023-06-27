import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 587,
    auth: {
        user: 'alex.pinaida.44985@gmail.com',
        pass: 'clogpgdfppeybxop'
    }
});

export const sendEmail = async (email) => {
    await transporter.sendMail({
        from: 'CoderHouse 44985<coderhouse44985@gmail.com>',
        to: email.to,
        subject: email.subject,
        html: email.html,
        attachments: []
    });
}