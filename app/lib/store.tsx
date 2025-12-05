import { create } from 'zustand'
import {DeviceStore} from "@/app/types";


export const useDeviceStore = create<DeviceStore>((set)=>({

    //states
    isMobile: false,

    //setters
    setIsMobile: (value:boolean)=> set({isMobile: value}),
}))

