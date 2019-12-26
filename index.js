

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



inline_keyboard = [];


// Here starts everything
bot.onText(/\/start/, (msg) => {
    var telegramUser = msg.from
    
        //  $.sendMessage("Utente (" + telegramUser.firstName + " " + telegramUser.lastName + ")  " + body.message)
        bot.sendMessage(msg.chat.id, "Welcome " + msg.from.first_name + ", registrazione effettuata correttamente! Adesso puoi unirti ad un tavolo usando il menu Cerca tavola.", {
            "reply_markup": {
                "keyboard": [
                    [APRI_CANCELLO, APRI_CANCELLO_2]
                 
                ]
            }
        });
});

// Catch every messagge text 
bot.on('message', (msg) => {

    //  const Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO
    //  const LED = new Gpio(17, 'out'); //use GPIO pin 4, and specify that it is output

    if (msg.text.toString() === APRI_CANCELLO) {

        bot.sendMessage(msg.chat.id, "Il cancello 1 è stato aperto!")


    }
    else if (msg.text.toString().indexOf(APRI_CANCELLO_2) === 0) {
        bot.sendMessage(msg.chat.id, "Il cancello 2 è stato aperto!")
    }

})
  
  



//*************************************************************************************************************************** */
//*************************************************************************************************************************** */
//*************************************************************************************************************************** */
//*************************************************************************************************************************** */
//*************************************************************************************************************************** */
//*************************************************************************************************************************** */

