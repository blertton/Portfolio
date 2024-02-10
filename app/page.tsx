import Skills from "./skills/index";
import Projects from "./projects/index";
import Footer from "./footer/index";
import Work from "./work/index";
import Navbar from "./navbar/navbar";
import Hero from "./hero/hero";
import Socials from "./socials/socials";

const Home = () => {
  return (
    <div>
      <div className="bg-white dark:bg-medium">
        <div className="min-h-screen">
          <Navbar />
          <Hero />
          <Socials />
          <Skills />
          <Work />
          <Projects />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
