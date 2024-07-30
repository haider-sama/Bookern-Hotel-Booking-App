import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";

interface Props {
  children: React.ReactNode;
  showHero?: boolean;
  showSearch?: boolean;
}

const Layout = ({ children, showHero = false, showSearch = false }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {showHero && <Hero />}
      <div className="container mx-auto">
        {showSearch && <SearchBar />}
      </div>
      <div className="container mx-auto py-10 flex-1">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;