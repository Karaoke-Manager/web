<script>

    import SidebarLink from "$lib/components/sidebar/SidebarLink.svelte";
    import SidebarDropDown from "$lib/components/sidebar/SidebarDropDown.svelte";
    import SidebarBottom from "$lib/components/sidebar/SidebarBottom.svelte";
    import Input from "$lib/components/Input.svelte";

    let pagesDropDown = [
        {name: "Settings", href: "/"},
        {name: "Kanban", href: "/"},
        {name: "Calender", href: "/"},
    ]

    let salesDropDown = [
        {name: "Product", href: "/"},
        {name: "Billing", href: "/"},
        {name: "Invoice", href: "/"},
    ]
    let authDropDown = [
        {name: "Sign In", href: "/"},
        {name: "Sign Up", href: "/"},
        {name: "Forgot Password", href: "/"},
    ]
    let value = "";
    $: console.log(value);
</script>


<!-- Sidebar -->

<aside class="fixed top-0 left-0 z-40 w-64 h-screen pt-14 transition-transform -translate-x-full bg-white border-r border-gray-200 md:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
       aria-label="Sidenav"
       id="drawer-navigation">
    <div class="overflow-y-auto py-5 px-3 h-full bg-white dark:bg-gray-800">
        <Input bind:value placeholder="Search" class="md:hidden mb-2"/>
        <ul class="space-y-2">
            <li>
                <SidebarLink icon="pie-chart" name="Overview" href="/"/>
            </li>
            <li>
                <SidebarDropDown icon="file" name="Pages" dropDown="{pagesDropDown}"/>
            </li>
            <li>
                <SidebarDropDown icon="shopping-bag" name="Sales" dropDown="{salesDropDown}"/>
            </li>
            <li>
                <SidebarLink icon="inbox" name="Messages" href="/" notify="{4}"/>
            </li>
            <li>
                <SidebarDropDown icon="lock" name="Authentication" dropDown="{authDropDown}"/>
            </li>
        </ul>
        <ul class="pt-5 mt-5 space-y-2 border-t border-gray-200 dark:border-gray-700">
            <li>
                <SidebarLink icon="clipboard" name="Docs" href="/"/>
            </li>
        </ul>
    </div>
    <SidebarBottom/>
</aside>