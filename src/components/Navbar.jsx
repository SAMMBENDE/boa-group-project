import React, { useState } from "react"             //react hook state manager
import { Transition } from "@headlessui/react"  //smooth transistion btn tabs
import { Link } from "react-scroll"      // Link is used as ref in Nextjs. Works as <a>

const Navbar = () => {
    // useState is set to false. Nav will only open upon click
	const [isOpen, setIsOpen] = useState(false) 

	return (  
		<div>  
			{/* main nav container */}
			<nav className=" shadow-sm fixed w-full z-10">
				<div className="w-full">
					<div className="flex items-center h-20 w-full">
						<div className="flex items-center  mx-20  justify-between w-full">
							<div className="flex justify-center items-center flex-shrink-0 ">
								<h1 className="mr-10 font-bold text-xl cursor-pointer">
									BestOf<span className="text-green-600">Africa</span>
								</h1>
							</div>
							{/* tabs visible for small & large screens */}
							<div>
							<div className="flex items-baseline space-x-4">
								<form className="max-w-sm px-4">
									<div className="relative">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="absolute top-0 bottom-0 w-4 h-4 my-auto text-gray-400 left-3"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
											/>
										</svg>
										<input
											type="text"
											placeholder="Search"
											className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-800"
										/>
									</div>
								</form>							
									
									<Link
										activeClass="login"
										to="login"
										smooth={true}
										offset={50}
										duration={500}
										className="cursor-pointer hover:bg-green-600 text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
									>
										Login
									</Link>
									
								</div>
							</div>
						</div>                           
							{/* mobile responsiveness */}
						<div className="mr-20 flex md:hidden ">
							<button
								onClick={() => setIsOpen(!isOpen)}
								type="button"
								className="bg-black inline-flex items-center justify-center p-2 rounded-md text-white  hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white"
								aria-controls="mobile-menu"
								aria-expanded="false"
							>
								<span className="sr-only">Open main menu</span> 
								{/* menu icon from W3 website */}
								{!isOpen ? (
									<svg
										className="block h-4 w-4"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M4 6h16M4 12h16M4 18h16"
										/>
									</svg>
								) : (
									<svg
										className="block h-4 w-4"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								)}
							</button>
						</div>
					</div>
				</div>

				<Transition
					show={isOpen}
					enter="transition ease-out duration-100 transform"
					enterFrom="opacity-0 scale-95"
					enterTo="opacity-100 scale-100"
					leave="transition ease-in duration-75 transform"
					leaveFrom="opacity-100 scale-100"
					leaveTo="opacity-0 scale-95"
				>
					{(ref) => (
						<div className="md:hidden" id="mobile-menu">
							<div
								ref={ref}
								className="bg-white px-2 pt-2 pb-3 space-y-1 sm:px-3"
							>
								<Link
									href="/popular"
									activeClass="login"
									to="login"
									smooth={true}
									offset={50}
									duration={500}
									className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
								>
									Popular
								</Link>
								<Link
									href="/gifts"
									activeClass="search"
									to="search"
									smooth={true}
									offset={50}
									duration={500}
									className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
								>
									Gifts
								</Link>

								<Link
									href="/products"
									activeClass="products"
									to="products"
									smooth={true}
									offset={50}
									duration={500}
									className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
								>
									Products
								</Link>
								<Link
									href="/deals"
									activeClass="deals"
									to="deals"
									smooth={true}
									offset={50}
									duration={500}
									className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
								>
									Deals
								</Link>

								<Link
									href="/entertainment"
									activeClass="entertainment"
									to="entertainment"
									smooth={true}
									offset={50}
									duration={500}
									className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
								>
									Entertainment
								</Link>

                                <Link
									href="/groceries"
									activeClass="groceries"
									to="groceries"
									smooth={true}
									offset={50}
									duration={500}
									className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
								>
									Groceries
								</Link>

                                <Link
									href="/restaurants"
									activeClass="restaurants"
									to="restaurants"
									smooth={true}
									offset={50}
									duration={500}
									className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
								>
									Restaurants
								</Link>

                                <Link
									href="/cosmetics"
									activeClass="cosmetics"
									to="cosmetics"
									smooth={true}
									offset={50}
									duration={500}
									className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
								>
									Cosmetics                                   
								</Link>

                                <Link
									href="/pricing"
									activeClass="pricing"
									to="pricing"
									smooth={true}
									offset={50}
									duration={500}
									className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
								>
									Pricing
								</Link>

                                <Link
								   activeClass="community"
									to="community"
									smooth={true}
									offset={50}
									duration={500}
									className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
								>
									Community
								</Link>

								<Link
									activeClass="services"
									to="services"
									smooth={true}
									offset={50}
									duration={500}
									className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
								>
									Services
								</Link>

                                <Link
								    href="/others"
									activeClass="others"
									to="others"
									smooth={true}
									offset={50}
									duration={500}
									className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
								>
									Others...
								</Link>
							</div>
						</div>
					)}
				</Transition>
			</nav>			
		</div>
	)
}

export default Navbar
