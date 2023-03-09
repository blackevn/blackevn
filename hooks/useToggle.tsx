import { useState } from "react";


const useToggle = (initialValue:boolean = false) => {

    const [ toggle, setToggle ] = useState(initialValue)

    const handleToggle = () => {

      setToggle(prev => !prev)

    }

  return [handleToggle, toggle]

}


export default useToggle;
