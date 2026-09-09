import { marked } from 'marked';

type BlogPost = {
	title: string;
	date: string;
	summary: string;
	content: string;
	slug: string;
};

marked.setOptions({ breaks: true, gfm: true });

const files = import.meta.glob('/src/content/blog/*.md', {
	eager: true,
	query: '?raw',
	import: 'default'
}) as Record<string, string>;

function parsePost(raw: string, path: string): BlogPost {
	const normalized = raw.replace(/\r\n/g, '\n');
	const [, frontmatterBlock = '', content = normalized] = normalized.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/) || [];
	const frontmatter = Object.fromEntries(
		frontmatterBlock
			.split('\n')
			.map((line) => line.trim())
			.filter(Boolean)
			.map((line) => {
				const [key, ...rest] = line.split(':');
				return [key.trim(), rest.join(':').trim().replace(/^"|"$/g, '')];
			})
	);

	const fileName = path.split('/').pop() ?? 'post.md';
	const slug = fileName.replace(/\.md$/, '');

	return {
		title: frontmatter.title || slug,
		date: frontmatter.date || '',
		summary: frontmatter.summary || '',
		content: marked.parse(content.trim(), { async: false }),
		slug
	};
}

export const load = () => {
	const posts = Object.entries(files)
		.map(([path, raw]) => parsePost(raw, path))
		.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

	return { posts };
};

export const prerender = true;
