var request = require("sync-request");
var key = "AIzaSyCUWPRUQYHaqKub36FNPHIi6uADh3F-KjQ"
// make the request
var res = request("GET", `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCkuKzwbQX0WFG2v457QTOSw&key=${key}`,{
  headers: {
    'user-agent': 'RemiixInc'
  }});
// parse response
res = JSON.parse(res.getBody()).items[0].statistics
module.exports = res;
