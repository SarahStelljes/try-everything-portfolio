import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  const [aboutMeSelected, setAboutMeSelected] = useState(true);
  const [portfolioSelected, setPortfolioSelected] = useState(false);
  const [contactSelected, setContactSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);

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
  
  useEffect(()=> {
    document.title = (currentNavTitle.titleName);
}, [currentNavTitle]);
  return (
    <div className="App">
      <Header
        categories={categories}
        currentNavTitle={currentNavTitle}
        setCurrentNavTitle={setCurrentNavTitle}
        aboutMeSelected={aboutMeSelected}
        setAboutMeSelected={setAboutMeSelected}
        portfolioSelected={portfolioSelected}
        setPortfolioSelected={setPortfolioSelected}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        resumeSelected={resumeSelected}
        setResumeSelected={setResumeSelected}
      />
      <main>
        
      </main>
    </div>
  );
}

export default App;
