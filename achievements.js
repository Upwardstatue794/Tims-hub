const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const apiUrl = 'https://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v0001/?appid=1245620&key=1E8306B6E43C01C9113F8EC285BFC0F5&steamid=76561199108435954';

const achievementNames = {
  ACH0: "Elden Ring",
  ACH1: "Elden Lord",
  ACH2: "Age of the Stars",
  ACH3: "Lord of the Frenzied Flame",
  ACH4: "Shardbearer Godrick",
  ACH5: "Shardbearer Radahn",
  ACH6: "Sharedbearer Morgott",

  // Add mappings for ACH3 to ACH40
  ACH41: "Forty-first Achievement Description"
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
      achievementElement.textContent = `${descriptiveName}: ${achievement.achieved ? 'Achieved' : 'Not Achieved'}`;
      container.appendChild(achievementElement);
    });
  })
  .catch(error => console.error('Error:', error));


  ACH00 	Elden Ring

Obtained all achievements
	
ACH01 	Elden Lord

Hidden.
	
ACH02 	Age of the Stars

Hidden.
	
ACH03 	Lord of Frenzied Flame

Hidden.
	
ACH04 	Shardbearer Godrick

Hidden.
	
ACH05 	Shardbearer Radahn

Hidden.
	
ACH06 	Shardbearer Morgott

Hidden.
	
ACH07 	Shardbearer Rykard

Hidden.
	
ACH08 	Shardbearer Malenia

Hidden.
	
ACH09 	Shardbearer Mohg

Hidden.
	
ACH10 	Maliketh the Black Blade

Hidden.
	
ACH11 	Hoarah Loux, Warrior

Hidden.
	
ACH12 	Dragonlord Placidusax

Hidden.
	
ACH13 	God-Slaying Armament

Upgraded any armament to its highest stage
	
ACH14 	Legendary Armaments

Acquired all legendary armaments
	
ACH15 	Legendary Ashen Remains

Acquired all legendary ashen remains
	
ACH16 	Legendary Sorceries and Incantations

Acquired all legendary sorceries and incantations
	
ACH17 	Legendary Talismans

Acquired all legendary talismans
	
ACH18 	Rennala, Queen of the Full Moon

Hidden.
	
ACH19 	Lichdragon Fortissax

Hidden.
	
ACH20 	Godskin Duo

Hidden.
	
ACH21 	Fire Giant

Hidden.
	
ACH22 	Dragonkin Soldier of Nokstella

Hidden.
	
ACH23 	Regal Ancestor Spirit

Hidden.
	
ACH24 	Valiant Gargoyles

Hidden.
	
ACH25 	Margit, the Fell Omen

Hidden.
	
ACH26 	Red Wolf of Radagon

Hidden.
	
ACH27 	Godskin Noble

Hidden.
	
ACH28 	Magma Wyrm Makar

Hidden.
	
ACH29 	Godfrey, First Elden Lord

Hidden.
	
ACH30 	Mohg, the Omen

Hidden.
	
ACH31 	Mimic Tear

Hidden.
	
ACH32 	Loretta, Knight of the Haligtree

Hidden.
	
ACH33 	Astel, Naturalborn of the Void

Hidden.
	
ACH34 	Leonine Misbegotten

Hidden.
	
ACH35 	Royal Knight Loretta

Hidden.
	
ACH36 	Elemer of the Briar

Hidden.
	
ACH37 	Ancestor Spirit

Hidden.
	
ACH38 	Commander Niall

Hidden.
	
ACH39 	Roundtable Hold

Hidden.
	
ACH40 	Great Rune

Hidden.
	
ACH41 	Erdtree Aflame

Hidden. 