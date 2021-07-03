const  createProxyMiddleware  = require('http-proxy-middleware');

module.exports = function(app){
    app.use(
        createProxyMiddleware('/v1/search/movie.json', {
            target: "https://openapi.naver.com",
            changeOrigin: true
        })
    );
    app.use(
        createProxyMiddleware('/movie/popular',{
            target : 'https://api.themoviedb.org/3',
            changeOrigin : true
        })
    )
};