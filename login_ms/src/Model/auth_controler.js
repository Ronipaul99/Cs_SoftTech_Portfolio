require('dotenv').config()
const nodemailer = require('nodemailer')
const {google} = require('googleapis')
const {signAccessToken2} = require('../Utilities/jwt_helper')
const auth_controller = {}

const oAuth2Client = new google.auth.OAuth2(
    // "698634884307-k0s69obnnlnkfp0nhbk1bggkqjast1j4.apps.googleusercontent.com",//process.env.CLIENT_ID,
    // "IYeQxjZP1324b5RxNI2FKCvE",//process.env.CLIENT_SECRET,
    // "https://developers.google.com/oauthplayground"//process.env.REDIRECT_URL
    "912206896546-o2of75247sv11qalp2rb4uct02ir7fal.apps.googleusercontent.com", //CLIENT_ID
    "ADlUiqKywzLoMt29qwetZi7x", //CLIENT_SECRET
    "https://developers.google.com/oauthplayground"//process.env.REDIRECT_URL
)

oAuth2Client.setCredentials({
   // refresh_token: "1//042tD5BJXpJrYCgYIARAAGAQSNwF-L9Iras945LqN-d38X9SCPeBjYFBarFZRNQb8diJmdIp-cSVLw0sNyJXjRox-xjU7UfJ1mbg"
   refresh_token: "1//04LLUPqHRgP6vCgYIARAAGAQSNwF-L9IrdSJ1xwY-p2V22bWos1tsd1LUvZfinRkTo8b0Xcuv1YKsZnSv4GOXHO-rJsCqp48LyMU"
});

//test@cssoftech.com
//TestCS@123
auth_controller.sendMail = async (user)=>{
    //    const accessToken = await oAuth2Client.getAccessToken()
    const Emailtoken = await signAccessToken2(user.CS_U_Id)
    const link = 'http://localhost:3000/verifyRegistration/'+Emailtoken+"/"+user.CS_U_Id

        // return oAuth2Client.getAccessToken().then(response=>{
        //     const accessToken = response.token
        //     console.log(accessToken);
            const Transport = nodemailer.createTransport({
                // service: 'gmail',
                // auth: {  
                //     type: "OAuth2",
                //     user: "cssofttech.suport@gmail.com",
                //     clientId: process.env.CLIENT_ID,
                //     clientSecret: process.env.CLIENT_SECRET,
                //     refreshToken: process.env.REFRESH_TOKEN,
                //     accessToken: accessToken
                // },
                service: 'gmail',
                auth: {
                    user: process.env.EMAIL,
                    pass: process.env.PASSWORD
                }
            })
            
            const mailOptions = {
                from: '"Auth Admin" <cssofttech.suport@gmail.com>', // sender address
                to: user.userCred.email, // list of receivers
                subject: "Account Verification: NodeJS Auth ✔", // Subject line
                generateTextFromHTML: true,
                text: 'hello from gmail test mail ', // html body  
                html: `<div style="text-align:center;">
                        <h3>Hello ${user.userProfile.userName} Gretings from Gmail Auth Test.</h3>
                        <br/>
                        <p>Please click the below link to verify 
                            ${link}
                        </p>
                        <img src="https://www.getmailbird.com/wp-content/uploads/2020/12/Email-greetings.png" alt="Girl in a jacket" width="500" height="400">
                    </div>`
            }
    
            return Transport.sendMail(mailOptions).then(result=>{
                return result
            }).catch(err=>{
                console.log("mail err");
                console.log(err);
            })
        // }).catch(err=>{
        //     console.log("error1", err);
        // })
           // return result
        
}

module.exports = auth_controller