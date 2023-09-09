module.exports = {
	root: true,
	extends: ["eslint:recommended", "plugin:svelte/recommended", "prettier"],
	parserOptions: {
		sourceType: "module",
		ecmaVersion: 2020,
		extraFileExtensions: [".svelte"]
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	},
	overrides: [
		{
			files: ["*.svelte"],
			parser: "svelte-eslint-parser",
			env: { browser: true, node: false },
			rules: {
				"no-inner-declarations": "off",
				"no-self-assign": "off"
			}
		},
		{
			files: ["src/**/*.js"],
			env: { browser: true, node: false }
		}
	],
	rules: {
		"no-unused-vars": "warn"
	}
};
