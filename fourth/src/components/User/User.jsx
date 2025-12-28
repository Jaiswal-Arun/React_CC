import { useParams } from "react-router"

export default function User(){
    
    const {userid} = useParams()
    
    return (
        <>
        <h1 className = "bg-gray-600 text-white text-center text-3xl p-4">User Name is : {userid}</h1>
        </>
    )

}