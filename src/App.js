import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Works from "./components/projects/Projects";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
