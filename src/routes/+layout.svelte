<script>
	import "../app.postcss";
	import "flowbite";
	import { initFlowbite } from "flowbite";
	import { onMount } from "svelte";
	import Sidebar from "$lib/components/sidebar/Sidebar.svelte";
	import Header from "$lib/components/Header.svelte";

	onMount(initFlowbite);
</script>

<Header />

<Sidebar />
<main class="h-auto min-h-screen p-4 pt-20 md:ml-64">
	<slot />
</main>
