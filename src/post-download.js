const request = require('superagent');



const url = 'http://localhost:5000/download/12scQFm2otAt7HrkRPxqvIYhyNIr8ss-Z';

const requestBody = 
{

  "token":{
    access_token: 'ya29.a0AfB_byDgiIb-pNd-ZHv0xyLI7REFWGhQ76RadSd7FrYeA1U7Xbde0ZYDqJCuaqlPjJMXjZgZ5k3v_0fjVa5pD5jikHB1k6Xw8WA0v8pwXCsTGZDD98KDDxcvkg-ZqNiL0eWpBLpCIjTUrusk5TETbxfxq3xOaCgYKAYsSARESFQHsvYlsYf9YkRfaznkBKtuUbNH-4A0163',
    refresh_token: '1//06qpUQJ7AMa_qCgYIARAAGAYSNwF-L9IrpB4mPyXMarrbRT8UqqUDi2e6S3zCA7SCsy8YLS9rkr3kapPuWgP_OQvyUuZkYhf6Iec',
    scope: 'https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/drive.photos.readonly https://www.googleapis.com/auth/drive.appdata https://www.googleapis.com/auth/drive.metadata.readonly https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/drive.file',
    token_type: 'Bearer',
    id_token: 'eyJhbGciOiJSUzI1NiIsImtpZCI6ImZkNDhhNzUxMzhkOWQ0OGYwYWE2MzVlZjU2OWM0ZTE5NmY3YWU4ZDYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI4NDg3Mjk3MTQyODYtNm9tZmY0aTEyMDI4N2x2dWNmMjFqdnU4anEwMTgybzYuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI4NDg3Mjk3MTQyODYtNm9tZmY0aTEyMDI4N2x2dWNmMjFqdnU4anEwMTgybzYuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMTc0NTcxOTQwNTkyMTE5MjE0MzEiLCJhdF9oYXNoIjoiZWhJWU5hNm0tT2RfR043RWxqVFNJUSIsIm5hbWUiOiJidWJ1YWsgYnVsZWtrIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FBY0hUdGZ6UzRRUENaS2VGZ0JUamRDQm5xRXVuaE9CeVlGUS1ud1dHR0o3eVFPZT1zOTYtYyIsImdpdmVuX25hbWUiOiJidWJ1YWsiLCJmYW1pbHlfbmFtZSI6ImJ1bGVrayIsImxvY2FsZSI6ImVuIiwiaWF0IjoxNjkxMDcyNTU0LCJleHAiOjE2OTEwNzYxNTR9.23q1wvv_j7RgcX0qHSaqystLJ6HbFf6w5sG0sl5ph71Fq-ypmj9_sPqivmhX1bZsdAzckJdtz1iHWIlNv8DasHV4csNMfc9h296G6Ie-RIb78z73aJGzBtW_dhkOCX3Ol0Szo1UvgECWOP3GprataAv3NVGfBJe1PDDcthLvV-lTNaX5ZKJoAJVXZeeb592PvvdeZOjTrrMtJoWcqC2tcmyaaoHpuXCluJa8_GeyXQFVWRgx7RasFWobgdShLNHTJhLPL0zVVaZxv6MaIEDOVSLdHAiJFD-nBorO16BBMKgwXG1WukWOcLcEm2XKRBwWenbX6GknFgAlBjoHG-Udtg',
    expiry_date: 1691076154007
  }

};

const data = 'suburban_shabby_house_low_poly.glb';

  const rawJsonText = JSON.stringify(requestBody);
 //const rawJsonText = requestBody

 const combinedData = {
  data: data,
  rawJsonText: rawJsonText
};


  request
    .post(url)
    .set('Content-Type', 'application/json') // Mengatur header Content-Type menjadi application/json
    .send(combinedData) // Mengirimkan body request dalam bentuk raw JSON text
    .then(response => {
      console.log('Response:', response.body);
    })
    .catch(error => {
      console.error('Error:', error.message);
    });