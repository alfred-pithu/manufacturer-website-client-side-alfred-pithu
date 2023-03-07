import { useEffect, useState } from "react"

const useAdmin = (email) => {
    const [isAdmin, setIsAdmin] = useState(null)
    const url = ` https://manufacturer-server-l39p.onrender.com/admin/${email}`

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