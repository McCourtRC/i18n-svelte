import { writable, derived } from 'svelte/store';
import translations from './translations';

export const locale = writable('en');
export const t = derived(locale, ($locale) => translations[$locale]);
