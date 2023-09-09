<script>
	import { onMount } from "svelte";
	import Icon from "$lib/components/Icon.svelte";

	let isDark = false;

	onMount(setTheme);

	function setTheme() {
		if (
			localStorage.getItem("color-theme") === "dark" ||
			(!("color-theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
		) {
			document.documentElement.classList.add("dark");
			localStorage.setItem("color-theme", "dark");
			isDark = true;
		} else {
			document.documentElement.classList.remove("dark");
			localStorage.setItem("color-theme", "light");
			isDark = false;
		}
	}

	function toggle() {
		isDark = !isDark;

		if (isDark) {
			document.documentElement.classList.add("dark");
			localStorage.setItem("color-theme", "dark");
		} else {
			document.documentElement.classList.remove("dark");
			localStorage.setItem("color-theme", "light");
		}
	}
</script>

<button
	id="theme-toggle"
	type="button"
	class="rounded-lg p-2.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
	on:click={toggle}
>
	<Icon name="sun" class="h-6 w-6 {!isDark ? 'hidden' : ''}" />
	<Icon name="moon" class="h-6 w-6 {isDark ? 'hidden' : ''}" />
</button>
