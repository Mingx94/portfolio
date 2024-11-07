import { categories } from '$lib/site/config';
import type { ParamMatcher } from '@sveltejs/kit';

export const match: ParamMatcher = (param) => {
	return categories.includes(param);
};
