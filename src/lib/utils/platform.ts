function getPlatform() {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const agent = (navigator as any).userAgentData;
	return agent?.platform ?? navigator.platform;
}

const isDom = () => typeof window !== 'undefined';
const pt = (v: RegExp) => isDom() && v.test(getPlatform());
export const isTouchDevice = () => isDom() && !!navigator.maxTouchPoints;
export const isMac = () => pt(/^Mac/) && !isTouchDevice();
export const isApple = () => pt(/mac|iphone|ipad|ipod/i);
export const isIos = () => isApple() && !isMac();
