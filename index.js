const express = require('express');
const app = new express();
let allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Headers', "*");
    next();
}
app.use(allowCrossDomain);
app.get('/', function (request, response) {
    response.sendFile('C:\\Users\\Nursat\\Desktop\\Programming\\UniversityStudy\\CVWorks\\FinalProject\\models\\model.json');
});
app.get('/group1-shard1of4.bin', function (request, response) {
    response.sendFile('C:\\Users\\Nursat\\Desktop\\Programming\\UniversityStudy\\CVWorks\\FinalProject\\models\\group1-shard1of4.bin');
});
app.get('/group1-shard2of4.bin', function (request, response) {
    response.sendFile('C:\\Users\\Nursat\\Desktop\\Programming\\UniversityStudy\\CVWorks\\FinalProject\\models\\group1-shard2of4.bin');
});
app.get('/group1-shard3of4.bin', function (request, response) {
    response.sendFile('C:\\Users\\Nursat\\Desktop\\Programming\\UniversityStudy\\CVWorks\\FinalProject\\models\\group1-shard3of4.bin');
});
app.get('/group1-shard4of4.bin', function (request, response) {
    response.sendFile('C:\\Users\\Nursat\\Desktop\\Programming\\UniversityStudy\\CVWorks\\FinalProject\\models\\group1-shard4of4.bin');
});
app.listen(9000);