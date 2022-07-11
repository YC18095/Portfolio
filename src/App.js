import './App.scss';
import LOGO from './static/human.jpg'
import MEPIC from './static/me.jpg'
import TypeAnimation from 'react-type-animation';

const AnimationTyping = () => {
  return (
    <span>
      <TypeAnimation
        cursor={false}
        sequence={['Tran Chi Dung', 3000,'a Web Developer' , 3000, '']}
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
            <h1>I'am {AnimationTyping()} </h1>
            <div>
              <p>A front-end web developer with over 2 years experience.</p>
            </div>
            <div className='social'>
              <a target='_blank' href='https://vi-vn.facebook.com/'><i className='fa-brands fa-facebook-square'></i></a>
              <a target='_blank' href='https://www.linkedin.com/'><i className="fa-brands fa-linkedin"></i></a>
            </div>
          </div>
        </div>
      </section>


      <section className='about' id="about" >
        <div className='about-img'>
          <img src={MEPIC} alt="" />
        </div>
        <div className='about-text'>
          <h2>ABOUT ME</h2>
          <h5>I'am a front-end developer with over 2 years of experience in ReactJs for building webpage.
            Besides I'm interested in system design and how we could optimize, scale our web app system.
            Also focus on making some products or creating value that could help people life being convenience and better.
          </h5>
          <a className='btn' href={LOGO} download="CV">My CV</a>
        </div>
      </section>
    </div>
  );
}

export default App;
