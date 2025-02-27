const {SlashCommandBuilder, PermissionsBitField} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("mimic")
        .setDescription("Non-ephemeral mimicry command. I'll say what you do.")
        .setDefaultMemberPermissions(PermissionsBitField.Flags.ManageMessages)
        .addStringOption(option =>
            option
                .setName("message")
                .setDescription("What you'd like me to say to the server")
                .setRequired(true)
        ),
    async execute(interaction) {

        //Reply with what the user said
        interaction.reply({
            content: interaction.options.getString("message")
        })
    }
}