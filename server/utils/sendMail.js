import nodemailer from 'nodemailer';
import 'dotenv/config'

const sendMailToAdmin = (userdata) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // Use `true` for port 465, `false` for all other ports
        auth: {
            user: process.env.EMAIL_ID, // Email ID to send the mail
            pass: process.env.PASS_KEY, // Passkey
        },
    });
    async function main() {
        await transporter.sendMail({
            from: {
                name: `Finveda Contact Form - ${new Date().toLocaleString()}`,
                address: process.env.EMAIL_ID,
            }, // sender address
            to: process.env.ADMIN_EMAIL_ID, // list of receivers
            subject: "New Contact Form Submission from Finveda ✔", // Subject line
            text: "Finveda Contact Form Submission", // plain text body
            html: `<div style="background: #f8f9fa; color: #333; padding: 20px; font-family: Arial, sans-serif;">
                        <div style="font-size: 1.5rem; text-align: center; margin-bottom: 20px; color: #0076b4;">
                            Finveda Contact Form Submission
                        </div>
                        <table style="width: 60%; border-collapse: collapse; margin: 0 auto; background: white; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
                            <thead>
                                <tr>
                                    <th style="border: 1px solid #ddd; padding: 10px; text-align:center; background-color: #0076b4; color: white;">
                                        Field
                                    </th>
                                    <th style="border: 1px solid #ddd; padding: 10px; text-align:center; background-color: #0076b4; color: white;">
                                        Value
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style="border: 1px solid #ddd; padding: 10px; text-align:center;">Name</td>
                                    <td style="border: 1px solid #ddd; padding: 10px; text-align:center;">${userdata.name}</td>
                                </tr>
                                <tr>
                                    <td style="border: 1px solid #ddd; padding: 10px; text-align:center;">Email</td>
                                    <td style="border: 1px solid #ddd; padding: 10px; text-align:center;">${userdata.email}</td>
                                </tr>
                                <tr>
                                    <td style="border: 1px solid #ddd; padding: 10px; text-align:center;">Rating</td>
                                    <td style="border: 1px solid #ddd; padding: 10px; text-align:center;">${userdata.subject}</td>
                                </tr>
                                <tr>
                                    <td style="border: 1px solid #ddd; padding: 10px; text-align:center;">Comments</td>
                                    <td style="border: 1px solid #ddd; padding: 10px; text-align:center;">${userdata.message}</td>
                                </tr>
                                <tr>
                                    <td style="border: 1px solid #ddd; padding: 10px; text-align:center;">Submitted At</td>
                                    <td style="border: 1px solid #ddd; padding: 10px; text-align:center;">${new Date().toLocaleString()}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>`, // html body
        });
    }

    main().catch(console.error);
};

// Export as a named export
export { sendMailToAdmin };
