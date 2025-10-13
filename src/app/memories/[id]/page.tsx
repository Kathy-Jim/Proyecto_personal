import Image from "next/image";

interface MemoryPageProps {
  params: { id: string };
}

export default function MemoryPage({ params }: MemoryPageProps) {
  const { id } = params;

  const memories = {
    "1": {
      title: "Bajo un árbol en un día de cumpleaños",
      description:
        "Un pequeño erizo cumpliría 15 años un viernes de agosto, el primer día de este interesante mes, y esta foto demuestra el inicio de muchas aventuras más :3.",
      video: ["/memories/extra01.mp4"],
    },
    "2": {
      title: "Recuerdo importante",
      description: "Una experiencia que nunca olvidaré...",
      images: ["/memories/2.jpg"],
    },
    "3": {
      title: "Momento único",
      description: "Lo mejor de aquel viaje...",
      images: ["/memories/extra3.jpg"],
    },
    "4": {
      title: "Día especial",
      description: "Un día que siempre recordaré...",
      images: ["/memories/4.jpg"],
    },
    "5": {
      title: "Aventura inolvidable",
      description: "Cada instante fue mágico...",
      images: ["/memories/extra5.jpg"],
    },
    "6": {
      title: "Recuerdos compartidos",
      description: "Momentos que atesoro contigo...",
      images: ["/memories/6.jpg"],
    },
    "7": {
      title: "Instante perfecto",
      description: "Un momento que quedó grabado en mi corazón...",
      images: ["/memories/7.jpg"],
    },
    "8": {
      title: "Paisaje impresionante",
      description: "La belleza de la naturaleza en su máxima expresión...",
      images: ["/memories/8.jpg"],
    },
    "9": {
      title: "Risa contagiosa",
      description: "Un momento de pura alegría y diversión...",
      video: ["/memories/extra00.mp4"],
    },
    "10": {
      title: "Encuentro inesperado",
      description: "Una sorpresa que cambió mi día para mejor...",
      video: ["/memories/extra10.mp4"],
    },
    "11": {
      title: "Atardecer mágico",
      description: "Colores que pintan el cielo y el alma...",
      images: ["/memories/extra11.jpg"],
    },
    "12": {
      title: "Amistad verdadera",
      description: "Momentos compartidos con amigos que son familia...",
      images: ["/memories/12.jpg"],
    },
    "13": {
      title: "Noche estrellada",
      description: "Bajo el manto de estrellas, sueños y deseos...",
      images: ["/memories/extra13.jpg"],
    },
    "14": { 
      title: "Día de playa",
      description: "Sol, arena y mar: la combinación perfecta...",
      images: ["/memories/extra14.jpg"],
    },
    "15": {
      title: "Fiesta sorpresa", 
      description: "Un día lleno de sorpresas y alegría...",
      images: ["/memories/extra15.jpg"],
    },
  };

  const memory = memories[id];

  if (!memory)
    return <p className="text-center mt-10">Memoria no encontrada.</p>;

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-8">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-10 max-w-5xl w-full">
        {/* 📸 Imagen o 🎥 Video a la izquierda */}
        <div className="flex-shrink-0 w-full sm:w-1/2 flex justify-center">
          {memory.video ? (
            <video
              src={memory.video[0]}
              controls
              autoPlay
              loop
              muted
              className="rounded-xl shadow-lg object-cover w-[600px] h-[550px]"
            />
          ) : (
            <Image
              src={memory.images[0]}
              alt={memory.title}
              width={600}
              height={400}
              className="rounded-xl shadow-lg object-cover"
            />
          )}
        </div>

        {/* 📝 Texto a la derecha */}
        <div className="flex flex-col justify-center items-center sm:w-1/2 text-center">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">
            {memory.title}
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-md">
            {memory.description}
          </p>
        </div>
      </div>
    </main>
  );
}