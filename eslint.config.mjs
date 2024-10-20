//eslint config

export default [
	{
		files: ['src/**/*.ts'],
		ignores: ['**/*.config.ts'],
		rules: {
			'no-var': 'error',
			'no-cond-assign': 'error',
			'no-const-assign': 'error',
			'no-dupe-else-if': 'warn',
			'no-unused-vars': 'warn',
		},
	},
];
