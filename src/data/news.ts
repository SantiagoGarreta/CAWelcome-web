import type { StaticImageData } from "next/image";
import champions2000 from "../../assets/2000.png";
import crecerJuntos from "../../assets/CrecerJuntos.jpeg";
import formativas from "../../assets/FormativasPortada.jpeg";
import hinchada from "../../assets/LaBandaEsElAguanteBandera.jpeg";
import mayores from "../../assets/Mayores.jpeg";
import ninosYMadres from "../../assets/NinosYMadres.png";
import femenino from "../../assets/PlantelFemenino.jpeg";

export const newsCategories = ["Todas", "Básquet", "Formativas", "Femenino", "El club", "Historia"] as const;
export type NewsCategory = Exclude<(typeof newsCategories)[number], "Todas">;

export type NewsArticle = {
  slug: string;
  category: NewsCategory;
  title: string;
  excerpt: string;
  image: StaticImageData;
  imageAlt: string;
  imagePosition?: string;
  sections: { heading: string; paragraphs: string[] }[];
};

// Estas notas son contenidos editoriales atemporales. No se les asignan fechas
// ni resultados recientes hasta que el club proporcione información oficial.
export const newsArticles: NewsArticle[] = [
  {
    slug: "una-camiseta-muchas-formas-de-vivirla",
    category: "El club",
    title: "Una camiseta, muchas formas de vivirla",
    excerpt: "La W se encuentra en la cancha, en la tribuna y en cada generación que hace suyo al club.",
    image: crecerJuntos,
    imageAlt: "Niñas, niños y referentes de Welcome reunidos en la cancha",
    sections: [
      {
        heading: "Mucho más que un partido",
        paragraphs: [
          "Welcome nació como una iniciativa de jóvenes del barrio y creció gracias a quienes encontraron en el club un lugar para reunirse. Esa idea sigue presente cada vez que una nueva generación se acerca a la cancha.",
          "El básquet es el punto de encuentro. Lo viven quienes juegan, quienes acompañan desde la tribuna y quienes sostienen la vida cotidiana de la institución.",
        ],
      },
      {
        heading: "Una historia que continúa",
        paragraphs: [
          "Las fotos de los equipos, los entrenamientos y las familias cuentan distintas partes de la misma historia. Cada una muestra una forma de pertenecer a Welcome.",
          "Conocer el pasado del club también ayuda a entender su presente: la W es una camiseta compartida entre generaciones.",
        ],
      },
    ],
  },
  {
    slug: "el-basquet-en-el-centro-de-todo",
    category: "Básquet",
    title: "El básquet en el centro de todo",
    excerpt: "La cancha reúne al plantel, a la gente y a una identidad que se reconoce en cada partido.",
    image: mayores,
    imageAlt: "Jugador de Welcome durante un partido de básquetbol",
    imagePosition: "center 35%",
    sections: [
      {
        heading: "El juego que nos reúne",
        paragraphs: [
          "Desde sus primeros partidos oficiales, Welcome construyó una historia ligada al básquetbol. La cancha sigue siendo el lugar en el que esa historia se hace visible.",
          "Un partido reúne mucho más que a los jugadores. En cada encuentro también están las personas que acompañan, alientan y transmiten la pasión por la W.",
        ],
      },
      {
        heading: "Siempre en movimiento",
        paragraphs: [
          "El plantel mayor es una de las expresiones del presente deportivo del club. A su alrededor conviven otras categorías y nuevas generaciones que encuentran su propio lugar en Welcome.",
        ],
      },
    ],
  },
  {
    slug: "el-lugar-donde-empieza-el-camino",
    category: "Formativas",
    title: "El lugar donde empieza el camino",
    excerpt: "Aprender, compartir y crecer: las formativas abren la puerta a una vida dentro del club.",
    image: formativas,
    imageAlt: "Joven de las formativas de Welcome durante un entrenamiento",
    imagePosition: "center 35%",
    sections: [
      {
        heading: "Aprender en equipo",
        paragraphs: [
          "Para muchos chicos y chicas, acercarse al básquet es también descubrir lo que significa formar parte de un grupo. Los entrenamientos son una oportunidad para jugar, aprender y compartir tiempo con otros.",
          "Las formativas representan ese comienzo: el momento en que el deporte se vuelve una experiencia de equipo y el club empieza a sentirse propio.",
        ],
      },
      {
        heading: "Crecer junto a la W",
        paragraphs: [
          "Cada generación aporta algo nuevo a Welcome. La cancha es el escenario de ese crecimiento, acompañado por familias y referentes que también forman parte de la vida del club.",
        ],
      },
    ],
  },
  {
    slug: "welcome-tambien-se-juega-en-femenino",
    category: "Femenino",
    title: "Welcome también se juega en femenino",
    excerpt: "El básquet femenino forma parte de las muchas historias que se escriben con la W en el pecho.",
    image: femenino,
    imageAlt: "Plantel femenino de Welcome posando en la cancha",
    sections: [
      {
        heading: "Otra expresión de la misma pasión",
        paragraphs: [
          "El básquet femenino tiene su espacio en la vida deportiva de Welcome. La imagen del plantel en la cancha recuerda que la identidad del club se construye desde distintos equipos y experiencias.",
          "Jugar juntas, entrenar y representar a la W son formas de continuar una historia colectiva que siempre encuentra nuevas protagonistas.",
        ],
      },
      {
        heading: "Una camiseta compartida",
        paragraphs: [
          "La fuerza de un club también está en la diversidad de personas que lo habitan. En Welcome, cada equipo suma su voz a una comunidad unida por el básquet.",
        ],
      },
    ],
  },
  {
    slug: "la-tribuna-otra-forma-de-llevar-la-w",
    category: "El club",
    title: "La tribuna, otra forma de llevar la W",
    excerpt: "La hinchada acompaña, canta y transforma cada encuentro en una experiencia compartida.",
    image: hinchada,
    imageAlt: "Hinchas de Welcome con una bandera de La Banda Es El Aguante",
    imagePosition: "center 65%",
    sections: [
      {
        heading: "Estar, alentar, pertenecer",
        paragraphs: [
          "Hay muchas maneras de participar en la vida de Welcome. Una de las más visibles está en la tribuna, donde la camiseta se vuelve bandera y el aliento acompaña al equipo.",
          "La hinchada forma parte de las imágenes que definen al club. Sus encuentros y sus canciones unen a personas de distintas edades alrededor de un mismo sentimiento.",
        ],
      },
      {
        heading: "La W fuera de la cancha",
        paragraphs: [
          "El vínculo con Welcome sigue después del partido. Se lleva en las conversaciones, en los recuerdos y en las historias que pasan de una generación a otra.",
        ],
      },
    ],
  },
  {
    slug: "nueve-titulos-una-historia-compartida",
    category: "Historia",
    title: "Nueve títulos, una historia compartida",
    excerpt: "De 1953 a 2000, los campeonatos federales dejaron una huella en la memoria de Welcome.",
    image: champions2000,
    imageAlt: "Plantel de Welcome fotografiado en la cancha en el año 2000",
    sections: [
      {
        heading: "Los años de gloria",
        paragraphs: [
          "Welcome conquistó nueve campeonatos federales de básquetbol: en 1953, 1956, 1957, 1966, 1967, 1997, 1998, 1999 y 2000.",
          "La serie de cuatro títulos consecutivos entre 1997 y 2000 ocupa un lugar especial en la historia del club. Las fotos de esos planteles conservan el recuerdo de una época que sigue presente entre sus hinchas.",
        ],
      },
      {
        heading: "Un legado que se comparte",
        paragraphs: [
          "Cada campeonato fue el resultado del trabajo de jugadores, cuerpos técnicos y personas que acompañaron al equipo. Recordarlos es reconocer una historia construida entre muchos.",
        ],
      },
    ],
  },
  {
    slug: "familias-que-hacen-club",
    category: "Formativas",
    title: "Familias que hacen club",
    excerpt: "El básquet se aprende en la cancha y se comparte con quienes acompañan desde el primer día.",
    image: ninosYMadres,
    imageAlt: "Niñas, niños y familias reunidos en una cancha de Welcome",
    sections: [
      {
        heading: "Un espacio para encontrarse",
        paragraphs: [
          "En las categorías formativas, la experiencia del básquet también incluye a las familias. Acompañar un entrenamiento o compartir una jornada en el club son pequeñas formas de crear comunidad.",
          "Esos momentos ayudan a que la cancha sea mucho más que un lugar para jugar: se vuelve un espacio para encontrarse y sentirse parte.",
        ],
      },
      {
        heading: "Generaciones que se acercan",
        paragraphs: [
          "La historia de Welcome siempre estuvo ligada a las personas que lo hacen todos los días. Cada familia que se suma agrega una nueva página a esa historia.",
        ],
      },
    ],
  },
];

export function getNewsArticle(slug: string) {
  return newsArticles.find((article) => article.slug === slug);
}
