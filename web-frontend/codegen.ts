import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
	schema: 'http://localhost:3000/graphql',
	documents: ['./src/**/*.tsx', './src/**/*.ts', './src/**/*.graphql'],
	generates: {
		'./src/generated/graphql.tsx': {
			plugins: [
				'typescript',
				'typescript-operations',
				'typescript-react-apollo',
			],
			config: {
				skipTypename: false,
				withHooks: true,
				withHOC: false,
				withComponent: false,
			},
		},
		'./graphql.schema.json': {
			plugins: ['introspection'],
		},
	},
	ignoreNoDocuments: true,
}

export default config
