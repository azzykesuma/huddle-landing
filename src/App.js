import './App.css';
import logo from './images/logo.svg';
import mockup from './images/illustration-mockups.svg'
import facebook from './images/facebook.png'
import twitter from './images/twitter.png'
import instagram from './images/instagram.svg'


function App() {
  return (
    <div className='container'>
      <div className='left'>
        <img className='logo' src={logo} alt='logo' />
        <img className='mockup' src={mockup} alt='design' />
      </div>
      <div className='right'>
        <h1>Build The Community Your Fans Will Love</h1>
        <p>
          Huddle re-imagines the way we build communities. You have a voice, but so does your audience. 
          Create connections with your users as you engage in genuine discussion.
       </p>
       <button>Register</button>
       <div className='socmedContainer'>
          <img className='media' src={facebook} alt='facebook' />
          <img className='media' src={twitter} alt='twitter' />
          <img className='media' src={instagram} alt='instagram' />
       </div>
      </div>
    </div>
  );
}

export default App;
