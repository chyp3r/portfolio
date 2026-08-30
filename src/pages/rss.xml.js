import rss from '@astrojs/rss';
import { getPosts, slugOf } from '../lib/content';
import { SITE } from '../consts';

export async function GET(context) {
  const posts = await getPosts('en');
  return rss({
    title: `${SITE.name} — Writing`,
    description: 'Notes on models, builds and competitions.',
    site: context.site,
    items: posts.map((p) => ({
      title: p.data.title,
      description: p.data.description,
      pubDate: p.data.pubDate,
      link: `/blog/${slugOf(p.id)}/`,
    })),
  });
}
