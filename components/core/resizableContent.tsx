import { useState, useRef } from "react"
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"
import { ImperativePanelHandle } from "react-resizable-panels"
import CalendarComponent from "@/components/core/calendarComponent";
import ChatLocalComponent from "@/components/core/chatLocalComponent";
import { DataTable } from "@/components/core/dataTableComponent";
import { columns } from "@/components/core/columnsTable";
import { useTasksStore } from "@/app/lib/store";
import {
    Maximize2,
    Minimize2,
    LayoutGrid,
    Table,
    Calendar,
    MessageSquare
} from "lucide-react";

export function ResizableContent() {
    const { tasks } = useTasksStore();

    // Panel references
    const topPanelRef = useRef<ImperativePanelHandle>(null);
    const bottomPanelRef = useRef<ImperativePanelHandle>(null);
    const leftPanelRef = useRef<ImperativePanelHandle>(null);
    const rightPanelRef = useRef<ImperativePanelHandle>(null);

    // States to track collapsed/expanded panels
    const [topCollapsed, setTopCollapsed] = useState(false);
    const [leftExpanded, setLeftExpanded] = useState(false);
    const [rightExpanded, setRightExpanded] = useState(false);

    // Collapse/expand the top panel
    const toggleTopPanel = () => {
        if (topCollapsed) {
            // Show table - return to 50/50
            topPanelRef.current?.resize(100);
            bottomPanelRef.current?.resize(0);
            setTopCollapsed(false);
        } else {
            // Hide table - bottom panel to 100%
            topPanelRef.current?.resize(0);
            bottomPanelRef.current?.resize(100);
            setTopCollapsed(true);
        }
    };

    // Expand left panel (Calendar)
    const toggleLeftPanel = () => {
        if (leftExpanded) {
            // Return to default size
            topPanelRef.current?.resize(50);
            bottomPanelRef.current?.resize(50);
            leftPanelRef.current?.resize(50);
            rightPanelRef.current?.resize(50);
            setLeftExpanded(false);
            setTopCollapsed(false);
        } else {
            // Expand left to full screen
            topPanelRef.current?.resize(0);
            bottomPanelRef.current?.resize(100);
            leftPanelRef.current?.resize(100);
            rightPanelRef.current?.resize(0);
            setLeftExpanded(true);
            setRightExpanded(false);
            setTopCollapsed(true);
        }
    };

    // Expand right panel (Chat)
    const toggleRightPanel = () => {
        if (rightExpanded) {
            // Return to default size
            topPanelRef.current?.resize(50);
            bottomPanelRef.current?.resize(50);
            leftPanelRef.current?.resize(50);
            rightPanelRef.current?.resize(50);
            setRightExpanded(false);
            setTopCollapsed(false);
        } else {
            // Expand right to full screen
            topPanelRef.current?.resize(0);
            bottomPanelRef.current?.resize(100);
            leftPanelRef.current?.resize(0);
            rightPanelRef.current?.resize(100);
            setRightExpanded(true);
            setLeftExpanded(false);
            setTopCollapsed(true);
        }
    };

    // Reset all panels to default sizes
    const resetLayout = () => {
        topPanelRef.current?.resize(50);
        bottomPanelRef.current?.resize(50);
        leftPanelRef.current?.resize(50);
        rightPanelRef.current?.resize(50);
        setTopCollapsed(false);
        setLeftExpanded(false);
        setRightExpanded(false);
    };

    return (
        <div className="h-full w-full flex flex-col">
            {/* Control Buttons */}
            <div className="flex items-center justify-end gap-2 p-3">
                <button
                    onClick={toggleTopPanel}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                        topCollapsed
                            ? "bg-muted text-muted-foreground hover:bg-muted/80"
                            : "bg-blue-500 text-white hover:bg-blue-600"
                    }`}
                    title={topCollapsed ? "Show Table" : "Hide Table"}
                >
                    <Table className="size-4" />
                    <span className="hidden sm:inline">Table</span>
                    {topCollapsed ? <Maximize2 className="size-3" /> : <Minimize2 className="size-3" />}
                </button>

                <button
                    onClick={toggleLeftPanel}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                        leftExpanded
                            ? "bg-green-500 text-white hover:bg-green-600"
                            : "bg-muted text-muted-foreground hover:bg-muted/80"
                    }`}
                    title={leftExpanded ? "Minimize Calendar" : "Expand Calendar"}
                >
                    <Calendar className="size-4" />
                    <span className="hidden sm:inline">Calendar</span>
                    {leftExpanded ? <Minimize2 className="size-3" /> : <Maximize2 className="size-3" />}
                </button>

                <button
                    onClick={toggleRightPanel}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                        rightExpanded
                            ? "bg-purple-500 text-white hover:bg-purple-600"
                            : "bg-muted text-muted-foreground hover:bg-muted/80"
                    }`}
                    title={rightExpanded ? "Minimize Chat" : "Expand Chat"}
                >
                    <MessageSquare className="size-4" />
                    <span className="hidden sm:inline">Chat</span>
                    {rightExpanded ? <Minimize2 className="size-3" /> : <Maximize2 className="size-3" />}
                </button>

                <div className="w-px h-6 bg-zinc-200 dark:bg-zinc-800 mx-1" />

                <button
                    onClick={resetLayout}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium bg-zinc-500 text-white hover:bg-zinc-600 transition-all"
                    title="Reset Layout"
                >
                    <LayoutGrid className="size-4" />
                    <span className="hidden sm:inline">Reset</span>
                </button>
            </div>
            <div className="flex-1 overflow-hidden">
                <ResizablePanelGroup
                    direction="vertical"
                    className="h-full rounded-lg border"
                >
                    <ResizablePanel
                        ref={topPanelRef}
                        defaultSize={50}
                        minSize={0}
                        collapsible={true}
                    >
                        <div className="flex h-full items-center justify-center p-6 bg-white dark:bg-stone-950">
                            <DataTable columns={columns} data={tasks} />
                        </div>
                    </ResizablePanel>
                    <ResizableHandle withHandle />
                    <ResizablePanel
                        ref={bottomPanelRef}
                        defaultSize={50}
                        minSize={0}
                    >
                        <ResizablePanelGroup direction="horizontal">
                            <ResizablePanel
                                ref={leftPanelRef}
                                defaultSize={50}
                                minSize={0}
                                collapsible={true}
                            >
                                <div className="flex h-full items-center justify-center p-6 bg-white dark:bg-stone-950">
                                    <CalendarComponent />
                                </div>
                            </ResizablePanel>
                            <ResizableHandle withHandle />
                            <ResizablePanel
                                ref={rightPanelRef}
                                defaultSize={50}
                                minSize={0}
                                collapsible={true}
                            >
                                <div className="flex h-full items-center justify-center p-6 bg-white dark:bg-stone-950">
                                    <ChatLocalComponent />
                                </div>
                            </ResizablePanel>
                        </ResizablePanelGroup>
                    </ResizablePanel>
                </ResizablePanelGroup>
            </div>
        </div>
    );
}
