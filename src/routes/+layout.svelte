<script>
    import "../app.scss";

    import {initFlowbite} from 'flowbite'
    import {onMount} from "svelte";

    onMount(initFlowbite)

</script>

<slot/>
