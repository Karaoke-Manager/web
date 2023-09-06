<script lang="ts">
    import SidebarLink from "$lib/components/sidebar/SidebarLink.svelte";
    import ThemeToggle from "$lib/components/sidebar/ThemeToggle.svelte";
</script>

<div class="absolute bottom-0 left-0 justify-center p-4 space-x-4 w-full flex bg-white dark:bg-gray-800 z-20">

    <ThemeToggle/>
    <SidebarLink icon="adjustments" href="/" tooltip="Settings"/>
    <SidebarLink icon="profile" href="/" tooltip="Profile"/>
</div>