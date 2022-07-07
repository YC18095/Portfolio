import './App.scss';
import LOGO from './static/human.jpg'
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
      <section>
        <header className='header'>
          <div className='Dicon'>
            <i class="fa-solid fa-d"></i>
          </div>
          <nav>
            <ul>
              <li><a>Me</a></li>
              <li><a>Contact</a></li>
              <li><a>About Me</a></li>
              <button>Contact Me</button>
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
              <a href='#'><i className='fa-brands fa-twitter'></i></a>
              <a href='#'><i className='fa-brands fa-instagram'></i></a>
              <a href='#'><i className='fa-brands fa-behance'></i></a>
              <a href='#'><i className='fa-brands fa-dribbble'></i></a>
            </div>
            <a className='btn' href={LOGO} download="CV">My CV</a>
            <div className='bottom'>
              <p>@ 2022 All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
