<script>
	import SidebarLink from "$lib/components/sidebar/SidebarLink.svelte";
	import SidebarDropDown from "$lib/components/sidebar/SidebarDropDown.svelte";
	import SidebarBottom from "$lib/components/sidebar/SidebarBottom.svelte";
	import Input from "$lib/components/Input.svelte";

	const pagesDropDown = [
		{ name: "Settings", href: "/" },
		{ name: "Kanban", href: "/" },
		{ name: "Calender", href: "/" }
	];

	const salesDropDown = [
		{ name: "Product", href: "/" },
		{ name: "Billing", href: "/" },
		{ name: "Invoice", href: "/" }
	];
	const authDropDown = [
		{ name: "Sign In", href: "/" },
		{ name: "Sign Up", href: "/" },
		{ name: "Forgot Password", href: "/" }
	];
	let value = "";
</script>

<aside
	class="fixed left-0 top-0 z-40 h-screen w-64 -translate-x-full border-r border-gray-200 bg-white pt-14 transition-transform dark:border-gray-700 dark:bg-gray-800 md:translate-x-0"
	aria-label="Sidenav"
	id="drawer-navigation"
>
	<div class="h-full overflow-y-auto bg-white px-3 py-5 dark:bg-gray-800">
		<Input bind:value placeholder="Search" class="mb-2 md:hidden" />
		<ul class="space-y-2">
			<li>
				<SidebarLink icon="fe:music" name="Songs" href="/songs" />
			</li>
			<li>
				<SidebarLink icon="fe:calendar" name="Milestones" href="/milestones" />
			</li>
			<li>
				<SidebarLink icon="fe:comment-o" name="Messages" href="/" notify={4} />
			</li>
			<li>
				<SidebarDropDown icon="fe:lock" name="Authentication" dropDown={authDropDown} />
			</li>
		</ul>
		<ul class="mt-5 space-y-2 border-t border-gray-200 pt-5 dark:border-gray-700">
			<li>
				<SidebarLink icon="fe:document" name="Docs" href="/" />
			</li>
		</ul>
	</div>
	<SidebarBottom />
</aside>
