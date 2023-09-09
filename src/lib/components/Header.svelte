<script>
	import { sampleNotifications } from "$lib/stores/notifications";
	import Input from "$lib/components/Input.svelte";
	import Icon from "$lib/components/Icon.svelte";

	const notificationDropdown = "notification-dropdown";
	const notificationTooltip = "Notifications";
</script>

<nav
	class="fixed left-0 right-0 top-0 z-50 border-b border-gray-200 bg-white px-4 py-2.5 dark:border-gray-700 dark:bg-gray-800"
>
	<div class="flex flex-wrap items-center justify-between">
		<div class="flex items-center justify-start">
			<button
				data-drawer-target="drawer-navigation"
				data-drawer-toggle="drawer-navigation"
				class="mr-2 cursor-pointer rounded-lg p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:bg-gray-700 dark:focus:ring-gray-700 md:hidden"
			>
				<Icon class="h-6 w-6" name="bars" />
			</button>

			<a href="https://github.com/Karaoke-Manager" class="mr-4 flex items-center justify-between">
				<img src="https://usdx.eu/images/ultrastardx-icon.svg" class="mr-3 h-8" alt="Flowbite Logo" />
				<span class="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">Karman</span>
			</a>
			<Input placeholder="Search" class="hidden md:block md:w-96 md:pl-2" />
		</div>
		<div class="flex items-center lg:order-2">
			<button
				type="button"
				data-drawer-toggle="drawer-navigation"
				aria-controls="drawer-navigation"
				class="mr-1 rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:ring-4 focus:ring-gray-300 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-600 md:hidden"
			>
				<span class="sr-only">Toggle search</span>
				<Icon class="h-6 w-6" name="search" fill="none" />
			</button>

			<!-- Notifications -->
			<button
				type="button"
				data-dropdown-toggle={notificationDropdown}
				data-tooltip-target={notificationTooltip}
				class="mr-1 rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:ring-4 focus:ring-gray-300 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-600"
			>
				<Icon class="h-6 w-6" name="bell" />
			</button>
			<div
				id={notificationTooltip}
				role="tooltip"
				class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-700 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300"
			>
				{notificationTooltip}
				<div class="tooltip-arrow" data-popper-arrow></div>
			</div>
			<!-- Dropdown menu -->
			<div
				class="z-50 my-4 hidden max-w-sm list-none divide-y divide-gray-100 overflow-hidden rounded-xl bg-white text-base shadow-lg dark:divide-gray-600 dark:bg-gray-700"
				id={notificationDropdown}
			>
				<div
					class="block bg-gray-50 px-4 py-2 text-center text-base font-medium text-gray-700 dark:bg-gray-600 dark:text-gray-300"
				>
					Notifications
				</div>
				<div>
					{#each $sampleNotifications as notification}
						<a
							href={notification.href}
							class="flex border-b px-4 py-3 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-600"
						>
							<div class="flex-shrink-0">
								<img class="h-11 w-11 rounded-full" src={notification.image} alt="" />
							</div>
							<div class="w-full pl-3">
								<div class="mb-1.5 text-sm font-normal text-gray-500 dark:text-gray-400">
									{notification.message}
								</div>
								<div class="text-xs font-medium text-primary-600 dark:text-primary-500">
									{notification.time}
								</div>
							</div>
						</a>
					{/each}
				</div>
				<a
					href="/"
					class="text-md block bg-gray-50 py-2 text-center font-medium text-gray-900 hover:bg-gray-100 dark:bg-gray-600 dark:text-white dark:hover:underline"
				>
					<div class="inline-flex items-center">
						<Icon class="mr-2 h-4 w-4 text-gray-500 dark:text-gray-400" name="eye" />
						View all
					</div>
				</a>
			</div>
		</div>
	</div>
</nav>
