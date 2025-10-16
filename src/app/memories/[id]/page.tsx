import Image from "next/image";

interface MemoryPageProps {
  params: { id: string };
}

export default function MemoryPage({ params }: MemoryPageProps) {
  const { id } = params;

  const memories = {
    "1": {
      title: "Bajo un árbol en un día de cumpleaños🦔💙",
      description:
        "Un pequeño erizo cumpliría 15 años un viernes de agosto, el primer día de este interesante mes, y esta foto demuestra el inicio de muchas aventuras más :3.",
      video: ["/memories/extra01.mp4"],
    },
    "2": {
      title: "Una fotito meses después💜, demostrando que sí, nos expresamos a tiempo🦔",
      description: "La sonrisa que nunca dejaré de amar, provocar, escuchar y cuidar; un momento espóntaneo con nuestra camara, captando nuestra naturaleza tierna y linda de ambos, el querer captar este momento fue hermoso para mi haciendo que se expresará aquí y ahora <3",
      images: ["/memories/2.jpg"],
    },
    "3": {
      title: "Un giralsolcito para ti 🌻",
      description: "Nuestra celebración en diciembre, un día en donde nos vimos muyyyy tempranoooooo y nuestros minis yos estuvieron presentes en nuestra linda salida :3, y culmino la salidita con una florcita que a ti te gusta mucho <3, y casualmente mientras eramos amigos lo supe, recuerdo que quedaste sin palabras y escogiste la flor dandome luego un abrazo fuerte 🌻💫🦔",
      images: ["/memories/extra3.jpg"],
    },
    "4": {
      title: "Nuestro primer San Valentín 💜",
      description: "Un pequeño baile con la primera canción que te dedique, también la entrega de regalos a la persona que mejoró mi año y me hizo mejor :3. Unas horitas a tu lado fueron suficientes para hacer este día fuese sumamente hermoso😸💜🌻 ",
      images: ["/memories/4.jpg"],
    },
    "5": {
      title: "Primera comida en Donkeys🫏🥛🍓",
      description: "Fue una sorpresa de tu parte que me encanto, ese día se celebraron nuestros lindos 6 meses juntos, un recuerdo chistoso fue la limonanada de fresaaaaaa muaajajajajajaa, pero la probaste por mi js,y una canción se hizo presente en la story de instagram que representa mucho nuestro sentir <3",
      images: ["/memories/extra5.jpg"],
    },
    "6": {
      title: "Momentitos divertidos con las niñas y mi mamá🍡",
      description: "Iriamos a comer al BK, y hariamos una competencia de sopas de letras en equipos, y logramos ganar por muchooo, aunque la mayoría dijo que era trampaaaaaaa, gran mentiraaaa jajajaj, fuimos coronados por las niñas :3",
      images: ["/memories/6.jpg"],
    },
    "7": {
      title: "Nuestra primera colaboración artistica en publico jsjsjs🎸🎤",
      description: "Nuestra primera interpretación con la leve confusión de grados de estudios JAJAJA, pero aparte de eso, fue el momento en que un abrazo fue eterno y un beso en mi frente llegaría, inclusive una mini pelea con mi madre con respecto si eramos algo más que amigos, obvio en ese momento no eramos nada, pero ya era un poco más que claro que si había algo más jeje😸🦔🎸",
      images: ["/memories/7.jpg"],
    },
    "8": {
      title: "Un live-action inolvidable🎙️📸",
      description: "Un viaje contigo a ver una pelicula muy esperada por ambos, justo el día de nuestro mesiversario jsjs, 16 días luego de mi cumpleaños número 18 y más cerca de tus 16 añitoss awwww🦔💙🐲",
      images: ["/memories/8.jpg"],
    },
    "9": {
      title: "Sonic 3🦔💙🏍️",
      description: "UY y esto señoras y señores fue la primer pelí en conjunto que hicimos y fue nada más ni nada menos que Sonic 3!!!!, fue supremaaaaaaa y obvio no pudo faltar un video de reaction y gritossss por apariciones inesperadas de personajes que anhelabamos ver (Apareci shoooo >:3)",
      video: ["/memories/extra00.mp4"],
    },
    "10": {
      title: "Una meta que cumplir, ir a la playita juntos🌊🏰",
      description: "Un corazón con las iniciales de nuestros nombres, representando el deseo de estar juntos toda la vida a pesar de los problemas que tratarán de borrar nuestros recuerdos 🌊🦔",
      video: ["/memories/extra10.mp4"],
    },
    "11": {
      title: "Tu primer helado de Boston🍦",
      description: "Un heladito que probe tanta veces tomo sentido una vez que lo compartí contigo en una salida improvisada con mi mamá, fue un momento sumamente lindo y captado en camaras y obvio, la IA tendría que ver un poquito con la recreación del momento🦔💙🍦",
      images: ["/memories/extra11.jpg"],
    },
    "12": {
      title: "2 días después de nuestro Valentine's Day🌹",
      description: "Una salida espontanea a un sitio interesante jsjsjs, al parque Bicentenario, donde unas flores rojas se harían presentes que fue algo sumamente lindo de tu parteeeee🌹🦔",
      images: ["/memories/12.jpg"],
    },
    "13": {
      title: "Fotito together 💙",
      description: "Un momento en donde una pregunta: can we take a photo together? Y este fue el hermoso resultado <3, y muchas más tendriamos así jeje :3",
      images: ["/memories/13.jpg"],
    },
    "14": { 
      title: "Soditas con nuestro segundo name🍾",
      description: "Una busqueda intensiva por soditas por el dollarcity, encontramos curiosamente unas con nuestro segundo nombre y fue sumamente lindo aceptarlas y compartirlas, aunque somos en definitiva Sonic and Amy💜",
      images: ["/memories/extra14.jpg"],
    },
    "15": {
      title: "Rollitos de canelita y dulce🥖", 
      description: "Un día del niño en donde se celebro al mejor kiddo del mundo, y obvio es mi niño, and you are a little and cute kiddo Sonic💙🌻; y efectivamente, compartimos la comidita y fueron lo momentos más lindos del mundoooo :3",
      images: ["/memories/15.jpg"],
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