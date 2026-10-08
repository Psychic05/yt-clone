import {ListSortDescending, ChevronDown, EllipsisVertical, ThumbsUp, ThumbsDown} from "lucide-react";


export default function Comments () {
    return (
        <div className="flex flex-col w-full gap-8 pt-2 p-4">
            
            {/* title */}
            <div className="flex items-center gap-8 w-full">
                <p className="font-semibold text-white text-xl">44 Comments</p>
                <button className="text-white gap-2 text-sm flex items-center font-semibold"><ListSortDescending strokeWidth={2} size={24}/><p className="">Sort by</p></button>
            </div>

            {/* write comment */}
            <div className="flex items-center gap-4 w-full">
                <div className="bg-white w-8 h-8 rounded-full"></div>
                <div className="flex flex-col items-start w-full ">
                    <p className="font-semibold text-sm">Add a comment</p>
                    <div className="w-full h-0.5 bg-zinc-600"></div>
                </div>
            </div>

            {/* all other comments */}
            <div className="flex flex-col w-full h-fit gap-6">

                {/* individual comment */}
                <div className=" flex items-start justify-between">
                    {/* info */}
                    <div className="flex gap-4">

                        {/* profile photo */}
                        <div className="flex flex-col items-center gap-2 h-fit">
                            <div className="w-10 h-10 bg-white rounded-full"></div>
                            <div className="w-1 h-full bg-zinc-400"></div>
                        </div>

                
                        {/* text */}
                        <div className="flex flex-col items-start gap-6">
                            <div className="flex flex-col items-start">
                                <div className="flex items-end gap-2">
                                    <p className="text-white text-sm font-semibold">@Name</p>
                                    <p className="text-xs font-light text-zinc-300">6 hours ago</p>
                                </div>

                                <div className="text-white text-sm font-medium">Actual comment</div>
                                <div className="text-sm font-medium text-zinc-400 pb-2">Translate to english</div>

                                <div className="text-white flex gap-2 items-center">
                                    <ThumbsUp size={16}/>
                                    <div className="text-xs pl-1 pr-3 text-zinc-300">34</div>
                                    <ThumbsDown size={16} className=""/>
                                    <div className="text-xs font-semibold pl-6">Reply</div>
                                </div>
                            </div>

                            <div className="text-white flex items-center gap-2">
                                <p className="text-sm font-bold">1 Reply</p>
                                <ChevronDown strokeWidth={2} size={28} />
                            </div>
                        </div>


                    </div>

                    {/* dots */}
                    <div className="w-fit h-fit">
                        <button className="text-white"><EllipsisVertical strokeWidth={1.5} /></button>
                    </div>
                </div>

                <div className=" flex items-start justify-between">
                    {/* info */}
                    <div className="flex gap-4">

                        {/* profile photo */}
                        <div className="flex flex-col items-center gap-2 h-fit">
                            <div className="w-10 h-10 bg-white rounded-full"></div>
                            <div className="w-1 h-full bg-zinc-400"></div>
                        </div>

                
                        {/* text */}
                        <div className="flex flex-col items-start gap-6">
                            <div className="flex flex-col items-start">
                                <div className="flex items-end gap-2">
                                    <p className="text-white text-sm font-semibold">@Name</p>
                                    <p className="text-xs font-light text-zinc-300">6 hours ago</p>
                                </div>

                                <div className="text-white text-sm font-medium">Actual comment</div>
                                <div className="text-sm font-medium text-zinc-400 pb-2">Translate to english</div>

                                <div className="text-white flex gap-2 items-center">
                                    <ThumbsUp size={16}/>
                                    <div className="text-xs pl-1 pr-3 text-zinc-300">34</div>
                                    <ThumbsDown size={16} className=""/>
                                    <div className="text-xs font-semibold pl-6">Reply</div>
                                </div>
                            </div>

                            <div className="text-white flex items-center gap-2">
                                <p className="text-sm font-bold">1 Reply</p>
                                <ChevronDown strokeWidth={2} size={28} />
                            </div>
                        </div>


                    </div>

                    {/* dots */}
                    <div className="w-fit h-fit">
                        <button className="text-white"><EllipsisVertical strokeWidth={1.5} /></button>
                    </div>
                </div>

                <div className=" flex items-start justify-between">
                    {/* info */}
                    <div className="flex gap-4">

                        {/* profile photo */}
                        <div className="flex flex-col items-center gap-2 h-fit">
                            <div className="w-10 h-10 bg-white rounded-full"></div>
                            <div className="w-1 h-full bg-zinc-400"></div>
                        </div>

                
                        {/* text */}
                        <div className="flex flex-col items-start gap-6">
                            <div className="flex flex-col items-start">
                                <div className="flex items-end gap-2">
                                    <p className="text-white text-sm font-semibold">@Name</p>
                                    <p className="text-xs font-light text-zinc-300">6 hours ago</p>
                                </div>

                                <div className="text-white text-sm font-medium">Actual comment</div>
                                <div className="text-sm font-medium text-zinc-400 pb-2">Translate to english</div>

                                <div className="text-white flex gap-2 items-center">
                                    <ThumbsUp size={16}/>
                                    <div className="text-xs pl-1 pr-3 text-zinc-300">34</div>
                                    <ThumbsDown size={16} className=""/>
                                    <div className="text-xs font-semibold pl-6">Reply</div>
                                </div>
                            </div>

                            <div className="text-white flex items-center gap-2">
                                <p className="text-sm font-bold">1 Reply</p>
                                <ChevronDown strokeWidth={2} size={28} />
                            </div>
                        </div>


                    </div>

                    {/* dots */}
                    <div className="w-fit h-fit">
                        <button className="text-white"><EllipsisVertical strokeWidth={1.5} /></button>
                    </div>
                </div>

            </div>
            
        </div>

    )


}