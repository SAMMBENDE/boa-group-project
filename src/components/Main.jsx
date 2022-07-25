import React from "react"

const Main = () => {
	return (
		<div className="flex justify-center items-center flex-col pt-40 text-center font-bold lg:text-8xl text-6xl space-y-2">
			<h1 className="text-gray-900 pb-10">
				Best of Africa <br/><span className="text-blue-500">Home</span> {" "}
				<span className="text-blue-400">Page</span>
			</h1>
			<div className="flex justify-center items-center cursor-pointer hover:shadow-lg  text-3xl font-semibold text-white bg-gray-900 rounded-lg w-64 h-16">
				<h1 className="text-center">DWWM AFPA 2022</h1>
			</div>
		</div>
	)
}
export default Main