import type { Action } from 'svelte/action';
import { isTouchDevice } from './platform';

export const dragScroll: Action<HTMLDivElement> = (node) => {
	let isDown = false;
	let isDragged = false;
	let startX: number;
	let scrollLeft: number;

	function start() {
		node.style.userSelect = 'none';
		node.style.scrollSnapType = 'none';
	}

	function end() {
		function getTargetScrollPosition(node: HTMLElement): number {
			const { children: elements, scrollLeft, offsetWidth: width } = node;
			const scrollCenter = scrollLeft + width / 2;
			let closestCenter = 0;
			let minDistance = Infinity;

			Array.from(elements as HTMLCollectionOf<HTMLElement>).forEach((element) => {
				const elementCenter = element.offsetLeft + element.offsetWidth / 2;
				const distance = Math.abs(scrollCenter - elementCenter);
				if (distance < minDistance) {
					minDistance = distance;
					closestCenter = elementCenter;
				}
			});

			return closestCenter - width / 2;
		}

		const targetScroll = getTargetScrollPosition(node);
		const scrollWidth = node.scrollWidth;
		const width = node.offsetWidth;

		if (targetScroll < 0) {
			node.scrollTo({ left: 0, behavior: 'smooth' });
		} else if (targetScroll + width > scrollWidth) {
			node.scrollTo({ left: scrollWidth - width, behavior: 'smooth' });
		} else {
			node.scrollTo({ left: targetScroll, behavior: 'smooth' });
		}

		let timer: NodeJS.Timeout;
		node.addEventListener('scroll', function scrollHandler() {
			clearTimeout(timer);
			timer = setTimeout(() => {
				node.removeEventListener('scroll', scrollHandler);
				node.style.removeProperty('user-select');
				node.style.removeProperty('scroll-snap-type');
			}, 100);
		});
	}

	function mousedown(e: MouseEvent) {
		isDown = true;
		start();
		startX = e.pageX - node.offsetLeft;
		scrollLeft = node.scrollLeft;
	}

	function mouseleave() {
		if (!isDown) return;
		isDown = false;
		isDragged = false;
		end();
	}

	function preventClick(e: Event) {
		e.preventDefault();
		e.stopImmediatePropagation();
	}

	function mouseup() {
		if (!isDown) return;
		const elements = node.children;
		if (isDragged) {
			for (let i = 0; i < elements.length; i++) {
				elements[i].addEventListener('click', preventClick);
			}
		} else {
			for (let i = 0; i < elements.length; i++) {
				elements[i].removeEventListener('click', preventClick);
			}
		}
		end();
		isDown = false;
		isDragged = false;
	}

	function mousemove(e: MouseEvent) {
		if (!isDown) return;
		isDragged = true;
		e.preventDefault();
		const x = e.pageX - node.offsetLeft;
		const walk = (x - startX) * 1.2; //scroll-fast
		node.scrollLeft = scrollLeft - walk;
	}

	if (isTouchDevice()) return;
	node.addEventListener('mousedown', mousedown);
	node.addEventListener('mouseleave', mouseleave);
	node.addEventListener('mouseup', mouseup);
	node.addEventListener('mousemove', mousemove);

	return {
		update() {},
		destroy() {
			if (isTouchDevice()) return;
			node.removeEventListener('mousedown', mousedown);
			node.removeEventListener('mouseleave', mouseleave);
			node.removeEventListener('mouseup', mouseup);
			node.removeEventListener('mousemove', mousemove);
		}
	};
};
