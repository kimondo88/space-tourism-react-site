import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
      <div className="container">
            <h1>Design system</h1>
            <Colors />
        </div>
    </div>
  );
}

function Colors(){
  return (
    <section id="colors">
      <h2 className='txt-white flex-start'><span className='txt-white--opacity'>01</span> colors</h2>
      
      <div className='flex'>
          <div className="block">
            <div className="colors__divs" style={{"color" : "white"}}>
                #0B0D17
            </div>
            <p className="txt-white flex"><span className="txt-light">RGB</span>11, 13, 23</p>
            <p className="txt-white flex"><span className="txt-light">HSL</span>230°, 35%, 7%</p>
          </div>
          <div className="block">
            <div className="colors__divs" style={{
              "color" : "black", "background-color": "hsl(var(--clr-light))"}}>
                #D0D6F9
            </div>
            <p className="txt-white flex"><span className="txt-light">RGB</span> 11, 13, 23</p>
            <p className="txt-white flex"><span className="txt-light">HSL</span>230°, 35%, 7%</p>
          </div>
          <div className="block">
            <div className="colors__divs" style={{
            "color" : "black", "background-color": "hsl(var(--clr-white))"}}>
                #FFFFFF
            </div>
            <p className="txt-white flex"><span className="txt-light">RGB</span>11, 13, 23</p>
            <p className="txt-white flex"><span className="txt-light">HSL</span>230°, 35%, 7%</p>
          </div>
      </div>
  </section>
  )
}

export default App;
