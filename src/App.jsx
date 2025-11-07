// src/App.jsx
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Dashboard from "./pages/Home/Home.jsx";
import Tournament from "./pages/Tournaments/Tournament.jsx";
import TournamentApplicationForm from "./pages/apply/apply.jsx";
import PrivacyPolicyPage from "./pages/privacypolicy.jsx";
import { useLocation } from 'react-router-dom';
import { initGA, trackPageView } from './utils/analytics';

function App() {
  const location = useLocation();

  // Initialize GA on app mount
  useEffect(() => {
    initGA();
  }, []);

  // Track page views on route change
  useEffect(() => {
    trackPageView(location.pathname + location.search);
  }, [location]);

  return (
    <>
      {/* <AnalyticsTracker /> */}
      <Routes>
        <Route path="/apply" element={<TournamentApplicationForm />} />
        <Route path="/tournaments" element={<Tournament />} />
        <Route path="/tournaments/:category" element={<Tournament />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/policy" element={<PrivacyPolicyPage />} />
      </Routes>
    </>
  );
}

export default App;
