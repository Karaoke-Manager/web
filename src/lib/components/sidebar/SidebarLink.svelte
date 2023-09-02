<script lang="ts">

    import Icon from "$lib/components/Icon.svelte";

    export let href: string;
    export let icon: string | null = null;
    export let name: string | null = null;
    export let notify: number | null = null;
    export let tooltip: string | null = null;

    let tooltipId = `tooltip-${href}-${icon}`
</script>

<a {href}
   class="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
   data-tooltip-target="{tooltip ? tooltipId : null}">
    <Icon name="{icon}"
          class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
    />

    {#if name}
        <span class="flex-1 ml-3 whitespace-nowrap">
            {name}
        </span>
    {/if}
    {#if notify}
        <span class="inline-flex justify-center items-center w-5 h-5 text-xs font-semibold rounded-full text-primary-800 bg-primary-100 dark:bg-primary-200 dark:text-primary-800">
            {notify}
        </span>
    {/if}
</a>
{#if tooltip}
    <div id="{tooltipId}"
         role="tooltip"
         class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip"
    >{tooltip}
        <div class="tooltip-arrow" data-popper-arrow></div>
    </div>
{/if}