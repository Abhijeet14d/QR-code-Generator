/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import userInput from "inquirer";
import qr from "qr-image";
import fs from "fs";

userInput
    .prompt([
        {"message":"Type in your Url",
        name:"URL",
    },
    ])
    .then((answer)=>{
        const url = answer.URL;
        var qr_svg = qr.image(url);
        qr_svg.pipe(fs.createWriteStream("qr_immg.png"));
        fs.writeFile("message.txt", url ,(err)=>{
            if(err) throw err;
            console.log("the url is added in the file.");
        })
    })
    .catch((error)=>{
        if(error.isTtyError){

        }else{

        }
    })