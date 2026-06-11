import React, { useState, useEffect } from 'react';
import Layout from './components/layouts/Layout';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Services from './pages/services/Services';
import Fleet from './pages/fleet/Fleet';
import Safety from './pages/safety/Safety';
import Contact from './pages/contact/Contact';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  const navigateTo = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const navigateToHomeAndScroll = (sectionId) => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    // Navigation scroll shadow effect
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Reveal animations using IntersectionObserver
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      if (!section.classList.contains('transition-all')) {
        section.classList.add('transition-all', 'duration-1000', 'ease-out', 'opacity-0', 'translate-y-10');
      }
      observer.observe(section);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, [currentPage]);

  return (
    <Layout
      currentPage={currentPage}
      navigateTo={navigateTo}
      navigateToHomeAndScroll={navigateToHomeAndScroll}
      isScrolled={isScrolled}
    >
      {currentPage === 'home' ? (
        <Home
          navigateTo={navigateTo}
          navigateToHomeAndScroll={navigateToHomeAndScroll}
        />
      ) : currentPage === 'services' ? (
        <Services
          navigateTo={navigateTo}
          navigateToHomeAndScroll={navigateToHomeAndScroll}
        />
      ) : currentPage === 'fleet' ? (
        <Fleet
          navigateTo={navigateTo}
          navigateToHomeAndScroll={navigateToHomeAndScroll}
        />
      ) : currentPage === 'safety' ? (
        <Safety
          navigateTo={navigateTo}
          navigateToHomeAndScroll={navigateToHomeAndScroll}
        />
      ) : currentPage === 'contact' ? (
        <Contact
          navigateTo={navigateTo}
          navigateToHomeAndScroll={navigateToHomeAndScroll}
        />
      ) : (
        <About
          navigateToHomeAndScroll={navigateToHomeAndScroll}
        />
      )}
    </Layout>
  );
}

export default App;
