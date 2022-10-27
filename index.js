//command to downgrade npm i discord.js@12.5.3

const { Client, Intents } = require('discord.js');
const fetch = require("node-fetch");
const keepAlive = require("./server");
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const PREFIX = "/";

const build = require('./build');
const fx = require('./functions');
const fs = require('fs')

// var url = 'https://hk4e-api-os.mihoyo.com/event/gacha_info/api/getGachaLog?gacha_type=301&page=1&size=20&authkey_ver=1&sign_type=2&auth_appid=webview_gacha&init_type=301&lang=en&authkey=XXXX&end_id=0';

//daily check in
// document.cookie = "ltoken=9Pi3E6POrK50BLARsHEVPhmYCGiRd1YY1aIySm64";
// document.cookie = "account_uid=6476435";
// document.cookie = "ltuid=6476435";


//wish get function
async function get(urlinput) {
  try {
    var wishes = [''];
    var endid;
    var lastendid = 0;
    while (endid != lastendid) {
      endid = lastendid;
      var url = 'https://hk4e-api-os.mihoyo.com/event/gacha_info/api/getGachaLog?gacha_type=301&page=1&size=20&authkey_ver=1&sign_type=2&auth_appid=webview_gacha&init_type=301&lang=en&' + urlinput.substring(urlinput.indexOf("&authkey=") + 1);
      url = url.substring(0, url.length - 2);
      url += "&end_id=" + endid;

      let obj = await (await fetch(url)).json();
      wishes = wishes.concat(obj.data.list);

      try {
        lastendid = obj.data.list[obj.data.list.length - 1].id;
      } catch {
        return wishes;
      }
    }
  } catch {
    return 'Link is false';
  }
}

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
})

client.on("message", msg => {
  if (msg.author.bot) return;

  if (msg.content.startsWith(PREFIX)) {
    const [CMD_NAME, ...args] = msg.content
      .trim().substring(PREFIX.length).split(/\s+/);

    //get ei chan commands 
    if (CMD_NAME === 'eihelp') {
      msg.channel.send(fx.getHelp());
    }

    //get author description
    if (CMD_NAME === 'author') {
      msg.channel.send(fx.getAuthor());
    }

    //get bot version
    if (CMD_NAME === 'version') {
      msg.channel.send(fx.getVersion());
    }

    //build character command handler
    if (CMD_NAME === 'build') {
      if (args.length === 0) return msg.reply('Please provide character name for the build');
      var character = args[0].toLowerCase();
      const embed = build.charbuild(character);
      msg.channel.send(embed);
    }

    //events timeline command handler
    if (CMD_NAME === 'timeline') {
      let a = new Promise(function(resolve, reject) {
        fx.getapifortimeline(resolve);
      });

      (async () => {
        let b = await a;
        msg.channel.send(b);
      })();
    }

    //info about cv command handler
    if (CMD_NAME === 'cvinfo') {
      msg.channel.send(fx.getCV());
    }

    //cv calculator command handler
    if (CMD_NAME === 'cv') {
      if (args.length === 0) return msg.reply('Please provide your crit rate first then crit damage. Example /cv 7 14');

      cr = args[0]; cd = args[1];
      msg.channel.send(fx.cvcalc(cr, cd, 'arti'));
    }

    //cv calculator command handler
    if (CMD_NAME === 'cvc') {
      if (args.length === 0) return msg.reply('Please provide your crit rate first then crit damage. Example /cv 7 14');

      cr = args[0]; cd = args[1];
      msg.channel.send(fx.cvcalc(cr, cd, 'total'));
    }

    //time add calculator
    if (CMD_NAME === 'add') {
      if (args.length === 0) return msg.reply('Please provide the number of hours you want to add');
      var target = args[0];
      var time = fx.timeadd(target);
      msg.reply("Time after added hours: " + time);
    }

    //wish counter command handler
    if (CMD_NAME === 'wish') {
      const wishstatus = false;
      if (!wishstatus) {
        return msg.channel.send('Wish command is under maintenance as MiHoYo changed the wish API. Thank you for your patience.');
      }

      if (!msg.guild.me.hasPermission("MANAGE_MESSAGES")) {
        return msg.channel.send('Please give the me(bot) the permission to delete messages in order to use this feature...be sure to delete back the link of your feedback page to avoid data exploit');
      }
      if (args.length === 0) return msg.reply('Please copy and paste the link from the feedback page');

      const Discord = require('discord.js');
      var buildembed = new Discord.MessageEmbed();

      buildembed.setTitle('Please wait for the data to load...').setDescription('Previous command has been deleted in order to avoid data exploit').setFooter('The feature only works for Desktop users');
      try {
        const channel = msg.channel; // TextChannel object
        const messageManager = channel.messages; // MessageManager object

        messageManager.fetch({ limit: 1 }).then((messages) => {
          messages.forEach((message) => {
            message.delete();
          });
        })
      } catch {
        msg.channel.send('Bot does not have permission to delete');
      }
      //send message that the previous command has been deleted
      msg.channel.send(buildembed);

      //tracking wish record
      var urlinput = args[0];
      (async () => {
        var wishes = await get(urlinput);
        if (wishes === 'Link is false') {
          return msg.reply('Link is false');
        }

        //send wish counter to the channel
        buildembed = fx.wishProcess(wishes);
        buildembed.setTitle(msg.author.tag + " Wish Counter");
        msg.channel.send(buildembed);
      })()
    }

    //clear the channel command handler
    if (CMD_NAME === 'clearthechannel') {
      try {
        async function clear() {
          msg.delete();
          const fetched = await msg.channel.messages.fetch({ limit: 100 });
          msg.channel.bulkDelete(fetched);
        }
        clear();
      } catch (err) {
        msg.channel.send("Bot does not have permission to clear the messages!");
      }
    }
  }
})

keepAlive();
const token = process.env['TOKEN'];
client.login(token);