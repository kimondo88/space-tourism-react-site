import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import logo from "../assets/shared/logo.svg"
import data from "../data.json";

export default function Crew() {
    // const [imgPath,  setImgPath] = useState('');
    let { member } = useParams();
    const memberData = data.crew.filter(item => {
        let joinString = item["name"];
        joinString = joinString.toLowerCase().split(" ");
        joinString = joinString[0].concat(joinString[1]);
        return joinString === member
    })
    const memberMap = data.crew.map(item => {
        let joinString = item["name"];
        joinString = joinString.toLowerCase().split(" ");
        joinString = joinString[0].concat(joinString[1]);
        return joinString
    })
    let tabIndex = 0;

    useEffect(()=>{
        const body = document.querySelector('body');
        if(body.classList.contains('bg-crew')){

        }else{
            body.classList.toggle('bg-crew');
        }
        return () =>{
            body.classList.toggle('bg-crew');
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
        return setActive.setAttribute('aria-selected', true);
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
                        <Link className="txt-white ff-sans-cond letter-spacing-2" tabIndex="1" to="/crew/douglashurley"><li className="active">
                            <span aria-hidden="true">02</span> Crew</li></Link> 
                        <Link className="txt-white ff-sans-cond letter-spacing-2" tabIndex="1" to="/"><li>
                            <span aria-hidden="true">03</span> Technology</li></Link> 
                    </ul>
                </nav>
            </header>
            
            <main id="main" className="grid-container grid-container--crew">
                <h1 className='numbered-title-300 numbered-title-300--crew' style={{"marginTop":"1rem"}}><span aria-hidden="true">02</span> Meet your Crew</h1>
                <div className="col-2 border-b">
                    <CrewImage data={memberData[0]} />
                </div>
                <div className="col-3 grid-container--crew">
                        <nav>
                            <div className="flex flex-col pyb-1h">
                                <div className="flex flex flex-cc dot-indicators" role="tablist" >
                                    <Link id={memberMap[0]} 
                                    aria-selected="true"
                                    role="tab"
                                    tabIndex="0" 
                                    to={'/crew/' + memberMap[0]} 
                                    onClick={() => selectActive(memberMap[0])}/>                                        
                                    <span className='sr-only'>
                                        The Commander</span>
                                    <Link id={memberMap[1]} 
                                    aria-selected="false"
                                    role="tab"
                                    tabIndex="-1" 
                                     to={'/crew/' + memberMap[1]}
                                     onClick={() => selectActive(memberMap[1])}/>
                                     <span className='sr-only'>
                                        The Mission Specialist</span>
                                    <Link id={memberMap[2]} 
                                    aria-selected="false"
                                    role="tab"
                                    tabIndex="-1" 
                                     to={'/crew/' + memberMap[2]}
                                     onClick={() => selectActive(memberMap[2])}/>
                                     <span className='sr-only'>
                                        Pilot</span>
                                    <Link id={memberMap[3]} 
                                    aria-selected="false"
                                    role="tab"
                                    tabIndex="-1" 
                                     to={'/crew/' + memberMap[3]}
                                     onClick={() => selectActive(memberMap[3])}/>
                                     <span className='sr-only'>
                                        Flight Engineer</span>
                                </div>
                            </div>
                        </nav>
                        <CrewText data={memberData[0]}/>
                    </div>
            </main>
        </div>
    )
}

function CrewImage(props){
    return (
        <picture>
            <source className="img-crew" srcSet={props.data.images.webp}
            type="image/webp"/>
            <img className="img-crew" 
                src={props.data.images.png} 
                alt="crew member" 
                style={{"paddingTop" : "1rem"}}/>
        </picture>
        
    )
}

function CrewText(props){
    
    return(
        <article className="planet-text--crew">
            <header className="flow">
                <h3 className='txt-light ff-serif fs-600 letter-spacing-3 uppercase my-1'
                style={{"opacity" : ".5"}}>{props.data.role}</h3>
                <p className="ff-serif fs-700 uppercase lh-11">{props.data.name}</p>
            </header>
            <p className="txt-light ff-sans-normal fs-200" style={{"marginTop" : "2rem"}}>{props.data.bio}</p>
        </article>
    )
}