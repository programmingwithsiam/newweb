import { useMemo, useState } from 'react';
import {
  ArrowUp,
  Bell,
  Ellipsis,
  FileImage,
  Gif,
  Info,
  Mic,
  MessageSquareText,
  Paperclip,
  Phone,
  Search,
  Send,
  Smile,
  ThumbsUp,
  Video,
  Volume2,
  Play,
  Pause,
  Sparkles,
  Check,
} from 'lucide-react';

const initialConversations = [
  {
    id: 'alex',
    name: 'Alex Morgan',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    online: true,
    lastSeen: 'Active 7m ago',
    lastMessage: 'Reacted 👍 to your message',
    lastMessageTime: '4d',
    unread: 2,
    accent: 'bg-violet-500',
    type: 'all',
    uploading: false,
    messages: [
      { id: 1, sender: 'them', text: 'Hey, are you free for the design review later?', time: 'Wed 02:04', type: 'text' },
      { id: 2, sender: 'me', text: 'Yes, I can join at 4 PM. Send me the latest mockup.', time: 'Wed 02:05', type: 'text' },
      { id: 3, sender: 'them', text: '', time: 'Wed 02:06', type: 'voice', duration: '0:31', playing: false },
      { id: 4, sender: 'me', text: 'Perfect. I will share the new version soon.', time: 'Wed 02:08', type: 'text' },
    ],
  },
  {
    id: 'design-team',
    name: 'Design Team',
    avatar:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=200&q=80',
    online: true,
    lastSeen: 'Active 11m ago',
    lastMessage: 'New layout mockups are ready',
    lastMessageTime: '5d',
    unread: 0,
    accent: 'bg-blue-500',
    type: 'groups',
    uploading: false,
    messages: [
      { id: 1, sender: 'them', text: 'New layout mockups are ready', time: 'Tue 15:42', type: 'text' },
      { id: 2, sender: 'me', text: 'Love the spacing changes. Let’s ship them.', time: 'Tue 15:45', type: 'text' },
      { id: 3, sender: 'them', text: 'I added the mobile version too.', time: 'Tue 15:46', type: 'text' },
    ],
  },
  {
    id: 'sarah',
    name: 'Sarah Lee',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    online: false,
    lastSeen: 'Seen 2h ago',
    lastMessage: 'Sounds good, I will send the brief tomorrow',
    lastMessageTime: '1w',
    unread: 0,
    accent: 'bg-emerald-500',
    type: 'all',
    uploading: true,
    messages: [
      { id: 1, sender: 'them', text: 'We should sync on the community launch plan.', time: 'Mon 10:11', type: 'text' },
      { id: 2, sender: 'me', text: 'Sounds good, I will send the brief tomorrow', time: 'Mon 10:13', type: 'text' },
    ],
  },
  {
    id: 'community',
    name: 'Community Circle',
    avatar:
      'https://images.unsplash.com/photo-1517841905240-472988c2477d?auto=format&fit=crop&w=200&q=80',
    online: true,
    lastSeen: 'Active now',
    lastMessage: 'Maria uploaded the event photos',
    lastMessageTime: '2h',
    unread: 5,
    accent: 'bg-orange-500',
    type: 'communities',
    uploading: false,
    messages: [
      { id: 1, sender: 'them', text: 'Maria uploaded the event photos', time: 'Today 09:12', type: 'text' },
      { id: 2, sender: 'me', text: 'Thanks! I’ll review them before dinner.', time: 'Today 09:13', type: 'text' },
    ],
  },
];

const filterOptions = ['All', 'Unread', 'Groups', 'Communities'];

function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

function ChatListItem({ conversation, isSelected, onSelect }) {
  return (
    <button
      type="button"
      onClick={() => onSelect(conversation.id)}
      className={cn(
        'group flex w-full items-center gap-3 rounded-2xl border border-transparent px-2 py-2 text-left transition-all duration-200 hover:bg-white/5',
        isSelected && 'bg-[#2a2b2d] shadow-[inset_0_0_0_1px_rgba(157,165,255,0.18)]'
      )}
    >
      <div className="relative shrink-0">
        <img
          src={conversation.avatar}
          alt={conversation.name}
          className="h-12 w-12 rounded-full object-cover ring-2 ring-[#242526]"
        />
        {conversation.online && (
          <span className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full border-2 border-[#18191a] bg-emerald-500" />
        )}
        {conversation.uploading && (
          <span className="absolute -right-1 top-0 flex h-4 w-4 items-center justify-center rounded-full border border-[#18191a] bg-violet-500 text-[8px] text-white">
            <div className="h-2.5 w-2.5 animate-spin rounded-full border border-white/70 border-t-transparent" />
          </span>
        )}
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-2">
          <p className="truncate text-sm font-semibold text-white">{conversation.name}</p>
          <span className="shrink-0 text-[10px] font-medium text-[#8a8d91]">{conversation.lastMessageTime}</span>
        </div>

        <div className="mt-1 flex items-center gap-2 text-xs text-[#8a8d91]">
          <span className="truncate">{conversation.lastMessage}</span>
        </div>
      </div>

      {conversation.unread > 0 && (
        <span className="ml-auto flex h-5 min-w-5 items-center justify-center rounded-full bg-violet-500 px-1.5 text-[10px] font-bold text-white">
          {conversation.unread > 9 ? '9+' : conversation.unread}
        </span>
      )}
    </button>
  );
}

function ChatList({ conversations, activeId, onSelect, filter, setFilter, search, setSearch }) {
  const filteredConversations = useMemo(() => {
    const q = search.trim().toLowerCase();

    return conversations.filter((conversation) => {
      const matchesFilter =
        (filter === 'All' && true) ||
        (filter === 'Unread' && conversation.unread > 0) ||
        (filter === 'Groups' && conversation.type === 'groups') ||
        (filter === 'Communities' && conversation.type === 'communities');

      const matchesSearch =
        !q ||
        conversation.name.toLowerCase().includes(q) ||
        conversation.lastMessage.toLowerCase().includes(q);

      return matchesFilter && matchesSearch;
    });
  }, [conversations, filter, search]);

  return (
    <aside className="flex h-full w-[360px] shrink-0 flex-col border-r border-[#2e3031] bg-[#18191a] px-3 py-3">
      <div className="mb-3 flex items-center justify-between px-2 pt-1">
        <h2 className="text-[28px] font-bold tracking-tight text-white">Chats</h2>
        <div className="flex items-center gap-2 text-[#d0d3d8]">
          <button type="button" className="rounded-full p-2 transition hover:bg-white/5" aria-label="More options">
            <Ellipsis className="h-5 w-5" />
          </button>
          <button type="button" className="rounded-full p-2 transition hover:bg-white/5" aria-label="Edit chats">
            <MessageSquareText className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="mb-3 rounded-full border border-[#3a3b3d] bg-[#242526] px-3 py-2.5 text-sm text-[#b0b3b8] shadow-inner shadow-black/10">
        <div className="flex items-center gap-2">
          <Search className="h-4 w-4 text-[#8a8d91]" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Messenger"
            className="w-full bg-transparent text-sm text-white placeholder:text-[#8a8d91] focus:outline-none"
          />
        </div>
      </div>

      <div className="mb-3 flex gap-2 overflow-x-auto pb-1">
        {filterOptions.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => setFilter(option)}
            className={cn(
              'rounded-full px-3 py-1.5 text-xs font-medium transition',
              filter === option
                ? 'bg-[#2d2f31] text-white shadow-[inset_0_0_0_1px_rgba(147,166,255,0.2)]'
                : 'text-[#b0b3b8] hover:bg-white/5'
            )}
          >
            {option}
          </button>
        ))}
      </div>

      <div className="flex-1 space-y-1 overflow-y-auto pr-1">
        {filteredConversations.length === 0 ? (
          <div className="mt-8 rounded-2xl border border-dashed border-[#3a3b3d] bg-[#1f2022] p-6 text-center text-sm text-[#9aa0a6]">
            No matches found
          </div>
        ) : (
          filteredConversations.map((conversation) => (
            <ChatListItem
              key={conversation.id}
              conversation={conversation}
              isSelected={conversation.id === activeId}
              onSelect={onSelect}
            />
          ))
        )}
      </div>
    </aside>
  );
}

function VoiceMessageBubble({ mine = false, duration = '0:31', playing = false, onToggle }) {
  const bars = [14, 9, 18, 12, 16, 10, 20, 13, 8, 17, 12, 15];

  return (
    <div className={cn('mb-3 flex', mine ? 'justify-end' : 'justify-start')}>
      {!mine && <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80" alt="" className="mr-2 h-8 w-8 rounded-full object-cover" />}

      <div className={cn('flex max-w-[78%] items-center gap-3 rounded-[20px] px-3 py-2 shadow-lg', mine ? 'bg-gradient-to-r from-violet-500 to-blue-500 text-white' : 'bg-[#2a2b2d] text-[#e4e6eb]')}>
        <button
          type="button"
          onClick={onToggle}
          className={cn(
            'flex h-9 w-9 items-center justify-center rounded-full border border-white/10 transition',
            mine ? 'bg-white/15 hover:bg-white/20' : 'bg-white/5 hover:bg-white/10'
          )}
        >
          {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4 fill-current" />}
        </button>

        <div className="flex items-end gap-[3px]">
          {bars.map((bar, idx) => (
            <span
              key={idx}
              className={cn(
                'block rounded-full transition-all',
                mine ? 'bg-white/90' : 'bg-[#d0d3d8]',
                playing ? 'animate-pulse' : ''
              )}
              style={{ width: '4px', height: `${bar}px`, opacity: idx % 2 === 0 ? 1 : 0.8 }}
            />
          ))}
        </div>

        <span className={cn('text-xs font-medium', mine ? 'text-violet-100' : 'text-[#d0d3d8]')}>{duration}</span>
      </div>
    </div>
  );
}

function MessageBubble({ mine = false, text, time, hasAvatar = false }) {
  return (
    <div className={cn('mb-3 flex', mine ? 'justify-end' : 'justify-start')}>
      {!mine && hasAvatar && (
        <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80" alt="" className="mr-2 h-8 w-8 rounded-full object-cover" />
      )}

      <div className={cn('max-w-[75%] rounded-[18px] px-3.5 py-2.5 text-sm leading-6 shadow-sm', mine ? 'bg-gradient-to-r from-violet-500 to-blue-500 text-white' : 'bg-[#2a2b2d] text-[#e4e6eb]')}>
        <div>{text}</div>
        <div className={cn('mt-1 text-[10px]', mine ? 'text-violet-100' : 'text-[#8a8d91]')}>{time}</div>
      </div>
    </div>
  );
}

function ChatHeader({ conversation }) {
  return (
    <header className="flex items-center justify-between border-b border-[#2e3031] bg-[#18191a] px-5 py-3">
      <div className="flex items-center gap-3">
        <div className="relative">
          <img src={conversation.avatar} alt={conversation.name} className="h-11 w-11 rounded-full object-cover" />
          {conversation.online && <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-[#18191a] bg-emerald-500" />}
        </div>

        <div>
          <p className="text-base font-semibold text-white">{conversation.name}</p>
          <p className="text-xs text-[#8a8d91]">{conversation.lastSeen}</p>
        </div>
      </div>

      <div className="flex items-center gap-2 text-[#9a6af5]">
        <button type="button" className="rounded-full bg-[#221e2e] p-2.5 transition hover:scale-[1.03] hover:bg-[#2a213c]" aria-label="Call">
          <Phone className="h-4 w-4" />
        </button>
        <button type="button" className="rounded-full bg-[#221e2e] p-2.5 transition hover:scale-[1.03] hover:bg-[#2a213c]" aria-label="Video call">
          <Video className="h-4 w-4" />
        </button>
        <button type="button" className="rounded-full bg-[#221e2e] p-2.5 transition hover:scale-[1.03] hover:bg-[#2a213c]" aria-label="Conversation info">
          <Info className="h-4 w-4" />
        </button>
      </div>
    </header>
  );
}

function MessageInput({ value, onChange, onSend }) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="border-t border-[#2e3031] bg-[#18191a] px-4 pb-4 pt-3">
      <div className="flex items-end gap-3 rounded-[26px] border border-[#3a3b3d] bg-[#242526] px-3 py-2 shadow-inner shadow-black/10">
        <div className="flex items-center gap-2 text-[#7d8fff]">
          <button type="button" className="rounded-full p-2 transition hover:bg-white/5" aria-label="Voice message">
            <Mic className="h-4 w-4" />
          </button>
          <button type="button" className="rounded-full p-2 transition hover:bg-white/5" aria-label="Add image">
            <FileImage className="h-4 w-4" />
          </button>
          <button type="button" className="rounded-full p-2 transition hover:bg-white/5" aria-label="GIF">
            <Gif className="h-4 w-4" />
          </button>
        </div>

        <div className="flex-1">
          <input
            value={value}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Aa"
            className="w-full bg-transparent px-2 py-2 text-sm text-white placeholder:text-[#8a8d91] focus:outline-none"
          />
        </div>

        <div className="flex items-center gap-2">
          <button type="button" className="rounded-full p-2 text-[#7d8fff] transition hover:bg-white/5" aria-label="Emoji">
            <Smile className="h-4 w-4" />
          </button>

          {value.trim() ? (
            <button
              type="button"
              onClick={onSend}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-blue-500 text-white shadow-lg shadow-violet-500/25 transition hover:scale-[1.03]"
              aria-label="Send message"
            >
              <Send className="h-4 w-4" />
            </button>
          ) : (
            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-[#2a2b2d] text-[#8a8d91] transition hover:bg-white/5"
              aria-label="Like"
            >
              <ThumbsUp className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default function FacebookMessengerUI() {
  const [conversations, setConversations] = useState(initialConversations);
  const [activeId, setActiveId] = useState('alex');
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');
  const [draft, setDraft] = useState('');

  const selectedConversation =
    conversations.find((conversation) => conversation.id === activeId) || conversations[0];

  const handleSend = () => {
    if (!draft.trim() || !selectedConversation) return;

    const nextMessage = {
      id: Date.now(),
      sender: 'me',
      text: draft.trim(),
      time: 'Now',
      type: 'text',
    };

    setConversations((current) =>
      current.map((conversation) =>
        conversation.id === activeId
          ? {
              ...conversation,
              lastMessage: draft.trim(),
              lastMessageTime: 'Now',
              unread: 0,
              messages: [...conversation.messages, nextMessage],
            }
          : conversation
      )
    );

    setDraft('');
  };

  const handleVoiceToggle = (conversationId) => {
    setConversations((current) =>
      current.map((conversation) => {
        if (conversation.id !== conversationId) return conversation;

        return {
          ...conversation,
          messages: conversation.messages.map((message) =>
            message.type === 'voice'
              ? { ...message, playing: !message.playing }
              : message
          ),
        };
      })
    );
  };

  return (
    <div className="min-h-screen bg-[#18191a] p-4 text-[#e4e6eb] antialiased">
      <div className="mx-auto flex h-[calc(100vh-2rem)] max-w-[1440px] overflow-hidden rounded-[28px] border border-[#2e3031] bg-[#18191a] shadow-2xl shadow-black/30">
        <ChatList
          conversations={conversations}
          activeId={activeId}
          onSelect={setActiveId}
          filter={filter}
          setFilter={setFilter}
          search={search}
          setSearch={setSearch}
        />

        <main className="flex min-w-0 flex-1 flex-col bg-[#18191a]">
          <ChatHeader conversation={selectedConversation} />

          <div className="flex-1 overflow-y-auto bg-[#18191a] px-4 py-4">
            <div className="mx-auto max-w-3xl">
              <div className="mb-4 text-center text-[10px] font-medium uppercase tracking-[0.2em] text-[#8a8d91]">
                Wed 02:04
              </div>

              <MessageBubble
                mine={false}
                hasAvatar
                text="Hey, are you free for the design review later?"
                time="02:04"
              />

              <MessageBubble
                mine
                text="Yes, I can join at 4 PM. Send me the latest mockup."
                time="02:05"
              />

              <VoiceMessageBubble
                mine={false}
                duration="0:31"
                playing={false}
                onToggle={() => handleVoiceToggle(selectedConversation.id)}
              />

              <MessageBubble
                mine
                text="Perfect. I will share the new version soon."
                time="02:08"
              />

              {selectedConversation.messages.map((message) => {
                if (message.type === 'voice') {
                  return (
                    <VoiceMessageBubble
                      key={message.id}
                      mine={message.sender === 'me'}
                      duration={message.duration || '0:31'}
                      playing={Boolean(message.playing)}
                      onToggle={() => handleVoiceToggle(selectedConversation.id)}
                    />
                  );
                }

                return (
                  <MessageBubble
                    key={message.id}
                    mine={message.sender === 'me'}
                    text={message.text}
                    time={message.time}
                    hasAvatar={message.sender !== 'me'}
                  />
                );
              })}
            </div>
          </div>

          <MessageInput value={draft} onChange={setDraft} onSend={handleSend} />
        </main>
      </div>
    </div>
  );
}
