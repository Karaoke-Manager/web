<script lang="ts">

    import Input from "$lib/components/Input.svelte";
    import Icon from "$lib/components/Icon.svelte";
    import {notifications} from "$lib/stores/notifications";

    let notificationDropdown = "notification-dropdown"
    let notificationTooltip = "Notifications"

</script>

<nav class="bg-white border-b border-gray-200 px-4 py-2.5 dark:bg-gray-800 dark:border-gray-700 fixed left-0 right-0 top-0 z-50">
    <div class="flex flex-wrap justify-between items-center">
        <div class="flex justify-start items-center">
            <button data-drawer-target="drawer-navigation"
                    data-drawer-toggle="drawer-navigation"
                    class="p-2 mr-2 text-gray-600 rounded-lg cursor-pointer md:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                <Icon class="w-6 h-6" name="bars"/>
            </button>

            <a href="https://github.com/Karaoke-Manager" class="flex items-center justify-between mr-4">
                <img src="https://usdx.eu/images/ultrastardx-icon.svg" class="mr-3 h-8" alt="Flowbite Logo"/>
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Karman</span>
            </a>
            <Input placeholder="Search" class="hidden md:block md:pl-2 md:w-96"/>
        </div>
        <div class="flex items-center lg:order-2">
            <button type="button"
                    data-drawer-toggle="drawer-navigation"
                    aria-controls="drawer-navigation"
                    class="p-2 mr-1 text-gray-500 rounded-lg md:hidden hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600">
                <span class="sr-only">Toggle search</span>
                <Icon class="w-6 h-6" name="search" fill="none"/>
            </button>

            <!-- Notifications -->
            <button type="button"
                    data-dropdown-toggle="{notificationDropdown}"
                    data-tooltip-target="{notificationTooltip}"
                    class="p-2 mr-1 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600">
                <Icon class="w-6 h-6" name="bell"/>
            </button>
            <div id="{notificationTooltip}"
                 role="tooltip"
                 class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-700 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip">
                {notificationTooltip}
                <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
            <!-- Dropdown menu -->
            <div class="hidden overflow-hidden z-50 my-4 max-w-sm text-base list-none bg-white divide-y divide-gray-100 shadow-lg dark:divide-gray-600 dark:bg-gray-700 rounded-xl"
                 id="{notificationDropdown}">
                <div class="block py-2 px-4 text-base font-medium text-center text-gray-700 bg-gray-50 dark:bg-gray-600 dark:text-gray-300">
                    Notifications
                </div>
                <div>
                    {#each $notifications as notification}

                        <a href="{notification.href}"
                           class="flex py-3 px-4 border-b hover:bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-600">
                            <div class="flex-shrink-0">
                                <img class="w-11 h-11 rounded-full" src="{notification.image}" alt=""/>
                            </div>
                            <div class="pl-3 w-full">
                                <div class="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400">
                                    {notification.message}
                                </div>
                                <div class="text-xs font-medium text-primary-600 dark:text-primary-500">
                                    {notification.time}
                                </div>
                            </div>
                        </a>
                    {/each}
                </div>
                <a href="/"
                   class="block py-2 text-md font-medium text-center text-gray-900 bg-gray-50 hover:bg-gray-100 dark:bg-gray-600 dark:text-white dark:hover:underline">
                    <div class="inline-flex items-center">
                        <Icon class="mr-2 w-4 h-4 text-gray-500 dark:text-gray-400" name="eye"/>
                        View all
                    </div>
                </a>
            </div>
        </div>
    </div>
</nav>