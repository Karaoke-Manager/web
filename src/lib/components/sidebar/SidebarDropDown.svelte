<script>
	import Icon from "@iconify/svelte";
	import SidebarLink from "$lib/components/sidebar/SidebarLink.svelte";

	/** @type {{icon?: string | null | undefined, name: string, href: string}[]} */
	export let dropDown = [];
	/** @type {string} */
	export let name;
	/** @type {string | null | undefined} */
	export let icon;

	let dropDownId = `dropdown-${name}`;
</script>

<button
	type="button"
	class="group flex w-full items-center rounded-lg p-2 text-base font-medium text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
	data-collapse-toggle={dropDownId}
>
	{#if icon}
		<Icon
			{icon}
			class="h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
		/>
	{/if}
	<span class="ml-3 flex-1 whitespace-nowrap text-left">{name}</span>
	<Icon icon="fe:arrow-down" />
</button>
<ul id={dropDownId} class="hidden space-y-2 py-2">
	{#each dropDown as drop}
		<li>
			<SidebarLink icon={drop.icon} name={drop.name} href={drop.href} />
		</li>
	{/each}
</ul>
