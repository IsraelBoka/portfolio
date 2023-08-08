import { writable } from 'svelte/store';

export const coordsStore = writable({
	x: 0,
	y: 0
});
