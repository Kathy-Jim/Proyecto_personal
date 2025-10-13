"use client";

import { notFound, useRouter } from "next/navigation";

const videos = [
  { id: "1", src: "/videos/1.mp4", title: "21 Guns" },
  { id: "2", src: "/videos/2.mp4", title: "Video Musical 2" },
  { id: "3", src: "/videos/3.mp4", title: "Pa Siempre" },
  { id: "4", src: "/videos/4.mp4", title: "Twin skies" },
  { id: "5", src: "/videos/5.mp4", title: "Video Musical 5" },
  { id: "6", src: "/videos/6.mp4", title: "Video Musical 6" },
  { id: "7", src: "/videos/7.mp4", title: "Video Musical 7" },
  { id: "8", src: "/videos/8.mp4", title: "Video Musical 8" },
  { id: "9", src: "/videos/9.mp4", title: "Run it" },
  { id: "10", src: "/videos/10.mp4", title: "Video Musical 10" },
  { id: "11", src: "/videos/11.mp4", title: "Video Musical 11" },
  { id: "12", src: "/videos/12.mp4", title: "Video Musical 12" },
  { id: "13", src: "/videos/13.mp4", title: "Video Musical 13" },
  { id: "14", src: "/videos/14.mp4", title: "Video Musical 14" },
  { id: "15", src: "/videos/15.mp4", title: "Video Musical 15" },
];

export default function VideoPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const video = videos.find((v) => v.id === params.id); // ✅ usar params directamente

  if (!video) return notFound();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">{video.title}</h1>

      <video
        src={video.src}
        autoPlay
        muted
        loop
        controls
        playsInline
        className="w-full max-w-4xl rounded-2xl shadow-xl border border-gray-700"
      />

      <button
        onClick={() => router.back()}
        className="mt-8 px-5 py-2 bg-white text-gray-900 font-medium rounded-lg hover:bg-gray-200 transition"
      >
        ⬅ Volver
      </button>
    </main>
  );
}
