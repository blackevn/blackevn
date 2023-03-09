'use client';

import NavLink from "./navlink";

const Sidebar = () => {



  return <>

            <div className="lg:w-[400px] bg-gray-900 p-4 ">

                <div className="space-y-2">
                    
                <NavLink name="Home"/>

                <NavLink >

                    <div className="badge">New</div>

                </NavLink>

                </div>
                

            </div>
  
         </>
};

export default Sidebar;
