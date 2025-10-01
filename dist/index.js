import express from 'express';
import 'dotenv/config';
const app = express();
app.get('/', (req, res) => {
    res.send('server...');
});
const PORT = process.env.PORT;
const server = app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`);
});
//# sourceMappingURL=index.js.map