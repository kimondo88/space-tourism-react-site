import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import logo from "../assets/shared/logo.svg"
import data from "../data.json";

export default function Technology() {
    // const [imgPath,  setImgPath] = useState('');
    let { tech } = useParams();
    const techData = data.technology.filter(item => {
        let joinString = item["name"];
        joinString = joinString.toLowerCase().split(" ");
        if(joinString.length > 1){
            joinString = joinString[0].concat(joinString[1]);
        }else{
            joinString = joinString[0];
        }
        return joinString === tech
    })
    const techMap = data.technology.map(item => {
        let joinString = item["name"];
        joinString = joinString.toLowerCase().split(" ");
        if(joinString.length > 1){
            joinString = joinString[0].concat(joinString[1]);
        }else{
            joinString = joinString[0];
        }
        return joinString
    })
    let tabIndex = 0;

    useEffect(()=>{
        const body = document.querySelector('body');
        if(body.classList.contains('bg-technology')){

        }else{
            body.classList.toggle('bg-technology');
        }
        return () =>{
            body.classList.toggle('bg-technology');
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
        // const active = document.querySelectorAll(".dot-indicators a");
        const active = document.querySelector('[aria-selected="true"]')
        const setActive = document.getElementById(id);
        active.setAttribute('aria-selected', false);
        return setActive.firstChild.setAttribute('aria-selected', true);
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
                        <Link className="txt-white ff-sans-cond letter-spacing-2" tabIndex="1" to="/destination/Moon"><li>
                            <span aria-hidden="true">01</span> Destination</li></Link>
                        <Link className="txt-white ff-sans-cond letter-spacing-2" tabIndex="1" to="/crew/douglashurley"><li>
                            <span aria-hidden="true">02</span> Crew</li></Link> 
                        <Link className="txt-white ff-sans-cond letter-spacing-2" tabIndex="1" to="/"><li className="active">
                            <span aria-hidden="true">03</span> Technology</li></Link> 
                    </ul>
                </nav>
            </header>
            
            <main id="main" className="grid-container grid-container--technology">
                <h1 className='numbered-title-300 numbered-title-300--technology txt-white ff-sans-cond fs-400 letter-spacing-1' 
                    style={{"marginTop":"1rem"}}>
                    <span aria-hidden="true">03</span> Space launch 101</h1>
                <div className="col-2 border-b">
                    <TechnologyImage data={techData[0]} />
                </div>
                <div className="col-3 flex flex-col" style={{"--gap" : "0"}}>
                        <nav>
                            <div className="flex flex-cc">
                                <div className="flex num-indicators" role="tablist">
                                    <Link 
                                        id={techMap[0]} 
                                        to={"/technology/" + techMap[0]} 
                                        onClick={()=> selectActive(techMap[0])}>
                                        <button role="tab" aria-selected="true">
                                        1
                                        </button>
                                    </Link>
                                    <Link 
                                        id={techMap[1]} 
                                        to={"/technology/" + techMap[1]} 
                                        onClick={()=> selectActive(techMap[1])}>
                                        <button role="tab" aria-selected="false">
                                            2
                                        </button>
                                    </Link>
                                    <Link 
                                        id={techMap[2]} 
                                        to={"/technology/" + techMap[2]} 
                                        onClick={()=> selectActive(techMap[2])}>
                                        <button role="tab" aria-selected="false">
                                            3
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </nav>
                        <TechnologyText data={techData[0]}/>
                    </div>
            </main>
        </div>
    )
}

function TechnologyImage(props){
    return (
        <picture>
            <source className="img-tech" 
                media="(min-width: 900px)" 
                srcSet={props.data.images.portrait}
                alt={props.data.name}/>
            <img src={props.data.images.landscape} alt={props.data.name} />
        </picture>
        
    )
}

function TechnologyText(props){
    
    return(
        <article className="planet-text--technology" tabIndex="0">
            <header className="flow">
                <p className="txt-light ff-sans-cond fs-200 uppercase letter-spacing-3">The terminology...</p>
                <h3 className='txt-white ff-serif fs-700 letter-spacing-3 uppercase wh-nowrap'>{props.data.name}</h3>
                <p className="txt-light ff-sans-cond fs-300">{props.data.description}</p>
            </header>
        </article>
    )
}