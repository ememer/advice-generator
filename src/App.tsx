import React from 'react';
import './App.css';
import Card from './components/Card';
import Layout from './components/Layout';

function App() {
  return (
    <div className="App">
      <Layout>
        <Card/>
      </Layout>
    </div>
  );
}

export default App;
