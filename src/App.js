import NavBar from './components/nav_bar/NavBar';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import Who from './components/pages/page/Who';
import Services from './components/services/Services';
import Clients from './components/pages/page/Clients';
import Projects from './components/pages/page/Projects';
import Testimonials from './components/pages/page/Testimonials';
import Contacts from './components/pages/page/Contacts';

function App() {
  return (
    <div className='w-full flex justify-center'>
      <div className='w-full'>
        <NavBar />
        <Home />
        <Who />
        <Services />
        <Clients />
        <Projects />
        <Testimonials />
        <Contacts />
        <Footer />
      </div>
    </div>
  );
}

export default App;
