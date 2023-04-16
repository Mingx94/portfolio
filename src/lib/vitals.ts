import { getCLS, getFCP, getFID, getLCP, getTTFB } from 'web-vitals';
import type { Metric } from 'web-vitals';

const vitalsUrl = 'https://vitals.vercel-analytics.com/v1/vitals';

interface Options {
	params: { [s: string]: string } | ArrayLike<string>;
	path: string;
	analyticsId: string;
	debug?: boolean;
}

function getConnectionSpeed() {
	const connection =
		'connection' in navigator && (navigator['connection'] as { effectiveType: string });
	if (!connection) return '';

	const effectiveType = 'effectiveType' in connection && connection['effectiveType'];
	if (!effectiveType) return '';

	return effectiveType;
}

function sendToAnalytics(metric: Metric, options: Options) {
	const page = Object.entries(options.params).reduce(
		(acc, [key, value]) => acc.replace(value, `[${key}]`),
		options.path
	);

	const body = {
		dsn: options.analyticsId,
		id: metric.id,
		page,
		href: location.href,
		event_name: metric.name,
		value: metric.value.toString(),
		speed: getConnectionSpeed()
	};

	if (options.debug) {
		console.log('[Analytics]', metric.name, JSON.stringify(body, null, 2));
	}

	const blob = new Blob([new URLSearchParams(body).toString()], {
		// This content type is necessary for `sendBeacon`
		type: 'application/x-www-form-urlencoded'
	});
	if (navigator.sendBeacon) {
		navigator.sendBeacon(vitalsUrl, blob);
	} else
		fetch(vitalsUrl, {
			body: blob,
			method: 'POST',
			credentials: 'omit',
			keepalive: true
		});
}

export function webVitals(options: Options) {
	try {
		getFID((metric) => sendToAnalytics(metric, options));
		getTTFB((metric) => sendToAnalytics(metric, options));
		getLCP((metric) => sendToAnalytics(metric, options));
		getCLS((metric) => sendToAnalytics(metric, options));
		getFCP((metric) => sendToAnalytics(metric, options));
	} catch (err) {
		console.error('[Analytics]', err);
	}
}
