const { useState } = require("react")

const useJWT = user => {
    const [token, setToken] = useState('')

    const email = user?.user?.email;
    const currentUser = { email: email }
    const url = `http://localhost:5000/token?email=${email}`

    if (email) {
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(currentUser)
        })
            .then(res => res.json())
            .then(data => {
                const token = data.token;
                localStorage.setItem('jwtToken', token)
                setToken(token)
            })

    }


    return [token]
}
export default useJWT;