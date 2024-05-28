const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('List all commands'),
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('Help - List of Commands')
            .setDescription('Here are the available commands:')
            .addFields(
                { name: '😃 /listemojis', value: 'List all emojis in the server', inline: true },
                { name: '➕ /emojiadd [emoji]', value: 'Add a new emoji to the server', inline: true },
                { name: '🔍 /emojienlarge [emoji]', value: 'Enlarge a specified emoji', inline: true },
                { name: '🕵️ /emojisteal [message link]', value: 'Steal an emoji from a message link', inline: true },
                { name: '➕ /stickeradd [sticker]', value: 'Add a new sticker to the server', inline: true },
                { name: '🎟️ /liststickers', value: 'List all stickers in the server', inline: true },
                { name: 'ℹ️ /help', value: 'Show the list of commands', inline: true },
                { name: '⏱️ /uptime', value: 'Check the bot\'s uptime', inline: true },
                { name: '🏓 /ping', value: 'Check the bot\'s ping', inline: true }
            )
            .setColor('#0099ff')
            .setFooter({ text: 'Emoji Manager Made By Friday', iconURL: 'https://cdn3.emoji.gg/emojis/6307-management.png' }); // Add a suitable icon URL for your bot

        await interaction.reply({ embeds: [embed] });
    },
};
