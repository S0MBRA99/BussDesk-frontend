import {ColumnDef} from  "@tanstack/react-table"

//FETCH TYPES

export type ObjLogin =  {
    email: string,
    password: string
}

export type LoginResponse = {
    email: string;
    password: string;
}

export type ObjUserRegister = {
    userName:string,
    companyToken : string,
    userEmail: string,
    userPhone: string,
    userPassword: string,
    userConfirmPassword: string,
    companyRole: string
}

export type ObjUserRegisterResponse = {
    userName: string,
    companyToken : string,
    userEmail: string,
    userPhone: string,
    userPassword: string,
    userConfirmPassword: string,
    companyRole: string
}

export type ObjCompanyRegister = {
    companyName: string,
    companyLogo: File | null,
    companyEmail: string,
    companyPhone: string,
    password: string,
    companyConfirmPassword: string,
    adminName: string,
    country: string,
    website: string
}

export type ObjCompanyRegisterResponse = {
    companyName: string,
    companyLogo: File | null,
    companyEmail: string,
    companyPhone: string,
    password: string,
    companyConfirmPassword: string,
    adminName: string,
    country: string,
    website: string
}

// ZUSTAND GLOBAL USESTATES

export type DeviceStore = {
    isMobile: boolean,
    setIsMobile: (value: boolean) => void,
}

// DATA TABLE COMPONENT TYPES

export type TaskSection = {
    id: string,
    createdBy: string,
    description: string,
    status: "pending"|"in-progress"|"completed",
    assignedTo: string,
    priority: string,
    createdAt: string,
    dueDate: string
}

export interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
}

export const dataTableTest:TaskSection[] = [ // THIS IS AN EXAMPLE OF A FETCH-DATA
    {
        id: "1",
        createdBy: "Alice",
        description: "Diseñar la página de inicio",
        status: "pending",
        assignedTo: "Bob",
        priority: "high",
        createdAt: "2025-12-01T08:00:00Z",
        dueDate: "2025-12-05T17:00:00Z"
    },
    {
        id: "2",
        createdBy: "Charlie",
        description: "Configurar base de datos",
        status: "in-progress",
        assignedTo: "Diana",
        priority: "medium",
        createdAt: "2025-12-01T09:30:00Z",
        dueDate: "2025-12-10T12:00:00Z"
    },
    {
        id: "3",
        createdBy: "Eve",
        description: "Crear componentes de React",
        status: "completed",
        assignedTo: "Frank",
        priority: "low",
        createdAt: "2025-11-28T14:15:00Z",
        dueDate: "2025-12-02T16:00:00Z"
    },
    {
        id: "4",
        createdBy: "George",
        description: "Implementar autenticación con JWT",
        status: "pending",
        assignedTo: "Hannah",
        priority: "high",
        createdAt: "2025-12-01T10:00:00Z",
        dueDate: "2025-12-08T18:00:00Z"
    },
    {
        id: "5",
        createdBy: "Irene",
        description: "Escribir pruebas unitarias con Jest",
        status: "in-progress",
        assignedTo: "Jack",
        priority: "medium",
        createdAt: "2025-11-30T11:00:00Z",
        dueDate: "2025-12-04T15:00:00Z"
    },
    {
        id: "6",
        createdBy: "Kevin",
        description: "Optimizar rendimiento del frontend",
        status: "completed",
        assignedTo: "Laura",
        priority: "low",
        createdAt: "2025-11-29T13:45:00Z",
        dueDate: "2025-12-03T17:30:00Z"
    },
    {
        id: "7",
        createdBy: "Marta",
        description: "Actualizar documentación del proyecto",
        status: "pending",
        assignedTo: "Oscar",
        priority: "medium",
        createdAt: "2025-12-02T09:00:00Z",
        dueDate: "2025-12-06T18:00:00Z"
    },
    {
        id: "8",
        createdBy: "Luis",
        description: "Revisar pull requests pendientes",
        status: "in-progress",
        assignedTo: "Patricia",
        priority: "high",
        createdAt: "2025-12-02T10:30:00Z",
        dueDate: "2025-12-07T12:00:00Z"
    },
    {
        id: "9",
        createdBy: "Sara",
        description: "Diseñar nuevos iconos para la app",
        status: "completed",
        assignedTo: "Raúl",
        priority: "medium",
        createdAt: "2025-11-30T08:45:00Z",
        dueDate: "2025-12-03T17:00:00Z"
    },
    {
        id: "10",
        createdBy: "Héctor",
        description: "Implementar sistema de notificaciones",
        status: "pending",
        assignedTo: "Clara",
        priority: "high",
        createdAt: "2025-12-01T11:15:00Z",
        dueDate: "2025-12-09T16:30:00Z"
    },
    {
        id: "11",
        createdBy: "Verónica",
        description: "Optimizar queries de la base de datos",
        status: "in-progress",
        assignedTo: "Daniel",
        priority: "medium",
        createdAt: "2025-11-29T14:00:00Z",
        dueDate: "2025-12-05T13:00:00Z"
    },
    {
        id: "12",
        createdBy: "Andrés",
        description: "Configurar entorno de testing automático",
        status: "completed",
        assignedTo: "Lucía",
        priority: "low",
        createdAt: "2025-11-28T09:30:00Z",
        dueDate: "2025-12-02T15:30:00Z"
    },
    {
        id: "13",
        createdBy: "Natalia",
        description: "Rediseñar formulario de registro",
        status: "pending",
        assignedTo: "Sergio",
        priority: "medium",
        createdAt: "2025-12-03T08:00:00Z",
        dueDate: "2025-12-10T17:00:00Z"
    },
    {
        id: "14",
        createdBy: "Pablo",
        description: "Implementar búsqueda avanzada en la app",
        status: "in-progress",
        assignedTo: "Mónica",
        priority: "high",
        createdAt: "2025-12-01T12:45:00Z",
        dueDate: "2025-12-08T14:00:00Z"
    },
    {
        id: "15",
        createdBy: "Carmen",
        description: "Realizar revisión de seguridad del backend",
        status: "completed",
        assignedTo: "Tomás",
        priority: "medium",
        createdAt: "2025-11-30T10:15:00Z",
        dueDate: "2025-12-04T18:30:00Z"
    },
    {
        id: "16",
        createdBy: "Diego",
        description: "Actualizar dependencias del proyecto",
        status: "pending",
        assignedTo: "Elena",
        priority: "high",
        createdAt: "2025-12-02T13:00:00Z",
        dueDate: "2025-12-07T19:00:00Z"
    }
]

// FLAG ICON

export interface FlagIconProps {
    className?: string
    fill?: string
}
