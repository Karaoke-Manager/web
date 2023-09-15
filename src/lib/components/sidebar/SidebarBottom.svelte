<script lang="ts">
	import SidebarLink from "$lib/components/sidebar/SidebarLink.svelte";
	import ThemeToggle from "$lib/components/sidebar/ThemeToggle.svelte";
</script>

<div class="absolute bottom-0 left-0 z-20 flex w-full justify-center space-x-4 bg-white p-4 dark:bg-gray-800">
	<ThemeToggle />
	<SidebarLink icon="fe:equalizer" href="/" tooltip="Settings" />
	<SidebarLink icon="fe:user" href="/" tooltip="Profile" />
</div>
