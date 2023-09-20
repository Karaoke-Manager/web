<script lang="ts">
	import Icon from "@iconify/svelte";

	export let file: File;
</script>

<div class="flex flex-row items-center gap-1.5 text-sm font-medium text-gray-900 dark:text-white">
	<Icon icon="fe:file" />
	{file.name}
</div>
