"use client";

import { notFound, useRouter } from "next/navigation";

const videos = [
  { id: "1", src: "/videos/1.mp4", title: "Video Musical 1" },
  { id: "2", src: "/videos/2.mp4", title: "Video Musical 2" },
  { id: "3", src: "/videos/3.mp4", title: "Video Musical 3" },
  { id: "4", src: "/videos/4.mp4", title: "Video Musical 4" },
  { id: "5", src: "/videos/5.mp4", title: "Video Musical 5" },
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
