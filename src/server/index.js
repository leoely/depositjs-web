import https from 'https';
import fs from 'fs';
import { CommonHttp, } from 'manner.js/server';

https.createServer({
  key: fs.readFileSync('asset/depositjs-web-key.pem'),
  cert: fs.readFileSync('asset/depositjs-web-cert.pem'),
}, async (req, res) => {
  const commonHttp = new CommonHttp({
    title: 'Deposit',
    content: 'Deposit document website.',
    fonts: ['ttf'],
    develope: true,
  });
  await commonHttp.process(req, res);
}).listen(8000);
