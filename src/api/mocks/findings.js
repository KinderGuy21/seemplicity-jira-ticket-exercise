import { PROVIDERS } from 'constants';

export const FINDINGS_MOCK_DATA = [
	{
		id: 0,
		title: 'This is the title of the finding',
		description: 'This is the description of the finding',
		ticket: {},
	},
	{
		id: 1,
		title: 'This is the title of the finding',
		description: 'This is the description of the finding',
		ticket: {
			id: 1337,
			provider: 'Monday',
			issueType: 'Bug',
		},
	},
	{
		id: 2,
		title: 'This is the title of the finding',
		description: 'This is the description of the finding',
		ticket: {},
	},
	{
		id: 3,
		title: 'This is the title of the finding',
		description: 'This is the description of the finding',
		ticket: {},
	},
	{
		id: 4,
		title: 'This is the title of the finding',
		description: 'This is the description of the finding',
		ticket: {},
	},
	{
		id: 5,
		title: 'This is the title of the finding',
		description: 'This is the description of the finding',
		ticket: {},
	},
	{
		id: 6,
		title: 'This is the title of the finding',
		description: 'This is the description of the finding',
		ticket: {},
	},
	{
		id: 7,
		title: 'This is the title of the finding',
		description: 'This is the description of the finding',
		ticket: {
			id: 2987,
			provider: 'ServiceNow',
			issueType: 'Task',
		},
	},
	{
		id: 8,
		title: 'This is the title of the finding',
		description: 'This is the description of the finding',
		ticket: {
			id: 354,
			provider: 'Jira',
			issueType: 'Story',
		},
	},
	{
		id: 9,
		title: 'This is the title of the finding',
		description: 'This is the description of the finding',
		ticket: {},
	},
	{
		id: 10,
		title: 'This is the title of the finding',
		description: 'This is the description of the finding',
		ticket: {},
	},
	{
		id: 11,
		title: 'This is the title of the finding',
		description: 'This is the description of the finding',
		ticket: {},
	},
	{
		id: 12,
		title: 'This is the title of the finding',
		description: 'This is the description of the finding',
		ticket: {
			id: 5768,
			provider: 'ServiceNow',
			issueType: 'Task',
		},
	},
	{
		id: 13,
		title: 'This is the title of the finding',
		description: 'This is the description of the finding',
		ticket: {
			id: 695,
			provider: 'Jira',
			issueType: 'Story',
		},
	},
	{
		id: 14,
		title: 'This is the title of the finding',
		description: 'This is the description of the finding',
		ticket: {},
	},
	{
		id: 15,
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
