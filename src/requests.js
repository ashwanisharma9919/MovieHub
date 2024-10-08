const API_KEY = "2b867b5f23f784527c965fcd9204df19";
//endpoints
export default {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanticMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`
}
// /dicover/movie?api_key=2b867b5f23f784527c965fcd9204df19&with_genres=99
// http://api.themoviedb.org/3/discover/movie?api_key=2b867b5f23f784527c965fcd9204df19&with_genres=99
// http://api.themoviedb.org/3/dicover/movie?api_key=2b867b5f23f784527c965fcd9204df19&with_genres=99