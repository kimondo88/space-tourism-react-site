import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import logo from "../assets/shared/logo.svg"
import data from "../data.json";

export default function Destination() {
    const { celestial } = useParams();
    const celestialData = data.destinations.filter(item => item["name"] === celestial)
    let tabIndex = 0;

    useEffect(()=>{
        const body = document.querySelector('body');
        if(body.classList.contains('bg-destination')){

        }else{
            body.classList.toggle('bg-destination');
        }
        return () =>{
            body.classList.toggle('bg-destination');
        }
    },[])
    useEffect(()=>{
        const tabList = document.querySelector('[role="tablist"]');
        const tabs = tabList.querySelectorAll('[role="tab"]');

        const list = tabList.addEventListener("keydown" , (e) => tabEvent(e, tabs));
        return () => tabList.removeEventListener("keydown", list);
        // eslint-disable-next-line
    },[])

    function tabEvent(e, tabs){
        const [keyCodeLeft, keyCodeRight] = [37,39];
        if(e.keyCode === keyCodeLeft || e.keyCode === keyCodeRight){
            tabs[tabIndex].setAttribute('tabIndex' , '-1'); 
            if(e.keyCode === keyCodeRight){
                tabIndex === tabs.length-1 ? tabIndex = 0 : tabIndex += 1;
            }
            else if(e.keyCode === keyCodeLeft){
                tabIndex === 0 ? tabIndex = tabs.length-1 : tabIndex -= 1;
            }
            tabs[tabIndex].setAttribute('tabIndex' , '0');
            return tabs[tabIndex].focus();
        }
    }
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
    const selectActive = (id) => {
        deselectActive();
        let toActive = document.getElementById(id)
        return toActive.classList.toggle("active")
    }
    const deselectActive = () => {
        const active = document.querySelector(".primary-navigation--destination li.active");
        return active.classList.toggle("active");
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
                        <Link className="txt-white ff-sans-cond letter-spacing-2" tabIndex="1" to="/home"><li><span aria-hidden="true">00</span>Home</li></Link>
                        <Link className="txt-white ff-sans-cond letter-spacing-2" tabIndex="1" to="/destination/Moon"><li className="active">
                            <span aria-hidden="true">01</span> Destination</li></Link>
                        <Link className="txt-white ff-sans-cond letter-spacing-2" tabIndex="1" to="/crew/douglashurley"><li>
                            <span aria-hidden="true">02</span> Crew</li></Link> 
                        <Link className="txt-white ff-sans-cond letter-spacing-2" tabIndex="1" to="/technology/launchvehicle"><li>
                            <span aria-hidden="true">03</span> Technology</li></Link> 
                    </ul>
                </nav>
            </header>
            
            <main id="main" className="grid-container grid-container--destination">
                <div className="col-2">
                    <h1 className='numbered-title-300'><span aria-hidden="true">01</span> Pick your destination</h1>
                    <PlanetImage data={celestialData[0]} />
                </div>
                <div className="col-3">
                        <nav>
                            <ul 
                            className="primary-navigation--destination underline-indicator flex flex-center"
                            style={{"paddingRight" : "0", "paddingLeft" : "0"}}
                            role="tablist">
                                { data.destinations.map((item ,index) => {
                                    if(index === 0){
                                        return <Link key={item.name+1} className="txt-white ff-serif fs-200 letter-spacing-3 uppercase " 
                                            onClick={() => selectActive(item.name+1)} 
                                            to={'/destination/' + item.name}
                                            role="tab"
                                            tabIndex="0">
                                        <li  id={item.name+1} className="active">{item.name}</li></Link>
                                    }else{
                                        return  <Link key={item.name+1} className="txt-white ff-serif fs-200 letter-spacing-3 uppercase " 
                                            onClick={() => selectActive(item.name+1)} 
                                            to={'/destination/' + item.name}
                                            role="tab"
                                            tabIndex="-1"><li id={item.name+1}>
                                        {item.name}</li></Link>
                                    }
                                })}
                                </ul>
                        </nav>
                        <PlanetText data={celestialData[0]}/>
                    </div>
                   
                        
                   
            </main>
        </div>
    )
}

function PlanetImage(props){
    return (
        <picture>
            <source className="img-destination" srcSet={`${props.data.images.webp}`} type="image/webp"/>
            <img className="img-destination" src={`${props.data.images.png}`} alt={props.data.name}></img>
        </picture>
    )
}

function PlanetText(props){
    
    return(
        <article className="planet-text">
            <h2 className="ff-serif fs-900 uppercase">{props.data.name}</h2>
            <p className="txt-light ff-sans-normal fs-200">{props.data.description}</p>
            <div className="line-destination"><span></span></div>
            <div className="my-5"></div>
            <div className="planet-text_bottom">
                <div className="wh-nowrap">
                    <p className='txt-light ff-sans-cond letter-spacing-3 uppercase' style={{"fontSize" : ".875rem"}}>Avg. Distance</p>
                    <h3 className='ff-serif letter-spacing-3 uppercase my-1' style={{"fontSize" : "1.75rem"}}>{props.data.distance}</h3>
                </div>
                <div className="wh-nowrap">
                    <p className='txt-light ff-sans-cond letter-spacing-3 uppercase' style={{"fontSize" : ".875rem"}}>Est. Travel Time</p>
                    <h3 className='ff-serif letter-spacing-3 uppercase my-1' style={{"fontSize" : "1.75rem"}}>{props.data.travel}</h3>
                </div>
            </div>
        </article>
    )
}
