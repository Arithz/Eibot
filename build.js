module.exports = {
  charbuild: function(character) {
    const Discord = require('discord.js');
    const buildembed = new Discord.MessageEmbed();

    /* 
    vision color 
      #e6803c -pyro 
      #cd92f8 - electro
      #2dc1f0 - hydro 
      #90f3f7 - cryo
const mySecret = process.env['TOKEN']
      #50d8aa - anemo
      #e7b032 - geo
      future - dendro
    */

    switch(character) {

      /* 5 STAR CHARACTER RARITY */

      //RAIDEN 
      case 'raiden':
        buildembed
        .setColor('#cd92f8')
        .setTitle('Raiden Build')
        .setThumbnail('https://static.wikia.nocookie.net/gensin-impact/images/a/a4/Character_Raiden_Shogun_Card.jpg/revision/latest/scale-to-width-down/1000?cb=20210914130858')
        .addFields(
          { 
            name: '__Weapons (Order Ranked)__', 
            value: '1. Engulfing Lightning \n 2. Staff of Homa \n 3. Jade Spear \n 4. Vortex Vanquisher \n 5. Skyward Spine \n 6. The Catch R5 \n 7. Deathmatch \n 8. Lithic Spear \n 9. Starglitter \n 10. Blackcliff Pole \n 11. Favonius Lance'
          },
          { 
            name: '__Artifacts__', 
            value: "- Emblem of Severed Fate (4) **[Best in Slot]** \n- Thundersoother (4) \n- Noblesse Oblige (2) / Thundering Fury (2) / Shimenawa/Gladiator Set (+18% ATK) (2) **[Pick two]** "
          },
          { 
            name: '__Artifact Stat Priority__', 
            value: '- Mainstat: [ATK% or ER / ATK% or Electro% / Crit] **[See Notes]**\n- For substats prioritize: CRIT RATE/ CRIT DAMAGE > ATK% > ER '
          },
          { 
            name: '__Talent Priority__', 
            value: '- Elemental Burst (Q) > Elemental Skill (E) > Normal Attack (AA)'
          },
          { name: '__Notes__', value: '- If you are using ER weapon choose ATK% sands, otherwise take ER sands \n - ATK% get better damage because of Raiden gains electro damage bonus because of her passive so it is better to stack attack to her \n- The sweet spot for her ER is 220%-240% (including the base)'}
        )
        break;

      //YOIMIYA
      case 'yoimiya':
        buildembed
        .setColor('#e6803c')
        .setTitle('Yoimiya Build')
        .setThumbnail('https://static.wikia.nocookie.net/gensin-impact/images/4/4b/Character_Yoimiya_Card.png/revision/latest/scale-to-width-down/281?cb=20210607100839')
        .addFields(
          { 
            name: '__Weapons (Order Ranked)__', 
            value: '1. Thundering Pulse \n 2. Rust R5 \n 3. Amos Bow \n 4. Skyward Harp \n 5. Rust \n 6. Blackcliff Warbow (3 stacks) \n 7. Viridescent Hunt \n 8. Prototype Crescent'
          },
          { 
            name: '__Artifacts__', 
            value: "- Shimenawa's Reminiscence (4) \n- Crimson Witch of Flames (2), Shimenawa/Gladiator Set (+18% ATK) (2) \n- Crimson Witch of Flames (4) **[Vape comps]**"
          },
          { 
            name: '__Artifact Stat Priority__', 
            value: '- Mainstat: [ATK% / Pyro% / Crit] \n- For substats prioritize: CRIT RATE/ CRIT DAMAGE > ATK% > EM '
          },
          { 
            name: '__Talent Priority__', 
            value: '- Normal Attack (AA) > Elemental Burst (Q) > Elemental Skill (E) [See Notes]'
          },
          { name: '__Notes__', value: '- Level 10 Normal Attack + 1 (E) is roughly equivalent to Level 8 Normal Attack + 8 (E)'}
        )
        break;

      //AYAKA
      case 'ayaka':
      case 'ayaya':
        buildembed
        .setColor('#90f3f7')
        .setTitle('Ayaka Build')
        .setThumbnail('https://static.wikia.nocookie.net/gensin-impact/images/3/34/Character_Kamisato_Ayaka_Card.png/revision/latest/scale-to-width-down/1000?cb=20210607100828')
        .addFields(
          { 
            name: '__Weapons (Order Ranked)__', 
            value: '1. Mistplitter Reforged \n 2. Summit Sharper \n 3. Jade Cutter \n 4. Black Sword R5 \n 5. Aquila Favonia \n 6. Blackcliff Sword R1 \n 7. Black Sword R1 \n 8. Amenoma Kageuchi R1 \n 9. The Flute'
          },
          { 
            name: '__Artifacts__', 
            value: "- Blizzard Strayer (4) \n- Blizzard Strayer (2), Noblesse Oblige (2) \n- Blizzard Strayer (2), Shimenawa/Gladiator Set (+18% ATK) (2)"
          },
          { 
            name: '__Artifact Stat Priority__', 
            value: '- Mainstat: [ATK% / Cryo% / Crit] \n- For substats prioritize: EM > ER > ATK% > CRIT RATE / CRIT DAMAGE \n- Aim to reach 140-175% ER while stacking as much EM as possible'
          },
          { 
            name: '__Talent Priority__', 
            value: '- Elemental Burst (Q) > Elemental Skill (E) > Normal Attack (AA)'
          }
        )
        break;
        break;

      //KAZUHA
      case 'kazuha':
        buildembed
        .setColor('#50d8aa')
        .setTitle('Kazuha Build (Support)')
        .setThumbnail('https://static.wikia.nocookie.net/gensin-impact/images/2/2d/Character_Kaedehara_Kazuha_Card.png/revision/latest/scale-to-width-down/281?cb=20210607100841')
        .addFields(
          { 
            name: '__Weapons (Order Ranked)__', 
            value: '1. Freedom-Sworn \n 2. Alley Flash \n 3. Skyward Blade/ Sacrificial Sword/ Favonius Sword \n 4. Iron Sting \n 5. Amenoma Kageuchi'
          },
          { 
            name: '__Artifacts__', 
            value: "- Viridescent Venerer (4) \n- Noblesse Oblige (2), Shimenawa/Gladiator Set (+18% ATK) (2)"
          },
          { 
            name: '__Artifact Stat Priority__', 
            value: '- Mainstat: [EM / EM / EM] \n- For substats prioritize: CRIT RATE / CRIT DAMAGE > ATK% > Energy'
          },
          { 
            name: '__Talent Priority__', 
            value: '- Elemental Burst (Q) > Normal Attack (AA) > Elemental Skill (E) '
          },
          { 
            name: '__Notes__', 
            value: "- Due to the recent EM buffs in patch 1.6, EM builds will out-damage Crit builds as long as there are 2+ enemies \n- Iron Sting ranks higher than ER weapons if you have enough Energy Recharge to cast Kazuha's Elemental Burst off cooldown."
          }
        )
        break;
      
      //EULA
      case 'eula':
        buildembed
        .setColor('#90f3f7')
        .setTitle('Eula Build')
        .setThumbnail('https://static.wikia.nocookie.net/gensin-impact/images/a/ac/Character_Eula_Card.png/revision/latest?cb=20210511110453')
        .addFields(
          { 
            name: '__Weapons (Order Ranked)__', 
            value: "1. Song of Broken Pines \n 2. Wolf's Gravestone \n 3. The Unforged \n 4. Skyward Pride \n 5. Serpent Spine \n 6. Luxurious Sea Lord \n 7. Blackcliff Slasher \n 8. Lithic Blade \n 9. Prototype Archaic/Snow-tombed Starsilver"
          },
          { 
            name: '__Artifacts__', 
            value: "- Pale Flame (4) \n- Pale Flame (2), Bloodstained Chivalry (2) \n- Pale Flame (2) / Bloodstained Chivalry (2) / Shimenawa/Gladiator Set (+18% ATK) (2) "
          },
          { 
            name: '__Artifact Stat Priority__', 
            value: '- Mainstat: [ATK% / Physical% / Crit ] \n- For substats prioritize: CRIT RATE / CRIT DAMAGE > ATK% > ER \n- Aim to reach 125-140% ER via substats'
          },
          { 
            name: '__Talent Priority__', 
            value: '- Elemental Burst (Q) > Normal Attack (AA) > Elemental Skill (E) '
          },
          { name: '__Notes__', value: "- Standard Rotation: Press E > Q > N4 > Hold E > N4 \n- Higher Energy Rotation: E > Q > Press E > N4 > D > N2 > Hold E > N1"}
        )
        break;

      //HU TAO

      //XIAO
      //GANYU
      //ALBEDO

      //ZHONGLI
      case 'zhongli':
        buildembed
        .setColor('#e7b032')
        .setTitle('Zhongli Build')
        .setThumbnail('https://static.wikia.nocookie.net/gensin-impact/images/7/79/Character_Zhongli_Card.png/revision/latest/scale-to-width-down/281?cb=20201217052506')
        .addFields(
          { 
            name: '__Weapons (Order Ranked)__', 
            value: " 1. Staff of Homa \n 2. Jade Spear \n 3. Vortex Vanquisher \n 4. Deathmatch \n 5. Skyward Spine \n 6. Favonius Lance \n 7. Blackcliff Pole \n 8. Lithic Spear \n 9. Protoype Starglitter"
          },
          { 
            name: '__Artifacts__', 
            value: "___Support/Amplifier___\n- Tenacity of the Millelith (4) \n- Note: Zhongli makes good use of ToM(4) particularly with C1, although it isn’t required to make effective use of the passive \n- Noblesse Oblige (4) \n- Note: Zhongli is a decent user of NO(4) due to the low cost and cooldown of his Elemental Burst\n___Geo Burst Support___\n- Archaic Petra (2) + Noblesse Oblige (2) "
          },
          { 
            name: '__Artifact Stat Priority__', 
            value: '- Mainstat: [ATK% or HP% / Geo% / Crit] \n- For substats prioritize: CRIT RATE / CRIT DAMAGE > ATK% > ER'
          },
          { 
            name: '__Talent Priority__', 
            value: '- Support/Amplifier: Elemental Skill (E) > Elemental Burst (Q) > Normal Attack (AA) \n- Geo Burst: Elemental Burst (Q) > Elemental Skill (E) > Normal Attack (AA) '
          },
          {
            name:'__Notes__',
            value:"- Remember to keep your shields up via Hold-E every 12-20 seconds \n- ZhongLi's Elemental Burst is usually a DPS loss in late game, but the long animation time and petrify can buy you some breathing room"
          }
        )
        break;
      
      //TARTAGLIA/CHILDE
      case 'childe':
        buildembed
        .setColor('#2dc1f0')
        .setTitle('Childe Build')
        .setThumbnail('https://static.wikia.nocookie.net/gensin-impact/images/4/4c/Character_Tartaglia_Card.png/revision/latest?cb=20201106023840')
        .addFields(
          { 
            name: '__Weapons (Order Ranked)__', 
            value: " 1. Thundering Pulse \n 2. Skyward Harp \n 3. Amos Bow \n 4. Viridescent Hunt \n 5. Rust \n 6. Blackcliff Warbow \n 7. Prototype Crescent \n 8. Stringless"
          },
          { 
            name: '__Artifacts__', 
            value: "- Heart of Depth (4) \n- Heart of Depth (2), Shimenawa/Gladiator Set (+18% ATK) (2) \n -  Heart of Depth (2), Noblesse Oblige (2) "
          },
          { 
            name: '__Artifact Stat Priority__', 
            value: '- Mainstat: [ATK% / Hydro% / Crit ] \n- For substats prioritize: CRIT RATE / CRIT DAMAGE > ATK% > EM'
          },
          { 
            name: '__Talent Priority__', 
            value: '- Elemental Burst (Q) > Elemental Skill (E) > Normal Attack (AA)  '
          }
        )
        break;

      //KLEE
      
      //VENTI

      //KEQING
      //MONA
      //QIQI
      //DILUC
      //JEAN 

      /* 4 STAR CHARACTER RARITY */

      //SAYU 
      //YANFEI
      //ROSARIA 
      //XINYAN
      //DIONA
      //SUCROSE
      //CHONGYUN
      //NOELLE 

      //BENNETT 
      case 'bennett':
        buildembed
        .setColor('#e6803c')
        .setTitle('Bennett Build')
        .setThumbnail('https://static.wikia.nocookie.net/gensin-impact/images/7/7f/Character_Bennett_Card.jpg/revision/latest/scale-to-width-down/281?cb=20201024042332')
        .addFields(
          { 
            name: '__Weapons (Order Ranked)__', 
            value: ' 1. Mistplitter Reforged \n 2. Aquila Favonia \n 3. Skyward Blade \n 4. Freedom-Sworn \n 5. The Alley Flash \n 6. Festering Desire \n 7. Prototype Rancour \n 8. Favonius Sword \n 9. Sacrificial Sword '
          },
          { 
            name: '__Artifacts__', 
            value: '- Noblesse Oblige (4) _(Support)_\n- Noblesse Oblige (2), Crimson Witch of Flames (2) _(Sub DPS)_'
          },
          { 
            name: '__Artifact Stat Priority__', 
            value: '___Support___\n- Mainstat: [HP% or ER% / HP% / Healing Bonus% or HP%] \n- For substats, prioritize: ER% (especially for Burst uptime), HP%, Flat HP \n - Try to reach at least ~180-200%+ ER.\n___Sub DPS___ \n- For substats prioritize: CRIT RATE/CRIT DAMAGE > ATTACK > ER > EM'
          },
          { 
            name: '__Talent Priority__', 
            value: '- Elemental Burst (Q) > Elemental Skill (E)'
          },
          { name: '__Notes__', value: 'If you have multiple constellations, DO NOT ACTIVATE C6. Every %Physical DMG bonus is disabled for all melee characters inside the circle. So Bennett can no longer support physical melee characters after taking his C6 especially for Eula. Then you get to the times when you want fine control over the elements being thrown around - Keqing, for example, would suffer from Overload procs.'}
        )
        break;

      //FISCHL
      //NINGUANG

      //XINGQIU
      case 'xingqiu':
        buildembed
        .setColor('#2dc1f0')
        .setTitle('Xingqiu Build')
        .setThumbnail('https://static.wikia.nocookie.net/gensin-impact/images/c/c2/Character_Xingqiu_Card.jpg/revision/latest?cb=20201024043209')
        .addFields(
          { 
            name: '__Weapons (Order Ranked)__', 
            value: "1. Sacrificial Sword \n 2. Jade Cutter \n 3. Mistplitter Reforged \n 4. Skyward Blade \n 5. Summit Sharper \n 6. Favonius Sword \n 7. Festering Desire R5"
          },
          { 
            name: '__Artifacts__', 
            value: "- Emblem of Severed Fate (4) \n- Noblesse Oblige (2) / Heart of Depth (2) \n- Noblesse Oblige (2) / Heart of Depth (2) / Shimenawa/Gladiator Set (+18% ATK) (2) **[Pick two]**"
          },
          { 
            name: '__Artifact Stat Priority__', 
            value: '- Mainstat: [ATK% or ER / Hydro% / Crit ] \n- For substats prioritize: CRIT RATE / CRIT DAMAGE > ATK% > ER'
          },
          { 
            name: '__Talent Priority__', 
            value: '- Elemental Burst (Q) > Elemental Skill (E) '
          },
          { name: '__Notes__', value: "- Take care when using his elemental skill when you have cryo applied on yourself, as you will become frozen \n- Primordial Jade Cutter and Mistsplitter are BiS if XQ is C6, using Emblem of Severed Fate (4), and have enough ER substats to forego the need for the second E provided by Sacrificial Sword"}
        )
        break;

      //BEIDOU
      case 'beidou':
        buildembed
        .setColor('#cd92f8')
        .setTitle('Beidou Build')
        .setThumbnail('https://static.wikia.nocookie.net/gensin-impact/images/8/84/Character_Beidou_Card.jpg/revision/latest?cb=20200401024902')
        .addFields(
          { 
            name: '__Weapons (Order Ranked)__', 
            value: "1. Wolf's Gravestone/ Serpent Spine(when using Bennett) \n 2. Serpent Spine \n 3. The Unforged \n 4. Skyward Pride \n 5. Song of Broken Pines \n 6. Lithic Blade/ Luxurious Sea Lord \n 7. Prototype Archaic \n 8. Blackcliff Slasher \n 9. Royal Greatsword \n 10. Sacrificial Greatsword \n 11. Katsugakiri Nagamasa \n 12. Rainslasher"
          },
          { 
            name: '__Artifacts__', 
            value: "- Thundering Fury (2) / Noblesse Oblige (2) / +18% ATK set (2) **[Pick two]** \n- Emblem of Severed Fate (4) **[Sub DPS]** \n- Noblesse Oblige (4) **[Sub DPS]** "
          },
          { 
            name: '__Artifact Stat Priority__', 
            value: '- Mainstat: [ATK% or ER / Electro% / Crit ] \n- For substats prioritize: CRIT RATE / CRIT DAMAGE > ATK% > ER \n- Aim to reach 125-140% ER via substats with battery'
          },
          { 
            name: '__Talent Priority__', 
            value: '- Elemental Burst (Q) > Elemental Skill (E) > Normal Attack (AA)  '
          },
          { name: '__Notes__', value: "- Aim to time perfect counters to generate the most energy particles \n- Beidou's Elemental Skill grants Electro status to herself for a brief moment while holding the skill, allowing for things like status cleansing, interaction with Inazuma puzzles, etc"}
        )
        break;

      //XIANGLING
      case 'xiangling':
        buildembed
        .setColor('#e6803c')
        .setTitle('Xiangling Build')
        .setThumbnail('https://static.wikia.nocookie.net/gensin-impact/images/f/f1/Character_Xiangling_Card.jpg/revision/latest/scale-to-width-down/281?cb=20200331191545')
        .addFields(
          { 
            name: "__Weapons (Order Ranked)__", 
            value: "1. Staff of Homa \n 2. Jade Spear \n 3. Vortex Vanquisher \n 4. Skyward Spine \n 5. Deathmatch \n 6. Dragon's Bane \n 7. Lithic Spear"
          },
          { 
            name: '__Artifacts__', 
            value: '- Emblem of Severed Fate (4) \n- Noblesse Oblige (2), Crimson Witch of Flames (2) \n- Noblesse Oblige (2), Shimenawa/Gladiator Set (+18% ATK) (2)'
          },
          { 
            name: '__Artifact Stat Priority__', 
            value: '- Mainstat: [ATK% or ER% / Pyro% / Crit] \n- For substats prioritize: ER% > CRIT RATE/ CRIT DAMAGE > ATK% '
          },
          { 
            name: '__Talent Priority__', 
            value: '- Elemental Burst (Q) > Elemental Skill (E)'
          }
        )
        break;

      //RAZOR
      //BARBARA
      //LISA
      //KAEYA

      //AMBER
      case 'amber':
        buildembed
        .setColor('#e6803c')
        .setTitle('Amber Build')
        .setThumbnail('https://static.wikia.nocookie.net/gensin-impact/images/2/26/Character_Amber_Card.jpg/revision/latest/scale-to-width-down/281?cb=20201024042115')
        .addFields(
          { 
            name: "__Weapons For DPS Charged Attack__", 
            value: " 1. Amos Bow \n 2. Thundering Pulse \n 3. Skyward Harp \n - Viridescent Hunt, Sharpshooter’s Oath, Prototype Crescent, Hamayumi, Blackcliff Warbow"
          },
          { 
            name: '__Artifacts__', 
            value: "- Wanderer's Troupe (4) \n- Crimson Witch of Flames (4) \n- Crimson Witch of Flames (2),  Shimenawa/Gladiator Set (+18% ATK) (2)"
          },
          { 
            name: '__Artifact Stat Priority__', 
            value: '- Mainstat: [ATK% / Pyro% / Crit]'
          },
          { 
            name: "__Weapons for Support Burst__", 
            value: "- Elegy for the End \n- Skyward Harp \n- The Stringless \n- Favonius Warbow \n "
          },
          { 
            name: '__Artifacts__', 
            value: "- Noblesse Oblige (4) \n- Noblesse Oblige (2), Crimson Witch of Flames (2)"
          },
          { 
            name: '__Artifact Stat Priority__', 
            value: '-  Mainstat: [ATK% or ER or EM / Pyro% / Crit]'
          },
          { 
            name: '__Talent Priority__', 
            value: '- Elemental Burst (Q) > Elemental Skill (E)'
          }
        )
        break;

      default:
        buildembed.setTitle('Character build not yet exist!'); 
        break;
    }
  
    return buildembed;
  }
}