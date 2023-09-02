<script lang="ts">

    import {onMount} from "svelte";
    import Icon from "$lib/components/Icon.svelte";

    let isDark = false;


    onMount(setTheme)

    function setTheme() {
        if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
            isDark = true;
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('color-theme', 'light');
            isDark = false;
        }
    }

    function toggle() {
        isDark = !isDark;

        if (isDark) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }
    }
</script>

<button id="theme-toggle"
        type="button"
        class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
        on:click={toggle}>
    <Icon name="sun" class="w-6 h-6 {!isDark ? 'hidden' : ''}"/>
    <Icon name="moon" class="w-6 h-6 {isDark ? 'hidden' : ''}"/>
</button>