import { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/shared/logo.svg"
import data from "../data.json";

export default function Destination() {
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
                        <li className="active"><Link className="txt-white ff-sans-cond letter-spacing-2" to="/"><span aria-hidden="true">00</span>Home</Link></li>
                        <li><Link className="txt-white ff-sans-cond letter-spacing-2" to="/destination">
                            <span aria-hidden="true">01</span> Destination</Link></li>
                        <li><Link className="txt-white ff-sans-cond letter-spacing-2" to="/">
                            <span aria-hidden="true">02</span> Crew</Link> </li>
                        <li><Link className="txt-white ff-sans-cond letter-spacing-2" to="/">
                            <span aria-hidden="true">03</span> Technology</Link> </li>
                    </ul>
                </nav>
            </header>
            <main id="main" className="grid-container">
                <div className="flow">
                    <div>
                        <h1 className='numbered-title-300'><span>01</span> Pick your destination</h1>
                        <PlanetImage data={data.destinations[0]} />
                        <nav>
                            <ul 
                            className="primary-navigation--destination underline-indicator flex flex-center"
                            style={{"paddingRight" : "0", "paddingLeft" : "0"}}>
                                { data.destinations.map((item ,index) => {
                                    if(index === 0){
                                        return <li key={item.name+1} className="active"><Link className="txt-white ff-serif fs-200 letter-spacing-2 uppercase " to="/">
                                        {item.name}</Link></li>
                                    }else{
                                        return <li key={item.name+1}><Link className="txt-white ff-serif fs-200 letter-spacing-2 uppercase " to="/">
                                        {item.name}</Link></li>
                                    }
                                })}
                                </ul>
                        </nav>
                    </div>
                </div>
            </main>
        </div>
    )
}

function PlanetImage(props){
    return (
        <img className="img-destination" src={`${props.data.images.png}`} alt="planet"></img>
    )
}

function Planet(props){
    
    return(
        <div className="">
            {props.name}
        </div>
    )
}
