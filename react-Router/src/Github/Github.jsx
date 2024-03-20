import { useEffect, useState } from "react"


function Github() {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users/iprathmeshsangam')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setData(data)
            })
    })
    return (
        <>
            <img src={data.avatar_url} alt="github profile" className=" rounded-full cursor-pointer w-48 m-auto p-5"/>
            <div className="text-center p-4 text-3xl">Github Name : {data.name}</div>
            <div className="text-center p-4 text-1xl">Github followers : {data.followers}</div>
            <div className="text-center p-1  text-1xl">Github Bio : {data.bio}</div>

        </>

    )
}

export default Github