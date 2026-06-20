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

  useEffect(() => {
    const seoMeta = {
      home: {
        title: "M1 TRANSPORT | National Logistics, Trucking & Freight Australia",
        description: "M1 Transport is a premier Australian freight & logistics company. We specialize in B-Double linehaul, bulk haulage, 3PL warehousing, and refrigerated transport."
      },
      services: {
        title: "Logistics & Freight Services | M1 Transport",
        description: "Explore our range of heavy transport services, including daily East Coast linehaul, high-capacity bulk haulage, temperature-controlled transport, and 3PL warehousing."
      },
      about: {
        title: "About Us | M1 Transport",
        description: "Learn more about M1 Transport. For over 15 years, we have connected Australian businesses with smart, reliable, and transparent supply chain operations."
      },
      safety: {
        title: "Safety, Compliance & Accreditation | M1 Transport",
        description: "Discover our safety-first operational culture. Fully compliant with Australia's Chain of Responsibility (CoR) laws, fatigue management, and NHVAS accreditations."
      },
      fleet: {
        title: "Fleet Specifications & Asset Capability | M1 Transport",
        description: "Explore our modern logistics assets including B-Double combinations, single semi-trailers, refrigerated units, and urban tail-lift delivery vehicles."
      },
      contact: {
        title: "Contact Us & Request a Quote | M1 Transport",
        description: "Get in touch with our operations team in Melbourne. Request a competitive quote for linehaul, bulk transport, or 3PL warehousing services."
      }
    };

    const currentMeta = seoMeta[currentPage] || seoMeta.home;

    // Update document title
    document.title = currentMeta.title;

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", currentMeta.description);
    } else {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      metaDescription.setAttribute('content', currentMeta.description);
      document.head.appendChild(metaDescription);
    }

    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    const path = currentPage === 'home' ? '' : currentPage;
    const url = `https://m1transport.com.au/${path}`;
    if (canonical) {
      canonical.setAttribute("href", url);
    } else {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      canonical.setAttribute('href', url);
      document.head.appendChild(canonical);
    }
  }, [currentPage]);

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
