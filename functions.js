module.exports.getHelp = getHelp;
module.exports.getAuthor = getAuthor;
module.exports.getVersion = getVersion;
module.exports.getTimeline = getTimeline;
module.exports.getapifortimeline = getapifortimeline;
module.exports.getCV = getCV;
module.exports.cvcalc = cvcalc;
module.exports.timeadd = timeadd;
module.exports.wishProcess = wishProcess;

const fetch = require("node-fetch");

//get all commands function 
function getHelp() {
  const Discord = require('discord.js');
  const buildembed = new Discord.MessageEmbed();

  buildembed
  .setColor('#cd92f8')
  .setTitle('Ei-chan Bot Commands')
  .addFields(
    { 
      name: 'Made By: Blankzx', 
      value: '/author - Get author description  \n /timeline - Get timeline countdown \n /build - Get character build guide \n /cvinfo - Get information regarding the Crit Value \n /cv - Get the bot to calculate your CV Score \n /wish - Get your wish counter \n /add - Time calculator to add current time to your desired number of hours \n /eihelp - Get Ei-chan bot commands \n /version - Get Ei-chan bot version'
    },
  )
  return buildembed;
}

function getAuthor() {
  const Discord = require('discord.js');
  const buildembed = new Discord.MessageEmbed();

  buildembed.setColor('#cd92f8')
  .setTitle('Ei-Chan Author Description')
  .setDescription('Name: Blankzx')
  .addField('Description:',"Hello for the users of Ei-chan bot. The reason for building this bot is in order to solve or ease genshin players in their current daily problems. This project also helps me to understand more about coding and becomes my free time hobby. \nThere are several open sources that I has used so I would like to give credit to paimon.moe timeline feature where I take the data from the project github page.\n A big thank you to Baal's Theory Bot too for the content of the build guide for characters as I struggle in finding the proper weapon/artifact rankings.")
  .setFooter('Please continue using this bot ehe');

  return buildembed;
}

function getVersion() {
  const Discord = require('discord.js');
  const buildembed = new Discord.MessageEmbed();

  buildembed.setColor('#cd92f8')
  .setTitle('Ei-chan version: 2.0')
  .setFooter('The bot version info will be based on the Genshin Impact version');

  return buildembed;
}

//api function for timeline from paimon.moe
async function getapifortimeline(resolve) {
    const fs = require('fs');
    var url = "https://raw.githubusercontent.com/MadeBaruna/paimon-moe/main/src/data/timeline.js";
    // Storing response
    var response = await (await fetch(url)).text();
    response = response.slice(23);
    response = response.replace (/^/,'module.exports');
      
    // Write data in 'timeline file' .
    fs.writeFile('timeline.js', response, (err) => {
          
        // In case of a error throw err.
        resolve(getTimeline()) ;
        if (err) throw err;
    })
}

//timeline function
function getTimeline() {
  const Discord = require('discord.js');
  const buildembed = new Discord.MessageEmbed();

  const tm = require('./timeline');

  var started = '';
  var notstarted = '';
  var fdlength = tm.length;
  for(let i = 0; i < fdlength; i++) {
    var sdlength = tm[i].length;
    for(let j = 0; j < sdlength; j++) {
      var zone = Intl.DateTimeFormat().resolvedOptions().timeZone; //returns UTC so fail
      var today = new Date().toLocaleString('en-US', { timeZone: 'Asia/Kuala_Lumpur' });
      today = new Date(today);
      var timeend = new Date(tm[i][j].end);
      var timestart = new Date(tm[i][j].start);

      if(timeend > today && timestart < today) {
        const diffTime = Math.floor(timeend - today);
        const diffHours = Math.ceil(diffTime / (1000 * 60 * 60)-1); 

        started += tm[i][j].name + ": " + Math.floor(diffHours/24) + " days and " +
        (diffHours-(Math.floor(diffHours/24)*24)) + " hours left \n";
      }

      if(timestart > today) {
          const startTime = Math.floor(timestart - today);
          const startHours = Math.ceil(startTime / (1000 * 60 * 60)-1); 
          notstarted += tm[i][j].name + ": " + Math.floor(startHours/24) + " days and " +
          (startHours-(Math.floor(startHours/24)*24)) + " hours left \n"
        }
    }
  }

  if(started === '') {
    started= 'No events left';
  }
  if(notstarted === '') {
    notstarted = 'No events';
  }

  buildembed
  .setColor('#cd92f8')
  .setTitle('**__Events Timeline__**')
  .addField('__Started:__', started, false)
  .addField('__Not started:__', notstarted,false)
  .setFooter('This timeline countdown is based on Asia/Kuala Lumpur: ' + today);
  return buildembed;
}

//cv information function
function getCV() {
  const Discord = require('discord.js');
  const buildembed = new Discord.MessageEmbed();

  buildembed
  .setColor('#cd92f8')
  .setTitle('Are my stats and artifacts good enough?')
  .addFields(
    { 
      name: '**__What is CV?__**', 
      value: 'CV stand for Crit Value, which is the sum between the Crit DMG roll and 2x Crit Rate roll.'
    },
    { 
      name: '**__How do I calculate CV?__**', 
      value: "**_CV = Crit DMG + (Crit Rate * 2)_.** \nAfter calculating, use the numbers below to roughly determine how good your artifacts and stats are. \nNotes: \n- Total CV is calculated without weapons and base character Crit Rate/Crit DMG. (Just add up the CV from your artifacts)"
    },
    { 
      name: '**__Non-Circlets:__**', 
      value: '0-10 Bad \n10-20 Usable \n20-25 Decent \n25-30 Good **[Aim for this]** \n30-40 Great \n40+ Fantastic'
    },
    { 
      name: '**__Circlets (not including Main Stat):__**', 
      value: '0-5 Bad \n5-10 Usable \n10-15 Decent \n15-20 Good **[Aim for this]** \n20-30 Great \n30+ Fantastic'
    },
    { 
      name: '**__Total (Including Circlet Main Stat):__**', 
      value: '0-100 Bad \n100-150 Usable \n150-180 Decent \n180-200 Good **[Aim for this]** \n200-250 Great \n250+ Fantastic'
    }
  )
  return buildembed;
}

//calculator to get the score of the non circlets artifact value
function cvcalc(rate, damage, target) {
  const Discord = require('discord.js');
  const buildembed = new Discord.MessageEmbed();

  var cv = (parseFloat(rate)*2) + parseFloat(damage);
  var cvvalue; 
  if(target === 'arti'){
    cvvalue = normalarti(cv);
    buildembed.setFooter('This score is only for artifacts (not including circlets)')
  }
  else {
    cvvalue = totalarti(cv); 
    buildembed.setFooter('This score is only for total artifacts details (not including weapons and character ascension)');
  }
  
  buildembed
  .setColor('#cd92f8')
  .setTitle('Crit Value Calculator: ' + cvvalue)
  .addFields(
    { 
      name: '__Crit Rate:__ ', 
      value: rate, inline: true
    },
    { 
      name: '__Crit Damage:__ ', 
      value: damage, inline: true
    },
    { 
      name: '__Score:__ ', 
      value: cv.toFixed(2), inline: true
    },
  );
  return buildembed;
}

//single artifact cv
function normalarti(cv) {
  var cvvalue;
  if(cv>= 0 && cv <= 10) cvvalue = 'Bad';
  else if(cv > 10 && cv <= 20) cvvalue = 'Usable';
  else if(cv > 20 && cv <= 25) cvvalue = 'Decent';
  else if(cv > 25 && cv <= 30) cvvalue = 'Good';
  else if(cv > 30 && cv <= 40) cvvalue = 'Great';
  else if(cv > 40) cvvalue = 'Fantastic';
  return cvvalue;
}

//artifacts details cv
function totalarti(cv) {
  var cvvalue;
  if(cv>= 0 && cv <= 100) cvvalue = 'Bad';
  else if(cv > 100 && cv <= 150) cvvalue = 'Usable';
  else if(cv > 150 && cv <= 180) cvvalue = 'Decent';
  else if(cv > 180 && cv <= 200) cvvalue = 'Good';
  else if(cv > 200 && cv <= 250) cvvalue = 'Great';
  else if(cv > 250) cvvalue = 'Fantastic';
  return cvvalue;
}

//expected time after target duration
function timeadd(target) {
  target = eval(target);
  target = parseFloat(target * 60);
  var oldDateObj = new Date();
  var newDateObj = new Date();
  newDateObj.setTime(oldDateObj.getTime() + (target * 60 * 1000));
  return (newDateObj.toLocaleString('en-US', { timeZone: 'Asia/Kuala_Lumpur' }));
}

//wish process //
function wishProcess(wishes) {
  var latest = []; 
  //getting all 5 stars characters
  for(let i = 0; i < wishes.length; i++) {
    if(wishes[i].rank_type === '5') {
      latest.push(wishes[i].name);
    }
  }

  //check if there are no 5 stars
  if(latest.length === 0) {
    latest.push('None');
  }

  //getting pity count for 5 star
  var pitycount = 0;
  for(let i = 0; i < wishes.length; i++) {
    if(latest[0].length === 0) { pitycount *= 160; break; }
    if(wishes[i].name != latest[0]){
      pitycount++;
    }else {
      pitycount--;
      break;
    }
  }

  //getting pity count for 4 star
  var pity4count = 0;
  var latest4star = 'None';
  for(let i = 0; i < wishes.length; i++) {
    if(wishes[i].rank_type != '4'){
      pity4count++;
    }else {
      latest4star = wishes[i].name;
      pity4count=0;
      break;
    }
  }

  //checking guaranteed status
  var guaranteed;
  var yesno;
  var nonlimited = ['Jean','Diluc','Mona','Keqing','Qiqi'];
  if(nonlimited.includes(latest[0]) && latest[0] != 'None') {
    guaranteed = '__**You have your guaranteed character ready!**__';
    yesno = 'Yes';
  }else {
    guaranteed = "__**You DON'T have your guaranteed character ready!**__";
    yesno = 'No';
  }

  //return the embeds for the wish counter
  const Discord = require('discord.js');
  const buildembed = new Discord.MessageEmbed();
  //change thumbnail for the current banner on set thumbnail
  buildembed
  .setColor('#cd92f8')
  .setDescription(guaranteed)
  .setThumbnail('https://paimon.moe/images/events/farewell_of_snezhnaya.jpg')
  .addFields(
    { 
      name: '__5★ Pity__', 
      value: pitycount + "/90",
      inline:true
    },
    { 
      name: '__Latest 5★__', 
      value: latest[0],
      inline:true
    },
    { name: '__Guaranteed__', value: yesno, inline:true},
    { 
      name: '__4★ Pity__', 
      value: pity4count + "/10",
      inline:true
    },
    { 
      name: '__Latest 4★__', 
      value: latest4star,
      inline:true
    },
    { 
      name: '__Latest 5★s__', 
      value: "[ " + latest.toString() + " ]"
    }
  )
  .setFooter("Total primogems spent: " + wishes.length*160 + " Primogems");
  return buildembed;
}
//end wish process//

