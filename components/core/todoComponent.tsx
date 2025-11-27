import React, { useState,useEffect,useRef } from 'react';
import { Plus, Trash2, CheckCircle2, Circle, User } from 'lucide-react';

interface Todo {
    id: string;
    text: string;
    assignedTo: string;
    completed: boolean;
    createdAt: Date;
}

interface User {
    id: string;
    name: string;
}

export default function TodoList() {

    const [todos, setTodos] = useState<Todo[]>([]);
    const [inputText, setInputText] = useState('');
    const [selectedUser, setSelectedUser] = useState('');
    const [userSearchQuery, setUserSearchQuery] = useState('');
    const [showUserDropdown, setShowUserDropdown] = useState(false);

    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setShowUserDropdown(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [containerRef]);

    // Mock users test
    const mockUsers: User[] = [
        { id: '1', name: 'Juan Pérez' },
        { id: '2', name: 'David Leonardo' },
        { id: '3', name: 'María García' },
        { id: '4', name: 'Carlos López' },
        { id: '5', name: 'Ana Martínez' },
    ];

    // Filter users
    const filteredUsers = mockUsers.filter(user =>
        user.name.toLowerCase().includes(userSearchQuery.toLowerCase())
    );

    // Add task
    const handleAddTodo = () => {
        if (inputText.trim() && selectedUser) {
            const newTodo: Todo = {
                id: Date.now().toString(),
                text: inputText,
                assignedTo: selectedUser,
                completed: false,
                createdAt: new Date(),
            };
            setTodos([newTodo, ...todos]);
            setInputText('');
            setUserSearchQuery('');
            setSelectedUser('');
        }
    };

    // Mark as completed
    const toggleTodo = (id: string) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    // Delete Task
    const deleteTodo = (id: string) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    // Select Users
    const selectUser = (userName: string) => {
        setSelectedUser(userName);
        setUserSearchQuery(userName);
        setShowUserDropdown(false);
    };

    // Get username
    const getAssignedUserName = (userName: string) => {
        return userName;
    };

    return (
        <div className="flex flex-col h-full bg-transparent rounded-lg items-center w-full mt-5">
            {/* Header */}
            <div className="p-4 border-b border-gray-200 dark:border-zinc-800">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Pending Tasks
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 mx-auto">
                    {todos.length} total tasks
                </p>
            </div>

            {/* Add task form */}
            <div className="p-4 border-b border-gray-200 dark:border-zinc-800 space-y-3">
                {/* Input Task */}
                <div className="relative">
                    <input
                        type="text"
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleAddTodo()}
                        placeholder="New task..."
                        className="
                        w-full px-4 py-2 border
                        border-gray-300 dark:border-zinc-700
                        rounded-lg focus:outline-none focus:ring-2
                        focus:ring-blue-500 dark:bg-zinc-800 dark:text-white"
                    />
                </div>

                {/* Select User */}
                <div className="relative" ref={containerRef}>
                    <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
                        <input
                            type="text"
                            value={userSearchQuery}
                            onChange={(e) => {
                                setUserSearchQuery(e.target.value);
                                setShowUserDropdown(true);
                            }}
                            onFocus={() => setShowUserDropdown(true)}
                            placeholder="Assign to..."
                            className="w-full pl-10 pr-4 py-2
                            border border-gray-300 dark:border-zinc-700
                            rounded-lg focus:outline-none focus:ring-2
                            focus:ring-blue-500 dark:bg-zinc-800 dark:text-white"
                        />
                    </div>

                    {/* Users dropdown */}
                    {showUserDropdown && (
                        <div className="absolute z-10 w-full mt-1
                        bg-white dark:bg-zinc-800 border
                        border-gray-300 dark:border-zinc-700 rounded-lg
                        shadow-lg max-h-48 overflow-y-auto">
                            {filteredUsers.length > 0 ? (
                                filteredUsers.map(user => (
                                    <button
                                        key={user.id}
                                        onClick={() => selectUser(user.name)}
                                        className="
                                        w-full px-4 py-2 text-left hover:bg-gray-100
                                        dark:hover:bg-zinc-700 flex items-center gap-2"
                                    >
                                        <User className="size-4 text-gray-400" />
                                        <span className="text-gray-900 dark:text-white">{user.name}</span>
                                    </button>
                                ))
                            ) : (
                                <div className="px-4 py-2 text-gray-500 dark:text-gray-400">
                                    User not found
                                </div>
                            )}
                        </div>
                    )}
                </div>

                {/* Add button */}
                <button
                    onClick={handleAddTodo}
                    disabled={!inputText.trim() || !selectedUser}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2
                    bg-blue-500 text-white rounded-lg
                    hover:bg-blue-600 disabled:bg-gray-300
                    disabled:cursor-not-allowed transition-colors"
                >
                    <Plus className="size-5" />
                    <span>Add task</span>
                </button>
            </div>

            {/* TodoList */}
            <div className="flex-1 overflow-y-auto p-4 space-y-2">
                {todos.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-full text-gray-400 dark:text-gray-500">
                        <div className="flex-shrink-0">
                            <img src="/shiba.png" alt="shiba-sleeping-image" className="object-contain"/>
                        </div>
                        <p className="text-lg">Not pending tasks</p>
                        <p className="text-sm">Add a new Task to start</p>
                    </div>
                ) : (
                    todos.map(todo => (
                        <div
                            key={todo.id}
                            className={`flex items-start gap-3 p-3 border rounded-lg transition-all${
                                todo.completed
                                    ? 'bg-gray-50 dark:bg-zinc-800 border-gray-200 dark:border-zinc-700 opacity-60'
                                    : 'bg-white dark:bg-zinc-800 border-gray-300 dark:border-zinc-700 hover:shadow-md'
                            }`}
                        >
                            {/* Checkbox */}
                            <button
                                onClick={() => toggleTodo(todo.id)}
                                className="flex-shrink-0 mt-0.5"
                            >
                                {todo.completed ? (
                                    <CheckCircle2 className="size-5 text-green-500" />
                                ) : (
                                    <Circle className="size-5 text-gray-400 hover:text-blue-500" />
                                )}
                            </button>

                            {/* Content */}
                            <div className="flex-1 min-w-0">
                                <p
                                    className={`text-sm break-all ${
                                        todo.completed
                                            ? 'line-through text-gray-500 dark:text-gray-400'
                                            : 'text-gray-900 dark:text-white'
                                    }`}
                                >
                                    {todo.text}
                                </p>
                                <div className="flex items-center gap-2 mt-1">
                                    <User className="size-3 text-gray-400" />
                                    <span className="text-xs text-gray-500 dark:text-gray-400">
                                        {getAssignedUserName(todo.assignedTo)}
                                    </span>
                                </div>
                            </div>

                            {/* Delete Button */}
                            <button
                                onClick={() => deleteTodo(todo.id)}
                                className="flex-shrink-0 p-1 text-gray-400 hover:text-red-500 transition-colors"
                            >
                                <Trash2 className="size-4" />
                            </button>
                        </div>
                    ))
                )}
            </div>

            {/* Info of Pending and completed tasks */}
            {todos.length > 0 && (
                <div className="p-4 border-t border-gray-200
                dark:border-zinc-800 flex justify-between
                gap-10 text-sm text-gray-500 dark:text-gray-400">
          <span>
            {todos.filter(t => !t.completed).length} Pending
          </span>
          <span>
            {todos.filter(t => t.completed).length} Completed
          </span>
                </div>
            )}
        </div>
    );
}