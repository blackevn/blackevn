import { faIcons } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Toggle = (props: any ) => {

    const {toggleEvent, on, off, modifier1, modifier2, checked, placeholder} = props
           
return (
            <>
    
  <label className="swap swap-rotate">
  
  <input placeholder={placeholder} type="checkbox" checked={checked} onChange={toggleEvent}/>

  <div className={`swap-on fill-current text-2xl ${modifier1}`}><FontAwesomeIcon icon={ on }/></div>
  <div className={`swap-off fill-current text-2xl ${modifier2}`}><FontAwesomeIcon icon={ off }/></div>
  
 </label>
    
            </>
    )
}

Toggle.defaultProps = {
    
    on: faIcons,
    off: faIcons,
    checked: false
}

export default Toggle
