const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Jaiswal-Arun')
    return response.json()
}

export default githubInfoLoader