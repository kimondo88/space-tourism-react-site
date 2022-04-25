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

    return (
        <div className="flex flex-col flex-between">
            <header className="flex">
                <div className="self-center my-3" style={{"flexBasis" : "10%"}}> 
                    <img style={{"marginLeft" : "5rem"}} src={logo} alt=""/>
                </div>
                <nav className="flex flex-grow flex-end my-3">
                    <ul className="primary-navigation underline-indicator flex flex-cc bg-dark--alpha ">
                        <li className="active"><Link className="txt-white ff-sans-cond letter-spacing-2" to="/"><span>00</span>Home</Link></li>
                        <li><Link className="txt-white ff-sans-cond letter-spacing-2" to="/">
                            <span>01</span> Destination</Link></li>
                        <li><Link className="txt-white ff-sans-cond letter-spacing-2" to="/">
                            <span>02</span> Crew</Link> </li>
                        <li><Link className="txt-white ff-sans-cond letter-spacing-2" to="/">
                            <span>03</span> Technology</Link> </li>
                    </ul>
                </nav>
            </header>

            <div className="grid-container">
                <div className="flow">
                    <h1 className='txt-light ff-sans-cond uppercase letter-spacing-1'>So, you want to travel to<br/>
                    <span className="txt-white ff-serif uppercase letter-spacing-1 fs-900">Space</span></h1>
                    <p className='txt-light ff-sans-normal fs-400'>Let's face it; if you want to go to space, you might as well genuinely go to
                        outer space and not hover kind of on the edge of it. Well sit back, and relax
                        because we'll give you a truly out of this world experience!</p>
                </div>
                <div className="flex flex-als-end m-button">
                    <Link className="large-button anim bg-white txt-dark ff-serif uppercase" style={{"fontSize" : "1.5rem"}}to="/">Explore</Link>
                </div>
            </div>
        </div>
    )
}

