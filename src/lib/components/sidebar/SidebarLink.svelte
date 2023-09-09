<script>
	import Icon from "$lib/components/Icon.svelte";

	/** @type {string} */
	export let href;
	/** @type {string | null} */
	export let icon = null;
	/** @type {string | null} */
	export let name = null;
	/** @type {number | null} */
	export let notify = null;
	/** @type {string | null} */
	export let tooltip = null;

	let tooltipId = `tooltip-${href}-${icon}`;
</script>

<a
	{href}
	class="group flex items-center rounded-lg p-2 text-base font-medium text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
	data-tooltip-target={tooltip ? tooltipId : null}
>
	<Icon
		name={icon}
		class="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
	/>

	{#if name}
		<span class="ml-3 flex-1 whitespace-nowrap">
			{name}
		</span>
	{/if}
	{#if notify}
		<span
			class="inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary-100 text-xs font-semibold text-primary-800 dark:bg-primary-200 dark:text-primary-800"
		>
			{notify}
		</span>
	{/if}
</a>
{#if tooltip}
	<div
		id={tooltipId}
		role="tooltip"
		class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300"
	>
		{tooltip}
		<div class="tooltip-arrow" data-popper-arrow></div>
	</div>
{/if}
