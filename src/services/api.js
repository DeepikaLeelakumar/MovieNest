const APT_KEY = "c77110e147d7a70b6f2ebb4894996f47";
const BASE_URL = "https://api.themoviedb.org/3"

export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${APT_KEY}`)
    const data = await response.json()
    return data.results
}


export const searchMovies = async (query) => {
    const response = await fetch(
        `${BASE_URL}/search/movie?api_key=${APT_KEY}&query=${encodeURIComponent(
             query
        )}`
    )
    const data = await response.json()
    return data.results
}