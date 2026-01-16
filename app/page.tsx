import Header from './components/Header';
import SearchForm from './components/SearchForm';
import ActionButtons from './components/ActionButtons';
import PromoBanner from './components/PromoBanner';
import FAQ from './components/FAQ';
import InternationalSites from './components/InternationalSites';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <SearchForm />
      <ActionButtons />
      <PromoBanner />
      <FAQ />
      <InternationalSites />
      <Footer />
    </main>
  );
}
