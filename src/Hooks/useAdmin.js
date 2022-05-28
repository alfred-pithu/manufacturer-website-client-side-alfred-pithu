import { useEffect, useState } from "react"
import { useQuery } from "react-query"

const useAdmin = (email) => {
    const [isAdmin, setIsAdmin] = useState(null)
    const url = `https://frozen-tundra-73079.herokuapp.com/admin/${email}`

    useEffect(() => {
        if (email) {
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    if (data === true) {
                        setIsAdmin(true)
                    }
                })
        }
    }, [url, email])

    return [isAdmin]
}
export default useAdmin;