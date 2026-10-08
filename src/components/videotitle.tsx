



export default function Videotitle () {
    return (
        <div className="flex flex-col w-full aspect-video border p-4 items-start gap-2">
            
            {/* title */}
            <div className="text-xl font-bold text-white">
            Avengers 
            </div>

            {/* details */}
            <div className="flex items-center justify-between">

                {/* Left Side */}
                <div className="flex gap-2 items-center">

                    {/* Thumbanil */}
                    <div className="rounded-full bg-white w-12 h-12">

                    </div>

                    {/* channel */}
                    <div className="flex flex-col items-start">
                        <p className="font-semibold text-white text-md">Bnf TV</p>
                        <p className="font-light text-zinc-400 text-sm">4k Subs</p>
                    </div>

                </div>

                {/* Right Side */}
                <div className="">

                </div>


            </div>

            {/* Description */}
            <div className="">

            </div>

        </div>

    )


}