import {EllipsisVertical} from "lucide-react";
import {Link} from "react-router-dom";
import meme from "../assets/videos/meme.mp4";

type Props = {
  image: string;
  title: string;
  channel: string;
  views: string;
  time: string;
  uploaded: string;
  className?: string;
  videourl: string;
  orientation: "vertical" | "horizontal"
};

export default function Thumbnail({ image, title, channel, views, time, orientation, uploaded, className="", videourl}: Props) {
  return (
    <Link to={videourl} className="block">
    <div className={`${orientation==="horizontal" ? "flex border w-full items-start" : "flex flex-col p-2 w-full"} group z-1 p-2 transition-transform duration-500 ease-out min-w-0 rounded-3xl gap-2 ${className}`}>

      {/* Image */}
      <div className={` ${orientation==="horizontal" ? "" : ""} flex items-end justify-end aspect-video bg-cover bg-center overflow-hidden rounded-2xl`}>
        <video src={meme} poster={image} muted loop playsInline preload="metadata" className="rounded-2xl w-full aspect-video object-cover"/>
        <p className={`${orientation==="horizontal" ? "bottom-4 right-41" : "bottom-17 right-4"} absolute  text-sm text-white font-semibold bg-black/60 w-fit h-fit px-1 rounded-sm`}>{time}</p>
      </div>
      {/* <iframe src="https://youtube.com/embed/XfdIhd1g6EI?si=DbGVKknSJtJxsVUk" title="muse" className="w-full aspect-video rounded-2xl" allowFullScreen/> */}

      {/* Info */}
      <div className={` ${orientation==="horizontal" ? "w-full h-16 justify-between flex" : "flex justify-between"}`}>

        {/* Left Algined */}
        <div className="flex gap-2 w-fit items-start">
          {/* Channel Thumnbnail */}
          {orientation==="vertical" && <div className="bg-red-100 rounded-full w-8 h-8"></div>}

          {/* Details */}
          <div className="flex flex-col items-start">
            {/* Title */}
            <h3 className="font-semibold text-white">{title}</h3>
            {/* Bottom */}
            <div className="flex gap-2 text-black">
              <p className="text-sm text-gray-500">{channel}</p>
              <p className="text-sm text-gray-500">{views}</p>
              <p className="text-sm text-gray-500">{uploaded}</p>
            </div>
          </div>
        </div>

        {/* Right Alighned */}
        <div className={` ${orientation==="horizontal" ? "opacity-0 flex items-end group-hover:opacity-100" : ""}`}><EllipsisVertical /></div>

      </div>
    </div>
    </Link>
    
  );
}