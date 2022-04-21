import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
      <div className="container">
            <h1 className="ff-serif uppercase">Design system</h1>
            <Colors />
            <Typography />
        </div>
    </div>
  );
}

function Colors(){
  return (
    <section id="colors">
      <h2 className='numbered-title'><span>01</span> colors</h2>
      
      <div className='flex box-shadow'>
          <div className="block">
            <div className="colors__divs ff-serif fs-500" style={{"color" : "white"}}>
                #0B0D17
            </div>
            <p className="txt-white flex ff-serif"><span className="txt-light ">RGB</span>11, 13, 23</p>
            <p className="txt-white flex ff-serif"><span className="txt-light">HSL</span>230°, 35%, 7%</p>
          </div>
          <div className="block">
            <div className="colors__divs ff-serif fs-500 bg-light" style={{
              "color" : "black"}}>
                #D0D6F9
            </div>
            <p className="txt-white flex ff-serif"><span className="txt-light">RGB</span> 11, 13, 23</p>
            <p className="txt-white flex ff-serif"><span className="txt-light">HSL</span>230°, 35%, 7%</p>
          </div>
          <div className="block">
            <div className="colors__divs ff-serif fs-500 bg-white" style={{
            "color" : "black"}}>
                #FFFFFF
            </div>
            <p className="txt-white flex ff-serif"><span className="txt-light">RGB</span>11, 13, 23</p>
            <p className="txt-white flex ff-serif"><span className="txt-light">HSL</span>230°, 35%, 7%</p>
          </div>
      </div>
  </section>
  )
}

function Typography(){
  return (
    <section id="typography"  style={{"margin": "4rem 0"}}>
      <h2 className='numbered-title'><span>02 </span>Typography</h2>
      <div className="flex">
          <div className='flex-basis-100'>
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
          
          <div className='flex-basis-100'>
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

export default App;
