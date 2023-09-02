<script lang="ts">

import Icon from "$lib/components/Icon.svelte";
import SidebarLink from "$lib/components/sidebar/SidebarLink.svelte";

export let dropDown: {icon?: string | null | undefined, name: string, href: string}[] = []
export let name: string;
export let icon: string | null | undefined;

let dropDownId = `dropdown-${name}`
</script>

<button type="button"
        class="flex items-center p-2 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
        data-collapse-toggle="{dropDownId}">
    {#if icon}
        <Icon class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
              name="{icon}"/>
    {/if}
    <span class="flex-1 ml-3 text-left whitespace-nowrap">{name}</span>
    <Icon name="arrow-down"/>
</button>
<ul id="{dropDownId}" class="hidden py-2 space-y-2">
    {#each dropDown as drop}
        <li>
            <SidebarLink icon="{drop.icon}" name="{drop.name}" href="{drop.href}"/>
        </li>
    {/each}
</ul>