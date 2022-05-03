import { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/shared/logo.svg"
export default function Homepage() {
    useEffect(()=>{
        const body = document.querySelector('body');
        if(body.classList.contains('bg-home-d')){

        }else{
            body.classList.toggle('bg-home-d');
        }
        return () =>{
            body.classList.toggle('bg-home-d');
        }
    },[])

    const menu = () => {
        const button = document.querySelector('.mobile-nav-toggle');
        let change = button.getAttribute('aria-expanded');
        change !== 'true' 
            ? button.setAttribute('aria-expanded', 'true') : button.setAttribute('aria-expanded', 'false')
        let element = document.querySelector('.primary-navigation');
        change = element.getAttribute('data-visible');
        change !== "true"
            ? element.setAttribute('data-visible', "true") : element.setAttribute('data-visible', "false")
    }

    return (    
        <div className="grid">
            <a className="skip-to-content" href="#main">Skip to Main</a>
            <header className="flex flex-between">
                <div className="self-center" style={{"flexBasis" : "10%"}}> 
                    <img className="logo" src={logo} alt=""/>
                </div>
                <button className="mobile-nav-toggle" aria-controls="primary-navigation" aria-expanded="false" onClick={menu}>
                    <span className="sr-only" aria-expanded="false">Menu</span>
                    </button>
                <div className="line">
                    <span></span>
                </div>
                <nav id="primary-navigation" className="flex flex-end">
                    <ul className="primary-navigation underline-indicator flex bg-dark--alpha " data-visible="false">
                    <Link className="txt-white ff-sans-cond letter-spacing-2" tabIndex="1" to="/home"><li className="active"><span aria-hidden="true">00</span>Home</li></Link>
                        <Link className="txt-white ff-sans-cond letter-spacing-2" tabIndex="1" to="/destination/Moon"><li>
                            <span aria-hidden="true">01</span> Destination</li></Link>
                        <Link className="txt-white ff-sans-cond letter-spacing-2" tabIndex="1" to="/crew/douglashurley"><li>
                            <span aria-hidden="true">02</span> Crew</li></Link> 
                        <Link className="txt-white ff-sans-cond letter-spacing-2" tabIndex="1" to="/technology/launchvehicle"><li>
                            <span aria-hidden="true">03</span> Technology</li></Link> 
                    </ul>
                </nav>
            </header>
            <main id="main" className="grid-container">
                <div className="flow">
                    <h1 className='txt-light ff-sans-cond uppercase letter-spacing-1'>So, you want to travel to
                    <span style={{"display" : "block" }} className="txt-white ff-serif uppercase letter-spacing-1 fs-900">Space</span></h1>
                    <p className='txt-light ff-sans-normal fs-400'>Let's face it; if you want to go to space, you might as well genuinely go to
                        outer space and not hover kind of on the edge of it. Well sit back, and relax
                        because we'll give you a truly out of this world experience!</p>
                </div>
                <div className="m-button">
                    <Link className="large-button anim bg-white txt-dark ff-serif uppercase" style={{"fontSize" : "2rem"}}to="/destination/Moon">Explore</Link>
                </div>
            </main>
        </div>
    )
}

