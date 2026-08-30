import rss from '@astrojs/rss';
import { getPosts, slugOf } from '../../lib/content';
import { SITE } from '../../consts';

export async function GET(context) {
  const posts = await getPosts('tr');
  return rss({
    title: `${SITE.name} — Yazılar`,
    description: 'Modeller, projeler ve yarışmalar üzerine notlar.',
    site: context.site,
    items: posts.map((p) => ({
      title: p.data.title,
      description: p.data.description,
      pubDate: p.data.pubDate,
      link: `/tr/blog/${slugOf(p.id)}/`,
    })),
  });
}
