const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'a79b9b01ee34ae2c983dd44ef421e118',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;