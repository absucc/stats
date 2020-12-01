var request = require("sync-request");
var res = request("GET", "http://example.com");
if (res.statusCode >= 400) {
  throw new Error(
    "Whoops! Something went wrong when fetching the YouTube stats: ",
    res.statusCode
  );
}
module.exports;
