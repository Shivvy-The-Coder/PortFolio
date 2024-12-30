
import style from "./Buttons.module.css"

const Buttons = ({name , isButtonAlter , ...rest}) => {

  let Buttonclass = style.ButtonDiv;
  if(isButtonAlter)
    Buttonclass=style.ButtonAlter;
  
  return (
      <div>
        <button {...rest} className={Buttonclass}>
          {name}
        </button>
      </div>
    // <ButtonDiv>{name}</ButtonDiv>
  )
}

export default Buttons;

