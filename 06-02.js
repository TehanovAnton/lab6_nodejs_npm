const http = require('http')
const fs = require('fs')
const url = require('url')
const send = require('./m0603/mailer')
const port = 5000

let http_handler = (req, res) =>
{
    let parsed_url = url.parse(req.url, true)
    let pathname = parsed_url.pathname
    let params = parsed_url.query    
    if (pathname = "/mail_boxes" && params)
    {
        let params = parsed_url.query
        send(params['message'])
    }

    let mail_boxes_html = fs.readFileSync('./mail_boxes.html')
    res.writeHead(200, { 'Content-Type':'text/html; charset=utf-8' })
    res.end(mail_boxes_html)
}

let server = http.createServer(http_handler)
server.listen(port, () => console.log(`Server running: http://localhost:${port}`))