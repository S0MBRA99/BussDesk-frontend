import { useState, FormEvent, useEffect } from "react";
import { TaskSection, dataTableTest } from "@/app/types";
import { CirclePlus, Flag, X, Calendar as CalendarIcon, User, FileText, ListTodo } from "lucide-react";
import {useDeviceStore, useTasksStore} from "@/app/lib/store";
import { format } from "date-fns";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/app/lib/utils";

export default function NewTaskModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState<TaskSection["status"]>("pending");
    const [assignedTo, setAssignedTo] = useState("");
    const [dueDate, setDueDate] = useState<Date>();
    const [priority, setPriority] = useState<TaskSection["priority"]>("medium");
    const { tasks, setTasks } = useTasksStore();
    const {isMobile} = useDeviceStore()

    useEffect(() => {
        function addTest() {
            setTasks(dataTableTest);
        }
        addTest();
    }, []);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (!dueDate) return; // Validación adicional

        const newTask: TaskSection = {
            id: Date.now().toString(),
            createdBy: "your user",
            description,
            status,
            assignedTo,
            priority,
            createdAt: new Date().toISOString(),
            dueDate: dueDate.toISOString(),
        };
        setTasks([...tasks, newTask]);
        setIsOpen(false);
        // Reset form
        setDescription("");
        setStatus("pending");
        setAssignedTo("");
        setDueDate(undefined);
        setPriority("medium");
    };

    return (
        <div className="flex items-center justify-center">
            <button
                className="
                    flex gap-2 cursor-pointer
                    items-center bg-blue-500
                    hover:bg-blue-600 rounded-lg
                    text-sm font-medium px-3 py-2
                    text-white"
                onClick={() => setIsOpen(true)}
                title="New Task"
            >
                New Task <CirclePlus className="w-4 h-4"/>
            </button>

            {/* Modal */}
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 animate-in fade-in duration-200"
                        onClick={() => setIsOpen(false)}
                    />

                    {/* Modal Content */}
                    <div className="fixed inset-0 flex items-center justify-center z-50 p-4 pointer-events-none">
                        <div className="pointer-events-auto bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl w-full max-w-lg border border-zinc-200 dark:border-zinc-800 animate-in zoom-in-95 duration-200">
                            {/* Header */}
                            <div className="flex items-center justify-between p-6 border-b border-zinc-200 dark:border-zinc-800">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-blue-500/10 rounded-lg">
                                        <ListTodo className="size-5 text-blue-500" />
                                    </div>
                                    <h2 className="text-xl font-semibold">Create New Task</h2>
                                </div>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors"
                                >
                                    <X className="size-5" />
                                </button>
                            </div>

                            {/* Form */}
                            <form onSubmit={handleSubmit} className="p-6 space-y-5">
                                {/* Description */}
                                <div className="space-y-2">
                                    <label className="flex items-center gap-2 text-sm font-medium">
                                        <FileText className="size-4 text-zinc-500" />
                                        Description
                                    </label>
                                    <input
                                        type="text"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        className="w-full border border-zinc-300 dark:border-zinc-700 px-4 py-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-zinc-950"
                                        placeholder="Enter task description..."
                                        required
                                    />
                                </div>

                                {/* Status */}
                                <div className="space-y-2">
                                    <label className="flex items-center gap-2 text-sm font-medium">
                                        <ListTodo className="size-4 text-zinc-500" />
                                        Status
                                    </label>
                                    <Select value={status} onValueChange={(value) => setStatus(value as TaskSection["status"])}>
                                        <SelectTrigger className="w-full">
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="pending">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-2 h-2 rounded-full bg-yellow-500" />
                                                    <span>Pending</span>
                                                </div>
                                            </SelectItem>
                                            <SelectItem value="in-progress">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                                                    <span>In Progress</span>
                                                </div>
                                            </SelectItem>
                                            <SelectItem value="completed">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-2 h-2 rounded-full bg-green-500" />
                                                    <span>Completed</span>
                                                </div>
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                {/* Assigned To */}
                                <div className="space-y-2">
                                    <label className="flex items-center gap-2 text-sm font-medium">
                                        <User className="size-4 text-zinc-500" />
                                        Assigned To
                                    </label>
                                    <input
                                        type="text"
                                        value={assignedTo}
                                        onChange={(e) => setAssignedTo(e.target.value)}
                                        className="w-full border border-zinc-300 dark:border-zinc-700 px-4 py-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-zinc-950"
                                        placeholder="Enter assignee name..."
                                        required
                                    />
                                </div>

                                {/* Due Date - SHADCN CALENDAR */}
                                <div className="space-y-2">
                                    <label className="flex items-center gap-2 text-sm font-medium">
                                        <CalendarIcon className="size-4 text-zinc-500" />
                                        Due Date
                                    </label>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <button
                                                type="button"
                                                className={cn(
                                                    "w-full border border-zinc-300 dark:border-zinc-700 px-4 py-2.5 rounded-lg focus:outline-none " +
                                                    "focus:ring-2 focus:ring-blue-500 dark:bg-zinc-950 text-left flex items-center justify-between",
                                                    !dueDate && "text-zinc-500"
                                                )}
                                            >
                                                <span>
                                                    {dueDate ? format(dueDate, "PPP") : "Pick a date"}
                                                </span>
                                                <CalendarIcon className="size-4 text-zinc-500" />
                                            </button>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0" align="start">
                                            <Calendar
                                                mode="single"
                                                selected={dueDate}
                                                onSelect={setDueDate}
                                                initialFocus
                                            />
                                        </PopoverContent>
                                    </Popover>
                                </div>

                                {/* Priority */}
                                <div className="space-y-2">
                                    <label className="flex items-center gap-2 text-sm font-medium">
                                        <Flag className="size-4 text-zinc-500" />
                                        Priority
                                    </label>
                                    <Select value={priority} onValueChange={(value) => setPriority(value as TaskSection["priority"])}>
                                        <SelectTrigger className="w-full">
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="low">
                                                <div className="flex items-center gap-2">
                                                    <Flag className="size-4 text-gray-500" />
                                                    <span>Low</span>
                                                </div>
                                            </SelectItem>
                                            <SelectItem value="medium">
                                                <div className="flex items-center gap-2">
                                                    <Flag className="size-4 text-blue-500" />
                                                    <span>Medium</span>
                                                </div>
                                            </SelectItem>
                                            <SelectItem value="high">
                                                <div className="flex items-center gap-2">
                                                    <Flag className="size-4 text-yellow-500" />
                                                    <span>High</span>
                                                </div>
                                            </SelectItem>
                                            <SelectItem value="urgent">
                                                <div className="flex items-center gap-2">
                                                    <Flag className="size-4 text-red-500" />
                                                    <span>Urgent</span>
                                                </div>
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                {/* Buttons */}
                                <div className="flex justify-end gap-3 pt-4 border-t border-zinc-200 dark:border-zinc-800">
                                    <button
                                        type="button"
                                        onClick={() => setIsOpen(false)}
                                        className="px-5 py-2.5 border border-zinc-300 dark:border-zinc-700 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors font-medium"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="px-5 py-2.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium shadow-lg shadow-blue-500/30"
                                    >
                                        Create Task
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}