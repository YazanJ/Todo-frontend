const SERVER_URL = 'http://localhost:8000';
// const SERVER_URL = 'http://192.168.1.108:8000';

export const login = async (username, password) => {
    const res = await fetch(`${SERVER_URL}/api-token-auth/`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username,
                password
            })
        });
    const data = await res.json();
    const status = res.status
    console.log('SERVER LOG.... status: ', status, 'token: ', data['token']);
    if (status == '200') {
        return data['token']
    } else {
        throw new Error(data["non_field_errors"][0])
    }
}

export const getNotes = async (token) => {
    const res = await fetch(`${SERVER_URL}/notes/`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${token}`
            }
        }
    );
    const data = await res.json();
    return data["notes"]
}

export const createNote = async (username, text, token) => {
    const res = await fetch(`${SERVER_URL}/notes/`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${token}`
            },
            body: JSON.stringify({
                username,
                text
            })
        });
    const data = await res.json();
    return data;
}

export const postLocation = async (username, latitude, longitude) => {
    const res = await fetch(`${SERVER_URL}/users/location`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username,
                latitude,
                longitude
            })
        });

    const data = await res.json();
    return data;

}
