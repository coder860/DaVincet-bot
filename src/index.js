const Discord = require("discord.js");
const client = new Discord.Client();
const AntiSpam = require("discord-anti-spam");
const antiSpam = new AntiSpam({
  warnThreshold: 3, // Amount of messages sent in a row that will cause a warning.
  muteThreshold: 4, // Amount of messages sent in a row that will cause a mute
  kickThreshold: 7, // Amount of messages sent in a row that will cause a kick.
  banThreshold: 7, // Amount of messages sent in a row that will cause a ban.
  maxInterval: 2000, // Amount of time (in milliseconds) in which messages are considered spam.
  warnMessage: "{@user}, Dude stop spamming.", // Message that will be sent in chat upon warning a user.
  kickMessage: "**{user_tag}** has been kicked for spamming.", // Message that will be sent in chat upon kicking a user.
  muteMessage: "**{user_tag}** has been muted for spamming.", // Message that will be sent in chat upon muting a user.
  banMessage: "**{user_tag}** has been banned for spamming.", // Message that will be sent in chat upon banning a user.
  maxDuplicatesWarning: 7, // Amount of duplicate messages that trigger a warning.
  maxDuplicatesKick: 10, // Amount of duplicate messages that trigger a warning.
  maxDuplicatesBan: 12, // Amount of duplicate messages that trigger a warning.
  exemptPermissions: ["ADMINISTRATOR"], // Bypass users with any of these permissions.
  ignoreBots: true, // Ignore bot messages.
  verbose: true, // Extended Logs from module.
  ignoredUsers: [], // Array of User IDs that get ignored.
  muteRoleName: "muted", // Name of the role that will be given to muted users!
  removeMessages: true // If the bot should remove all the spam messages when taking action on a user!
  // And many more options... See the documentation.
});
client.on("ready", () => {
  client.user
    .setPresence({
      activity: { name: "with DaVincentBoy_YT and Some random coder v2.5a" }
    })
    .then(console.log)
    .catch(console.error);
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", (msg) => {
  if (msg.content === "ping") {
    msg.reply("Pong!");
  }
});

client.on("message", (message) => antiSpam.message(message));

client.on("message", (msg) => {
  if (msg.content === "Hi") {
    msg.reply("Hello! How are you?");
  }
});

client.login(process.env.TOKEN);
