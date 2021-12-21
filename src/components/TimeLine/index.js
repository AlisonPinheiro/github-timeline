import './index.css'
const userName = 'AlisonPinheiro'

function getData(userName) {
    fetch(`https://api.github.com/users/${userName}/repos`, {
        method: "GET",
        headers: {
            "Accept": "application/vnd.github.v3+json"
        },

    })
        .then((res) => { return res.json() })
        .then(res => {
            console.log(res)

        })
}

getData(userName);