"use client"
import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from "@tanstack/react-table"
import { DataTableProps } from "@/app/types";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Card, CardContent } from "@/components/ui/card"
import NewTaskModal from "@/components/core/newTaskModal"
import { FileSpreadsheet } from "lucide-react"

export function DataTable<TData, TValue>({ columns, data }: DataTableProps<TData, TValue>) {
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    })

    return (
        <div className="flex flex-col h-full w-full">
            {/* Header */}
            <div className="flex items-center justify-between p-4 pb-3 border-b border-zinc-200 dark:border-zinc-800">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-500/10 rounded-lg">
                        <FileSpreadsheet className="size-5 text-blue-500" />
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold">Tasks</h2>
                        <p className="text-xs text-muted-foreground">
                            {data.length} {data.length === 1 ? 'task' : 'tasks'}
                        </p>
                    </div>
                </div>
                <NewTaskModal />
            </div>

            {/* Desktop Table View */}
            <div className="flex-1 overflow-auto p-4 hidden sm:block">
                <div className="border rounded-lg overflow-hidden">
                    <Table>
                        <TableHeader className="bg-muted/50">
                            {table.getHeaderGroups().map((headerGroup) => (
                                <TableRow key={headerGroup.id}>
                                    {headerGroup.headers.map((header) => (
                                        <TableHead key={header.id} className="font-semibold">
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                        </TableHead>
                                    ))}
                                </TableRow>
                            ))}
                        </TableHeader>
                        <TableBody>
                            {table.getRowModel().rows?.length ? (
                                table.getRowModel().rows.map((row) => (
                                    <TableRow
                                        key={row.id}
                                        data-state={row.getIsSelected() && "selected"}
                                        className="hover:bg-muted/50 transition-colors"
                                    >
                                        {row.getVisibleCells().map((cell) => (
                                            <TableCell key={cell.id}>
                                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={columns.length} className="h-32 text-center">
                                        <div className="flex flex-col items-center justify-center text-muted-foreground">
                                            <FileSpreadsheet className="size-10 mb-2 opacity-20" />
                                            <p className="font-medium">No tasks found</p>
                                            <p className="text-sm">Create a new task to get started</p>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </div>
            </div>

            {/* Mobile Card View */}
            <div className="flex-1 overflow-auto p-4 sm:hidden">
                <div className="space-y-3">
                    {table.getRowModel().rows?.length ? (
                        table.getRowModel().rows.map((row) => (
                            <Card key={row.id} className="overflow-hidden hover:shadow-md transition-shadow">
                                <CardContent className="p-4 space-y-2.5">
                                    {row.getVisibleCells().map((cell) => {
                                        const header = cell.column.columnDef.header as string;
                                        return (
                                            <div key={cell.id} className="flex flex-col gap-1">
                                                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                                                    {typeof header === 'string' ? header : ''}
                                                </span>
                                                <div className="text-sm">
                                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </CardContent>
                            </Card>
                        ))
                    ) : (
                        <Card>
                            <CardContent className="p-8">
                                <div className="flex flex-col items-center justify-center text-muted-foreground">
                                    <FileSpreadsheet className="size-12 mb-3 opacity-20" />
                                    <p className="font-medium text-center">No tasks found</p>
                                    <p className="text-sm text-center">Create a new task to get started</p>
                                </div>
                            </CardContent>
                        </Card>
                    )}
                </div>
            </div>
        </div>
    )
}