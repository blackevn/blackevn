'use client';

import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = () => {



  return <>

            <div className="w-[40] lg:w-[400px] bg-gray-900">

        
                <div>
                    <FontAwesomeIcon icon={ faHome}/>
                    
                </div>
                

            </div>
  
         </>
};

export default Sidebar;
