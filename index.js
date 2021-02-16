require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const { YTSearcher } = require('ytsearcher');
const math = require('mathjs');

const token = ('1652610357:AAEoQQjDlWWtGAEHhPC5IvlzW88tdrDw0LE')

const bot = new TelegramBot(token, {
   polling: true
});

var moderation = 'on'
var moderationmsg = 'on'

bot.on('message', (msg) => {
    if (msg.text.includes("idiot") || msg.text.includes("fuck") || msg.text.includes("dumbass") || msg.text.includes("shit") || msg.text.includes("asshole")) {
        if (moderation == 'on') {
            bot.sendMessage(msg.chat.id,  'Hey, don\'t swear!\nSwearing is bad! 🤬');
            bot.sendPhoto(msg.chat.id, 'https://www.vhv.rs/dpng/d/504-5048212_blobhandsome-discord-emoji-blob-emoji-for-discord-hd.png').then(() => {
                if (moderationmsg == 'on') {
                    bot.sendMessage(msg.chat.id, 'You can disable this feature by typing (/moderation off) or you can just disable this message by typing (/moderationmsg off)')
                    return;
                }
                else if (moderationmsg == 'off') {
                    return;
                }
            });
        }
        else {
            return;
        }
    }
    
});


bot.on('polling_error', error => console.log(error))

bot.onText(/\/start/, (msg, match) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Hey there! Type /help to see my commands!');
});

bot.onText(/\/help/, (msg, match) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 
        'General commands:\n/info - Used to see information about the bot\n\nAnime commands:\n/hug (person) - Used to hug someone\n/wave (person) - Used to wave to a person\n\nUtility commands:\n/calc (equation)\n\nYoutube commands:\n/ytsearch (video) - Used to search for a video on youtube'
    )
});

bot.onText(/\/info/, (msg, match) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 
        'Running on: Heroku\nCoded on: Javascript\nCreated on: 15-February-2021'
        )
});

bot.onText(/\/xo/, (msg, match) => {
    var xoro = 'nothing';
	var xorocomputer = 'nothing';
	var xoplayer = 'nothing';
	var xocomputer = 'nothing';
	var square1 = '🟦';
	var square2 = '🟦';
	var square3 = '🟦';
    var square4 = '🟦';
	var square5 = '🟦';
	var square6 = '🟦';
	var square7 = '🟦';
	var square8 = '🟦';
	var square9 = '🟦';
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, square1+square2+square3+"\n"+square4+square5+square6+"\n"+square7+square8+square9, {
        reply_markup: {
            inline_keyboard: [[
                {
                    text: '1',
                    callback_data: '1'
                }, {
                    text: '2',
                    callback_data: '2'
                }, {
                    text: '3',
                    callback_data: '3'
                }
            ]]
        }
    });
});

bot.onText(/\/hug/, (msg, match) => {
    const chatId = msg.chat.id;
    var hugimages = ['https://i.imgur.com/XEs1SWQ.gif', 'https://i.imgur.com/GuADSLm.gif', 'https://i.imgur.com/VgP2ONn.gif', 'https://i.imgur.com/snm8S1B.gif', 'https://i.imgur.com/IoSM9JM.gif', 'https://i.imgur.com/LwF6XOc.gif', 'https://i.imgur.com/YWodUk2.gif', 'https://i.imgur.com/daowaXJ.gif', 'https://i.imgur.com/H2NWde0.gif', 'https://i.imgur.com/V4n129V.gif', 'https://i.imgur.com/kSWpxnG.gif', 'https://i.imgur.com/Dkoc1Lg.gif']
    const hugimage = hugimages[Math.floor(Math.random()*hugimages.length)];
    var personhug = match.input.split(' ')
    personhug = personhug.toString().replace('/hug,', '')
    personhug = personhug.toString().replace(/[,]/g, ' ')
    if (personhug.includes('/hug')) {
        bot.sendMessage(chatId, 'Please use the correct command format\n/hug (person)')
        return;
    }
    else if (personhug === 'me') {
        bot.sendAnimation(
            chat_id = chatId,
            photo = hugimage,
        ).then(() => {
            bot.sendMessage(chatId, 'I can hug you!')
        });
        return;
    }
    else if (personhug === 'you' || personhug === 'AbdullahBot') {
        bot.sendAnimation(
            chat_id = chatId,
            photo = hugimage,
        ).then(() => {
            bot.sendMessage(chatId, 'Thanks for hugging me!')
        });
        return;
    }
    bot.sendAnimation(
        chat_id = chatId,
        photo = hugimage,
    ).then(() => {
        bot.sendMessage(chatId, 'Hugged '+personhug+"!")
    });
    return;
});

bot.onText(/\/ytsearch/, (msg, match) => {
    async function ytesarch() {
        const searcher = new YTSearcher({
            key: "AIzaSyCeho91ODJGnmw2cm9xhalAx58p-CPLNIE",
            revealed: true
        });
        const chatId = msg.chat.id;
        var args = match.input.split(' ')
        args = args.toString().replace('/ytsearch,', '')
        args = args.toString().replace(/[,]/g, ' ')
        if (args.includes('/ytsearch')) {
            bot.sendMessage(chatId, 'Please use the correct command format\n/ytsearch (video)')
            return;
        }
        let result = await searcher.search(args, { type: "video" })
		const songInfo = await result.first.url
        bot.sendMessage(chatId, 'Searched for ( '+args+' ) on youtube.').then(() => {
            bot.sendMessage(chatId, songInfo)
        });
    }
    ytesarch()
    return;
});

bot.onText(/\/wave/, (msg, match) => {
    const chatId = msg.chat.id;
    const waveimages = ['https://i.imgur.com/7F61XXR.gif', 'https://i.imgur.com/wjaKPmk.gif', 'https://i.imgur.com/UcGioIH.gif', 'https://i.imgur.com/AqK6ipr.gif', 'https://i.imgur.com/BdidgkM.gif', 'https://i.imgur.com/TMaBtNt.gif', 'https://i.imgur.com/pkWTMMl.gif']
    const waveimage = waveimages[Math.floor(Math.random()*waveimages.length)];
    var personwave = match.input.split(' ')
    personwave = personwave.toString().replace('/wave,', '')
    personwave = personwave.toString().replace(/[,]/g, ' ')
    if (personwave.includes('/wave')) {
        bot.sendMessage(chatId, 'Please use the correct command format\n/wave (person)')
        return;
    }
    else if (personwave === 'me') {
        bot.sendAnimation(
            chat_id = chatId,
            photo = waveimage,
        ).then(() => {
            bot.sendMessage(chatId, 'Hey!')
        });
        return;
    }
    else if (personwave === 'you' || personwave === 'AbdullahBot') {
        bot.sendAnimation(
            chat_id = chatId,
            photo = waveimage,
        ).then(() => {
            bot.sendMessage(chatId, 'Hey!')
        });
        return;
    }
    bot.sendAnimation(
        chat_id = chatId,
        photo = waveimage,
    ).then(() => {
        bot.sendMessage(chatId, 'Waved to '+personwave+"!")
    });
    return;
});

bot.onText(/\/calc/, (msg, match) => {
    const chatId = msg.chat.id;
    var mathArgs = match.input.split(' ')
    mathArgs = mathArgs.toString().replace('/calc,', '')
    mathArgs = mathArgs.toString().replace(/[,]/g, ' ')
    if (mathArgs.includes('/calc')) {
        bot.sendMessage(chatId, 'Please use the correct command format\n/calc (equation)')
        return;
    }
    bot.sendMessage(chatId, 'Equation: '+mathArgs+'\nAnswer: '+math.evaluate(mathArgs))
});

bot.onText(/\/moderation/, (msg, match) => {
    const chatId = msg.chat.id;
    var moderationtext = match.input.split(' ')
    moderationtext = moderationtext.toString().replace('/moderation,', '')
    moderationtext = moderationtext.toString().replace(/[,]/g, ' ')
    if (moderationtext === '/moderation') {
        if (moderation == 'on') {
            bot.sendMessage(chatId, 'Please use the correct command format\n/moderation (on/off)\nModeration is currently ON.')
            return;
        }
        else if (moderation == 'off') {
            bot.sendMessage(chatId, 'Please use the correct command format\n/moderation (on/off)\nModeration is currently OFF.')
            return;
        }
    }
    else if (moderationtext == 'on') {
        if (moderation == 'on') {
            bot.sendMessage(chatId, 'Auto moderation is already ON.')
            return;
        }
        else {
            moderation = 'on'
            bot.sendMessage(chatId, 'Auto moderation has been turned ON.')
            return;
        }
    }
    else if (moderationtext == 'off') {
        if (moderation == 'off') {
            bot.sendMessage(chatId, 'Auto moderation is already OFF.')
            return;
        }
        else {
            moderation = 'off'
            bot.sendMessage(chatId, 'Auto moderation has been turned OFF.')
            return;
        }
    }
    return;
});

bot.onText(/\/moderationmsg/, (msg, match) => {
    const chatId = msg.chat.id;
    var moderationtext1 = match.input.split(' ')
    moderationtext1 = moderationtext1.toString().replace('/moderationmsg,', '')
    moderationtext1 = moderationtext1.toString().replace(/[,]/g, ' ')
    if (moderationtext1 === '/moderationmsg') {
        if (moderationmsg == 'on') {
            bot.sendMessage(chatId, 'Please use the correct command format\n/moderationmsg (on/off)\nThe moderation message is currently ON.')
            return;
        }
        else if (moderationmsg == 'off') {
            bot.sendMessage(chatId, 'Please use the correct command format\n/moderationmsg (on/off)\nThe moderation message is currently OFF.')
            return;
        }
    }
    else if (moderationtext1 == 'on') {
        if (moderationmsg == 'on') {
            bot.sendMessage(chatId, 'The moderation message is already ON.')
            return;
        }
        else {
            moderationmsg = 'on'
            bot.sendMessage(chatId, 'The moderation message has been turned ON.')
            return;
        }
    }
    else if (moderationtext1 == 'off') {
        if (moderationmsg == 'off') {
            bot.sendMessage(chatId, 'The moderation message is already OFF.')
            return;
        }
        else {
            moderationmsg = 'off'
            bot.sendMessage(chatId, 'The moderation message has been turned OFF.')
            return;
        }
    }
    return;
});