require('dotenv').config()
const TelegramApi = require('node-telegram-bot-api')
const InlineKeyboardButton = require('node-telegram-bot-api')
const InlineKeyboardMarkup = require('node-telegram-bot-api')
const axios = require('axios');

const bot = new TelegramApi(process.env.TOKEN, { polling: true })

let userCorrectly = ''
let isPaid = false

const start = async () => {
    bot.setMyCommands([
        { command: '/start', description: 'Main menu' },
        { command: '/help', description: 'Help' },
    ])

    bot.on('photo', async msg => {
        userCorrectly = msg.chat.id
        bot.sendPhoto(process.env.CHAT_ID, msg.photo[msg.photo.length - 1].file_id, {
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: 'Jamoaga qo\'shish', callback_data: 'addtoteam'
                        }
                    ],
                    [
                        {
                            text: 'Carusel a\'zosi qilish', callback_data: 'addcarusel'
                        }
                    ],
                    [
                        {
                            text: 'Inkor qilish', callback_data: 'incorrectly'
                        }
                    ]
                ]
            }
        })
    })
    bot.on('message', async msg => {
        const text = msg.text;
        const chatId = msg.chat.id;

        try {
            if (text === '/start') {
                await bot.sendMessage(chatId, "Xush kelibsiz! \nO'zingizga kerakli bo'limni tanlang ↙️", {
                    reply_markup: {
                        inline_keyboard: [
                            [
                                {
                                    text: '📚 Trading cours', callback_data: 'tradingcours'
                                }
                            ],
                            [
                                {
                                    text: '♾️ JAMOA', callback_data: 'abuteam'
                                }
                            ],
                            [
                                {
                                    text: '🔍 Kriptovalyutani tekshirish', url: 't.me/HukmCrypto_bot'
                                }
                            ],
                            [
                                {
                                    text: `❓ Menejer bilan bog'lanish`, url: 't.me/Firnas_eth'
                                }
                            ],
                            [
                                {
                                    text: `NEO`, url: 'https://t.me/layergroupcrypto'
                                },
                                {
                                    text: `YOUTUBE`, url: 'https://youtube.com/@tradewithmuslim?feature=shared'
                                }
                            ],
                        ]
                    }
                })
                return
            }
            if (text === "/help") {
                return bot.sendMessage(chatId, "Foydalanish shartlari ✅ - https://telegra.ph/Foydalanish-shartlari-10-25 \n\nSizda savollar bo\'lsa va to\'lovni amalga oshirish uchun: @MANAGERCryptohalal \n\nMa\'muriyat bilan bog\'lanish uchun: @Islamic_projects_UZ_bot");
            }
            if (isPaid) {
                return
            }
            return bot.sendMessage(chatId, 'Men sizni tushunmayapman, qaytadan urinib k\'ring!)');
        } catch (e) {
            return bot.sendMessage(chatId, 'Qandaydur xatolik yuz berdi!)');
        }

    })
    bot.on('callback_query', async msg => {
        // userCorrectly = msg.chat.id

        if (msg.data === 'home') {
            await bot.editMessageText('Xush kelibsiz! \nO\'zingizga kerakli bo\'limni tanlang ↙️', { message_id: msg.message.message_id, chat_id: msg.message.chat.id })
            bot.editMessageReplyMarkup({
                inline_keyboard: [
                    [
                        {
                            text: '📚 Trading cours', callback_data: 'tradingcours'
                        }
                    ],
                    [
                        {
                            text: '♾️ JAMOA', callback_data: 'abuteam'
                        }
                    ],
                    [
                        {
                            text: '🔍 Kriptovalyutani tekshirish', url: 't.me/HukmCrypto_bot'
                        }
                    ],
                    [
                        {
                            text: `❓ Menejer bilan bog'lanish`, url: 't.me/Firnas_eth'
                        }
                    ]
                ]
            }, { message_id: msg.message.message_id, chat_id: msg.message.chat.id })

        }
        if (msg.data === 'home2') {
            await bot.sendMessage(msg.message.chat.id, "Xush kelibsiz! \nO'zingizga kerakli bo'limni tanlang ↙️", {
                reply_markup: {
                    inline_keyboard: [
                        [
                            {
                                text: '📚 Trading cours', callback_data: 'tradingcours'
                            }
                        ],
                        [
                            {
                                text: '♾️ JAMOA', callback_data: 'abuteam'
                            }
                        ],
                        [
                            {
                                text: '🔍 Kriptovalyutani tekshirish', url: 't.me/HukmCrypto_bot'
                            }
                        ],
                        [
                            {
                                text: `❓ Menejer bilan bog'lanish`, url: 't.me/Firnas_eth'
                            }
                        ]
                    ]
                }
            }, { message_id: msg.message.message_id, chat_id: msg.message.chat.id })

        }
        if (msg.data === 'tradingcours') {
            await bot.editMessageText('Xush kelibsiz! \nO\'zingizga kerakli bo\'limni tanlang ↙️', { message_id: msg.message.message_id, chat_id: msg.message.chat.id })
            await bot.editMessageReplyMarkup({
                inline_keyboard: [
                    [
                        {
                            text: 'Jamoaviy onlayn-kurs', callback_data: 'grouponlineteam'
                        }
                    ],
                    [
                        {
                            text: 'Individual kurs (1:1)', callback_data: 'indivcours'
                        }
                    ],
                    [
                        {
                            text: '◀ Orqaga', callback_data: 'home'
                        }
                    ]
                ]
            }, { message_id: msg.message.message_id, chat_id: msg.message.chat.id })

        }
        if (msg.data === 'tradingcours2') {
            await bot.sendMessage(msg.message.chat.id, "Xush kelibsiz! \nO'zingizga kerakli bo'limni tanlang ↙️", {
                reply_markup: {
                    inline_keyboard: [
                        [
                            {
                                text: 'Jamoaviy onlayn-kurs', callback_data: 'grouponlineteam'
                            }
                        ],
                        [
                            {
                                text: 'Individual kurs (1:1)', callback_data: 'indivcours'
                            }
                        ],
                        [
                            {
                                text: '◀ Orqaga', callback_data: 'home'
                            }
                        ]
                    ]
                }
            }, { message_id: msg.message.message_id, chat_id: msg.message.chat.id })

        }
        if (msg.data === 'abuteam') {
            await bot.sendPhoto(msg.message.chat.id, './firnasteam.jpg', {
                caption: `
                Jamoa - qanday afzalliklari mavjud? 
                \n✔️ Trading kurs: 15+ videodarslik va strimlar orqali kriptoni noldan o‘rganing.
                \n✔️ Jonli strimlar: Kriptobozor yangiliklari va tajriba oshirish uchun muntazam jonli efirlar.
                \n✔️ Jamoa | Aloqa: 2+ yillik tajribaga ega a&rsquo;zolar bilan fikr almashing, savollaringizni bering. 
                \n✔️ Signal/G‘oyalar: Cheklanmagan imkoniyatlar va foydali tahlillar.
                \n✔️ Research/Invest: Fomoga berilmang, fundamental jihatdan kuchli altcoinlarga invest qiling. 
                \n✔️ Halollik - ustuvor qadriyat: Gambling, derivativ va foreks yo‘q - faqat halol savdo!
                \n✔️ Cheklanmagan muddat: Kurs va kontentlardan doimiy foydalanish imkoniyati.
                \n\n💲Bir marttalik to'lov: 400 USDT/$\n🟰 Bo‘lib to‘lash imkoni mavjud!
            `,
                reply_markup: {
                    inline_keyboard: [
                        [
                            {
                                text: 'To\'lovni amalga oshirish', callback_data: 'abuteampay2'
                            }
                        ],
                        [
                            {
                                text: '◀ Orqaga', callback_data: 'home2'
                            }
                        ]
                    ]
                }
            })
        }
        if (msg.data === 'grouponlineteam') {
            await bot.sendPhoto(msg.message.chat.id, './firnasteam.jpg', {
                caption: `
                🔻Firnas jamoasi - NIMA DEGANI VA KIMLAR UCHUN? 
                \nFirnas muxlislari kanalda o'z analizlari va kriptotahlillarini ulashib borishida aynan fundamental yo'nalishda jonli darslar va jamoa bo'lishi talablari bo'lgani bois biz jamoani bir-necha bosqichlar bilan tuzdik ☑️
                \n🔹JAMOA - Birinchi bosqish: 5 fevral: 2 oylik onlayn kurs 
                \n🔸JAMOA - Ikkinchi bosqich: Onlayn kurs jarayonida va keyin altcoinlar bo'yicha research. 
                \nJAMOA - Uchinchi bosqich: Jamoada kriptotreyding va fundamentalni o'rganish uchun barcha darslik va materiallar
                \nJamoaga to'lov bir marttalik va muddati cheklanmagan - 280 USDT/$    
            `,
                reply_markup: {
                    inline_keyboard: [
                        [
                            {
                                text: 'To\'lovni amalga oshirish', callback_data: 'abuteampay2'
                            }
                        ],
                        [
                            {
                                text: '◀ Orqaga', callback_data: 'tradingcours2'
                            }
                        ]
                    ]
                }
            })
        }
        if (msg.data === 'indivcours') {
            await bot.editMessageText(`🔰 Ushbu yo'nalishda Firnas bilan treyding va kriptovalyutalarni o'rganish imkoniyati mavjud. Aynan xozir ushbu yo'nalishdagi kurs bo'yicha ma'lumotni menejerdan so'rashingizni iltimos qilib qolamiz.`, { message_id: msg.message.message_id, chat_id: msg.message.chat.id })
            bot.editMessageReplyMarkup({
                inline_keyboard: [
                    [
                        {
                            text: `❓ Menejer bilan bog'lanish`, url: 't.me/Firnas_eth'
                        }
                    ],
                    [
                        {
                            text: '◀ Orqaga', callback_data: 'tradingcours'
                        }
                    ]
                ]
            }, { message_id: msg.message.message_id, chat_id: msg.message.chat.id })
        }
        if (msg.data === 'tariflar') {
            await bot.editMessageText(`To'lov uchun rekvizitlar:`, { message_id: msg.message.message_id, chat_id: msg.message.chat.id })
            bot.editMessageReplyMarkup({
                inline_keyboard: [
                    [
                        {
                            text: 'USDT/TRC20🔴', callback_data: 'abutrc20'
                        }
                    ],
                    [
                        {
                            text: 'USDT/POLYGON🟣', callback_data: 'abupolygon'
                        }
                    ],
                    [
                        {
                            text: 'USDT/SOLANA🟣', callback_data: 'abusolana'
                        }
                    ],
                    [
                        {
                            text: '◀ Orqaga', callback_data: 'carusel'
                        }
                    ]
                ]
            }, { message_id: msg.message.message_id, chat_id: msg.message.chat.id })
        }
        if (msg.data === 'abutrc20') {
            await bot.editMessageText(`Quyidagi adressni ko'chirib oling va to'lovni yuborganingizdan so'ng \n\nTo'ladim✅ \n\ntugmasini bosib, to'lov chekini yuboring: \n\n\`TEoo4PJ2YKN6Wz2BqYTqQcWW3q8ANYpKc9\``, { message_id: msg.message.message_id, chat_id: msg.message.chat.id, parse_mode: 'MarkdownV2' })
            bot.editMessageReplyMarkup({
                inline_keyboard: [
                    [
                        {
                            text: '✅ To\'ladim', callback_data: 'successpay'
                        }
                    ],
                    [
                        {
                            text: 'Bekor qilish', callback_data: 'home'
                        }
                    ]
                ]
            }, { message_id: msg.message.message_id, chat_id: msg.message.chat.id })
        }
        if (msg.data === 'abupolygon') {
            await bot.editMessageText('Quyidagi adressni ko\'chirib oling va to\'lovni yuborganingizdan so\'ng \n\nTo\'ladim✅ \n\ntugmasini bosib, to\'lov chekini yuboring: \n\n\`0xb13cCD3E207980C1F1B2546dAEff6d28A7B97052\`', { message_id: msg.message.message_id, chat_id: msg.message.chat.id, parse_mode: 'MarkdownV2' })
            bot.editMessageReplyMarkup({
                inline_keyboard: [
                    [
                        {
                            text: '✅ To\'ladim', callback_data: 'successpay'
                        }
                    ],
                    [
                        {
                            text: 'Bekor qilish', callback_data: 'home'
                        }
                    ]
                ]
            }, { message_id: msg.message.message_id, chat_id: msg.message.chat.id })
        }
        if (msg.data === 'abusolana') {
            await bot.editMessageText('Quyidagi adressni ko\'chirib oling va to\'lovni yuborganingizdan so\'ng \n\nTo\'ladim✅ \n\ntugmasini bosib, to\'lov chekini yuboring: \n\n\`DTY3ymtWFWhsdiGRycmk8grxmfZBB5kRNbvsQZimWjDB\`', { message_id: msg.message.message_id, chat_id: msg.message.chat.id, parse_mode: 'MarkdownV2' })
            bot.editMessageReplyMarkup({
                inline_keyboard: [
                    [
                        {
                            text: '✅ To\'ladim', callback_data: 'successpay'
                        }
                    ],
                    [
                        {
                            text: 'Bekor qilish', callback_data: 'home'
                        }
                    ]
                ]
            }, { message_id: msg.message.message_id, chat_id: msg.message.chat.id })
        }
        if (msg.data === 'abuteampay') {
            await bot.editMessageText('O\'zingizga qulay to\'lov rekvizitini tanlang: ', { message_id: msg.message.message_id, chat_id: msg.message.chat.id })
            bot.editMessageReplyMarkup({
                inline_keyboard: [
                    [
                        {
                            text: 'USDT / TRC20', callback_data: 'abutrc20'
                        }
                    ],
                    [
                        {
                            text: 'USDT / Polygon', callback_data: 'abupolygon'
                        }
                    ],
                    [
                        {
                            text: 'USDT / Solana', callback_data: 'abusolana'
                        }
                    ],
                    [
                        {
                            text: '◀ Orqaga', callback_data: 'abuteam'
                        }
                    ]
                ]
            }, { message_id: msg.message.message_id, chat_id: msg.message.chat.id })
        }
        if (msg.data === 'abuteampay2') {
            await bot.sendMessage(msg.message.chat.id, "Xush kelibsiz! \nO'zingizga kerakli bo'limni tanlang ↙️", {
                reply_markup: {
                    inline_keyboard: [
                        [
                            {
                                text: 'USDT / TRC20', callback_data: 'abutrc20'
                            }
                        ],
                        [
                            {
                                text: 'USDT / Polygon', callback_data: 'abupolygon'
                            }
                        ],
                        [
                            {
                                text: 'USDT / Solana', callback_data: 'abusolana'
                            }
                        ],
                        [
                            {
                                text: '◀ Orqaga', callback_data: 'home'
                            }
                        ]
                    ]
                }
            }, { message_id: msg.message.message_id, chat_id: msg.message.chat.id })
        }
        if (msg.data === 'help') {
            await bot.editMessageText(`🔰 Menejer bilan bog'lanish: \n\n@firnas_eth`, { message_id: msg.message.message_id, chat_id: msg.message.chat.id })
            bot.editMessageReplyMarkup({
                inline_keyboard: [
                    [
                        {
                            text: '◀ Orqaga', callback_data: 'home'
                        }
                    ]
                ]
            }, { message_id: msg.message.message_id, chat_id: msg.message.chat.id })
        }
        if (msg.data === 'successpay') {
            isPaid = true
            await bot.editMessageText('To\'lov amalga oshirganingizdan so\'ng \nchekni suratini jo\'natishingizni so\'raymiz (Screenshot)', { message_id: msg.message.message_id, chat_id: msg.message.chat.id })
            bot.editMessageReplyMarkup({
                inline_keyboard: [
                    [
                        {
                            text: '◀ Asosiy menu', callback_data: 'home'
                        }
                    ]
                ]
            }, { message_id: msg.message.message_id, chat_id: msg.message.chat.id })
        }
        if (msg.data === 'addtoteam') {
            await bot.sendMessage(userCorrectly, "🔰To'lovingizni qabul qildik, quyidagi linkka bosib, jamoaga qo'shiling: https://t.me/+_LiD7WORWdgwYjZk")
        }
        if (msg.data === 'addcarusel') {
            await bot.sendMessage(userCorrectly, "🔰To'lovingizni qabul qildik, quyidagi linkka bosib, signal-kanalga qo'shiling: https://t.me/+yHDn6d7_gZEyNDg0")
        }
        if (msg.data === 'incorrectly') {
            await bot.sendMessage(userCorrectly, 'Afsuski to\'lov qabul qilinmaganligi sabablik qayta urinib ko\'rishingizni so\'raymiz!)')
        }
    })

    // Новое описание
    const description = '...';
    // URL для API
    // const url = `https://api.telegram.org/bot${token}/setMyDescription`;
    const url = `https://api.telegram.org/bot${process.env.TOKEN}/setMyShortDescription`;

    // Отправляем запрос для изменения описания
    axios.post(url, { description })
        .then(response => {
            if (response.status === 200) {
                console.log('Описание успешно изменено!');
            } else {
                console.log('Ошибка при изменении описания:', response.data);
            }
        })
        .catch(error => {
            console.error('Ошибка запроса:', error);
        }
    );
}

start()


