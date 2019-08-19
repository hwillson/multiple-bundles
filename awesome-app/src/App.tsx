import React from 'react';

// import { Thing, runFeature1Stuff } from 'awesome-lib';

import { Thing } from 'awesome-lib/dist/bundles/core';
import { runFeature1Stuff } from 'awesome-lib/dist/bundles/feature1';

const App: React.FC = () => {
  const thing = new Thing();
  return (
    <div className="app">
      <h1>Awesome App!</h1>
      <p>
        Name: <strong>{thing.getName()}</strong>
      </p>
      <p>
        Message: <strong>{runFeature1Stuff()}</strong>
      </p>
    </div>
  );
};

export default App;
