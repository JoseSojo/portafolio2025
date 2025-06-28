import { ContactForm } from "./components/cotization/ContactForm";
import { GuidelinesSection } from "./components/cotization/GuidelinesSection";
import { HeroSection } from "./components/cotization/HeroSection";
import { ProcessSection } from "./components/cotization/ProcessSection";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function ContizationApp() {
    return (
        <>
            <Header cotizar />
            <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
                <HeroSection />
                <GuidelinesSection />
                <ProcessSection />
                <ContactForm />
            </main>
            <Footer />
        </>
    )
}
