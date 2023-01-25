import axios from 'axios';
import mockAdapter from 'axios-mock-adapter';
import { PROVIDERS } from 'constants';
import { FINDINGS_MOCK_DATA, PROVIDERS_PROJECTS } from './mocks';

const axiosMockInstance = axios.create();

const axiosMockAdapterInstance = new mockAdapter(axiosMockInstance);

const withDelay = (delay, response) => () => {
	return new Promise(function (resolve, reject) {
		setTimeout(function () {
			resolve(response);
		}, delay);
	});
};

axiosMockAdapterInstance.onGet('/api/findings').reply(
	withDelay(1000, [
		200,
		{
			results: FINDINGS_MOCK_DATA,
		},
	])
);

axiosMockAdapterInstance
	.onGet(`/api/provider/${PROVIDERS.MONDAY}/projects`)
	.reply(withDelay(1000, [200, PROVIDERS_PROJECTS[PROVIDERS.MONDAY]]));

axiosMockAdapterInstance
	.onGet(`/api/provider/${PROVIDERS.JIRA}/projects`)
	.reply(withDelay(1000, [200, PROVIDERS_PROJECTS[PROVIDERS.JIRA]]));

axiosMockAdapterInstance
	.onGet(`/api/provider/${PROVIDERS.SERVICENOW}/projects`)
	.reply(withDelay(1000, [200, PROVIDERS_PROJECTS[PROVIDERS.SERVICENOW]]));

export default axiosMockInstance;
