import type { PermissionsString } from 'discord.js';

const PERMISSIONS: Record<PermissionsString, string> = {
  AddReactions: 'Adicionar reações',
  BanMembers: 'Banir membros',
  ChangeNickname: 'Alterar apelido',
  Connect: 'Conectar',
  CreateInstantInvite: 'Criar convite instantâneo',
  DeafenMembers: 'Ensurdecer membros',
  EmbedLinks: 'Incorporar links',
  KickMembers: 'Expulsar membros',
  ManageChannels: 'Gerenciar canais',
  ManageEmojisAndStickers: 'Gerenciar emojis e figurinhas',
  ManageGuild: 'Gerenciar servidor',
  ManageMessages: 'Gerenciar mensagens',
  ManageNicknames: 'Gerenciar apelidos',
  ManageRoles: 'Gerenciar cargos',
  ManageWebhooks: 'Gerenciar webhooks',
  MuteMembers: 'Silenciar membros',
  PrioritySpeaker: 'Prioridade de fala',
  ReadMessageHistory: 'Ler histórico de mensagens',
  SendMessages: 'Enviar mensagens',
  Speak: 'Falar',
  Stream: 'Transmitir',
  ViewAuditLog: 'Ver log de auditoria',
  ViewChannel: 'Ver canais',
  Administrator: 'Administrador',
  AttachFiles: 'Anexar arquivos',
  CreatePrivateThreads: 'Criar tópicos privados',
  CreatePublicThreads: 'Criar tópicos públicos',
  ManageEvents: 'Gerenciar eventos',
  ManageThreads: 'Gerenciar tópicos',
  MentionEveryone: 'Mencionar todos',
  MoveMembers: 'Mover membros',
  ModerateMembers: 'Moderar membros',
  RequestToSpeak: 'Pedir para falar',
  UseExternalEmojis: 'Usar emojis externos',
  SendMessagesInThreads: 'Enviar mensagens em tópicos',
  SendTTSMessages: 'Enviar mensagens TTS',
  UseApplicationCommands: 'Usar comandos de aplicações',
  UseEmbeddedActivities: 'Usar atividades',
  UseExternalStickers: 'Usar figurinhas externas',
  UseVAD: 'Usar detecção de voz',
  ViewGuildInsights: 'Ver análises do servidor',
};

export default PERMISSIONS;
