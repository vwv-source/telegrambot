require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const { YTSearcher } = require('ytsearcher');

const token = ('1652610357:AAEoQQjDlWWtGAEHhPC5IvlzW88tdrDw0LE')

const bot = new TelegramBot(token, {
   polling: true
});

bot.onText(/\/start/, (msg, match) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Hey there! Type /help to see my commands!', {
        'reply_markup': {
            'keyboard': [['/help'], ['/info', '/hug', '/wave']],
            resize_keyboard: true,
            one_time_keyboard: true,
            force_reply: true,
        }
    });
});

bot.onText(/\/help/, (msg, match) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 
        'General commands:\n\n/info Used to see information about the bot\n'
    )
});

bot.onText(/\/info/, (msg, match) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 
        'Running on: Javascript\nHosted on: Heroku'
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
    if (personhug === 'me') {
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
        let result = await searcher.search(args, { type: "video" })
		const songInfo = await result.first.url
        bot.sendMessage(chatId, 'Searched for ( '+args+' ) on youtube.').then(() => {
            bot.sendMessage(chatId, songInfo)
        });
    }
    ytesarch()
    return;
});

const wave = ['https://i.imgur.com/7F61XXR.gif', 'https://i.imgur.com/wjaKPmk.gif', 'https://i.imgur.com/UcGioIH.gif', 'https://i.imgur.com/AqK6ipr.gif', 'https://i.imgur.com/BdidgkM.gif', 'https://i.imgur.com/TMaBtNt.gif', 'https://i.imgur.com/pkWTMMl.gif']
const wave1 = wave[Math.floor(Math.random()*wave.length)];

bot.onText(/\/wave/, (msg, match) => {
    const chatId = msg.chat.id;
    const waveimages = ['https://i.imgur.com/7F61XXR.gif', 'https://i.imgur.com/wjaKPmk.gif', 'https://i.imgur.com/UcGioIH.gif', 'https://i.imgur.com/AqK6ipr.gif', 'https://i.imgur.com/BdidgkM.gif', 'https://i.imgur.com/TMaBtNt.gif', 'https://i.imgur.com/pkWTMMl.gif']
    const waveimage = waveimages[Math.floor(Math.random()*waveimages.length)];
    var personwave = match.input.split(' ')
    personwave = personwave.toString().replace('/wave,', '')
    personwave = personwave.toString().replace(/[,]/g, ' ')
    if (personwave === 'me') {
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
});