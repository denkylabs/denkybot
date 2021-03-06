import { Command, CommandRunOptions } from '#structures/Command';
import type { DenkyClient } from '#types/Client';

export default class PingCommand extends Command {
  constructor(client: DenkyClient) {
    super(client);
    this.rawName = 'AFK';
    this.rawCategory = 'UTILS';
    this.config = {
      autoDefer: true,
      ephemeral: false,
      showInHelp: true
    };
    this.permissions = { bot: [] };
  }

  override async run({ t, interaction }: CommandRunOptions) {
    switch (interaction.options.getSubcommand()) {
      case 'on': {
        if (await this.client.databases.getAfk(interaction.user.id)) {
          interaction.editReply(t('command:afk/alreadySet', interaction.user));
          break;
        }

        const originalNick = interaction.inCachedGuild() ? interaction.member.nickname ?? interaction.user.username : undefined;

        await this.client.databases.createAfk({
          userId: interaction.user.id,
          guildId: interaction.guild!.id,
          reason: interaction.options.getString('reason') ?? undefined,
          originalNick,
          startTime: BigInt(Math.round(Date.now() / 1000))
        });

        if (interaction.inCachedGuild()) interaction.member.setNickname(`[AFK] ${originalNick?.slice(0, 19)}`, 'AFK').catch(() => {});

        interaction.editReply(t('command:afk/enabled', interaction.user));
        break;
      }

      case 'off': {
        const data = await this.client.databases.getAfk(interaction.user.id);
        if (!data) {
          interaction.editReply(t('command:afk/notAfk', interaction.user));
          break;
        }

        await this.client.databases.deleteAfk(interaction.user.id);

        if (interaction.inCachedGuild()) interaction.member.setNickname(data.originalNick).catch(() => {});

        interaction.editReply(t('command:afk/manuallyRemoved', interaction.user));
        break;
      }
    }
  }
}
