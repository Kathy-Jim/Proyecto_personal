import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { Key } from "react";

interface MemoryPageProps {
  params: { id: string };
}

export default function MemoryPage({ params }: MemoryPageProps) {
  const { id } = params;

  // Aquí puedes personalizar tus memorias:
  const memories = {
    "1": {
      title: "Mi primera memoria",
      description: "Este fue un día muy especial...",
      images: ["/memories/1.jpg", "/memories/extra1.jpg"],
    },
    "2": {
      title: "Recuerdo importante",
      description: "Una experiencia que nunca olvidaré...",
      images: ["/memories/2.jpg"],
    },
    "3": {
      title: "Momento único",
      description: "Lo mejor de aquel viaje...",
      images: ["/memories/3.webp",],
    },
  };

  const memory = memories[id];

  if (!memory) return <p className="text-center mt-10">Memoria no encontrada.</p>;

  return (
    <main className="flex flex-col items-center p-6 min-h-screen bg-gray-50">
      <h1 className="text-4xl font-bold mb-4">{memory.title}</h1>
      <p className="text-gray-600 mb-6 max-w-2xl text-center">{memory.description}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {memory.images.map((src: string | StaticImport, i: Key | null | undefined) => (
          <Image
            key={i}
            src={src}
            alt={memory.title}
            width={600}
            height={400}
            className="rounded-xl shadow-md object-cover"
          />
        ))}
      </div>
    </main>
  );
}
