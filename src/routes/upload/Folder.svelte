<script lang="ts">
	import File from "./File.svelte";
	import type { FolderType } from "./Types";
	import Icon from "@iconify/svelte";

	export let expanded = false;
	export let name: string;
	export let folder: FolderType;

	const empty = folder.files.length === 0 && Object.keys(folder.folders).length === 0;
	function toggle() {
		expanded = !empty && !expanded;
	}
</script>

<button
	on:click={toggle}
	class="flex flex-row items-center gap-1.5 rounded-lg border border-gray-200 bg-white p-1 text-sm font-medium text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
>
	<Icon icon="fe:folder" />
	{name}
</button>

{#if expanded}
	<ul class=" mb-2 ml-2 border-l-2 border-l-gray-200 p-2 pr-0.5 dark:border-l-gray-600">
		{#each Object.entries(folder.folders) as [name, f]}
			<li class="pb-1">
				<svelte:self {name} folder={f} />
			</li>
		{/each}
		{#each folder.files as file}
			<li>
				<File {file} />
			</li>
		{/each}
	</ul>
{/if}
