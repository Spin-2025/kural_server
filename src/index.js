// ESM-compliant version
"use strict";
import { IncomingMessage, ServerResponse } from "http";

/**
 * @param {IncomingMessage} req
 * @param {ServerResponse} res
 */
export default function handler(req, res) {
  const url = req.url;

  switch (url) {
    case "/":
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("<h1>Hello !. It is for you<h1>");
      break;

    default:
      res.writeHead(404);
      res.write('You might find the page you are looking for at "/" path');
      break;
  }

  res.end();
}
