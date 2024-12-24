import React from 'react';
import './App.css';

const App = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-[#f5f5f5]">
            <div className="relative bg-[#02004FED] w-[1000px] h-[600px] flex justify-center items-center">

            <div className="absolute left-0 w-[300px] h-[600.5px] bg-[#333A7E42] transform rotate-[180deg] opacity-100 clip-polygon-custom-1"></div>
            <div className="absolute right-0 w-[300px] h-[600.5px] bg-[#333A7E42] transform rotate-[180deg] opacity-100 clip-polygon-custom-2"></div>


                
         <div className="w-[400px] h-[300px] flex flex-col justify-center items-start text-left">
        <h2 className="text-4xl font-bold tracking-widest mb-4 text-white">
         <div className="text-5xl font-bold leading-[97.52px] tracking-widest text-[#FFFFFF80]">
                <span>L</span>
                <span>O</span>
                <span>G</span>
                <span>I</span>
                <span>N</span>
                </div>
                    </h2>
                    <form>
                <div className="mb-4 w-full relative">
                <label htmlFor="email" className="block text-sm bg-[#1A216280]"></label>
                <input
                      type="email"
                      id="email"
                     className="w-[300px] p-2 text-base bg-[#1A216280] text-[#FFFFFF80] outline-none focus:ring-2 focus:ring-[#4C6EF5] focus:ring-opacity-20"
                                placeholder="Username"
                            />
                        </div>

                        <div className="mb-4 w-full relative">
                            <label htmlFor="password" className="block text-sm bg-[#1A216280]"></label>
                            <input
                                type="password"
                                id="password"
                                className="w-[300px] p-2 text-base bg-[#1A216280] text-[#FFFFFF80] outline-none focus:ring-2 focus:ring-[#4C6EF5] focus:ring-opacity-20"
                                placeholder="Password"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-[200px] p-3 text-base bg-[#02004FED] text-white font-bold uppercase cursor-pointer"
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default App;
