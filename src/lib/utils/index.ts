import type { DateStyle, Fetch } from '$lib/types';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export async function fetchJSON<Data>(url: string, fetchFn: Fetch = fetch): Promise<Data> {
	const response = await fetchFn(url);
	if (!response.ok) throw new Error(`Error fetching JSON from ${response.url}`);
	return await response.json();
}

export function formatDateShort(date: string) {
	// safari is mad about dashes in the date
	const dateToFormat = new Date(date.replaceAll('-', '/'));
	const dateFormatter = new Intl.DateTimeFormat('en', { dateStyle: 'medium' });
	const parts = dateFormatter.formatToParts(dateToFormat);

	return parts
		.filter((parts) => parts.type === 'day' || parts.type === 'month')
		.sort((a, b) => (a.type === 'month' ? -1 : 1))
		.map((part) => part.value)
		.join(' ');
}

export function formatDate(date: string, dateStyle: DateStyle = 'medium', locales = 'en') {
	// safari is mad about dashes in the date
	const dateToFormat = new Date(date.replaceAll('-', '/'));
	const dateFormatter = new Intl.DateTimeFormat(locales, { dateStyle });
	return dateFormatter.format(dateToFormat);
}

export function formatNumber(number: number, locales = 'en') {
	return new Intl.NumberFormat(locales).format(number);
}

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}
