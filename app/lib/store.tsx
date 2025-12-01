import { create } from 'zustand'
import {DeviceStore,TaskStore,TaskSection} from "@/app/types";


export const useDeviceStore = create<DeviceStore>((set)=>({

    //states
    isMobile: false,

    //setters
    setIsMobile: (value:boolean)=> set({isMobile: value}),
}))

export const useTasksStore = create<TaskStore>((set) => ({
    tasks: [],
    setTasks: (value: TaskSection[]) => set({ tasks: value }),
}));