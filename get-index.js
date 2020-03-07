'use strict';

module.exports.handler = async event => {
  let html = `
  <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Hello worlds</title>
    </head>
    <body>
        Hello Worlds
    </body>
    </html>
  `
  return {
    statusCode: 200,
    body: html,
    headers: {
      'Content-Type': 'text/html; charset=UTF-8'
    }
  };
};
