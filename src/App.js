import "./App.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import { Footer } from "./components/Footer";
import { Experiences } from "./components/Experiences";
import { Education } from "./components/Education";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Experiences/>
      <Education/>
      <Skills />
      <Projects />
      <Contact/>
      <Footer/>
    </div>
  );
}
export default App;
