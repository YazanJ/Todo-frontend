const SERVER_URL = 'http://localhost:8000';
// const SERVER_URL = 'http://192.168.1.108:8000';

export const login = async (username, password) => {
    const res = await fetch(`${SERVER_URL}/users/login/`,
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
    if (status == '200') {
        return data["success"]
    } else {
        console.log(data)
        throw new Error(data["detail"])
    }
}

export const getNotes = async () => {
    const res = await fetch(`${SERVER_URL}/notes/`)
    const data = await res.json();
    return data["notes"]
}

export const createNote = async (username, text) => {
    const res = await fetch(`${SERVER_URL}/notes/`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
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
