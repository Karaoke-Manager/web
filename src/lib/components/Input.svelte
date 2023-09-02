
<script lang="ts">
    import Icon from "$lib/components/Icon.svelte";

    export let value = ""
    export let placeholder = "";
    let clazz = "mb-2";
    // noinspection ReservedWordAsName
    export {clazz as class};

</script>


<form class="{clazz} ">
    <div class="relative">
        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <Icon class="w-5 h-5 text-gray-500 dark:text-gray-400" name="search" fill="none"/>
        </div>
        <input type="text"
               class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
               bind:value
               {placeholder}/>
    </div>
</form>