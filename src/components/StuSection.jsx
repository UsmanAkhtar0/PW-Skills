export default function StuSection() {
    return (
        <>
            <div className="h-auto w-100 flex flex-wrap flex-col items-center text-center p-10 bg-slate-850">
                <div className="w-full h-auto flex flex-wrap flex-col items-center">
                    <p className="text-indigo-800 font-bold text-2xl md:text-3xl">Pure Hardwork, No Shortcuts!</p>
                    <div className="w-36 h-1 border-b-4 border-yellow-400 mt-2 md:mt-4 mb-12 rounded-3xl"></div>
                </div>
                <div className="w-full flex flex-wrap justify-evenly">
                    <div className="w-46 flex flex-col items-center mb-12 hover:scale-110 transition-transform">
                        <img className="size-44  rounded-full" src="https://img.freepik.com/free-psd/books-stack-icon-isolated-3d-render-illustration_47987-15482.jpg?t=st=1733375957~exp=1733379557~hmac=9e1f2a02cdc1a88fcd8e0d9e89efe2fa67727ab28b124dfdb3e47a83d308ae3b&w=826" alt="" />
                        <p className=" text-3xl font-bold text-white mt-4">600+</p>
                        <p className=" text-3xl font-bold text-gray-500">Different Courses</p>
                    </div>
                    <div className="w-46 flex flex-col items-center mb-12 hover:scale-110 transition-transform">
                        <img className="size-44 rounded-full" src="https://img.freepik.com/premium-vector/graduation-logo-template-design-elements_200341-92.jpg?ga=GA1.1.595022113.1704016715&semt=ais_hybrid" alt="" />
                        <p className=" text-3xl font-bold text-white mt-4">700,000+</p>
                        <p className=" text-3xl font-bold text-gray-500">Students Enrolled</p>
                    </div>
                    <div className="w-46 flex flex-col items-center mb-12 hover:scale-110 transition-transform">
                        <img className="size-44  rounded-full" src="https://img.freepik.com/free-vector/realistic-credit-card-design_23-2149124864.jpg?t=st=1733377316~exp=1733380916~hmac=ee0782ced061373d900278bab80455110d0f5604192d12f7cac1de8950471bcf&w=740" alt="" />
                        <p className=" text-3xl font-bold text-white mt-4">10,000+</p>
                        <p className=" text-3xl font-bold text-gray-500">Successful Transition</p>
                    </div>
                </div>
            </div>

        </>
    )
}