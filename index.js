

const TelegramBot = require('node-telegram-bot-api');
// const token = '477553552:AAFPFR-UOeW2ObvIIWp8QCQnOyhGTuOWBVo';
const token = '1048183703:AAGeeJA0IHd5bEF0k8k5Qq6kgKFtOhAOBmo';
const bot = new TelegramBot(token, { polling: true });
exports.bot = bot;

const request = require('request')
const http = require('http')
const axios = require('axios');



const APRI_CANCELLO = "\ud83d\udde3 Apri cancello"
const APRI_CANCELLO_2 = "\ud83d\udde3 Apri cancello 2"

const CARTA_IDEN_TOMAS = "C.Ide_Tom"
const CONTRATTO_TOMAMS = "Cont.Lav.Tom"
const CONTRATTO_CASA = "Cont.casa"
const LIBRETTO_CLIO = "Libr.Clio"

const PASS_TOMAS = "Passa.Tom"
const PERG_TOM = "Perga.Tom"
const PERMS_TOM = "Perms.Tom"
const TESS_TOM = "Tessr.Tom"

const CARTA_IDEN_ORNELA = "Cart.Ide_Orn"
const PERMES_ORNELLA = "Perms.Orn"
const CERT_MATT = "Certi.Matr"
const CV_ORNELLA = "CV.Orn"
const PERG_ORNELLA = "Perga.Orn"

const CART_IDEN_BABI = "Cart.ID.Babi"
const CV_BABI = 'CV.Babi'
const CV_TONA = 'CV.Tona'



var Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO
var LED = new Gpio(17, 'out'); //use GPIO pin 4 as output



inline_keyboard = [];


// Here starts everything
bot.onText(/\/start/, (msg) => {
    var telegramUser = msg.from

    //  $.sendMessage("Utente (" + telegramUser.firstName + " " + telegramUser.lastName + ")  " + body.message)
    bot.sendMessage(msg.chat.id, "Welcome " + msg.from.first_name + ", registrazione effettuata correttamente! Adesso puoi unirti ad un tavolo usando il menu Cerca tavola.", {
        "reply_markup": {
            "keyboard": [
                [APRI_CANCELLO],
                [CARTA_IDEN_TOMAS, CONTRATTO_TOMAMS, CONTRATTO_CASA, LIBRETTO_CLIO],
                [PASS_TOMAS, PERG_TOM, PERMS_TOM, TESS_TOM],
                [CARTA_IDEN_ORNELA, PERMES_ORNELLA, CERT_MATT, CV_ORNELLA, PERG_ORNELLA],
                [CART_IDEN_BABI, CV_BABI, CV_TONA]

            ]
        }
    });
});


function apri() {

    LED.writeSync(1); //turn LED on or off depending on the button state (0 or 1)
    setTimeout(() => { LED.writeSync(0); }, 100);
}


// Catch every messagge text 
bot.on('message', (msg) => {

    //    const Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO
    //    const LED = new Gpio(17, 'out'); //use GPIO pin 4, and specify that it is output

    if (msg.text.toString() === APRI_CANCELLO) {

        bot.sendMessage(msg.chat.id, "Il cancello 1 è stato aperto!")

        setTimeout(apri, 500);

    }
    else if (msg.text.toString().indexOf(CARTA_IDEN_TOMAS) === 0) {
        bot.sendDocument(msg.chat.id, "/home/pi/Desktop/cancello/files/carta_identita_tom.pdf")
    }
    else if (msg.text.toString().indexOf(CONTRATTO_TOMAMS) === 0) {
        bot.sendDocument(msg.chat.id, "/home/pi/Desktop/cancello/files/contratto_lav_tom.pdf")
    }
    else if (msg.text.toString().indexOf(CONTRATTO_CASA) === 0) {
        bot.sendDocument(msg.chat.id, "/home/pi/Desktop/cancello/files/ContrattoCasapdf.pdf")
    }
    else if (msg.text.toString().indexOf(LIBRETTO_CLIO) === 0) {
        bot.sendDocument(msg.chat.id, "/home/pi/Desktop/cancello/files/Libretto_Clio_2018.pdf")
    }
    //----
    else if (msg.text.toString().indexOf(PASS_TOMAS) === 0) {
        bot.sendDocument(msg.chat.id, "/home/pi/Desktop/cancello/files/passaporto_tom.pdf")
    }
    else if (msg.text.toString().indexOf(PERG_TOM) === 0) {
        bot.sendDocument(msg.chat.id, "/home/pi/Desktop/cancello/files/pergamena_tom.pdf")
    }
    else if (msg.text.toString().indexOf(PERMS_TOM) === 0) {
        bot.sendDocument(msg.chat.id, "/home/pi/Desktop/cancello/files/PermessoSubordianto_tom.pdf")
    }
    else if (msg.text.toString().indexOf(TESS_TOM) === 0) {
        bot.sendDocument(msg.chat.id, "/home/pi/Desktop/cancello/files/tesseraSanitaria_tom.pdf")
    }
    //---
    else if (msg.text.toString().indexOf(CARTA_IDEN_ORNELA) === 0) {
        bot.sendDocument(msg.chat.id, "/home/pi/Desktop/cancello/files/carta_di_identita_orn.pdf")
    }
    else if (msg.text.toString().indexOf(PERMES_ORNELLA) === 0) {
        bot.sendDocument(msg.chat.id, "/home/pi/Desktop/cancello/files/permessoOrnela.pdf")
    }
    else if (msg.text.toString().indexOf(CERT_MATT) === 0) {
        bot.sendDocument(msg.chat.id, "/home/pi/Desktop/cancello/files/CertificatoDiMatrimonio.pdf")
    }
    else if (msg.text.toString().indexOf(PERG_ORNELLA) === 0) {
        bot.sendDocument(msg.chat.id, "/home/pi/Desktop/cancello/files/carta_identita_tom.pdf")
    }
    // -- 
    else if (msg.text.toString().indexOf(CART_IDEN_BABI) === 0) {
        bot.sendDocument(msg.chat.id, "/home/pi/Desktop/cancello/files/carta_identBabi.pdf")
    }
    else if (msg.text.toString().indexOf(CV_BABI) === 0) {
        bot.sendDocument(msg.chat.id, "/home/pi/Desktop/cancello/files/curriculumBabi.pdf")
    }
    else if (msg.text.toString().indexOf(CV_TONA) === 0) {
        bot.sendDocument(msg.chat.id, "/home/pi/Desktop/cancello/files/CV_tona.pdf")    
    }
    //--
    else {
        bot.sendMessage(msg.chat.id, "Commando non riconosciuto!")
    }

})





//*************************************************************************************************************************** */
//*************************************************************************************************************************** */
//*************************************************************************************************************************** */
//*************************************************************************************************************************** */
//*************************************************************************************************************************** */
//*************************************************************************************************************************** */

