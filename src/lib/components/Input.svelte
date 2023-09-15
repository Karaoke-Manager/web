<script lang="ts">
	import Icon from "@iconify/svelte";
	export let value = "";
	export let placeholder = "";
	let clazz = "mb-2";
	// noinspection ReservedWordAsName
	export { clazz as class };
</script>

<form class="{clazz} ">
	<div class="relative">
		<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
			<Icon class="h-5 w-5 text-gray-500 dark:text-gray-400" icon="fe-search"></Icon>
		</div>
		<input
			type="text"
			class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 pl-10 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
			bind:value
			{placeholder}
		/>
	</div>
</form>
