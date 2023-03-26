import './index.css';
import Nav from './components/nav';
import Footer from './components/footer.jsx';
import Background from './components/Background/background.jsx';
import  Home  from './components/home.jsx';
import About from './components/about';
import Faq from './components/faq';
import Marketing from './components/marketing';
import About2 from './components/about2';
import Contact from './components/contact';

function App() {
  return (
    <div className='flex flex-col h-screen w-full'>
      



        <Background numStars={900}/>
        <Nav/>
        <div className='flex-grow bg-transparent z-10'>
          <Home/>
          <About/>
          <About2/>
          <Marketing/>
          <Contact/>
          <Faq/>
          
        </div>
        <Footer/>

  

    </div>
    
  );
}

export default App;
