"use client"
import {ColumnDef} from "@tanstack/react-table"
import {TaskSection} from "@/app/types"

export const columns: ColumnDef<TaskSection>[] = [
    {
        accessorKey: "createdBy",
        header: () => <div className="font-bold">Created By</div>
    },
    {
        accessorKey: "description",
        header: () => <div className="font-bold">Description</div>,
    },
    {
        accessorKey: "status",
        header: () => <div className="font-bold">Status</div>,
    },
    {
        accessorKey: "assignedTo",
        header: () => <div className="font-bold">Assigned To</div>,
    },
    {
        accessorKey: "priority",
        header: () => <div className="font-bold">Priority To</div>,
    },
    {
        accessorKey: "createdAt",
        header: () => <div className="font-bold">Created At</div>,
    },
    {
        accessorKey: "dueDate",
        header: () => <div className="font-bold">Due Date</div>,
    },
]



