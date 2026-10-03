import { useMemo } from 'react';
import { MessageSquareText, Search } from 'lucide-react';
import { messengerStrings } from '../messenger-strings';
import { normalizeDisplayName, normalizeTimestamp } from '../utils/chatService';

function parseTimestamp(value) {
  const timestamp = normalizeTimestamp(value);
  return timestamp ? new Date(timestamp) : null;
}

function formatMessageTime(value) {
  const date = parseTimestamp(value);
  if (!date) return messengerStrings.dateUnavailable;
  const diff = Math.max(0, Date.now() - date.getTime());
  if (diff < 60_000) return messengerStrings.now;
  if (diff < 60 * 60_000) return `${Math.floor(diff / 60_000)}m`;
  if (diff < 24 * 60 * 60_000) return `${Math.floor(diff / (60 * 60_000))}h`;
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  if (date.toDateString() === yesterday.toDateString()) return messengerStrings.yesterday;
  return new Intl.DateTimeFormat('en', { month: 'short', day: 'numeric' }).format(date);
}

function getPeerUid(chat, currentUserUid) {
  if (!Array.isArray(chat?.members) || !currentUserUid) return null;
  return chat.members.find((member) => member !== currentUserUid) || null;
}

function ChatListItem({ row, activeChatId, activeId, onSelect, variant }) {
  const isActive = row.id === (activeChatId || activeId);
  const avatarColors = ['#3b82f6', '#ec4899', '#10b981', '#f59e0b', '#8b5cf6', '#14b8a6'];
  const colorIndex = [...row.id].reduce((total, character) => total + character.charCodeAt(0), 0) % avatarColors.length;
  const avatarStyle = { background: avatarColors[colorIndex] };
  return (
    <button
      type="button"
      key={row.id}
      onClick={() => onSelect?.(row.id)}
      className={`cwschat conversation-row${isActive ? ' active' : ''}${row.isUnread ? ' unread' : ''}`}
    >
      <div className="cwschat avatar-stack">
        {row.photo ? (
          <img src={row.photo} alt="" className="cwschat row-avatar" />
        ) : (
          <span className="cwschat row-avatar fallback" style={avatarStyle}>{row.title?.slice(0, 1)?.toUpperCase() || '?'}</span>
        )}
        {row.online && <span className="cwschat online-indicator" />}
      </div>

      <div className="cwschat row-copy">
        {variant === 'messenger' ? (
          <>
            <div className="cwschat row-topline">
              <strong>{row.title}</strong>
              <time>{row.time || messengerStrings.now}</time>
            </div>
            <div className="cwschat row-bottomline">
              <span>{row.previewText}</span>
              {row.isUnread && <span className="cwschat unread-badge" aria-label={`${row.unread} unread messages`} />}
            </div>
          </>
        ) : (
          <>
            <div className="cwschat row-topline">
              <strong>{row.title}</strong>
              <time>{row.time || messengerStrings.now}</time>
            </div>
            <div className="cwschat row-bottomline">
              <span>{row.previewText}</span>
              {row.isUnread && <span className="cwschat unread-badge">{row.unread > 9 ? '9+' : row.unread}</span>}
            </div>
          </>
        )}
      </div>
    </button>
  );
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
    searchTerm = '',
    loading = false,
    variant = 'default',
    emptyTitle = variant === 'contacts' ? messengerStrings.noContacts : messengerStrings.noChatsYet,
    emptyDescription = '',
  } = props;

  const rows = useMemo(() => {
    const search = searchTerm.trim().toLowerCase();
    return [...chats]
      .filter(Boolean)
      .sort((first, second) => {
        if (variant === 'contacts') {
          const firstPeer = getPeerUid(first, currentUserUid);
          const secondPeer = getPeerUid(second, currentUserUid);
          const onlineDelta = Number(Boolean(usersMap[secondPeer]?.online)) -
            Number(Boolean(usersMap[firstPeer]?.online));
          if (onlineDelta) return onlineDelta;
        }
        const firstTime = parseTimestamp(first?.lastMessageAt)?.getTime?.() || 0;
        const secondTime = parseTimestamp(second?.lastMessageAt)?.getTime?.() || 0;
        return secondTime - firstTime;
      })
      .map((chat) => {
        const peerUid = getPeerUid(chat, currentUserUid);
        const peerUser = peerUid ? usersMap[peerUid] || null : null;
        const embeddedPeer = peerUid ? chat.memberProfiles?.[peerUid] || {} : {};
        const lastSenderName = chat.lastMessageSenderUid === peerUid
          ? chat.lastMessageSenderName
          : '';
        const lastSenderPhoto = chat.lastMessageSenderUid === peerUid
          ? chat.lastMessageSenderPhotoURL
          : '';
        const unread = Number(chat.unread?.[currentUserUid] ?? chat.unreadCount ?? 0);
        const title = normalizeDisplayName(
          peerUser?.displayName,
          peerUser?.fullName,
          peerUser?.username,
          embeddedPeer.displayName,
          embeddedPeer.fullName,
          embeddedPeer.name,
          embeddedPeer.username,
          lastSenderName,
          chat.lastMessageSenderUid === peerUid ? chat.lastMessageSenderEmail : ''
        ) || messengerStrings.communityMember;
        const previewText = chat.lastMessageLoading
          ? messengerStrings.loading
          : chat.lastMessage || messengerStrings.startConversation;
        if (search && !`${title} ${previewText}`.toLowerCase().includes(search)) return null;

        return {
          id: chat.id,
          title,
          previewText,
          unread,
          isUnread: unread > 0,
          photo: peerUser?.photoURL || embeddedPeer.photoURL || embeddedPeer.profilePicture || lastSenderPhoto || '',
          online: !!peerUser?.online,
          time: formatMessageTime(chat.lastMessageAt),
        };
      })
      .filter(Boolean);
  }, [chats, currentUserUid, searchTerm, usersMap, variant]);

  return (
    <div className={`cwschat conversation-list-wrap${variant === 'messenger' ? ' messenger-variant' : ''}${variant === 'contacts' ? ' contacts-variant' : ''}`}>
      {loading ? (
        variant === 'messenger' ? (
          <div className="cwschat conversation-skeletons" role="status" aria-label={messengerStrings.loadingChats}>
            {[0, 1, 2, 3, 4, 5].map((item) => (
              <div className="cwschat conversation-skeleton-row" key={item}>
                <span className="cwschat conversation-skeleton-avatar" />
                <span className="cwschat conversation-skeleton-copy"><i /><i /></span>
              </div>
            ))}
          </div>
        ) : (
          <div className="cwschat empty-list-state" role="status">
            {variant === 'contacts' ? messengerStrings.loadingContacts : messengerStrings.loadingChats}
          </div>
        )
      ) : rows.length === 0 ? (
        <div className="cwschat empty-list-state">
          {(variant === 'messenger' || variant === 'contacts') && <span className="cwschat empty-chat-badge"><MessageSquareText size={23} aria-hidden="true" /></span>}
          <strong>{emptyTitle}</strong>
          {emptyDescription && <span>{emptyDescription}</span>}
          {(variant === 'messenger' || variant === 'contacts') && (
            <button type="button" className="cwschat small-action" onClick={onNewChat}>
              <Search size={15} aria-hidden="true" /> {messengerStrings.findSomeone}
            </button>
          )}
        </div>
      ) : (
        rows.map((row) => (
          <ChatListItem
            key={row.id}
            row={row}
            activeChatId={activeChatId}
            activeId={activeId}
            onSelect={onSelect}
            variant={variant}
          />
        ))
      )}
    </div>
  );
}
