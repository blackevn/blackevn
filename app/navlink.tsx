import Link from "next/link";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavLink = (props: any) => {

  const { href, children, name } = props

  return <>

            <Link className="w-full flex items-center justify-between p-2 rounded-md hover:bg-orange-400 relative" href={href}>

              <div className="flex gap-4 items-center">

              <FontAwesomeIcon icon={faHome}/>

                <p className="hidden lg:block">{name}</p>

              </div>

              <div className="hidden lg:block">
               
                {children}

              </div>
            
            </Link>
  
        </>
  
};

NavLink.defaultProps = {

  href : "/",
  name: "Link"

}

export default NavLink;
