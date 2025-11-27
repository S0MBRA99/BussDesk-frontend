import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"
import TodoList from "@/components/core/todoComponent"
import CalendarComponent from "@/components/core/calendarComponent";
import ChatLocalComponent from "@/components/core/chatLocalComponent";

export function ResizableContent() {
    return (
        <ResizablePanelGroup
            direction="horizontal"
            className="max-w-screen rounded-lg border"
        >
            <ResizablePanel defaultSize={25} className="h-full">
                <ResizablePanelGroup direction="vertical">
                    <ResizablePanel defaultSize={65}>
                        <div className="flex h-full items-center justify-center p-6 bg-white dark:bg-stone-950">
                            <TodoList />
                        </div>
                    </ResizablePanel>
                    <ResizableHandle />
                    <ResizablePanel defaultSize={35}>
                        <div className="flex flex-col h-full items-center justify-center p-6 bg-white dark:bg-stone-950">
                            <CalendarComponent/>
                        </div>
                    </ResizablePanel>
                </ResizablePanelGroup>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={75} className="">
                <ResizablePanelGroup direction="vertical">
                    <ResizablePanel defaultSize={50}>
                        <div className="flex h-full items-center justify-center p-6 bg-white dark:bg-stone-950">
                            <ChatLocalComponent/>
                        </div>
                    </ResizablePanel>
                    <ResizableHandle />
                    <ResizablePanel defaultSize={50}>
                        <div className="flex h-full items-center justify-center p-6 bg-white dark:bg-stone-950">
                            <span className="font-semibold">Three</span>
                        </div>
                    </ResizablePanel>
                </ResizablePanelGroup>
            </ResizablePanel>
        </ResizablePanelGroup>
    )
}
