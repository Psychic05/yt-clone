import {EllipsisVertical} from 'lucide-react';
import {Link} from "react-router-dom"

type Props = {
  image: string;
  title: string;
  channel: string;
  views: string;
  time: string;
  uploaded: string;
  className?: string;
  videourl: string;
};

export default function Thumbnail({ image, title, channel, views, time, uploaded, className="", videourl}: Props) {
  return (
    <Link to={videourl} className="block">
    <div className={`z-1 transition-transform duration-500 ease-out flex flex-col w-full h-fit min-w-0 p-2 rounded-2xl gap-2 ${className}`}>

      {/* Image */}
      <div className="flex items-end justify-end p-2 mt-2 aspect-3.5/2 bg-cover bg-center overflow-hidden rounded-2xl" style={{ backgroundImage: `url(${image})` }}>
        <p className="text-sm text-white font-semibold bg-black/60 w-fit h-fit px-1 rounded-sm">{time}</p>
      </div>

      {/* Info */}
      <div className="flex gap-6 justify-between items-center">

        {/* Left Algined */}
        <div className="flex gap-2 items-center">
          {/* Channel Thumnbnail */}
          <div className="bg-red-100 rounded-full w-8 h-8"></div>

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
        <div className=""><EllipsisVertical /></div>

      </div>
    </div>
    </Link>
    
  );
}