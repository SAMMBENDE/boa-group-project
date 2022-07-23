// This will be a wrapper for all pages

import Head from "next/head"
import Link from "next/link"
import React from "react"

const Layout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title ? title + "- Best of Africa" : "Best of Africa"}</title>
        <meta name="description" content="African Marketplace" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex min-h-screen flex-col justify-between"> 
        <header>
            <nav className="flex h-12 items-center px-4 justify-between shadow-md ">
                <Link href="">
                    <a className="text-lg font-bold">BestOf<span className="text-green-800">Africa</span></a>
                </Link>
                <div>
                   <Link href="/search"><a className="p-2">Search</a></Link>
                   <Link href="/login"><a className="p-4">Login</a></Link> 
                   <Link href="/newsletter"><a className="p-3 px-6 pt-2 text-white bg-green-800 
                    rounded-full baseline hover:bg-green-700"
                    >Subscribe</a></Link
                    > 
                                      
                </div>                
            </nav>
            <div className="hidden md:flex bg-gray-100 font-bold  mx-12 h-12 items-center justify-between text-blue-600">
                   <Link href="/popular"><a className="hover:text-gray-400">Pricing</a></Link>
                   <Link href="/restaurant"><a className="hover:text-gray-400">Products</a></Link>
                   <Link href="/cosmetics"><a className="hover:text-gray-400">About Us</a></Link> 
                   <Link href="/travel"><a className="hover:text-gray-400">Community</a></Link> 
                   <Link href="/groceries"><a className="hover:text-gray-400">Services</a></Link> 
                   <Link href="/more categories"><a className="hover:text-gray-400">More categories</a></Link> 
                   <Link href="/deals"><a className="hover:text-gray-400">Deals</a></Link>
                   <Link href="/blog"><a className="hover:text-gray-400">Blog</a></Link> 

                   <button id="menu-btn" 
                   className="block hamburger md:hidden focus:outline-none">
                    <span className="hamburger-top"></span>
                    <span className="hamburger-middle"></span>
                    <span className="hamburger-bottom"></span>
                   </button>                 
            </div>

            <div className="md:hidden">
                <div id="menu" className="absolute flex-col items-center hidden self-end py-8
                 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 drop-shadow-md">
                  <Link href="/popular"><a className="hover:text-gray-400">Pricing</a></Link>
                   <Link href="/restaurant"><a className="hover:text-gray-400">Products</a></Link>
                   <Link href="/cosmetics"><a className="hover:text-gray-400">About Us</a></Link> 
                   <Link href="/travel"><a className="hover:text-gray-400">Community</a></Link> 
                   <Link href="/groceries"><a className="hover:text-gray-400">Services</a></Link> 
                   <Link href="/more categories"><a className="hover:text-gray-400">More categories</a></Link> 
                   <Link href="/deals"><a className="hover:text-gray-400">Deals</a></Link>
                   <Link href="/blog"><a className="hover:text-gray-400">Blog</a></Link> 
                </div>
            </div>
            </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer className="flex h-10 justify-center items-center shadow-inner">
            <p>Copyright &copy; 2022 | Best of Africa</p>
        </footer>
      </div>
    </>
  )
}

export default Layout