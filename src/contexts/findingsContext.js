import { createContext } from 'react';

const findingsContext = createContext({
    findingsData: null, 
    setFindingsData: () => {}
});

export const { Provider: FindingsContextProvider } = findingsContext;

export default findingsContext;