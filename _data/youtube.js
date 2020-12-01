var request = require("sync-request");
// make the request
var res = request(
  "GET",
  `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCkuKzwbQX0WFG2v457QTOSw&key=${process.env.API_KEY}`,
  {
    headers: {
      "user-agent": "RemiixInc"
    }
  }
);
// parse response
res = JSON.parse(res.getBody()).items[0].statistics;
module.exports = res;
