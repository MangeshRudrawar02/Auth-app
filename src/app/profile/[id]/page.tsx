export default function userProfile({params}:any){
    return(
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-center ">
               profile
            </h1>
            <hr></hr>
            <h1 className="text-2xl">Profile Page 
                <span className="m-4 p-2 rounded bg-yellow-400">{params.id}</span>
                </h1>
            
        </div>
    )
}