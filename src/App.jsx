import './index.css';
import Nav from './components/nav';
import Footer from './components/footer.jsx';
import Background from './components/Background/background.jsx';
import  Home  from './components/home.jsx';


function App() {
  return (
    <div className='flex flex-col h-screen w-full'>
      



        <Background numStars={200}/>
        <Nav/>
        <div className='flex-grow bg-transparent z-10'>
          <Home/>
          
        </div>
        <Footer/>

  

    </div>
    
  );
}

export default App;
