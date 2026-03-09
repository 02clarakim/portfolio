// app/page.jsx
import Sidebar from "../components/Sidebar";
import Hero from "../components/Hero";
import About from "../components/About";
import TechStack from "../components/TechStack";
import Projects from "../components/Projects";
import ContactForm from "../components/ContactForm";
import styles from "./home.module.css"; // if you use CSS modules

export default function HomePage() {
  return (
    <div className={styles.home}>
      <Sidebar />
      <main className={styles.mainContent}>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <ContactForm />
      </main>
    </div>
  );
}
