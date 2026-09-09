import type { MetadataRoute } from "next";

const routes = ["", "basquet", "basquet/mayores", "basquet/femenino", "basquet/formativas", "historia", "socios", "noticias", "club", "contacto"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({ url: `https://cawelcome.com.uy/${route}`, lastModified: new Date() }));
}
