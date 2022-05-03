import './App.css';
import { Link } from 'react-router-dom'
import logo from "./assets/shared/logo.svg"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
      <div className="container">
        <div className="flex flex-between pyb-n" style={{"--padding-space" : "3rem"}}>
          <img className="logo" src={logo} alt="logo of star" style={{"margin" : "0"}}/>
          <h1 className="ff-sans-cond txt-light uppercase">Design system</h1>
        </div>
          <Colors />
          <Typography />
          <IntElements />
      </div>
    </div>
  );
}

function Colors(){
  return (
    <section id="colors">
      <h2 className='numbered-title'><span>01</span> colors</h2>
      
      <div className='flex box-shadow'>
          <div className="flex flex-col flex-basis-100">
            <div className="colors__divs ff-serif fs-500" style={{"color" : "white"}}>
                #0B0D17
            </div>
            <p className="txt-white flex ff-serif my-1"><span className="txt-light ">RGB</span>11, 13, 23</p>
            <p className="txt-white flex ff-serif"><span className="txt-light">HSL</span>230°, 35%, 7%</p>
          </div>
          <div className="flex flex-col flex-basis-100">
            <div className="colors__divs ff-serif fs-500 bg-light" style={{
              "color" : "black"}}>
                #D0D6F9
            </div>
            <p className="txt-white flex ff-serif my-1"><span className="txt-light">RGB</span> 11, 13, 23</p>
            <p className="txt-white flex ff-serif"><span className="txt-light">HSL</span>230°, 35%, 7%</p>
          </div>
          <div className="flex flex-col flex-basis-100">
            <div className="colors__divs ff-serif fs-500 bg-white" style={{
            "color" : "black"}}>
                #FFFFFF
            </div>
            <p className="txt-white flex ff-serif my-1"><span className="txt-light">RGB</span>11, 13, 23</p>
            <p className="txt-white flex ff-serif"><span className="txt-light">HSL</span>230°, 35%, 7%</p>
          </div>
      </div>
  </section>
  )
}

function Typography(){
  return (
    <section id="typography"  style={{"margin": "4rem 0", "--flow-space" : "1rem"}}>
      <h2 className='numbered-title'><span>02 </span>Typography</h2>
      <div className="flex">
          <div className='flex-basis-100 flow'>
              <div> 
                  <p className='txt-light ff-serif'>Heading 1 - Bellefair Regular - 150px</p>
                  <p className='ff-serif uppercase fs-900'>Earth</p>
              </div>
              <div> 
                  <p className='txt-light ff-serif'>Heading 2 - Bellefair Regular - 100px</p>
                  <p className='ff-serif uppercase fs-800'>Venus</p>
              </div>
              <div> 
                  <p className='txt-light ff-serif'>Heading 3 - Bellefair Regular - 56px</p>
                  <p className='ff-serif uppercase fs-700'>Jupiter & Saturn</p>
              </div>
              <div> 
                  <p className='txt-light ff-serif'>Heading 4 - Bellefair Regular - 32px</p>
                  <p className='ff-serif uppercase fs-600'>Uranus, Neptune, & Pluto</p>
              </div>
              <div> 
                  <p className='txt-light ff-serif'>Heading 5 - Barlow Condensed Regular - 28px - 4.75 Character Space</p>
                  <p className='txt-light ff-sans-cond uppercase fs-500 letter-spacing-3'>So, you want to travel to space</p>
              </div>
          
          </div>
          
          <div className='flex-basis-100 flow'>
              <div> 
                  <p className='txt-light ff-serif'>Subheading 1 - Bellefair Regular - 28px</p>
                  <p className='ff-serif fs-500'>384,400 km</p>
              </div>
              <div> 
                  <p className='txt-light ff-serif'>Subheading 2 - Barlow Condensed Regular - 14px - 2.35 Character Space</p>
                  <p className='ff-sans-cond fs-200 letter-spacing-3 uppercase'>Avg. Distance</p>
              </div>
              <div> 
                  <p className='txt-light ff-serif'>Nav Text - Barlow Condensed Regular - 16px - 2.7 Character Space</p>
                  <p className='ff-sans-cond fs-300 letter-spacing-2 uppercase'>Europa</p>
              </div>
              <div> 
                  <p className='txt-light ff-serif'>Body Text</p>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. </p>
              </div>
          </div>
      </div>
  </section>
  )

}

function IntElements(){
  return (
    <section className='flow' id="interactive-elements">
                <h2 className="numbered-title"><span>03</span> Interactive elements</h2>
                {/* <!-- navigation --> */}
                <div>
                  <nav>
                      <ul className="primary-navigation underline-indicator bg-white--alpha flex flex-center flex-gap-8">
                        <Link className="txt-white ff-serif fs-200 letter-spacing-2 uppercase " to="/">
                          <li className='active'>
                                <span className='mxr-1'>00</span>Active
                          </li>
                        </Link>
                          <Link 
                            className="txt-white ff-serif fs-200 letter-spacing-2 uppercase" 
                            to="/">
                            <li>
                              <span className='mxr-1'>01</span>Hovered
                            </li>
                          </Link>
                          <Link className="txt-white ff-serif fs-200 letter-spacing-2 uppercase" to="/">
                            <li className="pyb-1h">
                              <span className='mxr-1'>02</span>Idle                           
                            </li>
                          </Link>
                      </ul>
                  </nav>
                </div>
                
                <div className="flex">
                    <div className='my-5 flex flex-col'>
                        {/* <!-- explore button --> */}
                        <Link className="large-button bg-white txt-dark fs-600 ff-serif uppercase" to="/explore">Explore</Link>
                        <p className='txt-light ff-serif fs-300 self-center'>Landing Page Main Button - Idle</p>
                        <Link className="large-button anim bg-white txt-dark fs-600 ff-serif uppercase" to="/home">Explore</Link>
                        <p className='txt-light ff-serif fs-300 self-center'>Landing Page Main Button - Hover</p>
                    </div>
                    
                    <div className='flow flex flex-col flex-around' style={{"--flow-space" : " 1.5rem", "width" : "100%"}}>
                        {/* <!-- Tabs --> */}
                        <div className='tabs flex flex-col self-center' >
                            <div className="flex underline-indicator" aria-required>
                              <div className=""><button aria-selected="true" role="tab" className='bg-dark ff-sans-cond fs-200 txt-white letter-spacing-2 uppercase active'>Moon</button></div>
                              <div className=""><button aria-selected="false" role="tab" className='bg-dark ff-sans-cond fs-200 txt-light letter-spacing-2 uppercase hover'>Mars</button></div>
                              <div className=""><button aria-selected="false" role="tab" className='bg-dark ff-sans-cond fs-200 txt-light letter-spacing-2 uppercase '>Europa</button></div>
                            </div>
                            <p className='ff-sans-cond txt-light fs-200 self-center'>Tabs(Active, Hover & Idle)</p>
                        </div>
                        
                         {/* <!-- Dots --> */}
                         <div className="flex flex-col">
                            <div className="flex flex flex-cc dot-indicators" aria-required>
                              <button aria-selected="true"  role="tab"><span className='sr-only'>
                                Slide title</span></button>
                              <button aria-selected="false" role="tab"><span className='sr-only'>
                                Slide title</span></button>
                              <button aria-selected="false" role="tab"><span className='sr-only'>
                                Slide title</span></button>
                            </div>
                            <p className='ff-sans-cond txt-light fs-200 self-center'>Slider 1 States (Active, Hover & Idle)</p>
                        </div>
                        
                        {/*<!-- Numbers --> */}
                        <div className="flex flex-col">
                            <div className="flex flex-col self-center num-indicators" aria-required>
                              <button className='active' aria-pressed="true">1
                                </button>
                              <button aria-pressed="false">2
                                </button>
                              <button aria-pressed="false">3
                                </button>
                            </div>
                            <p className='ff-sans-cond txt-light fs-200 self-center'>Slider 2 States (Active, Hover & Idle)</p>
                        </div>
                    </div>
                </div>
                
            </section>
  )
}
export default App;
