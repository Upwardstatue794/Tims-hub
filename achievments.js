fetch('https://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v0001/?appid=1245620&key=1E8306B6E43C01C9113F8EC285BFC0F5&steamid=76561199108435954')
  .then(response => response.json())
  .then(data => {
    const achievements = data.playerstats.achievements;
    achievements.forEach(achievement => {
      if (achievement.achieved === 1) {
        console.log(`Achieved: ${achievement.apiname}`);
      }
    });
  })
  .catch(error => console.error('Error:', error));