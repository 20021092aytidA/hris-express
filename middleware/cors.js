const cors = require("cors");

const allowedIP = [undefined, "127.0.0.1"]; //POSTMAN AND LOCALHOST

const corsHandle = cors({
  origin: (origin, callback) => {
    if (allowedIP.includes(origin)) {
      callback(undefined, true);
    } else {
      callback(notAllowerErr, undefined);
    }
  },
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  credentials: true,
  optionsSuccessStatus: 200,
});

module.exports = corsHandle;
