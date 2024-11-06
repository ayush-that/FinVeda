import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

const sendMailToSubscriber = (userdata) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAIL_ID,
            pass: process.env.PASS_KEY,
        },
    });

    async function main() {
        await transporter.sendMail({
            from: {
                name: "Finveda",
                address: process.env.EMAIL_ID,
            },
            to: userdata.email,
            subject: "Welcome to Finveda! 📈 Empower Your Financial Journey",
            text: "Thank you for joining Finveda, your partner in financial literacy!",
            html: `
            <div style="background-color: #eaf4ff; padding: 30px; font-family: Arial, sans-serif;">
                <div style="max-width: 600px; margin: 0 auto; background: #ffffff; padding: 20px; border-radius: 10px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);">
                    <h2 style="text-align: center; color: #1a73e8; font-size: 24px;">Welcome to Finveda, ${userdata.name}!</h2>
                    <p style="font-size: 18px; line-height: 1.6; color: #333; text-align: center;">
                        Hi ${userdata.name},<br><br>
                        Thank you for subscribing to <strong>Finveda</strong>! We're thrilled to have you on board as we work to bridge the financial literacy gap in India and beyond.
                    </p>
                    <p style="font-size: 16px; line-height: 1.6; color: #555;">
                        As a valued member of the Finveda community, you now have access to resources that make finance engaging and approachable. Here’s what you can look forward to:
                    </p>
                    <ul style="font-size: 16px; line-height: 1.8; color: #555; padding-left: 20px;">
                        <li>📊 <strong>AI-Powered Financial Consultant:</strong> Get personalized financial insights and guidance.</li>
                        <li>📰 <strong>Financial Blogs & Quizzes:</strong> Expand your financial knowledge through interactive content.</li>
                        <li>📈 <strong>Latest Market Trends & News:</strong> Stay informed on the latest in finance.</li>
                        <li>🔧 <strong>Finance Tools:</strong> Use powerful tools designed to simplify complex financial decisions.</li>
                    </ul>
                    <p style="font-size: 16px; line-height: 1.6; color: #555;">
                        Together, let’s make financial literacy accessible and empowering. We look forward to supporting your journey toward financial confidence and success!
                    </p>
                    <div style="text-align: center; margin-top: 20px;">
                        <a href="https://finveda.com" style="display: inline-block; padding: 12px 24px; background-color: #1a73e8; color: #ffffff; border-radius: 5px; text-decoration: none; font-size: 16px;">Visit Finveda</a>
                    </div>
                    <p style="font-size: 14px; color: #999; text-align: center; margin-top: 30px;">
                        Best Regards, <br/>
                        The Finveda Team
                    </p>
                </div>
            </div>
        `,

        });
    }

    main().catch(console.error);
};

export { sendMailToSubscriber };
