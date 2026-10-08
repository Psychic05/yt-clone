import {House, ChevronRight, SquareUserRound, RotateCcwClock, ListVideo, ShoppingBag, Music2, Flag} from 'lucide-react';
import { useLocation } from 'react-router-dom';


export default function Sidebarfull () {
    

    const { pathname } = useLocation()
    const isWatchPage = pathname.startsWith("/watch")

    return (
        <div className={isWatchPage ? "z-40 inset fixed top-16 h-full" : ""}>
        <div className="flex flex-col h-full w-70 items-start pr-2 justify-items-start text-white bg-black">
            
            <div className="w-full h-fit flex flex-col p-4 pt-2 pb-4 border-b border-zinc-700">
                <div className="flex items-center gap-4 hover:bg-zinc-800 w-full p-2 rounded-lg ">
                    <House strokeWidth={1.75}/>
                    <span className="text-s font-light">Home</span>
                </div>
            </div>

            <div className="w-full h-fit flex flex-col p-4 pt-2 pb-4 border-b  border-zinc-700">
                <div className="flex items-center gap-2 hover:bg-zinc-800 w-full p-2 rounded-lg ">
                    <span className="font-semibold">Subscriptions</span>
                    <ChevronRight size={16} />
                </div>
                <div className="flex items-center gap-4 hover:bg-zinc-800 w-full p-2 rounded-lg ">
                    <img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/6/64/3B1B_Logo.svg/500px-3B1B_Logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail" 
                    alt="" 
                    className="h-6" />
                    <span className="text-sm font-light">3Blue1Brown</span>
                </div>
                <div className="flex items-center gap-4 hover:bg-zinc-800 w-full p-2 rounded-lg ">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKoDx7pR6UPiCJuU6B1PuMRVsNs6ZtW17aIdajEE0jO5c8ray3xj7_HgA&s=10" 
                    alt="" 
                    className="h-6 rounded-full" />
                    <span className="text-sm font-light">9to5Mac</span>
                </div>
                <div className="flex items-center gap-4 hover:bg-zinc-800 w-full p-2 rounded-lg ">
                    <div className="h-6 w-6 rounded-full">
                        <img src="https://i.pinimg.com/736x/91/6f/ca/916fca8118fae04c2e815b690674020d.jpg" 
                        alt="" 
                        className="image-fit" />
                    </div>
                    <span className="text-sm font-normal">A24</span>
                </div>
            </div>

            <div className="w-full h-fit flex flex-col p-4 pt-2 pb-4 border-b border-zinc-700">
                <div className="flex items-center gap-2 hover:bg-zinc-800 w-full p-2 rounded-lg ">
                    <span className="font-semibold">You</span>
                    <ChevronRight size={16} />
                </div>
                <div className="flex items-center gap-4 hover:bg-zinc-800 w-full p-2 rounded-lg ">
                    <SquareUserRound strokeWidth={1.75}/>
                    <span className="text-sm font-light">Your Channel</span>
                </div>
                <div className="flex items-center gap-4 hover:bg-zinc-800 w-full p-2 rounded-lg ">
                    <RotateCcwClock strokeWidth={1.75}/>
                    <span className="text-sm font-light">History</span>
                </div>
                <div className="flex items-center gap-4 hover:bg-zinc-800 w-full p-2 rounded-lg ">
                    <ListVideo strokeWidth={1.75}/>
                    <span className="text-sm font-light">Playlists</span>
                </div>

            </div>

            <div className="w-full h-fit flex flex-col p-4 pt-2 pb-4 border-b border-zinc-700">
                <div className="flex items-center gap-2 hover:bg-zinc-800 w-full p-2 rounded-lg ">
                    <span className="font-semibold">Explore</span>
                </div>
                <div className="flex items-center gap-4 hover:bg-zinc-800 w-full p-2 rounded-lg ">
                    <ShoppingBag strokeWidth={1.75}/>
                    <span className="text-sm font-light">Shopping</span>
                </div>
                <div className="flex items-center gap-4 hover:bg-zinc-800 w-full p-2 rounded-lg ">
                    <Music2 strokeWidth={1.75}/>
                    <span className="text-sm font-light">Music</span>
                </div>
            </div>

            <div className="w-full h-fit flex flex-col p-4 pt-2 pb-4 border-b border-zinc-700">
                <div className="flex items-center gap-2 hover:bg-zinc-800 w-full p-2 rounded-lg ">
                    <span className="font-semibold">More from YouTube</span>
                </div>
                <div className="flex items-center gap-4 hover:bg-zinc-800 w-full p-2 rounded-lg ">
                    <img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6a/Youtube_Music_icon.svg/1280px-Youtube_Music_icon.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail&_=20230802004652"
                    alt=""
                    className="h-6 w-6" />
                    <span className="text-sm font-light">YouTube Music</span>
                </div>
            </div>

            <div className="w-full h-fit flex flex-col p-4 pt-2 pb-4">
                <div className="flex items-center gap-4 hover:bg-zinc-800 w-full p-2 rounded-lg ">
                    <Flag strokeWidth={1.75}/>
                    <span className="text-sm font-light">Report history</span>
                </div>
            </div>

            
        </div>
        </div>
    )

}

