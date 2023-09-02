<script>
    import "../app.scss";

    import {initFlowbite} from 'flowbite'
    import {onMount} from "svelte";
    import Sidebar from "$lib/components/sidebar/Sidebar.svelte";
    import Header from "$lib/components/Header.svelte";

    onMount(initFlowbite)

</script>


<div class="bg-gray-50 dark:bg-gray-900">

    <Header/>

    <Sidebar/>

    <main class="p-4 md:ml-64 h-auto min-h-screen pt-20">
        <slot/>
    </main>
</div>

