// Disposable fixture. The response sets a content type and no security header.
function handler(req, res) {
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.end("<p>fixture</p>");
}

module.exports = handler;
