import style from "./Objective.module.css"
const Objective = () => {
  return (
    <div className={style.paraCOntainer}>

        <div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate cum ad molestias voluptas sit? Incidunt possimus placeat eligendi minima repellendus
            id ea iure ut amet odio quod, alias tenetur consequatur!,Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate cum ad molestias voluptas sit? Incidunt possimus placeat eligendi minima repellendus
            </p>
        </div>

        <div id={style.id1}>
                <div>
                <h1 style={{ fontSize:"24px" , fontWeight:'900', textShadow:'1px 1px 1px black'}}>
                  45 <span style={{color:' rgb(77, 164, 245)' , fontWeight:'720'}}>+</span> 
                  </h1>
                  <p>Project Done</p>
                  </div>
                <div>
                <h1 style={{ fontSize:"24px" , fontWeight:'900', textShadow:'1px 1px 1px black'}}>10
                <span style={{color:' rgb(77, 164, 245)' , fontWeight:'720'}}>+</span> 
                </h1>
                <p>years of Experience</p>
                  </div>
        </div>
    </div>
  )
}

export default Objective;