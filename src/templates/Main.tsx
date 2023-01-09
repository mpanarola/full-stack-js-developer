import React, { ReactNode } from 'react';

import Link from 'next/link';

import {useRouter} from 'next/router';

import { Navbar } from '../navigation/Navbar';
import { AppConfig } from '../utils/AppConfig';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};


const Main = (props: IMainProps) => {
  const router = useRouter();
  return (
  
  
    <div className="antialiased w-full text-gray-700 px-3 md:px-0">
      {props.meta}
  
      <div className="max-w-screen-md mx-auto">
        <div className="border-b border-gray-300 flex">
          <div className="">
            <div className="font-semibold text-3xl text-gray-900">
              {/* {AppConfig.title} */}
              <img src='/assets/images/logo.jpg' className='w-50'/>
            </div>
            {/* <div className="text-xl">{AppConfig.description}</div> */}
          </div>
          <div className='p-3'>
            <Navbar>
              <li className="mr-6">
                <Link href="/">
                  <a className={router.pathname == "/" ? "active" : ""}>Shop</a>
                </Link>
              </li>
              
              <li className="mr-6">
              <Link href="/recipes">
                  <a className={router.pathname == "/recipes" ? "active" : ""}>Recipes</a>
                </Link>
              </li>
  
              <li className="mr-6">
                <Link href="/about/">
                  <a className={router.pathname == "/about" ? "active" : ""}>About</a>
                </Link>
              </li>
              <li className="mr-6">

              <Link href="/learn">
                  <a className={router.pathname == "/learn" ? "active" : ""}>Learn</a>
                </Link>
              </li>
              <li className="mr-6">
              <Link href="/blogs">
                  <a className={router.pathname == "/blogs" ? "active" : ""}>Blogs</a>
                </Link>
              </li>
            </Navbar>
          </div>
        </div>

        {
          router.pathname == "/recipes" ?
          <div>

<ul className="breadcrumb flex recipes_submenu">
          <li>Categories</li>
          <li>Collections</li>
          <li>Resources</li>

    </ul>
          </div>
          
          : ''
        }
  
        <div className="text-xl py-5">{props.children}</div>
  
        <div className="border-t border-gray-300 text-center py-8 text-sm">
          © Copyright {new Date().getFullYear()} {AppConfig.title}. Powered with{' '}
          <span role="img" aria-label="Love">
            ♥
          </span>{' '}
          by <a href="#">Narola</a>
          
        </div>
      </div>
    </div>
  )

};

export { Main };
 