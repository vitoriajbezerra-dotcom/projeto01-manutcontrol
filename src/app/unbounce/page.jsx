import Link from "next/link";

export default function HomeUnbounce() {
    return (
        <>
            
            <header className="bg-white text-black">
                <div className="w-[90vw] lg:w-[80vw] m-auto flex flex-col md:flex-row justify-between gap-6 py-5 items-center">

                    
                    <div className="flex flex-col md:flex-row items-center gap-8">

                        
                        <div className="flex gap-2 items-center">
                            <img
                                src="/logo.png"
                                alt="Unbounce"
                                className="h-auto w-8"
                            />

                            <Link
                                href="/unbounce"
                                className="font-bold text-xl text-black"
                            >
                                unbounce
                            </Link>
                        </div>

                        
                        <ul className="flex flex-col md:flex-row justify-between items-center gap-6">

                            <li>
                                <Link href="#">
                                    Product
                                </Link>
                            </li>

                            <li>
                                <Link href="#">
                                    Solutions
                                </Link>
                            </li>

                            <li>
                                <Link href="#">
                                    Pricing
                                </Link>
                            </li>

                            <li>
                                <Link href="#">
                                    Learn
                                </Link>
                            </li>

                            <li>
                                <Link href="#">
                                    Contact
                                </Link>
                            </li>

                        </ul>
                    </div>


                    
                    <div className="flex items-center gap-5">

                        
                        <button
                            type="button"
                            className="hidden md:block text-xl"
                        >
                            🔍
                        </button>

                        
                        <div className="hidden lg:flex gap-4">

                            <button
                                type="button"
                                className="rounded-none border-2 border-blue-600 px-4 py-2 text-blue-600"
                            >
                                Log in
                            </button>

                            <button
                                type="button"
                                className="rounded-none bg-blue-600 text-white px-4 py-2"
                            >
                                Start my free trial
                            </button>

                        </div>
                    </div>

                </div>
            </header>


            
            <section className="relative w-full min-h-[calc(100vh-90px)] bg-[#2fc45e] overflow-hidden">

                
                <div className="hidden lg:block absolute inset-0 overflow-hidden">

                    <img
                        src="/Banner.jpeg"
                        alt="Unbounce"
                        className="absolute right-0 top-1/2 -translate-y-1/2 w-[90%] h-[90%] object-contain object-right scale-[1.02]"
                    />

                </div>


                
                <div className="relative z-10 w-[90vw] lg:w-[80vw] m-auto min-h-[calc(100vh-90px)] flex items-center">

                    
                    <div className="w-full lg:w-1/2 py-20">

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-black leading-tight">
                            Convert More
                            <br />
                            Leads
                        </h1>

                        <p className="mt-8 max-w-md text-lg text-black">
                            Build high-converting landing pages and
                            campaigns that turn more visitors into
                            customers.
                        </p>

                        <button
                            type="button"
                            className="mt-8 bg-[#087f69] text-white px-7 py-4"
                        >
                            Start My Free Trial
                        </button>

                    </div>

                </div>

            </section>
        </>
    );
}