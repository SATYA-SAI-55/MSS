
import React, { useState, useCallback } from 'react';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import OutcomesPage from './pages/OutcomesPage';
import WorkflowPage from './pages/WorkflowPage';
import ExtensionsPage from './pages/ExtensionsPage';
import Footer from './components/Footer';
import { Page } from './types';
import { NAV_ITEMS } from './constants';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<Page>(NAV_ITEMS[0].page);

  const renderPage = useCallback(() => {
    switch (activePage) {
      case Page.Home:
        return <HomePage />;
      case Page.About:
        return <AboutPage />;
      case Page.Outcomes:
        return <OutcomesPage />;
      case Page.Workflow:
        return <WorkflowPage />;
      case Page.Extensions:
        return <ExtensionsPage />;
      default:
        return <HomePage />;
    }
  }, [activePage]);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;