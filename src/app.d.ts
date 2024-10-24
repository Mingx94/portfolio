// See https://kit.svelte.dev/docs/types#app

// for information about these interfaces
declare global {
	namespace App {
		type ColorSchema = 'dark' | 'light' | 'system';

		// interface Error {}
		interface Locals {
			colorSchema: ColorSchema;
		}
		// interface PageData {}
		// interface Platform {}
	}

	// Fix map has type guard
	interface Map<K, V> {
		has<P extends K>(key: P): this is { get(key: P): V } & this; // 👈 the trick!
	}

	interface Map<K, V> {
		get<P extends K>(key: P): V;

		// `& this` explicitly lower the priority of original signature
		get(key: K): V | undefined;
	}
}

export {};
