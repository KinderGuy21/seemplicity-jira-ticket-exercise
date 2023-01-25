import { PROVIDERS } from 'constants';

export const FINDINGS_MOCK_DATA = [
	{
		title: 'This is the title of the finding',
		description: 'This is the description of the finding',
		ticket: {},
	},
	{
		title: 'This is the title of the finding',
		description: 'This is the description of the finding',
		ticket: {
			id: 1337,
			provider: 'Monday',
			issueType: 'Bug',
		},
	},
	{
		title: 'This is the title of the finding',
		description: 'This is the description of the finding',
		ticket: {},
	},
	{
		title: 'This is the title of the finding',
		description: 'This is the description of the finding',
		ticket: {},
	},
	{
		title: 'This is the title of the finding',
		description: 'This is the description of the finding',
		ticket: {},
	},
	{
		title: 'This is the title of the finding',
		description: 'This is the description of the finding',
		ticket: {},
	},
	{
		title: 'This is the title of the finding',
		description: 'This is the description of the finding',
		ticket: {},
	},
	{
		title: 'This is the title of the finding',
		description: 'This is the description of the finding',
		ticket: {
			id: 2987,
			provider: 'ServiceNow',
			issueType: 'Task',
		},
	},
	{
		title: 'This is the title of the finding',
		description: 'This is the description of the finding',
		ticket: {
			id: 354,
			provider: 'Jira',
			issueType: 'Story',
		},
	},
	{
		title: 'This is the title of the finding',
		description: 'This is the description of the finding',
		ticket: {},
	},
	{
		title: 'This is the title of the finding',
		description: 'This is the description of the finding',
		ticket: {},
	},
	{
		title: 'This is the title of the finding',
		description: 'This is the description of the finding',
		ticket: {},
	},
	{
		title: 'This is the title of the finding',
		description: 'This is the description of the finding',
		ticket: {
			id: 5768,
			provider: 'ServiceNow',
			issueType: 'Task',
		},
	},
	{
		title: 'This is the title of the finding',
		description: 'This is the description of the finding',
		ticket: {
			id: 695,
			provider: 'Jira',
			issueType: 'Story',
		},
	},
	{
		title: 'This is the title of the finding',
		description: 'This is the description of the finding',
		ticket: {},
	},
	{
		title: 'This is the title of the finding',
		description: 'This is the description of the finding',
		ticket: {},
	},
];

export const PROVIDERS_PROJECTS = {
	[PROVIDERS.JIRA]: [
		{ value: 'Computer-Science', label: 'Computer Science' },
		{ value: 'Physics', label: 'Physics' },
		{ value: 'Chemistry', label: 'Chemistry' },
		{ value: 'Mathematics', label: 'Mathematics' },
	],
	[PROVIDERS.MONDAY]: [
		{ value: 'Soccer', label: 'Soccer' },
		{ value: 'Basketball', label: 'Basketball' },
		{ value: 'Volleyball', label: 'Volleyball' },
		{ value: 'American Football', label: 'American Football' },
	],
	[PROVIDERS.SERVICENOW]: [
		{ value: 'Piano', label: 'Piano' },
		{ value: 'Guitar', label: 'Guitar' },
		{ value: 'Drums', label: 'Drums' },
		{ value: 'Violin', label: 'Violin' },
	],
};
