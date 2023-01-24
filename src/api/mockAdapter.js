import axios from 'axios';
import mockAdapter from 'axios-mock-adapter';
import {FINDINGS_MOCK_DATA } from './mocks';

const axiosMockInstance = axios.create();

const axiosMockAdapterInstance= new mockAdapter(axiosMockInstance, { delayResponse: 4000 });


axiosMockAdapterInstance.onGet('/api/findings').reply(200, {
	results: FINDINGS_MOCK_DATA
});


export default axiosMockInstance;