const express = require("express");
const cors = require("cors");
const axios = require("axios");
const dotenv = require('dotenv');
const app = express();
app.use(express.json());
app.use(cors({ origin: true }));
dotenv.config();
app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try{
    const r = await axios.put(
        process.env.CHAT_ENG_URL,
        { username: username, secret:username, first_name: username },
        { headers: { "private-key": process.env.PRIVATE_KEY } }
    )
    return res.status(r.status).json(r.data)
  } catch(e){
    return res.status(e.response.status).json(e.response.data)
  }
});

app.listen(process.env.PORT);