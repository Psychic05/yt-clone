import {House, User, TvMinimalPlay} from 'lucide-react';
import { useState } from 'react'



export default function Sidebar() {

    const [sidebaropen,setsidebaropen] = useState(false)

    return (
        <div className="flex">
            
            {/* Colapsed */}
            <div className="flex flex-col h-screen gap-6 items-center justify-items-start text-white py-8 pt-4 px-1 bg-black">
                <div className="flex flex-col items-center gap-1">
                    <House/>
                    <span className="text-xs">Home</span>
                </div>

                <div className="flex flex-col items-center gap-1">
                    <TvMinimalPlay className="-scale-x-100" style={{ transform: 'rotate(180deg)' }}/>
                    <span className="text-xs">Subscriptions</span>
                </div>

                <div className="flex flex-col items-center gap-1">
                    <User/>
                    <span className="text-xs">You</span>
                </div>

            </div>


            {/* Full */}
            <div className="">


            </div>
        
            


        </div>
    )
}