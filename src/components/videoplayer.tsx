
import {TvMinimal, Pause, Play, Volume2, Captions, Settings, Airplay, Maximize2} from "lucide-react"



export default function Videoplayer () {
    return (
        <div className="w-full group aspect-video rounded-sm flex items-end p-2 bg-red-100">
            
            {/* controls */}
            <div className="opacity-0 transition-all duration-200 flex group-hover:opacity-100 flex-col gap-2 w-full">
                
                {/* seek bar */}
                <div className="flex items-center">
                    <div className="w-full h-0.75 overflow-visible bg-zinc-900/50"></div>
                    <div className="absolute bg-red-600 rounded-full w-3 h-3 "></div>
                </div>

                {/* options */}
                <div className="flex justify-between">

                    {/* Left aligned */}
                    <div className="flex h-fit items-center gap-2 text-white">

                        {/* pause/play */}
                        <div className="text-white p-1 flex rounded-full bg-zinc-800/30 items-center">
                            <Play fill="white" className="w-fit h-fit px-1 rounded-full  py-1 hover:bg-zinc-300/30"/>
                        </div>
                        {/* Volume */}
                        <div className="text-white p-1 flex rounded-full bg-zinc-800/30 items-center">
                            <Volume2 fill="white" className="w-fit h-fit px-1 rounded-full  py-1 hover:bg-zinc-300/30" strokeWidth={1.5} />
                        </div>
                        {/* timestamp */}
                        <div className="text-sm font-medium text-white p-1 flex rounded-full bg-zinc-800/30 items-center">
                            <div className="w-fit h-fit px-3 rounded-full  py-1.5 hover:bg-zinc-300/30">4:33/21:87</div>
                        </div>
                    </div>

                    {/* Right aligned */}
                    <div className="text-white p-1 flex rounded-full bg-zinc-800/30 items-center">
                        <Pause className="w-fit h-fit px-3 rounded-full  py-1 hover:bg-zinc-300/30"/>
                        <Captions strokeWidth={1.5} className="w-fit h-fit px-3 rounded-full  py-1 hover:bg-zinc-300/30" />
                        <Settings strokeWidth={1.5} className="w-fit h-fit px-3 rounded-full  py-1 hover:bg-zinc-300/30"/>
                        <TvMinimal strokeWidth={1.5} className="w-fit h-fit px-3 rounded-full  py-1 hover:bg-zinc-300/30"/>
                        <Airplay strokeWidth={1.5} className="w-fit h-fit px-3 rounded-full  py-1 hover:bg-zinc-300/30"/>
                        <Maximize2 strokeWidth={1.5} className="w-fit h-fit px-3 rounded-full  py-1 hover:bg-zinc-300/30"/>
                    </div>
                </div>
            </div>

        </div>

    )


}