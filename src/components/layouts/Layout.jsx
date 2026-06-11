import React from 'react';
import Header from './Header';
import Footer from './Footer';

function Layout({ children, currentPage, navigateTo, navigateToHomeAndScroll, isScrolled }) {
  return (
    <>
      <Header
        currentPage={currentPage}
        navigateTo={navigateTo}
        navigateToHomeAndScroll={navigateToHomeAndScroll}
        isScrolled={isScrolled}
      />
      <main>
        {children}
      </main>
      <Footer
        navigateTo={navigateTo}
        navigateToHomeAndScroll={navigateToHomeAndScroll}
      />
    </>
  );
}

export default Layout;
