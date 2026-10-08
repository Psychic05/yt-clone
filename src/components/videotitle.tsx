import {ThumbsUp, ThumbsDown, Forward, Bookmark, Ellipsis, Astroid} from "lucide-react"



export default function Videotitle () {
    return (
        <div className="flex flex-col w-full h-fit p-4 items-start gap-3">
            
            {/* title */}
            <div className="font-semibold text-white text-xl">
            Avengers 
            </div>

            {/* details */}
            <div className="flex w-full items-center justify-between">

                {/* Left Side */}
                <div className="flex gap-2 items-center  justify-between">

                    {/* Channel Thumbanil */}
                    <div className="rounded-full bg-white w-10 h-10">

                    </div>

                    {/* channel */}
                    <div className="flex flex-col items-start pr-4">
                        <p className="font-bold text-white text-md">Bnf TV</p>
                        <p className="font-medium text-zinc-200 text-xs">4k Subs</p>
                    </div>

                    {/* sub button */}
                    <button className="bg-white px-4 py-3 rounded-full text-black text-sm font-bold">Subscribe</button>

                </div>

                {/* Right Side */}
                <div className="flex gap-2 text-white">

                    {/* like/dislike */}
                    <div className="flex items-center">
                        <button className="flex gap-2 pl-5 pr-3 py-3 bg-zinc-700 rounded-l-full border-r border-zinc-400 hover:bg-zinc-500"><ThumbsUp/><p className="">33</p></button>
                        
                        <button className="pr-5 py-3 pl-3 bg-zinc-700 rounded-r-full hover:bg-zinc-500"><ThumbsDown/></button>
                    </div>
                    <button className="flex w-12 h-12 items-center justify-center bg-zinc-700 rounded-full hover:bg-zinc-500"><Forward strokeWidth={2} /></button>
                    <button className="flex w-12 h-12 items-center justify-center bg-zinc-700 rounded-full hover:bg-zinc-500"><Astroid strokeWidth={0.1} fill="white"/></button>
                    <button className="flex w-12 h-12 items-center justify-center bg-zinc-700 rounded-full hover:bg-zinc-500"><Bookmark strokeWidth={2} /></button>
                    <button className="flex w-12 h-12 items-center justify-center bg-zinc-700 rounded-full hover:bg-zinc-500"><Ellipsis strokeWidth={2}  /></button>

                </div>


            </div>

            {/* Description */}
            <div className="flex flex-col items-start w-full h-fit p-2.5 bg-zinc-700 hover:bg-orange-800 rounded-lg">
                <div className="text-white font-semibold text-sm flex gap-2">
                    <div className="">44 views</div>
                    <div className="">17hr ago</div>
                    <div className="text-zinc-400">#clone</div>
                </div>
                <div className="text-white text-sm font-medium">Description of the video</div>
            </div>

        </div>

    )


}