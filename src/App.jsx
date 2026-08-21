import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import IntroCover from "./components/IntroCover";
import ScrollRibbon from "./components/ScrollRibbon";
import SectionTabs from "./components/SectionTabs";
import BookSpine from "./components/BookSpine";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Work from "./pages/Work";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CaseStudy from "./pages/CaseStudy";
import Everwood from "./pages/case-studies/Everwood";
import Reneal from "./pages/case-studies/Reneal";
import Rate from "./pages/case-studies/Rate";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <ScrollToTop />
      <div className="paper-grain fixed inset-0 pointer-events-none z-50" />
      <IntroCover />
      <BookSpine />
      <ScrollRibbon />
      <SectionTabs />
      <Nav />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/work/everwood" element={<Everwood />} />
          <Route path="/work/reneal" element={<Reneal />} />
          <Route path="/work/rate" element={<Rate />} />
          <Route path="/work/:slug" element={<CaseStudy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
