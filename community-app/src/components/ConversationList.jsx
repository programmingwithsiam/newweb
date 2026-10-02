import { useMemo } from 'react';

function parseTimestamp(value) {
  if (!value) return null;
  if (typeof value.toDate === 'function') return value.toDate();
  if (value instanceof Date) return value;
  if (typeof value === 'number') return new Date(value);
  if (typeof value === 'string') {
    const date = new Date(value);
    return Number.isNaN(date.getTime()) ? null : date;
  }
  if (typeof value.seconds === 'number') return new Date(value.seconds * 1000);
  return null;
}

function formatMessageTime(value) {
  const date = parseTimestamp(value);
  if (!date) return 'Now';
  return new Intl.DateTimeFormat('en', { hour: 'numeric', minute: '2-digit' }).format(date);
}

function getPeerUid(chat, currentUserUid) {
  if (!Array.isArray(chat?.members) || !currentUserUid) return null;
  return chat.members.find((member) => member !== currentUserUid) || null;
}

export default function ConversationList(props) {
  const {
    chats = [],
    activeChatId,
    currentUserUid,
    usersMap = {},
    onSelect,
    onNewChat,
    activeId,
  } = props;

  const rows = useMemo(() => {
    return [...chats]
      .filter(Boolean)
      .sort((first, second) => {
        const firstTime = parseTimestamp(first?.lastMessageAt)?.getTime?.() || 0;
        const secondTime = parseTimestamp(second?.lastMessageAt)?.getTime?.() || 0;
        return secondTime - firstTime;
      })
      .map((chat) => {
        const peerUid = getPeerUid(chat, currentUserUid);
        const peerUser = peerUid ? usersMap[peerUid] || null : null;
        const unread = Number(chat.unread?.[currentUserUid] || 0);
        const title = peerUser?.displayName || peerUser?.fullName || 'New chat';

        return {
          id: chat.id,
          title,
          previewText: chat.lastMessage || 'No messages yet',
          unread,
          isUnread: unread > 0,
          photo: peerUser?.photoURL || '',
          online: !!peerUser?.online,
          time: formatMessageTime(chat.lastMessageAt),
        };
      });
  }, [chats, currentUserUid, usersMap]);

  return (
    <div className="cwschat conversation-list-wrap">
      <div className="cwschat list-toolbar">
        <span>Chats</span>
        <button type="button" className="cwschat small-action" onClick={onNewChat || (() => undefined)}>
          New chat
        </button>
      </div>

      {rows.length === 0 ? (
        <div className="cwschat empty-list-state">
          <p>No conversations yet.</p>
        </div>
      ) : (
        rows.map((row) => (
          <button
            type="button"
            key={row.id}
            onClick={() => onSelect?.(row.id)}
            className={`cwschat conversation-row${row.id === (activeChatId || activeId) ? ' active' : ''}${row.isUnread ? ' unread' : ''}`}
          >
            <div className="cwschat avatar-stack">
              {row.photo ? (
                <img src={row.photo} alt="" className="cwschat row-avatar" />
              ) : (
                <span className="cwschat row-avatar fallback">{row.title?.slice(0, 1)?.toUpperCase() || '?'}</span>
              )}
              {row.online && <span className="cwschat online-indicator" />}
            </div>

            <div className="cwschat row-copy">
              <div className="cwschat row-topline">
                <strong>{row.title}</strong>
                <time>{row.time || 'Now'}</time>
              </div>
              <div className="cwschat row-bottomline">
                <span>{row.previewText}</span>
                {row.isUnread && <span className="cwschat unread-badge">{row.unread > 9 ? '9+' : row.unread}</span>}
              </div>
            </div>
          </button>
        ))
      )}
    </div>
  );
}
