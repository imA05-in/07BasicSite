import { useEffect, useState } from "react"

export default function useUserDetails(user = "imA05-in"){
    const [det, setDet] = useState([])
    useEffect(()=>{
    fetch(`https://api.github.com/users/${user}`)
    .then(res => res.json())
    .then(res => setDet(res))
    },[user])
    return det

}