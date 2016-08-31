import express from 'express';

let app = express();
app.use(express.static(process.env.CLIENT_PATH));

app.listen(process.env.PORT || 8080);
