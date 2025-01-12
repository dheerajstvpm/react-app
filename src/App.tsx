import "./App.css";
import Header from "./components/header-component/Header.tsx";
import Footer from "./components/footer-component/Footer.tsx";
import MainContent from "./components/main-content-component/MainContent.tsx";

export default function App() {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  );
}
