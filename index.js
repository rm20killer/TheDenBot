/* eslint-disable no-inline-comments */
const Discord = require('discord.js');
const client = new Discord.Client();
const HytaleApi = require('hytale-api-sdk');
const api = new HytaleApi.ArticlesApi();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if(msg.content === '!ping') {
        msg.reply('pong');
        console.log('!ping');
    }
    if(msg.content === '!madeby') {
        console.log('!madeby');
        msg.channel.send('this was made by RM20');
    }
    if (msg.content === '!blog') {
        if (msg.member.roles.cache.find(r => r.name === '⁣       Staff Team       ⁣')) {
        console.log('!blog');

        // eslint-disable-next-line no-unused-vars
        api.getArticles({}, function(error, data, response) {
            if (error) {
                console.error(error);
            }
            else {
                    const latest = data.slice(0, 1);
                    latest.forEach(function(article) {
                        const publishAt = new Date(article.publishedAt);
                        const embed = new Discord.MessageEmbed()
                            .setColor(3447003)
                            .setThumbnail(`https://hytale.com/m/variants/blog_thumb_${article.coverImage.s3Key}`)
                            .setAuthor('Hytale', 'https://cdn.discordapp.com/attachments/741665332808122469/741685930401857596/G-O9yHTX.jpg')
                            .setTitle(article.title)
                            .setDescription(article.bodyExcerpt)
                            .setURL(`https://hytale.com/news/${publishAt.getFullYear()}/${publishAt.getMonth() + 1}/${article.slug}`)
                            .addField('Published At', `${publishAt.toLocaleDateString()}`)
                        ;

                        msg.channel.send(embed);
                    });
                }
            });
        }
        else{
            console.log('!blog user not staff');
            msg.reply('need staff role. you can check in ' + msg.guild.channels.cache.get('741672480611237892').toString() + ' for latest blog');
        }
    }
});

client.on('guildMemberUpdate', function(oldMember, newMember) {
    if (newMember.roles.cache.find(r=>r.id === '743092468693729290')) {
        newMember.roles.remove('743092472128733225'); // level 95
        newMember.roles.remove('743092475672920135'); // level 90
        newMember.roles.remove('743092478483103876'); // level 85
        console.log(newMember + ' reached level 100');
        // client.channel.get('741707464952512583').send('Congratulations, <@' + newMember + '>on traversing through the cave');
    }
    else if (newMember.roles.cache.find(r=>r.name === 'Cave Entrance | Level 85 |') || newMember.roles.cache.find(r=>r.name === 'Upper Cave | Level 90 |') || newMember.roles.cache.find(r=>r.name === 'Lower Cave | Level 95 |')) {
        // console.log(newMember + ' reached level 95');
        if (newMember.roles.cache.find(r=>r.id === '743092478483103876')) {
            newMember.roles.remove('743091114956816405'); // level 80
            newMember.roles.remove('743091118136361091'); // level 75
            newMember.roles.remove('743091111161233519'); // level 70
            newMember.roles.remove('743091107667116114'); // level 65
        }
        if (newMember.roles.cache.find(r=>r.id === '743092472128733225')) {
            newMember.roles.add ('743092475672920135');
        }
        if (newMember.roles.cache.find(r=>r.id === '743092475672920135')) {
            newMember.roles.add('743092478483103876');
        }
    }
    else if (newMember.roles.cache.find(r=>r.name === 'Mountain North | Level 65 |') || newMember.roles.cache.find(r=>r.name === 'Mountain East | Level 70 |') || newMember.roles.cache.find(r=>r.name === 'Mountain South | Level 75 |') || newMember.roles.cache.find(r=>r.name === 'Mountain West | Level 80 |')) { // if user dont have level 45
        // console.log(newMember + ' reached level 65');
        if (newMember.roles.cache.find(r=>r.id === '743091107667116114')) {
            newMember.roles.remove('743090825742778414'); // level 60
            newMember.roles.remove('743090814241996905'); // level 55
            newMember.roles.remove('741702753222524968'); // level 50
            newMember.roles.remove('741702771119751269'); // level 45
        }
        if (newMember.roles.cache.find(r=>r.name === 'Mountain West | Level 80 |')) {
            newMember.roles.add('743091118136361091');
        }
        if (newMember.roles.cache.find(r=>r.id === '743091118136361091')) {
            newMember.roles.add('743091111161233519');
        }
        if (newMember.roles.cache.find(r=>r.id === '743091111161233519')) {
            newMember.roles.add('743091107667116114');
        }
    }
    else if (newMember.roles.cache.find(r=>r.name === 'Lake North | Level 45 |') || newMember.roles.cache.find(r=>r.name === 'Lake East | Level 50 |') || newMember.roles.cache.find(r=>r.name === 'Lake South | Level 55 |') || newMember.roles.cache.find(r=>r.name === 'Lake West | Level 60 |')) { // if user dont have level 45
        // console.log(newMember + ' reached level 45');
        if (newMember.roles.cache.find(r=>r.id === '741702771119751269')) {
            newMember.roles.remove('741702766589640714'); // level 40
            newMember.roles.remove('741702772918976652'); // level 35
            newMember.roles.remove('741702769941020792'); // level 30
            newMember.roles.remove('741702774865264730'); // level 25
        }
        if (newMember.roles.cache.find(r=>r.name === 'Lake West | Level 60 |')) {
            newMember.roles.add('743090814241996905');
        }
        if (newMember.roles.cache.find(r=>r.id === '743090814241996905')) {
            newMember.roles.add('741702753222524968');
        }
        if (newMember.roles.cache.find(r=>r.id === '741702753222524968')) {
            newMember.roles.add('741702771119751269');
        }
    }
    else if (newMember.roles.cache.find(r=>r.name === 'Meadow North | Level 25 |') || newMember.roles.cache.find(r=>r.name === 'Meadow East | Level 30 |') || newMember.roles.cache.find(r=>r.name === 'Meadow South | Level 35 |') || newMember.roles.cache.find(r=>r.name === 'Meadow West | Level 40 |')) { // if user dont have level 45
        // console.log(newMember + ' reached level 25');
        if (newMember.roles.cache.find(r=>r.id === '741702774865264730')) {
            newMember.roles.remove('741702813041688639'); // level 20
            newMember.roles.remove('741702768795844721'); // level 15
            newMember.roles.remove('741702816334348328'); // level 10
            newMember.roles.remove('741702819676946494'); // level 5
        }
        if (newMember.roles.cache.find(r=>r.name === 'Meadow West | Level 40 |')) {
            newMember.roles.add('741702772918976652');
        }
        if (newMember.roles.cache.find(r=>r.id === '741702772918976652')) {
            newMember.roles.add('741702769941020792');
        }
        if (newMember.roles.cache.find(r=>r.id === '741702769941020792')) {
            newMember.roles.add('741702774865264730');
        }
    }
    else if (newMember.roles.cache.find(r=>r.name === 'Forest North | Level 5 |') || newMember.roles.cache.find(r=>r.name === 'Forest South | Level 15 |') || newMember.roles.cache.find(r=>r.name === 'Forest West  | Level 20 |') || newMember.roles.cache.find(r=>r.name === 'Forest East | Level 10 |')) { // if user dont have level 25
        // console.log(newMember + ' is lower than 25');
        // level 20
        if (newMember.roles.cache.find(r=>r.id === '741702813041688639')) {
            newMember.roles.add('741702768795844721');
        }
        // level 15
        if (newMember.roles.cache.find(r=> r.id === '741702768795844721')) {
            newMember.roles.add('741702816334348328');
        }
        // level 10
        if (newMember.roles.cache.find(r=>r.id === '741702816334348328')) {
            newMember.roles.add('741702819676946494');
     }
    }
});

// client.login(process.env.token);
