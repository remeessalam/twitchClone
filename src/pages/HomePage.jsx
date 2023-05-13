import suggetion from "../assets/suggetion.json"
import category from "../assets/category.json"

export default function HomePage() {
    console.log(suggetion)
    return (
        <>
            <div className="w-screen h-screen bg-black overflow-y-auto scrollbar-hide">
                {/*navbar*/}
                <div className="flex items-center pl-3 w-screen h-[50px] bg-[#18181B] ">
                    <div>
                        <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="twitch"><g fill="#673AB7"><path d="M1 0 0 3v11h4v2h2l2-2h3l4-4.26V0H1zm13 9-2.8 3H7.654L5.5 13.567V12H2V1h12v8z"></path><path d="M7 4h1v4H7zM10 4h1v4h-1z"></path></g></svg>
                    </div>
                    <div className="flex justify-center ml-2 w-24 ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#ffffff" className="w-7 h-7 mr-2 hover:stroke-purple-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 8.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v8.25A2.25 2.25 0 006 16.5h2.25m8.25-8.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-7.5A2.25 2.25 0 018.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 00-2.25 2.25v6" />
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffffff" className="w-7 h-7">
                            <path fillRule="evenodd" d="M10.5 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="w-full flex justify-end pr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-7 h-7 fill-gray-100 hover:stroke-purple-500">
                            <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clipRule="evenodd" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 fill-gray-100 ml-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                        </svg>
                    </div>
                </div>
                {/* navbar end*/}

                {/*section*/}
                <div className="w-screen">
                    {/* heading*/}
                    <div>
                        <h1 className="text-white text-4xl font-bold pt-6 pl-3">Welcome to Twitch!</h1>
                    </div>
                    {/* heading end*/}

                    {/* suggested live channel*/}
                    <div className="w-sreen">
                        <div className="pl-3 mt-4">
                            <p className="text-white font-bold lg:text-2xl md:text-lg text-base mb-2"><button className="text-purple-400">Live channels</button> we think you'll like</p>
                        </div>
                        <div className="flex gap-1 pl-3  w-screen overflow-x-auto scrollbar-hide">


                            {/*card*/}
                            {
                                suggetion.data.map((e, i) => {
                                    return (
                                        <div key={i} className="lg:w-[440px] md:w-[360px] w-[230px]   ">
                                            <div className="relative">
                                                <img className="w-[437px]" src={e.image} alt="" />
                                                <h5 className="flex justify-center absolute top-2 left-2 rounded-md text-sm font-extrabold text-white w-10 bg-red-700">LIVE</h5>
                                            </div>
                                            <div className=" flex justify-between lg:w-[440px] md:w-[360px] w-[230px] p-2 ">
                                                <div className=" pr-2">
                                                    <img className="rounded-full min-w-11 " src={e.icon} alt="" />
                                                </div>
                                                <div className="truncate w-full">
                                                    <p className="font-extrabold text-sx md:text-sm  text-gray-200 truncate">{e.title}</p>
                                                    <h3 className="text-sx md:text-sm text-gray-400">{e.channelName}</h3>
                                                    <p className="text-sx md:text-sm text-gray-400">{e.program}</p>
                                                    <button className="bg-gray-600 rounded-full w-14 text-gray-400 font-bold text-xs">English</button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }


                        </div>


                        {/*category*/}

                        <div className="w-sreen ">
                            <div className="pl-3 mt-4">
                                <h3 className="text-white font-bold lg:text-2xl md:text-xl text-lg mb-2"><button className="text-purple-400">Categories</button>  we think you’ll like</h3>
                            </div>
                            <div className="flex gap-2 pl-3 w-screen overflow-x-auto scrollbar-hide">

                                {/* card*/}
                                {
                                    category.data.map((e, i) => {
                                        return (
                                            <div key={i} className="lg:w-[340px] md:w-[260px] w-[140px]">
                                                <div className="w-full">
                                                    <img className="lg:min-w-[340px] md:min-w-[260px] min-w-[140px]" src={e.image} alt="" />
                                                </div>
                                                <div className="flex p-2">
                                                    <div className="">
                                                        <p className="font-extrabold text-sm  text-gray-200 ">{e.channelName}</p>
                                                        <p className="text-sm text-gray-400">{e.viwers}</p>
                                                        <button className="bg-gray-600 rounded-full max-w-16 pl-2 pr-2 text-justify font-bold text-gray-400 text-xs">{e.type}</button>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>

                    </div>

                    {/** whatsHot */}

                    <div className="pl-3 mt-4">
                        <p className="text-white font-bold lg:text-2xl md:text-lg text-base mb-2">What's hot</p>
                    </div>
                    <div className="flex gap-1 pl-3  w-screen overflow-x-auto scrollbar-hide">


                        {/*card*/}
                        {
                            suggetion.data.map((e, i) => {
                                return (
                                    <div key={i} className="lg:w-[440px] md:w-[360px] w-[230px]   ">
                                        <div className="relative">
                                            <img className="w-[437px]" src={e.image} alt="" />
                                            <h5 className="flex justify-center absolute top-2 left-2 rounded-md text-sm font-extrabold text-white w-10 bg-red-700">LIVE</h5>
                                        </div>
                                        <div className=" flex justify-between lg:w-[440px] md:w-[360px] w-[230px] p-2 ">
                                            <div className=" pr-2">
                                                <img className="rounded-full min-w-11 " src={e.icon} alt="" />
                                            </div>
                                            <div className="truncate w-full">
                                                <p className="font-extrabold text-sx md:text-sm  text-gray-200 truncate">{e.title}</p>
                                                <h3 className="text-sx md:text-sm text-gray-400">{e.channelName}</h3>
                                                <p className="text-sx md:text-sm text-gray-400">{e.program}</p>
                                                <button className="bg-gray-600 rounded-full w-9 text-gray-400 font-bold text-xs">Thai</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }


                    </div>
                    {/** End whatsHot */}

                    {/** resently released games */}
                    <div className="pl-3 mt-4">
                        <p className="text-white font-bold lg:text-2xl md:text-lg text-base mb-2"><button className="text-purple-400">Recently Released Games Streams</button></p>
                    </div>
                    <div className="flex gap-1 pl-3  w-screen overflow-x-auto scrollbar-hide">


                        {/*card*/}
                        {
                            suggetion.data.map((e, i) => {
                                return (
                                    <div key={i} className="lg:w-[440px] md:w-[360px] w-[230px]   ">
                                        <div className="relative">
                                            <img className="w-[437px]" src={e.image} alt="" />
                                            <h5 className="flex justify-center absolute top-2 left-2 rounded-md text-sm font-extrabold text-white w-10 bg-red-700">LIVE</h5>
                                        </div>
                                        <div className=" flex justify-between lg:w-[440px] md:w-[360px] w-[230px] p-2 ">
                                            <div className=" pr-2">
                                                <img className="rounded-full min-w-11 " src={e.icon} alt="" />
                                            </div>
                                            <div className="truncate w-full">
                                                <p className="font-extrabold text-sx md:text-sm  text-gray-200 truncate">{e.title}</p>
                                                <h3 className="text-sx md:text-sm text-gray-400">{e.channelName}</h3>
                                                <p className="text-sx md:text-sm text-gray-400">{e.program}</p>
                                                <button className="bg-gray-600 rounded-full w-9 text-gray-400 font-bold text-xs">Thai</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }


                    </div>

                    {/** End   resently released games */}

                    {/**Streamers using Guest Star */}

                    <div className="pl-3 mt-4">
                        <p className="text-white font-bold lg:text-2xl md:text-lg text-base mb-2"><button className="text-purple-400">Streamers using Guest Star</button></p>
                    </div>
                    <div className="flex gap-1 pl-3  w-screen overflow-x-auto scrollbar-hide">


                        {/*card*/}
                        {
                            suggetion.data.map((e, i) => {
                                return (
                                    <div key={i} className="lg:w-[440px] md:w-[360px] w-[230px]   ">
                                        <div className="relative">
                                            <img className="w-[437px]" src={e.image} alt="" />
                                            <h5 className="flex justify-center absolute top-2 left-2 rounded-md text-sm font-extrabold text-white w-10 bg-red-700">LIVE</h5>
                                        </div>
                                        <div className=" flex justify-between lg:w-[440px] md:w-[360px] w-[230px] p-2 ">
                                            <div className=" pr-2">
                                                <img className="rounded-full min-w-11 " src={e.icon} alt="" />
                                            </div>
                                            <div className="truncate w-full">
                                                <p className="font-extrabold text-sx md:text-sm  text-gray-200 truncate">{e.title}</p>
                                                <h3 className="text-sx md:text-sm text-gray-400">{e.channelName}</h3>
                                                <p className="text-sx md:text-sm text-gray-400">{e.program}</p>
                                                <button className="bg-gray-600 rounded-full w-9 text-gray-400 font-bold text-xs">Thai</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>


                    {/** End Streamers using Guest Star */}

                    {/** Recently Released Games */}
                    <div className="w-sreen ">
                        <div className="pl-3 mt-4">
                            <h3 className="text-white font-bold lg:text-2xl md:text-xl text-lg mb-2">Recently Released Games</h3>
                        </div>
                        <div className="flex gap-2 pl-3 w-screen overflow-x-auto scrollbar-hide">

                            {/* card*/}
                            {
                                category.data.map((e, i) => {
                                    return (
                                        <div key={i} className="lg:w-[340px] md:w-[260px] w-[140px]">
                                            <div className="w-full">
                                                <img className="lg:min-w-[340px] md:min-w-[260px] min-w-[140px]" src={e.image} alt="" />
                                            </div>
                                            <div className="flex p-2">
                                                <div className="">
                                                    <p className="font-extrabold text-sm  text-gray-200 ">{e.channelName}</p>
                                                    <p className="text-sm text-gray-400">{e.viwers}</p>
                                                    <button className="bg-gray-600 rounded-full max-w-16 pl-2 pr-2 text-justify font-bold text-gray-400 text-xs">{e.type}</button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>

                    {/** End Recently Released Games */}

                    {/** Recommended VALORANT channels */}

                    <div className="pl-3 mt-4">
                        <p className="text-white font-bold lg:text-2xl md:text-lg text-base mb-2">Recommended <button className="text-purple-400">VALORANT</button> channels</p>
                    </div>
                    <div className="flex gap-1 pl-3  w-screen overflow-x-auto scrollbar-hide">


                        {/*card*/}
                        {
                            suggetion.data.map((e, i) => {
                                return (
                                    <div key={i} className="lg:w-[440px] md:w-[360px] w-[230px]   ">
                                        <div className="relative">
                                            <img className="w-[437px]" src={e.image} alt="" />
                                            <h5 className="flex justify-center absolute top-2 left-2 rounded-md text-sm font-extrabold text-white w-10 bg-red-700">LIVE</h5>
                                        </div>
                                        <div className=" flex justify-between lg:w-[440px] md:w-[360px] w-[230px] p-2 ">
                                            <div className=" pr-2">
                                                <img className="rounded-full min-w-11 " src={e.icon} alt="" />
                                            </div>
                                            <div className="truncate w-full">
                                                <p className="font-extrabold text-sx md:text-sm  text-gray-200 truncate">{e.title}</p>
                                                <h3 className="text-sx md:text-sm text-gray-400">{e.channelName}</h3>
                                                <p className="text-sx md:text-sm text-gray-400">{e.program}</p>
                                                <button className="bg-gray-600 rounded-full w-9 text-gray-400 font-bold text-xs">Thai</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    {/** End Recommended VALORANT channels */}

                    {/** Recommended Just Chatting channels */}
                    <div className="pl-3 mt-4">
                        <p className="text-white font-bold lg:text-2xl md:text-lg text-base mb-2">Recommended <button className="text-purple-400">Just Chatting</button> channels</p>
                    </div>
                    <div className="flex gap-1 pl-3  w-screen overflow-x-auto scrollbar-hide">


                        {/*card*/}
                        {
                            suggetion.data.map((e, i) => {
                                return (
                                    <div key={i} className="lg:w-[440px] md:w-[360px] w-[230px]   ">
                                        <div className="relative">
                                            <img className="w-[437px]" src={e.image} alt="" />
                                            <h5 className="flex justify-center absolute top-2 left-2 rounded-md text-sm font-extrabold text-white w-10 bg-red-700">LIVE</h5>
                                        </div>
                                        <div className=" flex justify-between lg:w-[440px] md:w-[360px] w-[230px] p-2 ">
                                            <div className=" pr-2">
                                                <img className="rounded-full min-w-11 " src={e.icon} alt="" />
                                            </div>
                                            <div className="truncate w-full">
                                                <p className="font-extrabold text-sx md:text-sm  text-gray-200 truncate">{e.title}</p>
                                                <h3 className="text-sx md:text-sm text-gray-400">{e.channelName}</h3>
                                                <p className="text-sx md:text-sm text-gray-400">{e.program}</p>
                                                <button className="bg-gray-600 rounded-full w-9 text-gray-400 font-bold text-xs">Thai</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>

                    {/** End Recommended Just Chatting channels */}

                    {/** Recommended Grand Theft Auto V channels */}
                    <div className="pl-3 mt-4">
                        <p className="text-white font-bold lg:text-2xl md:text-lg text-base mb-2">Recommended <button className="text-purple-400">Grand Theft Auto V</button> channels</p>
                    </div>
                    <div className="flex gap-1 pl-3  w-screen overflow-x-auto scrollbar-hide">


                        {/*card*/}
                        {
                            suggetion.data.map((e, i) => {
                                return (
                                    <div key={i} className="lg:w-[440px] md:w-[360px] w-[230px]   ">
                                        <div className="relative">
                                            <img className="w-[437px]" src={e.image} alt="" />
                                            <h5 className="flex justify-center absolute top-2 left-2 rounded-md text-sm font-extrabold text-white w-10 bg-red-700">LIVE</h5>
                                        </div>
                                        <div className=" flex justify-between lg:w-[440px] md:w-[360px] w-[230px] p-2 ">
                                            <div className=" pr-2">
                                                <img className="rounded-full min-w-11 " src={e.icon} alt="" />
                                            </div>
                                            <div className="truncate w-full">
                                                <p className="font-extrabold text-sx md:text-sm  text-gray-200 truncate">{e.title}</p>
                                                <h3 className="text-sx md:text-sm text-gray-400">{e.channelName}</h3>
                                                <p className="text-sx md:text-sm text-gray-400">{e.program}</p>
                                                <button className="bg-gray-600 rounded-full w-9 text-gray-400 font-bold text-xs">Thai</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>

                    {/** End Recommended Grand Theft Auto V channels */}
                </div>
            </div>
        </>
    )
}