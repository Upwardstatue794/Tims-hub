const proxyUrl = 'https://corsproxy.io/?';
const apiUrl = 'https://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v0001/?appid=1245620&key=1E8306B6E43C01C9113F8EC285BFC0F5&steamid=76561199108435954';

const achievementNames = {
  ACH00: "Elden Ring",
  ACH01: "Elden Lord",
  ACH02: "Age of the Stars",
  ACH03: "Lord of the Frenzied Flame",
  ACH04: "Shardbearer Godrick",
  ACH05: "Shardbearer Radahn",
  ACH06: "Sharedbearer Morgott",
  ACH07: "Shardbearer Rykard",
  ACH08: "Shardbearer Malenia",
  ACH09: "Shardbearer Mohg",
  ACH10: "Maliketh the Black Blade",
  ACH11: "Hoarah Loux, Warrior",
  ACH12: "Dragonlord Placidusax",
  ACH13: "God-Slaying Armament",
  ACH14: "Legendary Armaments",
  ACH15: "Legendary Ashen Remains",
  ACH16: "Legendary Sorceries and Incantations",
  ACH17: "Legendary Talismans",
  ACH18: "Rennala, Queen of the Full Moon",
  ACH19: "Lichdragon Fortissax",
  ACH20: "Godskin Duo",
  ACH21: "Fire Giant",
  ACH22: "Dragonkin Soldier of Nokstella",
  ACH23: "Regal Ancestor Spirit",
  ACH24: "Valiant Gargoyles",
  ACH25: "Margit, the Fell Omen",
  ACH26: "Red Wolf of Radagon",
  ACH27: "Godskin Noble",
  ACH28: "Magma Wyrm Makar",
  ACH29: "Godfrey, First Elden Lord",
  ACH30: "Mohg, the Omen",
  ACH31: "Mimic Tear",
  ACH32: "Loretta, Knight of the Haligtree",
  ACH33: "Astel, Naturalborn of the Void",
  ACH34: "Leonine Misbegotten",
  ACH35: "Royal Knight Loretta",
  ACH36: "Elemer of the Briar",
  ACH37: "Ancestor Spirit",
  ACH38: "Commander Niall",
  ACH39: "Roundtable Hold",
  ACH40: "Great Rune",
  ACH41: "Erdtree Aflame",
};

fetch(proxyUrl + apiUrl)
  .then(response => response.json())
  .then(data => {
    const achievements = data.playerstats.achievements;
    const container = document.getElementById('achievements-container');
    achievements.forEach(achievement => {
      // Step 2: Use the mapping to get descriptive names
      const descriptiveName = achievementNames[achievement.apiname] || "Unknown Achievement";
      const achievementElement = document.createElement('div');
      achievementElement.className = 'achievement';
      achievementElement.textContent = `${descriptiveName}: ${achievement.achieved ? 'Achieved ✔' : 'Not Achieved❌'}`;
      container.appendChild(achievementElement);
    });
  })
  .catch(error => console.error('Error:', error));