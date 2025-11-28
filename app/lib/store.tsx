import { create } from 'zustand'
import {TodoStore,Todo} from "@/app/types";


export const useDeviceStore = create((set)=>({

    //states
    isMobile: false,

    //setters
    setIsMobile: (value:boolean)=> set({isMobile: value}),
}))

export const globalTodoStore = create<TodoStore>((set)=>({
    todos: [] as Todo[],
    setTodos: (todos) => set({todos})
}))