const logger = (req, res, next) => {
    const currentDate = new Date().toISOString().slice(0, 19).replace('T', ' ');
    const formattedDate = currentDate.replace(/-/g, '/').replace(' ', ' - ');

    console.log(`[${formattedDate}] ${req.method} ${req.url}`);
    console.log(`URL Parameters: ${JSON.stringify(req.params)}`);
    console.log(`Query Parameters: ${JSON.stringify(req.query)}`);
    console.log(`Request Body: ${JSON.stringify(req.body)}`);
    console.log(`Cookies: ${JSON.stringify(req.cookies)}`);
    console.log(`Headers: ${JSON.stringify(req.headers)}`);
    console.log('--------------------');

    next();
}

module.exports = logger;