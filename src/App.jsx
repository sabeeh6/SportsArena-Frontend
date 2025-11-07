import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Dashboard from "./pages/Home/Home.jsx";
import Tournament from "./pages/Tournaments/Tournament.jsx";
import TournamentApplicationForm from "./pages/apply/apply.jsx";
import PrivacyPolicyPage from "./pages/privacypolicy.jsx";
import { initGA, trackPageView } from "./utils/analytics";

function App() {
  const location = useLocation();

  useEffect(() => {
    // Check consent from localStorage
    const consent = localStorage.getItem("userConsent");

    // Only initialize GA if consent is accepted
    if (consent === "accepted") {
      initGA();
    }
  }, []);

  useEffect(() => {
    // Again check consent before tracking page views
    const consent = localStorage.getItem("userConsent");

    if (consent === "accepted") {
      trackPageView(location.pathname + location.search);
    }
  }, [location]);

  return (
    <>
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
