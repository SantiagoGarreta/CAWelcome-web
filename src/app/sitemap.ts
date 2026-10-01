import type { MetadataRoute } from "next";
import { newsArticles } from "@/data/news";

const routes = ["", "basquet", "basquet/mayores", "basquet/femenino", "basquet/formativas", "historia", "socios", "noticias", "club", "contacto", ...newsArticles.map(({ slug }) => `noticias/${slug}`)];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({ url: `https://cawelcome.com.uy/${route}`, lastModified: new Date() }));
}
