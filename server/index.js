import express from 'express';

let app = express();
app.use(express.static(process.env.CLIENT_PATH));

app.listen(8080);
