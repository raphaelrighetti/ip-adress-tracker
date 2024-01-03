import React from 'react';
import './App.css';
import './variables.css';
import useFetch from './hooks/useFetch';
import GlobalStorage from './Components/Context/GlobalStorage';
import Attribution from './Components/Attribution';
import Header from './Components/Header';
import InformationList from './Components/InformationList';
import LeafletMap from './Components/Map/LeafletMap';

const App = () => {
  const { data, error, loading, request } = useFetch();

  return (
    <>
      <GlobalStorage>
        <Header data={data} error={error} request={request} />
        <InformationList
          data={data}
          error={error}
          loading={loading}
          request={request}
        />
        <LeafletMap data={data} />
        <Attribution />
      </GlobalStorage>
    </>
  );
};

export default App;
