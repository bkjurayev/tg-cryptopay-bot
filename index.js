const TelegramApi = require('node-telegram-bot-api')

const CHAT_ID = "-4777464657";
// const CHAT_ID = "-1002013639929";
// const CHAT_ID = "-1001792646372";
const token = '6082876218:AAEFVsJOAfViyZ5vdRUnpY8w3QXX6GQR810' //main bot
// const token = '5971034672:AAF1yrc_2IZjjOyqbfjalyD6wBlAsoF7RsA' //labitintinfobot
// const token = '7058006450:AAHo_cdPG24GetUQM_jmX80GMMLxFOGlEPI' //euromigrantuz
const bot = new TelegramApi(token, { polling: true })

let userCorrectly = ''
let isPaid = false

const start = async () => {
    bot.setMyCommands([
        { command: '/start', description: 'Main menu' },
        { command: '/help', description: 'Help' },
    ])

    bot.on('photo', async msg => {
        userCorrectly = msg.chat.id
        bot.sendPhoto(CHAT_ID, msg.photo[msg.photo.length - 1].file_id, {
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: 'Tasdiqlash', callback_data: 'correctly'
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
                await bot.sendMessage(chatId, "Xush kelibsiz! \nO'zingizga kerakli bo'limni tanlang↙️", {
                    reply_markup: {
                        inline_keyboard: [
                            [
                                {
                                    text: 'Abu Trading jamoasi', callback_data: 'abuteam'
                                }
                            ],
                            [
                                {
                                    text: 'Abu Trading Carusel', callback_data: 'carusel'
                                }
                            ],
                            [
                                {
                                    text: `❓ Menejer bilan bog'lanish`, callback_data: 'help'
                                }
                            ]
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
            await bot.editMessageText('Xush kelibsiz! \nO\'zingizga kerakli bo\'limni tanlang↙️', { message_id: msg.message.message_id, chat_id: msg.message.chat.id })
            bot.editMessageReplyMarkup({
                inline_keyboard: [
                    [
                        {
                            text: 'Abu Trading jamoasi', callback_data: 'abuteam'
                        }
                    ],
                    [
                        {
                            text: 'Abu Trading Carusel', callback_data: 'carusel'
                        }
                    ],
                    [
                        {
                            text: `Yordam ❓`, callback_data: 'help'
                        }
                    ]
                ]
            }, { message_id: msg.message.message_id, chat_id: msg.message.chat.id })

        }
        if (msg.data === 'abuteam') {
            await bot.editMessageText(`Jamoaga qabul ochishdan avval yangiliklar kiritildi, xo'sh jamoaga qo'shilgan odam qanday yo'nalishlarni o'rganadi: 
                                        \n\n🔘 Education (kursda yozib olingan darsliklar + 6 strategiya bo'yicha praktikum darslar) 
                                        \n🔘 Newsroom (Joseph Crypto makroekonomika va umuman fundament yangiliklar bo'yicha tahlillari) 
                                        \n🔘 Signal (Abu Juvayriya va Firnas tomonidan altkoinlar bo'yicha signallar) 
                                        \n🔘 Jamoa oldi bollari (o'quvchilar o'zlarining tahlillari va signallari bilan bo'lishadigan bo'lim - profi treyder bo'lib shakllanishni eng qaynoq yeri) 
                                        \nQo'shimcha keyslar: \nhttps://t.me/firnascrypto/5320?single \nhttps://t.me/firnascrypto/s/128 \nhttps://t.me/firnascrypto/5759
                                        \n\n❗️Jamoaga qo'shilish muddati cheklanmaydi, qo'shimcha to'lovlar yo'q
                                        \nJamoaga qo'shilish - 250 USDT
            `, { message_id: msg.message.message_id, chat_id: msg.message.chat.id })
            bot.editMessageReplyMarkup({
                inline_keyboard: [
                    [
                        {
                            text: 'To\'lovni amalga oshirish', callback_data: 'abuteampay'
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
        if (msg.data === 'carusel') {
            await bot.editMessageText(`Ushbu kanal Abu Juvayriya va Firnas bilan birgalikda o'zlarining savdo g'oyalarini, qaysi altcoinlarga kirayotgani va sotishlarni aytib turishadi.  \n\n\nBiz ushbu kanalni - ish bilan band yoki yangilar uchun tavsiya qilamiz. Sizdan kapitalni bizning tavsiyaga rioya qilib boshqarish. \n\n\nTariflar bilan tanishing↙️ \n\n3 oylik obuna🔰 99.00 USDT \n\n1 yillik obuna🔰 250.00 USDT`, { message_id: msg.message.message_id, chat_id: msg.message.chat.id })
            bot.editMessageReplyMarkup({
                inline_keyboard: [
                    [
                        {
                            text: 'To\'lovni amalga oshirish', callback_data: 'abuteampay'
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
        if (msg.data === 'help') {
            await bot.editMessageText(`🔰Ushbu bot @firnascrypto kanaliga tegishlidir \n\n@firnascrypto - Firnas K. o'zining treyding va kriptovalyutlarga bog'liq fikrlarini ulashib boradigan asosiy kanal, shuningdek jamoasi bilan tuzgan boshqa loyihalari bilan tanishing⤵️ \n\n@Crypto62481 - Crypto va Web3'ga oid so'nggi yangiliklarni ulashib boruvchi kanal. \n\n@hukmcrypto_bot - Kriptovalyutalar hukmini tekshirish uchun bot (manbalari keltirilgan, 500+ kriptovalyuta, 13 fatvo) \n\nhttps://t.me/+QYhjyS_wHIZiMjRi (NEO CHAT) \nTreyding, altcoinlar va umuman fikr alishish hamda Firnas bilan suhbat uchun chat. \n\nYuqoridagi loyihalar barchasi bepuldir, pullik guruhlarda boshqa mutahassislar va materiallar joylangani bilan farqlanib turadi, botdan foydalanishda quyidagi qoidalar bilan tanishing: \nhttps://telegra.ph/firnascryptobotqoidalar-12-01 \n\nAdminlar bilan bog'lanish uchun: \n@firnas_eth / @feedbackfirnasbot \n\n(❕Iltimos, adminlar bilan ish borasida bog'laning, treyding va birjalar bo'yicha, tehnik savollar uchun NEO CHAT ga murojaat qiling)`, { message_id: msg.message.message_id, chat_id: msg.message.chat.id })
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


        // if (msg.data === 'categoryone') {
        //     await bot.editMessageText('"CryptoSalam" yopiq guruhda siz turli imkoniyatlarga ega tariflar ichidan o\'zingizga munosibini tanlab olishingiz mumkin! 👇', { message_id: msg.message.message_id, chat_id: msg.message.chat.id })
        //     bot.editMessageReplyMarkup({
        //         inline_keyboard: [
        //             [
        //                 {
        //                     text: 'Tariflar 📜', callback_data: 'categoryonetarif'
        //                 }
        //             ],
        //             [
        //                 {
        //                     text: '◀ Orqaga', callback_data: 'pay'
        //                 }
        //             ]
        //         ]
        //     }, { message_id: msg.message.message_id, chat_id: msg.message.chat.id })
        // }
        // if (msg.data === 'categoryonetarif') {
        //     await bot.editMessageText('Amaldagi tariflar: \n\n🔰 Tarif "1 Oylik" Narx: 69$ \n\n🔰 Tarif "3 Oylik" Narx: 170$ (-16%) \n\n🔰 Tarif "6 Oylik" Narx: 299$ (-24%) \n\n🔰 Tarif "Chegirmasiz" Tarif: 800$ \n\nTariflardan birini tanlang va yanada to\'liqroq ma\'lumot oling', { message_id: msg.message.message_id, chat_id: msg.message.chat.id })
        //     bot.editMessageReplyMarkup({
        //         inline_keyboard: [
        //             [
        //                 {
        //                     text: '1 OYLIK ', callback_data: 'paymethonemonth'
        //                 }
        //             ],
        //             [
        //                 {
        //                     text: '3 OYLIK', callback_data: 'paymeththreemonth'
        //                 }
        //             ],
        //             [
        //                 {
        //                     text: '6 OYLIK', callback_data: 'paymethsixmonth'
        //                 }
        //             ],
        //             [
        //                 {
        //                     text: 'CHEGIRMASIZ', callback_data: 'paymethnotsale'
        //                 }
        //             ],
        //             [
        //                 {
        //                     text: '◀ Orqaga', callback_data: 'categoryone'
        //                 }
        //             ]
        //         ]
        //     }, { message_id: msg.message.message_id, chat_id: msg.message.chat.id })
        // }
        // if (msg.data === 'paymethonemonth') {
        //     await bot.editMessageText('1 oylik 🔰 69$ \n CryptoSalam asosiy kanali, muhokama guruhi, efirlar', { message_id: msg.message.message_id, chat_id: msg.message.chat.id })
        //     bot.editMessageReplyMarkup({
        //         inline_keyboard: [
        //             [
        //                 {
        //                     text: '💲 To\'lov uslublari', callback_data: 'paycategory'
        //                 }
        //             ],
        //             [
        //                 {
        //                     text: '📝 Promocode kiriting', callback_data: 'promocode'
        //                 }
        //             ],
        //             [
        //                 {
        //                     text: '◀ Orqaga', callback_data: 'categoryonetarif'
        //                 }
        //             ]
        //         ]
        //     }, { message_id: msg.message.message_id, chat_id: msg.message.chat.id })
        // }
        // if (msg.data === 'paymeththreemonth') {
        //     await bot.editMessageText('3 oylik 🔰 170$ (-16%) \n CryptoSalam asosiy kanali, muhokama guruhi, efirlar', { message_id: msg.message.message_id, chat_id: msg.message.chat.id })
        //     bot.editMessageReplyMarkup({
        //         inline_keyboard: [
        //             [
        //                 {
        //                     text: '💲 To\'lov uslublari', callback_data: 'paycategory'
        //                 }
        //             ],
        //             [
        //                 {
        //                     text: '📝 Promocode kiriting', callback_data: 'promocode'
        //                 }
        //             ],
        //             [
        //                 {
        //                     text: '◀ Orqaga', callback_data: 'categoryonetarif'
        //                 }
        //             ]
        //         ]
        //     }, { message_id: msg.message.message_id, chat_id: msg.message.chat.id })
        // }
        // if (msg.data === 'paymethsixmonth') {
        //     await bot.editMessageText('6 oylik 🔰 299$ (-24%) \n CryptoSalam asosiy kanali, muhokama guruhi, efirlar', { message_id: msg.message.message_id, chat_id: msg.message.chat.id })
        //     bot.editMessageReplyMarkup({
        //         inline_keyboard: [
        //             [
        //                 {
        //                     text: '💲 To\'lov uslublari', callback_data: 'paycategory'
        //                 }
        //             ],
        //             [
        //                 {
        //                     text: '📝 Promocode kiriting', callback_data: 'promocode'
        //                 }
        //             ],
        //             [
        //                 {
        //                     text: '◀ Orqaga', callback_data: 'categoryonetarif'
        //                 }
        //             ]
        //         ]
        //     }, { message_id: msg.message.message_id, chat_id: msg.message.chat.id })
        // }
        // if (msg.data === 'paymethnotsale') {
        //     await bot.editMessageText('Chegirmasiz 💠 800$ \n CryptoSalam barcha resurslari va adminlar bilan doimiy aloqa', { message_id: msg.message.message_id, chat_id: msg.message.chat.id })
        //     bot.editMessageReplyMarkup({
        //         inline_keyboard: [
        //             [
        //                 {
        //                     text: '💲 To\'lov uslublari', callback_data: 'paycategory'
        //                 }
        //             ],
        //             [
        //                 {
        //                     text: '📝 Promocode kiriting', callback_data: 'promocode'
        //                 }
        //             ],
        //             [
        //                 {
        //                     text: '◀ Orqaga', callback_data: 'categoryonetarif'
        //                 }
        //             ]
        //         ]
        //     }, { message_id: msg.message.message_id, chat_id: msg.message.chat.id })
        // }
        // if (msg.data === 'paycategory') {
        //     await bot.editMessageText('To\'lov amalga oshirish uchun o\'zingizga mos usulni tanlang!', { message_id: msg.message.message_id, chat_id: msg.message.chat.id })
        //     bot.editMessageReplyMarkup({
        //         inline_keyboard: [
        //             [
        //                 {
        //                     text: '💳 Crypto orqali (USDT)', callback_data: 'cryptopay'
        //                 }
        //             ],
        //             // [
        //             //     {
        //             //         text: '🔁 Boshqa usullar', callback_data: 'promocode'
        //             //     }
        //             // ],
        //             [
        //                 {
        //                     text: '◀ Orqaga', callback_data: 'categoryonetarif'
        //                 }
        //             ]
        //         ]
        //     }, { message_id: msg.message.message_id, chat_id: msg.message.chat.id })
        // }
        // if (msg.data === 'cryptopay') {
        //     await bot.editMessageText('Crypto orqali to\'lov amalga oshirish ularning turlari:', { message_id: msg.message.message_id, chat_id: msg.message.chat.id })
        //     bot.editMessageReplyMarkup({
        //         inline_keyboard: [
        //             [
        //                 {
        //                     text: 'USDT (🔴TRC20)', callback_data: 'trc20'
        //                 }
        //             ],
        //             [
        //                 {
        //                     text: 'USDT (🔵Arbitrum)', callback_data: 'arbitrum'
        //                 }
        //             ],
        //             [
        //                 {
        //                     text: 'USDT (🟣Polygon)', callback_data: 'polygon'
        //                 }
        //             ],
        //             [
        //                 {
        //                     text: '◀ Orqaga', callback_data: 'paycategory'
        //                 }
        //             ]
        //         ]
        //     }, { message_id: msg.message.message_id, chat_id: msg.message.chat.id })
        // }
        // if (msg.data === 'trc20') {
        //     await bot.editMessageText('TEoo4PJ2YKN6Wz2BqYTqQcWW3q8ANYpKc9', { message_id: msg.message.message_id, chat_id: msg.message.chat.id })
        //     bot.editMessageReplyMarkup({
        //         inline_keyboard: [
        //             [
        //                 {
        //                     text: '✅ To\'landi', callback_data: 'successpay'
        //                 }
        //             ],
        //             [
        //                 {
        //                     text: 'Bekor qilish', callback_data: 'home'
        //                 }
        //             ]
        //         ]
        //     }, { message_id: msg.message.message_id, chat_id: msg.message.chat.id })
        // }
        // if (msg.data === 'arbitrum') {
        //     await bot.editMessageText('0xb13cCD3E207980C1F1B2546dAEff6d28A7B97052', { message_id: msg.message.message_id, chat_id: msg.message.chat.id })
        //     bot.editMessageReplyMarkup({
        //         inline_keyboard: [
        //             [
        //                 {
        //                     text: '✅ To\'landi', callback_data: 'successpay'
        //                 }
        //             ],
        //             [
        //                 {
        //                     text: 'Bekor qilish', callback_data: 'home'
        //                 }
        //             ]
        //         ]
        //     }, { message_id: msg.message.message_id, chat_id: msg.message.chat.id })
        // }
        // if (msg.data === 'polygon') {
        //     await bot.editMessageText('0xb13cCD3E207980C1F1B2546dAEff6d28A7B97052', { message_id: msg.message.message_id, chat_id: msg.message.chat.id })
        //     bot.editMessageReplyMarkup({
        //         inline_keyboard: [
        //             [
        //                 {
        //                     text: '✅ To\'landi', callback_data: 'successpay'
        //                 }
        //             ],
        //             [
        //                 {
        //                     text: 'Bekor qilish', callback_data: 'home'
        //                 }
        //             ]
        //         ]
        //     }, { message_id: msg.message.message_id, chat_id: msg.message.chat.id })
        // }
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
        // if (msg.data === 'promocode') {
        //     isPaid = true
        //     await bot.editMessageText('Promocode kiritishingiz mumkin! 👇', { message_id: msg.message.message_id, chat_id: msg.message.chat.id })
        //     bot.editMessageReplyMarkup({
        //         inline_keyboard: [
        //             [
        //                 {
        //                     text: '◀ Orqaga', callback_data: 'categoryonetarif'
        //                 }
        //             ]
        //         ]
        //     }, { message_id: msg.message.message_id, chat_id: msg.message.chat.id })
        // }
        if (msg.data === 'correctly') {
            await bot.sendMessage(userCorrectly, 'Tabriklaymiz! \nSiz uchun joy band qilindi. \nSiz uchun mahsus linklarni jo\'natishdan mamnunmiz! \n\nhttps://t.me/+_uxP3WlGEeFhNmIy \nasosiy kanal, jonli efir, anons, loyiha yangiliklari qo\'yilib boriladi. \n\nhttps://t.me/+U_soBohVVQgyMzQy \nTreyding haqida, signallar, tahlillar, grafik shu yerda \n\nhttps://t.me/+kIZffY1HlOVkYmEy \nCHAT yoki guruh.)')
            await bot.editMessageText('Xush kelibsiz! \nO\'zingizga kerakli bo\'limni tanlang↙️', { message_id: msg.message.message_id, chat_id: msg.message.chat.id })
        }
        if (msg.data === 'incorrectly') {
            await bot.sendMessage(userCorrectly, 'Afsuski to\'lov qabul qilinmaganligi sabablik qayta urinib ko\'rishingizni so\'raymiz!)')
        }
    })
}

start()


