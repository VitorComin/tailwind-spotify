import {
  Play,
  Shuffle,
  SkipBack,
  SkipForward,
  Repeat,
  Mic2,
  LayoutList,
  Volume,
  Laptop2,
  Maximize2,
} from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-zinc-800 border-t border-zinc-700 px-6 py-4 sticky bottom-0 w-full flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Image
          src="/8mile-album.jpeg"
          width={60}
          height={60}
          alt="Capa do álbum 8-mile do Eminem"
        />
        <div className="flex flex-col">
          <strong className="font-normal">Lose Yourself</strong>
          <span className="text-xs text-zinc-400">Eminem</span>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex items-center gap-5">
          <Shuffle size="20" className="text-zinc-200" />
          <SkipBack size="20" className="text-zinc-200" />
          <button className="w-10 h-10 flex items-center justify-center pl-2.5 p-1.5 rounded-full bg-white text-black">
            <Play />
          </button>
          <SkipForward size="20" className="text-zinc-200" />
          <Repeat size="20" className="text-zinc-200" />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs" text-zinc-400>
            0:31
          </span>
          <div className="h-1 rounded-full w-96 bg-zinc-600">
            <div className="bg-zinc-200 w-40 h-1 rounded-full"></div>
          </div>
          <span className="text-xs" text-zinc-400>
            3:21
          </span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Mic2 size={20} />
        <LayoutList size={20} />
        <Laptop2 size={20} />
        <div className="flex items-center gap-2">
          <Volume size={20} />
          <div className="h-1 rounded-full w-24 bg-zinc-600">
            <div className="bg-zinc-200 w-12 h-1 rounded-full"></div>
          </div>
        </div>
        <Maximize2 size={20} />
      </div>
    </footer>
  );
}
