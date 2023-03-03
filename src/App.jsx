import './index.css';
import Nav from './components/nav';
import Footer from './components/footer.jsx';
import Background from './components/Background/background.jsx';
import  Home  from './components/home.jsx';
import About from './components/about';



function App() {
  return (
    <div className='flex flex-col h-screen w-full'>
      



        <Background numStars={800}/>
        <Nav/>
        <div className='flex-grow bg-transparent z-10'>
          <Home/>
          <About/>
          
        </div>
        <Footer/>

  

    </div>
    
  );
}

export default App;
