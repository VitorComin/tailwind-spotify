import Image from "next/image";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { Sidebar } from "@/app/components/Sidebar.";
import { Footer } from "@/app/components/Footer";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className="flex items-center gap-4">
            <button className="rounded-full bg-black/40 p-1">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/40 p-1">
              <ChevronRight />
            </button>
          </div>

          <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <a
              href="#"
              className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                src="/8mile-album.jpeg"
                width={104}
                height={104}
                alt="Capa do álbum 8-mile do Eminem"
              />
              <strong>8-Mile</strong>
              <button className="w-10 h-10 flex items-center justify-center pl-2.5 p-1.5 rounded-full bg-green-400 text-black ml-auto mr-6 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                src="/8mile-album.jpeg"
                width={104}
                height={104}
                alt="Capa do álbum 8-mile do Eminem"
              />
              <strong>8-Mile</strong>
              <button className="w-10 h-10 flex items-center justify-center pl-2.5 p-1.5 rounded-full bg-green-400 text-black ml-auto mr-6 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                src="/8mile-album.jpeg"
                width={104}
                height={104}
                alt="Capa do álbum 8-mile do Eminem"
              />
              <strong>8-Mile</strong>
              <button className="w-10 h-10 flex items-center justify-center pl-2.5 p-1.5 rounded-full bg-green-400 text-black ml-auto mr-6 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                src="/8mile-album.jpeg"
                width={104}
                height={104}
                alt="Capa do álbum 8-mile do Eminem"
              />
              <strong>8-Mile</strong>
              <button className="w-10 h-10 flex items-center justify-center pl-2.5 p-1.5 rounded-full bg-green-400 text-black ml-auto mr-6 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                src="/8mile-album.jpeg"
                width={104}
                height={104}
                alt="Capa do álbum 8-mile do Eminem"
              />
              <strong>8-Mile</strong>
              <button className="w-10 h-10 flex items-center justify-center pl-2.5 p-1.5 rounded-full bg-green-400 text-black ml-auto mr-6 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                src="/8mile-album.jpeg"
                width={104}
                height={104}
                alt="Capa do álbum 8-mile do Eminem"
              />
              <strong>8-Mile</strong>
              <button className="w-10 h-10 flex items-center justify-center pl-2.5 p-1.5 rounded-full bg-green-400 text-black ml-auto mr-6 invisible group-hover:visible">
                <Play />
              </button>
            </a>
          </div>

          <h2 className="font-semibold text-2xl mt-10">Made for you</h2>

          <div className="grid grid-cols-5 gap-4 mt-4">
            <a
              href="#"
              className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"
            >
              <Image
                src="/8mile-album.jpeg"
                className="w-full"
                width={104}
                height={104}
                alt="Capa do álbum 8-mile do Eminem"
              />
              <strong className="font-semibold">8-Mile</strong>
              <span className="text-sm text-zinc-500">Eminem</span>
            </a>
            <a
              href="#"
              className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"
            >
              <Image
                src="/8mile-album.jpeg"
                className="w-full"
                width={104}
                height={104}
                alt="Capa do álbum 8-mile do Eminem"
              />
              <strong className="font-semibold">8-Mile</strong>
              <span className="text-sm text-zinc-500">Eminem</span>
            </a>
            <a
              href="#"
              className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"
            >
              <Image
                src="/8mile-album.jpeg"
                className="w-full"
                width={104}
                height={104}
                alt="Capa do álbum 8-mile do Eminem"
              />
              <strong className="font-semibold">8-Mile</strong>
              <span className="text-sm text-zinc-500">Eminem</span>
            </a>
            <a
              href="#"
              className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"
            >
              <Image
                src="/8mile-album.jpeg"
                className="w-full"
                width={104}
                height={104}
                alt="Capa do álbum 8-mile do Eminem"
              />
              <strong className="font-semibold">8-Mile</strong>
              <span className="text-sm text-zinc-500">Eminem</span>
            </a>
            <a
              href="#"
              className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"
            >
              <Image
                src="/8mile-album.jpeg"
                className="w-full"
                width={104}
                height={104}
                alt="Capa do álbum 8-mile do Eminem"
              />
              <strong className="font-semibold">8-Mile</strong>
              <span className="text-sm text-zinc-500">Eminem</span>
            </a>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
