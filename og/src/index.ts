import { ImageResponse } from 'workers-og';

const width = 1200;
const height = 600;

const gradients = [
	['#feecf8', '#22d3ee'],
	['#ddd6fe', '#fbcfe8'],
	['#bfdbfe', '#a5f3fc'],
	['#fee2e2', '#fef08a'],
	['#fff1f2', '#e5e7eb'],
	['#dcfce7', '#fef3c7'],
] as const;

const textToGradient = (text: string): number => {
	return text.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % gradients.length;
};

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		const params = new URLSearchParams(new URL(request.url).search);
		const text = params.get('text') || '';

		const index = textToGradient(text);
		const gradient = gradients[index];

		const fontData = await env.ttf_bucket.get('jf-openhuninn-2.1.ttf');

		if (fontData === null) {
			return new Response('Object Not Found', { status: 404 });
		}

		const html = `
		<div style="position:relative; background: linear-gradient(40deg, ${gradient[0]}, ${gradient[1]}); display: flex; align-items: center; width: ${width}px; height: ${height}px; padding: 0 80px; font-family:'Huninn';">
			<h1 style="color: #0c0c0c; font-size: 60px; line-height: 1.2; overflow: hidden; max-height: 216px; max-width: 1000px">
				${text}
			</h1>
			<p style="position:absolute; right: 60px; bottom: 60px; font-size: 40px; color: #0c0c0c95;">
				Michael Tsai
			</p>
		</div>
   `;

		return new ImageResponse(html, {
			width,
			height,
			fonts: [
				{
					name: 'Huninn',
					data: await fontData.arrayBuffer(),
					weight: 400,
					style: 'normal',
				},
			],
		});
	},
};
