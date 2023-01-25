import { ServiceNowIcon, MondayIcon, JiraIcon, JiraFullLogo, MondayFullLogo, ServiceNowFullLogo } from 'assets';
import { PROVIDERS } from 'constants';

export const MatchProviderIcon = (provider, fullLogo=false) => {
	switch (provider) {
		case PROVIDERS.MONDAY:
			return fullLogo ? <MondayFullLogo /> : <MondayIcon />
		case PROVIDERS.JIRA:
			return fullLogo ? <JiraFullLogo /> : <JiraIcon />
		case PROVIDERS.SERVICENOW:
			return fullLogo ? <ServiceNowFullLogo /> : <ServiceNowIcon />
		default:
			return null
	}
}

export const U4ID = Math.floor(1000 + Math.random() * 9000);