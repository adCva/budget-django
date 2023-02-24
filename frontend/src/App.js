import React, { Suspense } from 'react';
import Content from './Components/Content';
import Helper from './Components/Helper';
import Hero from './Components/Hero';

const CreateForm = React.lazy(() => import('./Components/CreateForm'));
const EditForm = React.lazy(() => import('./Components/EditForm'));
const LimitForm = React.lazy(() => import('./Components/LimitForm'));

function App() {
  return (
    <div className="App">
      <Hero />
      <Content />
    </div>
  );
}

export default App;