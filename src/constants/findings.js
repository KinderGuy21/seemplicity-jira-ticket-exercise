import { MatchProviderIcon } from 'utils';

export const FINDINGS_TABLE_HEADERS = ['Title', 'Description', 'Ticket'];

export const PROVIDERS = {
	JIRA: 'Jira',
	SERVICENOW: 'ServiceNow',
	MONDAY: 'Monday',
};

export const FINDINGS_TABLE_COLUMNS = [
	{
		Header: 'Title',
		accessor: 'title',
	},
	{
		Header: 'Description',
		accessor: 'description',
	},
	{
		Header: 'Ticket',
		accessor: ({ ticket }) =>
			Object.keys(ticket).length > 0 ? (
				<div>
					<span>{MatchProviderIcon(ticket.provider)}</span>
					<span style={{ marginLeft: '0.5em', fontWeight: '500' }}>
						{ticket.provider}-{ticket.id}
					</span>
				</div>
			) : (
				<button>Create Ticket</button>
			),
	},
];

export const ISSUE_TYPES = [
	{ value: 'Bug', label: 'Bug' },
	{ value: 'Task', label: 'Task' },
	{ value: 'Story', label: 'Story' },
];
