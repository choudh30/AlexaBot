const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
  if (message.content.startsWith("Hey Alexa")) {
    message.channel.send("How can I help you?");
  }
});

client.login("NDI3NjE3MDU1NTQyNDc2ODEx.DZnOHA.rJvl0B-Pk5BguT7yReBz8c6yB-g");