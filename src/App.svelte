<script>
	import { locale, t } from "./i18n";
	import translations from "./translations";

	const langs = Object.keys(translations);
</script>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>

<main>
	<h1>{$t.title}</h1>
	<select bind:value={$locale}>
		{#each langs as lang}
			<option value={lang}>{lang}</option>
		{/each}
	</select>
</main>
