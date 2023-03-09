'use client';

import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = () => {



  return <>

            <div className="w-[10] lg:w-[400px] bg-gray-100">

        
                <div>
                    <FontAwesomeIcon icon={ faHome}/>
                </div>
                

            </div>
  
         </>
};

export default Sidebar;
