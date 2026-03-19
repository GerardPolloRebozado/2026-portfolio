import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { SITE_DESCRIPTION, SITE_TITLE } from '../../consts';

export function getStaticPaths() {
    return [{ params: { lang: "en" } }, { params: { lang: "es" } }];
}

export async function GET(context) {
    const { lang } = context.params;
    const posts = (
        await getCollection("blog", ({ id }) => {
            return id.startsWith(`${lang}/`);
        })
    ).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
    return rss({
        title: SITE_TITLE,
        description: SITE_DESCRIPTION,
        site: context.site,
        items: posts.map((post) => {
            const [lang, ...slugParts] = post.id.split('/');
            const slug = slugParts.join('/').replace(/\.[^/.]+$/, "");
            return {
                ...post.data,
                link: `/${lang}/blog/${slug}/`,
            };
        }),
    });
}
