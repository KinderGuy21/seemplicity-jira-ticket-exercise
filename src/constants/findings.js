import { ServiceNowIcon, MondayIcon, JiraIcon } from 'assets';

export const FINDINGS_TABLE_HEADERS = ['Title', 'Description', 'Ticket'];

const MatchProviderIcon = (provider) => {
	switch (provider) {
		case 'Monday':
			return <MondayIcon />
		case 'Jira':
			return <JiraIcon />
		case 'ServiceNow':
			return <ServiceNowIcon />
		default:
			return null
	}
}

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
					<span>
						{MatchProviderIcon(ticket.provider)}
					</span>
					<span style={{ marginLeft: '0.5em', fontWeight: '500'}}>
					{ticket.provider}-{ticket.id}
					</span>
				</div>
			) : (
				<button>Create Ticket</button>
			),
	},
];
