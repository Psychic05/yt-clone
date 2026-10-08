import Videoplayer from "./videoplayer"
import Videotitle from "./videotitle"
import Comments from "./comments"
import Thumbnail from "./thumbnail"

  const array_videos=[{id:"1", image:"https://picsum.photos/seed/video1/640/360", title:"title 1", channel:"channel 1", views:"10", time:"2:00", uploaded:"2wks"},
    {id:"2", image:"https://picsum.photos/seed/video2/640/360", title:"title 2", channel:"channel 2", views:"20", time:"4:34", uploaded:"4wks",},
    {id:"3", image:"https://picsum.photos/seed/video3/640/360", title:"title 3", channel:"channel 3", views:"30", time:"5:76", uploaded:"7wks",},
    {id:"4", image:"https://picsum.photos/seed/video4/640/360", title:"title 3", channel:"channel 3", views:"30", time:"5:76", uploaded:"7wks",},
    {id:"5", image:"https://picsum.photos/seed/video5/640/360", title:"title 3", channel:"channel 3", views:"30", time:"5:76", uploaded:"7wks",},
    {id:"6", image:"https://picsum.photos/seed/video6/640/360", title:"title 3", channel:"channel 3", views:"30", time:"5:76", uploaded:"7wks",}
  ]

const thumbnailcolorsetup = "relative before:self-center before:justify-self-center before:absolute before:w-[80%] before:h-[80%] hover:before:w-full hover:before:h-full before:rounded-2xl before:-z-1 before:transition-all before:opacity-0 hover:before:opacity-100 before:duration-200"
  
const thumnbailhovercolor = [
    "before:bg-orange-600/30",
    "before:bg-blue-800/30",
    "before:bg-green-700/30",
    "before:bg-purple-800/30",
    "before:bg-zinc-400/30",
    "before:bg-orange-600/30"
  ]

export default function VideoPage () {
    return (
        <div className="flex flex-col">  
            <Videoplayer/>

            {/* other things */}
            <div className="flex w-full gap-4">

                {/* title */}
                <div className="flex flex-col w-full">
                    <Videotitle/>
                    <Comments/>
                </div>

                {/* recommendations */}
                <div className="flex flex-col items-start h-fit p-2 bg-black w-40">
                    {array_videos.map((video, i) => (
                        <Thumbnail  key={video.id}
                                    videourl={`/watch/${video.id}`}
                                    image={video.image}
                                    title={video.title}
                                    channel={video.channel}
                                    views={video.views}
                                    time={video.time}
                                    uploaded={video.uploaded}
                                    className={`${thumbnailcolorsetup} ${thumnbailhovercolor[i % thumnbailhovercolor.length]}`}
                            />
                          ))
                          }
                </div>


            </div>
        </div>

    )
}