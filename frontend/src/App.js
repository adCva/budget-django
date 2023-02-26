import React, { Suspense } from 'react';
import Content from './Components/Content';
import Hero from './Components/Hero';

const CreateForm = React.lazy(() => import('./Components/CreateForm'));
const EditForm = React.lazy(() => import('./Components/EditForm'));
const LimitForm = React.lazy(() => import('./Components/LimitForm'));

function App() {
  return (
    <div className="App">
      <Hero />
      <Content />
      <CreateForm />
      <EditForm />
      <LimitForm />
    </div>
  );
}

export default App;