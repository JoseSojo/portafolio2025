import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import CodeDemo from './components/CodeDemo';
// import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function PorfolioApp() {
  return (
    <>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header />
        <main>
          <Hero />
          <Features />
          <CodeDemo />
          {/* <Testimonials /> */}
        </main>
        <Footer />
      </div>
    </>
  );
}

export default PorfolioApp;