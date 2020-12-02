import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Header from "./components/header/Header";
import Works from "./components/works/Works";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Works />
      <Contact />
    </div>
  );
}

export default App;
