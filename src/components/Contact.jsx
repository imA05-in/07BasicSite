export default function Contact(){

    function  pdf() {
        
    }

    return(
        <>
        <div className="bg-white text-black flex justify-center grow items-center ">
            <div>

            <form action={pdf()} className="flex flex-col gap-2">
                <input type="text" placeholder="Full Name" className="border rounded w-fit p-1"/>
                <input type="email" placeholder="Email" className="border rounded w-fit p-1"/>
                <input type="number" placeholder="Phone Number" className="border rounded w-fit p-1"/>
                <button type="submit" className="bg-gray-400 hover:bg-gray-300 transition p-1 rounded font-medium">Submit</button>
            </form>
            </div>
        </div>
        </>
    )
}