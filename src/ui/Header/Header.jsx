import React from "react";
import logo from "../../Assets/images/logo.webp" ;
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const navigation = [
    { title: "about", link: "/about" },
    { title: "blog", link: "/blog" },
    { title: "projects", link: "/projects" },
    { title: "contacts", link: "/contacts" },
    { title: "services", link: "/services" },
  ];

  const location = useLocation();
  const pathname = location?.pathname;
  // console.log(pathname);
  return (
    
      <div className="  bg-primanyColor sticky top-0 z-50 text-white">
        <header className=" mx-auto max-w-screen-xl flex  items-center justify-between  ">
          <div className="flex gap-5 items-center py-8">
            <Link><img src={logo} alt="logo" className="w-10 h-10" /></Link>
            <p className="hover:text-perpleDark duration-300">
              srsoft.786@gmail.com
            </p>
          </div>

          <div>
            <div className="flex gap-8 items-center ">
              {navigation?.map(({title,link}) => (
                <Link
                  to={link}
                  key={title}
                  className={`hover:text-perpleDark duration-300 overflow-hidden relative group ${pathname === link? "text-perpleDark ":"text-white" }` }
                >
                  {title}
                  <span className="w-full h-[1px] bg-perpleDark inline-block absolute bottom-0 left-0 -translate-x-[100%] group-hover:translate-x-0 duration-300"></span>
                </Link>
              ))}
            </div>
          </div>
        </header>
        {/*  */}
      </div>
  );
}
