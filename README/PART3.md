# Part3

## Navigation Sidebar

- tooltip: https://ui.shadcn.com/docs/components/tooltip
- separator: https://ui.shadcn.com/docs/components/separator
- scroll area: https://ui.shadcn.com/docs/components/scroll-area

```bash
npx shadcn-ui@latest add tooltip
npx shadcn-ui@latest add separator
npx shadcn-ui@latest add scroll-area
```

- components/navigation/navigation-sidebar.tsx
- components/navigation/navigation-action.tsx
- components/action-tooltip.tsx
- components/navigation/navigation-item.tsx

## Create Server Modal

- zustand: https://github.com/pmndrs/zustand

```bash
npm install zustand
```

- hooks/use-modal-store.ts
- components/modals/create-server-modal.tsx
- components/providers/modal-provider.tsx

## Server Sidebar

- (main)/(routes)/servers/[serverId]/layout.tsx
- components/server/server-sidebar.tsx
- components/server/server-header.tsx
- app/types.ts

## Invitations

- hooks/use-modal-store.ts
- components/server/server-header.tsx
- components/modals/invite-modal.tsx
- components/providers/modal-provider.tsx
- hooks/use-origin.ts
- Generate a new link: app/api/servers/[serverId]/invite-code/route.ts

생성한 다음 url을 입력했을 때, 해당 서버로 접속되도록 구현하기

- http://localhost:3000/invite/706d87bb-f610-4fe8-99a1-fedbf9abf738
- app/(invite)/(routes)/invite/[inviteCode]/page.tsx

```bash
npx prisma migrate reset
npx prisma db push
```

## Server Settings

- hooks/use-modal-store.ts: "editServer"
- components/providers/modal-provider.tsx
- components/server/server-header.tsx
- app/api/servers/[serverId]/route.ts

## Manage Members

- hooks/use-modal-store.ts: "members"
- components/modals/members-modal.tsx
- components/providers/modal-provider.tsx
- components/server/server-header.tsx
- components/user-avatar.tsx

- avatar: https://ui.shadcn.com/docs/components/avatar

```bash
npx shadcn-ui@latest add avatar
npm install query-string
```

- app/api/members/[memberId]/route.ts

## Channel Creation

- hooks/use-modal-store.ts
- components/modals/create-channel-modal.tsx
- components/providers/modal-provider.tsx
- components/server/server-header.tsx
- select: https://ui.shadcn.com/docs/components/select

```bash
npx shadcn-ui@latest add select
```

- app/api/channels/route.ts

## Delete & Leave Server Modal

### Leave Server Modal

- hooks/use-modal-store.ts
- components/modals/leave-server-modal.tsx
- components/providers/modal-provider.tsx
- components/server/server-header.tsx
- components/modals/leave-server-modal.tsx
- app/api/servers/[serverId]/leave/route.ts

### Delete Server Modal

- hooks/use-modal-store.ts
- components/modals/delete-server-modal.tsx
- components/providers/modal-provider.tsx
- components/server/server-header.tsx
- app/api/servers/[serverId]/route.ts

### Search Server Modal

- components/server/server-sidebar.tsx
- components/server/server-search.tsx
- command: https://ui.shadcn.com/docs/components/command

## Server Channels List

- components/server/server-sidebar.tsx
- components/server/server-section.tsx
- components/server/server-channel.tsx
- components/server/server-member.tsx

## Edit Channels

(deleteChannel)

- hooks/use-modal-store.ts
- components/modals/delete-channel-modal.tsx
- components/providers/modal-provider.tsx
- components/server/server-channel.tsx
- app/api/channels/[channelId]/route.ts

(editChannel)

- hooks/use-modal-store.ts
- components/modals/edit-channel-modal.tsx
- components/providers/modal-provider.tsx
- components/server/server-channel.tsx
- app/api/servers/[channelId]/route.ts

## ChannelID Page

- components/server/server-channel.tsx
  - onClick, onAction 등등
- components/server/server-member.tsx
- app/(main)/(routes)/servers/[serverId]/channels/[channelId]/page.tsx
- app/(main)/(routes)/servers/[serverId]/conversations/[memberId]/page.tsx
- app/(main)/(routes)/servers/[serverId]/page.tsx

## Chat Header

- app/(main)/(routes)/servers/[serverId]/channels/[channelId]/page.tsx
- components/chat/chat-header.tsx

- sheet: https://ui.shadcn.com/docs/components/sheet
- components/mobile-toggle.tsx

## Prisma Schema Completion

- prisma/schema.prisma

```bash
npx prisma generate
npx prisma db push
```
