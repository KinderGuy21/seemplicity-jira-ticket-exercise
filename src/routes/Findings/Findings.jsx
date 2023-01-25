import { useState, useEffect, useMemo } from 'react';
import { FindingsTable, LoadingLogo } from 'components';
import { FINDINGS_TABLE_COLUMNS } from 'constants';
import { FindingsContextProvider } from 'contexts';
import { axiosMockInstance } from 'api';
import './findings.css';

const Findings = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [findingsData, setFindingsData] = useState(null);
	
	const value = { findingsData, setFindingsData };

	const columns = useMemo(() => FINDINGS_TABLE_COLUMNS, [])
	const data = useMemo(() => findingsData ?? [], [findingsData])

	useEffect(() => {
		(async () => {
			const result = await axiosMockInstance.get('/api/findings');
			let resultData = result.data
			setFindingsData(resultData["results"]);
			setIsLoading(false);
		  })();

	}, []);


	return (
		<FindingsContextProvider value={value}>
			<div className='findings-container'>
				<div className='title'>Findings</div>
				{
					!isLoading && data ? (
						<FindingsTable columns={columns} data={data} />
					) : <LoadingLogo loadingText='Loading Findings...' />
				}
			</div>
		</FindingsContextProvider>
	);
};

export default Findings;