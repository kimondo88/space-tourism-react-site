import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Homepage() {
    useEffect(()=>{
        const body = document.querySelector('body');
        if(body.classList.contains('bg-home-d')){

        }else{
            body.classList.toggle('bg-home-d');
        }  
    },[])

    return (
        <div className="">
            <nav className="flex flex-end my-3">
                <ul className="primary-navigation underline-indicator flex flex-basis-60 bg-dark--alpha">
                    <li className="active"><Link className="txt-white ff-sans-cond letter-spacing-2 fs-300" to="/"><span className="mxr-1">00</span>Home</Link></li>
                    <li><Link className="txt-white ff-sans cond letter-spacing-2 fs-300" to="/">
                        <span className="mxr-1">01</span> Destination</Link></li>
                    <li><Link className="txt-white ff-sans cond letter-spacing-2 fs-300" to="/">
                        <span className="mxr-1">02</span> Crew</Link> </li>
                    <li><Link className="txt-white ff-sans cond letter-spacing-2 fs-300" to="/">
                        <span className="mxr-1">03</span> Technology</Link> </li>
                </ul>
            </nav>

            <div className="flex">
                <div className="block">
                    <p className='txt-light ff-sans-cond uppercase fs-400 letter-spacing-2'>So, you want to travel to</p>
                    <p className='ff-serif uppercase fs-900'>Space</p>
                    <p className='txt-light ff-sans-normal uppercase fs-200'>Let's face it; if you want to go to space, you might as well genuinely go to
                        outer space and not hover kind of on the edge of it. Well sit back, and relax
                        because we'll give you a truly out of this world experience!</p>
                </div>
                <div className="flex">
                    <Link className="large-button anim bg-white txt-dark fs-600 ff-serif uppercase" to="/explore">Explore</Link>
                </div>
            </div>
        </div>
    )
}

