import { useEffect, useRef, useState } from 'react';
import EmojiPicker, { EmojiClickData } from 'emoji-picker-react';
import { SmilePlus } from "lucide-react";

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
    }, []);

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

    const onEmojiClick = (emojiData: EmojiClickData) => {
        setInputText(prev => prev + emojiData.emoji);
    };

    return (
        <div className="
            flex flex-col h-full w-full
            max-w-3xl mx-auto
            border rounded-lg p-4
            bg-white dark:bg-zinc-800
        ">

            {/* Header */}
            <h2 className="text-xl font-semibold mb-3">Chat</h2>

            {/* User Selector */}
            <select
                value={selectedUser.id}
                onChange={(e) => setSelectedUser(mockUsers.find(u => u.id === e.target.value)!)}
                className="
                    mb-3 p-2 border rounded-lg
                    dark:bg-zinc-700 dark:text-white
                "
            >
                {mockUsers.map(user => (
                    <option key={user.id} value={user.id}>{user.name}</option>
                ))}
            </select>

            {/* Messages Area */}
            <div className="
                flex-1 overflow-y-auto
                mb-3 p-3
                rounded-lg border
                bg-gray-100 dark:bg-zinc-900
                space-y-3
            "
                 style={{ maxHeight: "70vh" }}  // Mejor soporte móvil
            >
                {messages.map(msg => {
                    const user = mockUsers.find(u => u.id === msg.userId);
                    return (
                        <div key={msg.id} className="flex flex-col">
                            <span className="text-xs text-gray-500 dark:text-gray-400">
                                {user?.name} • {msg.timestamp.toLocaleTimeString()}
                            </span>
                            <span className="
                                text-sm text-gray-900 dark:text-white
                                bg-stone-300 dark:bg-blue-500
                                p-2 rounded-b-md rounded-r-md
                                max-w-[85%]
                            ">
                                {msg.text}
                            </span>
                        </div>
                    );
                })}
                {messages.length === 0 && (
                    <p className="text-gray-400 text-sm text-center">
                        No messages yet
                    </p>
                )}
            </div>

            {/* Input + Emoji + Send */}
            <div className="flex gap-2 items-center relative" ref={containerRefEmoji}>

                {/* Text Input */}
                <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                    placeholder="Type a message..."
                    className="
                        flex-1 p-2 border rounded-lg
                        dark:bg-zinc-700 dark:text-white
                        focus:outline-none focus:ring-2 focus:ring-blue-500
                    "
                />

                {/* Emoji button */}
                <button
                    onClick={() => setShowPicker(!showPicker)}
                    className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-zinc-700"
                >
                    <SmilePlus />
                </button>

                {/* Emoji Picker */}
                {showPicker && (
                    <div
                        className="
                            absolute bottom-full right-0
                            mb-3 z-50
                        "
                    >
                        <EmojiPicker
                            onEmojiClick={onEmojiClick}
                            height={350}
                            width={250}
                        />
                    </div>
                )}

                {/* Send Button */}
                <button
                    onClick={sendMessage}
                    disabled={!inputText.trim()}
                    className="
                        px-4 py-2 rounded-lg
                        bg-blue-600 text-white
                        hover:bg-blue-700
                        disabled:opacity-40 disabled:cursor-not-allowed
                    "
                >
                    Send
                </button>
            </div>
        </div>
    );
}
