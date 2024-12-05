export default function Test() {
    return (
        <>
            <div className="text-center my-2">
                <p className="text-red-500 md:text-blue-600 xl:text-pink-500">Tailwind</p>
            </div>
            
            <div className="flex justify-center">
                <button className="bg-sky-500 mt-2 p-2 w-full md:w-72 text-center text-base rounded-xl hover:bg-white hover:text-black dark:bg-red-600 active:bg-red-600 focus:outline-none focus:ring focus:ring-blue-500">Click me!</button>
            </div>

            <div className="p-6 max-w-sm mx-auto mt-2 bg-white rounded-2xl shadow-lg flex items-center gap-x-4">
                <div class="shrink-0">
                    <img className="size-12" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png" alt="Google" />
                </div>
                <div>
                    <div className=" text-xl font-medium text-black">
                        Google
                    </div>
                    <p className="text-slate-500">You have an offer letter</p>
                </div>

            </div>
            

            <div className="mt-3">
                <div className="max-w-sm mx-auto bg-white text-slate-700 rounded-xl overflow-hidden md:max-w-2xl">
                    <div className="md:flex">
                        <div>
                            <img class="h-48 w-full object-cover md:h-full md:w-auto" src="https://c4.wallpaperflare.com/wallpaper/367/252/59/5bd3350aedb54-wallpaper-preview.jpg" alt="Img" />
                        </div>
                        <div className="p-8">
                            <div className="uppercase tracking-wide text-sm text-red-600 font-semibold" >
                                an amazing card
                            </div>
                            <a className="block mt-1 text-lg font-medium text-black hover:text-blue-700" href="#">Tailwind is Anazing</a>
                            <p className="mt-2 text-slate-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. <span className="text-red-500">Dolorem</span> repellendus beatae aperiam consequatur, similique perferendis.</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}