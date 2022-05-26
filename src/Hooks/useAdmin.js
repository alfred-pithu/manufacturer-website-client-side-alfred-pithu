import { useEffect, useState } from "react"
import { useQuery } from "react-query"

const useAdmin = (email) => {
    const [isAdmin, setIsAdmin] = useState(null)
    const url = `http://localhost:5000/admin/${email}`


    // const { data, refetch } = useQuery(['admin', email], () => fetch(url).then(res => res.json()))
    // console.log(data);
    // if (data === true) {
    //     setIsAdmin(true)
    // }
    // return [isAdmin, refetch]


    useEffect(() => {
        if (email) {
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    // console.log(data)
                    if (data === true) {
                        setIsAdmin(true)
                    }
                })
        }
    }, [url, email])

    return [isAdmin]
}
export default useAdmin;