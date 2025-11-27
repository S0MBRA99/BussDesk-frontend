import {useEffect, useRef, useState} from 'react';
import EmojiPicker, { EmojiClickData } from 'emoji-picker-react';
import {SmilePlus} from "lucide-react"

interface User {
    id: string;
    name: string;
}

interface Message {
    id: string;
    userId: string;
    text: string;
    timestamp: Date;
}

export default function ChatLocalComponent() {

    const mockUsers: User[] = [
        { id: '1', name: 'Alice' },
        { id: '2', name: 'Bob' },
        { id: '3', name: 'Charlie' },
    ];

    const [messages, setMessages] = useState<Message[]>([]);
    const [inputText, setInputText] = useState('');
    const [selectedUser, setSelectedUser] = useState<User>(mockUsers[0]);
    const [showPicker, setShowPicker] = useState(false);

    const containerRefEmoji = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (containerRefEmoji.current && !containerRefEmoji.current.contains(event.target as Node)) {
                setShowPicker(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [containerRefEmoji]);

    // Function to send a message
    const sendMessage = () => {
        if (!inputText.trim()) return;
        const newMessage: Message = {
            id: Date.now().toString(),
            userId: selectedUser.id,
            text: inputText,
            timestamp: new Date(),
        };
        setMessages([...messages, newMessage]);
        setInputText('');
        setShowPicker(false);
    };

    // Handle emoji selection
    const onEmojiClick = (emojiData: EmojiClickData) => {
        setInputText(prev => prev + emojiData.emoji);
    };

    return (
        <div className="flex flex-col h-full w-3/4 mx-auto border rounded-lg p-4 bg-white dark:bg-zinc-800">
            {/* Header */}
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Chat</h2>

            {/* User selector */}
            <select
                value={selectedUser.id}
                onChange={(e) => setSelectedUser(mockUsers.find(u => u.id === e.target.value)!)}
                className="mb-2 p-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-zinc-700 dark:text-white"
            >
                {mockUsers.map(user => (
                    <option key={user.id} value={user.id}>{user.name}</option>
                ))}
            </select>

            {/* Chat messages */}
            <div className="flex-1 overflow-y-auto mb-2 max-h-64 p-2 border rounded-lg bg-gray-100 dark:bg-zinc-900 space-y-2">
                {messages.map(msg => {
                    const user = mockUsers.find(u => u.id === msg.userId);
                    return (
                        <div key={msg.id} className="flex flex-col">
                            <span className="text-xs text-gray-500 dark:text-gray-400">
                                {user?.name} • {msg.timestamp.toLocaleTimeString()}
                            </span>
                            <span className="text-sm text-gray-900 dark:text-white bg-stone-300 dark:bg-blue-400 w-fit max-w-full p-1.5 rounded-md">{msg.text}</span>
                        </div>
                    );
                })}
                {messages.length === 0 && <p className="text-gray-400 text-sm">No messages yet</p>}
            </div>

            {/* Input to send message */}
            <div className="flex flex-col gap-2 relative">
                <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                    placeholder="Type a message..."
                    className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-zinc-700 dark:text-white"
                />
                <div className="flex items-center gap-2" ref={containerRefEmoji}>
                    {/* Emoji picker */}
                    <div className="relative">
                        <button
                            onClick={() => setShowPicker(!showPicker)}
                            className="px-2 py-1 rounded-lg hover:bg-gray-200 dark:hover:bg-zinc-700"
                        >
                            <SmilePlus/>
                        </button>
                        {showPicker && (
                            <div className="absolute bottom-full mb-2 z-50">
                                <EmojiPicker onEmojiClick={onEmojiClick} />
                            </div>
                        )}
                    </div>

                    {/* Send button */}
                    <button
                        onClick={sendMessage}
                        className="
                            px-4 py-2 focus:outline-none focus:ring-2 border border-gray-500
                            bg-blue-500 text-black dark:text-white rounded-lg hover:bg-blue-600
                            disabled:bg-transparent cursor-pointer"
                        disabled={!inputText.trim()}
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
}
