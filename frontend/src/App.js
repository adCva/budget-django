import React from 'react';
import { createRoot } from 'react-dom/client';
import Form from './Components/Form';
import Helper from './Components/Helper';

function App() {
  return (
    <div className='App'>
      <Helper />
    </div>
  )
}

export default App;

const appDiv = document.getElementById("App");
const root = createRoot(appDiv);
root.render(<App />);