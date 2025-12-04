"use client"
import { TaskSection } from "@/app/types"
import FlagIcon from "@/components/ui/flagIcon"
import { format, formatDistanceToNow } from "date-fns";
import { es } from "date-fns/locale";
import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import {useState} from "react";

export const columns: any = [

    {
        accessorKey: "createdBy",
        header: ({ column }:any) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    className="hover:bg-transparent p-0 font-bold"
                >
                    Created By
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "description",
        header: ({ column }:any) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    className="hover:bg-transparent p-0 font-bold"
                >
                    Description
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "status",
        header: ({ column }:any) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    className="hover:bg-transparent p-0 font-bold"
                >
                    Status
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }:any) => {
            type Status = "pending" | "in-progress" | "completed";
            // Obtenemos el valor de la fila y lo forzamos al tipo Status
            let localStatus = row.getValue("status") as Status;

            const statusConfig: Record<Status, { label: string; color: string }> = {
                pending: {
                    label: "Pending",
                    color: "bg-yellow-500/10 text-yellow-700 dark:text-yellow-400 border-yellow-500/20",
                },
                "in-progress": {
                    label: "In Progress",
                    color: "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20",
                },
                completed: {
                    label: "Completed",
                    color: "bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20",
                },
            };

            // Si por alguna razón viene un status desconocido, fallback a pending
            const config = statusConfig[localStatus] || statusConfig.pending;

            return (
                <Popover>
                    <PopoverTrigger asChild>
                        <button
                            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border cursor-pointer ${config.color}`}
                        >
                            <div className="w-1.5 h-1.5 rounded-full bg-current" />
                            {config.label}
                        </button>
                    </PopoverTrigger>

                    <PopoverContent className="w-40 space-y-1">
                        {Object.entries(statusConfig).map(([key, cfg]: any) => (
                            <button
                                key={key}
                                className={`w-full text-left px-2 py-1 rounded-md hover:bg-muted text-sm cursor-pointer`}
                                onClick={() => {
                                    localStatus = key
                                }} // cambiar por fetch y quitar es estado esto es solo de prueba visual
                            >
                                {cfg.label}
                            </button>
                        ))}
                    </PopoverContent>
                </Popover>
            );
        },
    },
    {
        accessorKey: "assignedTo",
        header: ({ column }:any) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    className="hover:bg-transparent p-0 font-bold"
                >
                    Assigned To
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "priority",
        header: ({ column }:any) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    className="hover:bg-transparent p-0 font-bold"
                >
                    Priority
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }:any) => {
            type status = "low" | "medium" | "high" | "urgent";
            const priority:status = row.getValue("priority");
            const priorityConfig = {
                low: {
                    label: "Low",
                    color: "text-gray-600 dark:text-gray-400",
                    bgColor: "bg-gray-500/10 border-gray-500/20"
                },
                medium: {
                    label: "Medium",
                    color: "text-blue-600 dark:text-blue-400",
                    bgColor: "bg-blue-500/10 border-blue-500/20"
                },
                high: {
                    label: "High",
                    color: "text-yellow-600 dark:text-yellow-400",
                    bgColor: "bg-yellow-500/10 border-yellow-500/20"
                },
                urgent: {
                    label: "Urgent",
                    color: "text-red-600 dark:text-red-400",
                    bgColor: "bg-red-500/10 border-red-500/20"
                },
            };
            const config = priorityConfig[priority] || priorityConfig.medium;

            return (
                <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium border ${config.bgColor}`}>
                    <FlagIcon className={`size-3 ${config.color}`} />
                    <span className={config.color}>{config.label}</span>
                </div>
            );
        }
    },
    {
        accessorKey: "createdAt",
        header: ({ column }:any) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    className="hover:bg-transparent p-0 font-bold"
                >
                    Created At
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }:any) => {
            const date = new Date(row.getValue("createdAt"));

            return (
                <div className="flex flex-col gap-0.5">
                    <span className="text-sm font-medium">
                      {format(date, "MMM dd, yyyy")}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {formatDistanceToNow(date, { addSuffix: true, locale: es })}
                    </span>
                </div>
            );
        }
    },
    {
        accessorKey: "dueDate",
        header: ({ column }:any) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    className="hover:bg-transparent p-0 font-bold"
                >
                    Due Date
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }:any) => {
            const date = new Date(row.getValue("dueDate"));
            const isOverdue = date < new Date();

            return (
                <div className="flex flex-col gap-0.5">
                    <span className={`text-sm font-medium ${isOverdue ? "text-red-600" : ""}`}>
                      {format(date, "MMM dd, yyyy")}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {formatDistanceToNow(date, { addSuffix: true, locale: es })}
                    </span>
                </div>
            );
        }
    },
]