import { dictionaries, Locale, defaultLocale } from './i18n/dictionaries';

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: number;
  image?: string;
}

/**
 * En el futuro, esta función podrá ser reemplazada por una llamada a una base de datos
 * o una API externa (backend).
 */
export async function getBlogPosts(locale: Locale = defaultLocale): Promise<BlogPost[]> {
  // Actualmente obtenemos los posts del diccionario estático
  const dictionary = dictionaries[locale];
  return dictionary.blogPosts || [];
}

export async function getBlogPostBySlug(slug: string, locale: Locale = defaultLocale): Promise<BlogPost | undefined> {
  const posts = await getBlogPosts(locale);
  return posts.find(post => post.slug === slug);
}
