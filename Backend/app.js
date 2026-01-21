import express,{json, urlencoded} from 'express';
import orderRouter from "./routes/orderRoutes.js";
import "./config/db.js";
import cors from 'cors';
const app = express()
const port = 3000

app.use(json());
app.use(urlencoded({ extended: true }));
app.use(cors());

// connecting order routes
app.use('/order', orderRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
