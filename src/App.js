import './App.scss';
import LOGO from './static/human.jpg'
import ABOUTLOGO from './static/avatar.png'
import TypeAnimation from 'react-type-animation';

const AnimationTyping = () => {
  return (
    <span>
      <TypeAnimation
        cursor={false}
        sequence={['React typing animation', 3000, 'Tran Chi Dung ', 3000, ""]}
        repeat={Infinity}
      />
    </span>
  );
};

function App () {
  return (
    <div className="App">
      <section className='home'>
        <header id="me" className='header'>
          <div className='Dicon'>
            <i class="fa-solid fa-d"></i>
          </div>
          <nav>
            <ul>
              <li><a href='#about'>About Me</a></li>
            </ul>
          </nav>
        </header>



        <div className='container'>
          <div className='container-text'>
            <h3>Hi, There!</h3>
            <h1>I Am {AnimationTyping()} </h1>
            <div>
              <p>LOrem LOrem LOrem LOrem LOrem LOrem LOrem LOrem   LOrem LOrem LOrem </p>
            </div>
            <div className='social'>
              <a href='#'><i className='fa-brands fa-facebook-square'></i></a>
              <a href='#'><i className='fa-brands fa-instagram'></i></a>
            </div>
          </div>
        </div>
      </section>


      <section className='about' id="about" >
        <div className='about-img'>
          <img src={ABOUTLOGO} alt="" />
        </div>
        <div className='about-text'>
          <h2>ABOUT ME</h2>
          <h5>I am a front-end developer. I can provide awesome clean code and pixel perfect
            I am a front-end developer. I can provide awesome clean code and pixel perfect
            I am a front-end developer. I can provide awesome clean code and pixel perfect
            I am a front-end developer. I can provide awesome clean code and pixel perfect
            I am a front-end developer. I can provide awesome clean code and pixel perfect
            I am a front-end developer. I can provide awesome clean code and pixel perfect
          </h5>
          <a className='btn' href={LOGO} download="CV">My CV</a>
        </div>
      </section>
    </div>
  );
}

export default App;
