import mayoresImage from "../../assets/Mayores.jpeg";
import femeninoImage from "../../assets/PlantelFemenino.jpeg";
import formativasImage from "../../assets/FormativasPortada.jpeg";

export const navItems = [
  { label: "Básquet", href: "/#basquet" },
  { label: "Historia", href: "/historia" },
  { label: "Socios", href: "/#socios" },
  { label: "Noticias", href: "/noticias" },
  { label: "El club", href: "/club" },
];

export const basketballGroups = [
  { title: "Mayores", text: "Información del plantel y la competencia. Contenido pendiente de confirmar.", href: "/basquet/mayores", image: mayoresImage, imageAlt: "Jugador del plantel mayor de Welcome durante un partido", imagePosition: "center" },
  { title: "Femenino", text: "El espacio para conocer el básquet femenino de Welcome.", href: "/basquet/femenino", image: femeninoImage, imageAlt: "Plantel femenino de Welcome posando en la cancha", imagePosition: "center" },
  { title: "Formativas", text: "Crecimiento, aprendizaje y pertenencia dentro del club.", href: "/basquet/formativas", image: formativasImage, imageAlt: "Jugador de formativas de Welcome durante un entrenamiento", imagePosition: "center 22%" },
];
