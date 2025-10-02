import express from 'express';
import 'dotenv/config';
import mongoose from 'mongoose';
const app = express();
(async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to mongodb');
    }
    catch (error) {
        console.log('Error connecting to mongodb', error);
    }
})();
app.get('/', (req, res) => {
    res.send('server...');
});
const PORT = process.env.PORT;
const server = app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`);
});
//# sourceMappingURL=index.js.map