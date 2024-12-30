import Buttons from "../Buttons/Buttons";
import style from "./FirstPage.module.css";
import { FaCircleUser } from "react-icons/fa6";

const FirstPage = () => {
  return (
    <div className={style.container}>

        <div >
          <fbar>
          <div className={style.sectionOne}>
              
              <div><FaCircleUser fontSize="24px" /></div>
              <div className={style.online}></div>
              <div><p>Open TO Work</p></div>
           </div>
          </fbar>
           

          <div>
            <h1 >BUILDING SCALABLE MODERN WEBSITES FOR THE FUTURE</h1>
              
            
          </div>
          
          <div >
            <Buttons isButtonAlter={true} name="Download CV"/>
            <Buttons isButtonAlter={true} name="Scroll Down"/>

          </div>
        </div>
    
        <div>
          <img src="./images/frontPage.png" height="auto" alt="" />
        </div>
    
    </div>
  )
}

export default FirstPage;
