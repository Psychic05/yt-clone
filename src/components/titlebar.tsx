import {Menu, Bell, Plus, Mic, Search} from 'lucide-react';
import { useSidebarStore } from '../filestore';

// type Props = {
//     onMenuclick: () => void
// }

export default function Titlebar() {

    const SidebarStore = useSidebarStore ()

    return (
        <div className="flex justify-between px-8 py-4 h-16 bg-black items-center">
            {/* Left */}
            <div className="flex gap-6 text-white items-center" >
                <button onClick={() => SidebarStore.toggle()}>
                    <Menu strokeWidth={1.75}/>
                </button>
                <img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/5/54/YouTube_dark_logo_2017.svg/960px-YouTube_dark_logo_2017.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail" 
                alt="" 
                className="h-5" />
                
            </div>



            {/* Center */}
            <div className="flex items-center gap-4">
                <div className="rounded-full flex justify-between gap-20 items-center border border-slate-800 pl-4 p-1">
                    <span className="">Search or ask a question</span>
                    <div className="text-white bg-zinc-800 p-2 rounded-full">
                        <Search/>
                    </div>
                </div>

                <div className="text-white bg-zinc-800 p-2 rounded-full">
                    <Mic/>
                </div>

            </div>


            {/* Right */}
            <div className="flex items-center gap-4 text-white">
                <div className="flex gap-2 py-2 pr-4 pl-2 rounded-full bg-zinc-800">
                    <Plus/>
                    <span className="font-semibold">Create</span>
                </div>
                <Bell/>
                <img src="https://images.unsplash.com/photo-1791114744070-f4806d5349af?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="" 
                className="h-8 rounded-full w-8"/>
            </div>


        </div>
    );
}