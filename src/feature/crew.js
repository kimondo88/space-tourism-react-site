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
    console.log(memberData);

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
        const active = document.querySelector(".primary-navigation--Crew li.active")
        active.classList.toggle("active")
        let toActive = document.getElementById(id)
        toActive.classList.toggle("active")
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
                        <li ><Link className="txt-white ff-sans-cond letter-spacing-2" to="/"><span aria-hidden="true">00</span>Home</Link></li>
                        <li className="active"><Link className="txt-white ff-sans-cond letter-spacing-2" to="/destination/Moon">
                            <span aria-hidden="true">01</span> Destination</Link></li>
                        <li><Link className="txt-white ff-sans-cond letter-spacing-2" to="/">
                            <span aria-hidden="true">02</span> Crew</Link> </li>
                        <li><Link className="txt-white ff-sans-cond letter-spacing-2" to="/">
                            <span aria-hidden="true">03</span> Technology</Link> </li>
                    </ul>
                </nav>
            </header>
            
            <main id="main" className="grid-container grid-container--Crew">
                <div className="col-2">
                    <h1 className='numbered-title-300'><span aria-hidden="true">01</span> Pick your Crew</h1>
                    <CrewImage data={memberData[0]} />
                </div>
                <div className="col-3">
                        <nav>
                        </nav>
                        <CrewText data={memberData[0]}/>
                    </div>
            </main>
        </div>
    )
}

function CrewImage(props){
    return (
        <img className="img-destination" src={props.data.images.png} alt="crew member"></img>
    )
}

function CrewText(props){
    
    return(
        <article className="planet-text">
            <h3 className='ff-serif letter-spacing-3 uppercase my-1' style={{"fontSize" : "1.75rem"}}>{props.data.role}</h3>
            <h2 className="ff-serif fs-300 uppercase">{props.data.name}</h2>
            <p className="txt-light ff-sans-normal fs-200">{props.data.bio}</p>
        </article>
    )
}