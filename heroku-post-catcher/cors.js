//CORS middleware
module.exports = function(request, response, next) {
        response.header('Access-Control-Allow-Origin', '*');
        response.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
        response.header('Access-Control-Allow-Headers', 'Content-Type');
        response.header('Access-Control-Allow-Credentials', 'true');

        next();
}