import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  const [categories] = useState([
    {
      titleName: 'about me'
    },
    {
      titleName: 'portfolio'
    },
    {
      titleName: 'contact'
    },
    {
      titleName: 'resume'
    }
  ]);
  const [currentNavTitle, setCurrentNavTitle] = useState(categories[0]);
  return (
    <div className="App">
      <Header
        categories={categories}
        currentNavTitle={currentNavTitle}
        setCurrentNavTitle={setCurrentNavTitle}
      />
      <main>
        <Main currentNavTitle={currentNavTitle} />
      </main>
      <Footer/>
    </div>
  );
}

export default App;
