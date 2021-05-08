import { Client } from "discord.js";

const client = new Client();

client.login(process.env.DISCORD_BOT_TOKEN);

client.on("message", (message) => {
  console.log(message.content);
});
