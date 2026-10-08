import {create} from "zustand"

interface SidebarState {

    isOpen: boolean;

    setIsOpen: (open:boolean) => void

    toggle: () => void
}

export const useSidebarStore = create <SidebarState> () ((set) => ({

    isOpen: true,
    setIsOpen: (isOpen) => set ({isOpen}),
    toggle: () => set ((state) => ({...state, isOpen: !state.isOpen}))
})) 

