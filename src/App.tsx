import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import WhyAdarsh from './pages/WhyAdarsh';
import Academics from './pages/Academics';
import Admissions from './pages/Admissions';
import Campus from './pages/Campus';
import Faculty from './pages/Faculty';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import { LoadingScreen } from './components/LoadingScreen';
import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Minimum loading time for a premium feel
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2800);

    // Also wait for window load event
    const handleLoad = () => {
      // If load is fast, the timer still holds for 2.8s
      // If load is slow, we wait for this too? 
      // Actually 2.8s is usually enough for these assets.
    };

    window.addEventListener('load', handleLoad);
    return () => {
      window.removeEventListener('load', handleLoad);
      clearTimeout(timer);
    };
  }, []);

  return (
    <Router>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen key="loader" />}
      </AnimatePresence>

      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            
            {/* About Group */}
            <Route path="/why-adarsh" element={<WhyAdarsh />} />
            <Route path="/about" element={<Navigate to="/why-adarsh" replace />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/student-council" element={<Navigate to="/contact" replace />} />
            
            {/* Academics Group */}
            <Route path="/academics" element={<Academics />} />
            <Route path="/academic" element={<Academics />} />
            <Route path="/courses" element={<Navigate to="/academics" replace />} />
            <Route path="/curriculum" element={<Navigate to="/academics" replace />} />
            <Route path="/calendar" element={<Navigate to="/academics" replace />} />
            <Route path="/exam-rules" element={<Navigate to="/academics" replace />} />
            <Route path="/library" element={<Navigate to="/academics" replace />} />
            <Route path="/rules" element={<Navigate to="/academics" replace />} />
            
            {/* Admissions Group */}
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/eligibility" element={<Navigate to="/admissions" replace />} />
            <Route path="/fees" element={<Navigate to="/admissions" replace />} />
            <Route path="/help" element={<Navigate to="/contact" replace />} />
            
            {/* Campus Group */}
            <Route path="/campus" element={<Campus />} />
            <Route path="/campus-life" element={<Navigate to="/campus" replace />} />
            <Route path="/infrastructure" element={<Navigate to="/campus" replace />} />
            <Route path="/gallery" element={<Navigate to="/campus" replace />} />
            
            {/* Contact */}
            <Route path="/contact" element={<Contact />} />

            {/* Catch All */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
