import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"
import TodoList from "@/components/core/todoComponent"
import CalendarComponent from "@/components/core/calendarComponent";
import ChatLocalComponent from "@/components/core/chatLocalComponent";
import {DataTable} from "@/components/core/dataTableComponent";
import {columns} from "@/components/core/columnsTable";
import {useTasksStore} from "@/app/lib/store";


export function ResizableContent() {

    const {tasks} = useTasksStore()

    return (
        <ResizablePanelGroup
            direction="vertical"
            className="max-w-screen rounded-lg border"
        >
            <ResizablePanel defaultSize={50} className="h-full">
                <div className="flex h-full items-center justify-center p-6 bg-white dark:bg-stone-950">
                    <DataTable columns={columns} data={tasks} />
                </div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={50} className="">
                <ResizablePanelGroup direction="horizontal">
                    <ResizablePanel defaultSize={50}>
                        <div className="flex h-full items-center justify-center p-6 bg-white dark:bg-stone-950">
                            <CalendarComponent/>
                        </div>
                    </ResizablePanel>
                    <ResizableHandle />
                    <ResizablePanel defaultSize={50}>
                        <div className="flex h-full items-center justify-center p-6 bg-white dark:bg-stone-950">
                            <ChatLocalComponent/>
                        </div>
                    </ResizablePanel>
                </ResizablePanelGroup>
            </ResizablePanel>
        </ResizablePanelGroup>
    )
}
