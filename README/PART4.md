# Part4

## Conversation Setup

- lib/conversation.ts
- (main)/(routes)/servers/[serverId]/conversations/[memberId]/page.tsx
- components/chat/chat-header.tsx

## SocketIO Setup

```bash
npm install socket.io
npm install socket.io-client
```

- pages/

  - pages 폴더 방식은 old way routing 방식이다.
  - app 라우팅 방식이 socket.io 싱크에 문제가 있어 pages 폴더 방식을 채택했다.

- pages/api/socket/io.ts
- components/providers/socket-provider.tsx
- app/layout.tsx

badge: https://ui.shadcn.com/docs/components/badge

- components/socket-indicator.tsx
- components/chat/chat-header.tsx

## Chat Input Component

- (main)/servers/[serverId]/channels/[channelId]/page.tsx
- components/chat/chat-input.tsx

## Messages API

- lib/current-profile-pages.ts
- pages/api/socket/messages.ts
  - pages/api/socket/messages/index.ts (modified)

## Message Attachment

- hooks/use-modal-store.ts
- components/modals/message-file-modal.tsx
- components/providers/modal-provider.tsx
- components/file-upload.tsx (PDF Preview)

## Emoji bar

Popover: https://ui.shadcn.com/docs/components/popover

```bash
npx shadcn-ui@latest add popover
npm install emoji-mart @emoji-mart/data @emoji-mart/react
```

- components/chat/chat-input.tsx
- components/emoji-picker.tsx
- components/chat/chat-messages.tsx

## Chat Messages Component

- (main)/(routes)/servers/[serverId]/channels/[channelId]/page.tsx
- components/chat/chat-welcome.tsx

```bash
npm install @tanstack/react-query
```

- components/providers/query-provider.tsx
- app/layout.tsx
- hooks/use-chat-query.ts
- components/chat/chat-messages.tsx
- app/api/messages/route.ts

## Chat Item Component

- components/chat/chat-messages.tsx
- components/chat/chat-item.tsx

```bash
npm install date-fns
```

- pages/api/socket/messages/[messageId].ts

## Delete Message

- hooks/use-modal-store.tsx
- components/modals/delete-message-modal.tsx
- components/providers/modal-provider.tsx
- components/chat/chat-item.tsx

## Chat Socket Hook

- components/chat-item.tsx
- hooks/use-chat-query.ts
- next.config.js (SOCKET.IO ISSUE SOLVED)
- Downgrade: 13.4.19 ==> 13.4.12

  - next
  - eslint-config-next

- hooks/use-chat-socket.ts
- components/chat/chat-message.tsx

## Chat Scroll Hook

- components/chat/chat-messages.tsx
- hooks/use-chat-scroll.ts

## Direct Messages

- (main)/(routes)/servers/[serverId]/conversations/[memberId]/page.tsx
- api/direct-messages/route.ts
- pages/api/socket/direct-messages/index.ts
- pages/api/socket/direct-messages/[directMessageId].ts

## Video Calls

- Livekit: https://livekit.io/

```bash
# .env

LIVEKIT_API_KEY=
LIVEKIT_API_SECRET=
NEXT_PUBLIC_LIVEKIT_URL=
```

- https://docs.livekit.io/realtime/quickstarts/nextjs-13/

- app/api/livekit/route.ts
- components/media-room.tsx
- app/(main)/(routes)/servers/[serverId]/channels/[channelId]/page.tsx
- components/chat/chat-video-button.tsx
- components/chat/chat-header.tsx
- app/(main)/(routes)/servers/[serverId]/conversations/[memberId]/page.tsx
