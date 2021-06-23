/*
 * @Author: zuojianghua
 * @Date: 2021-06-23 18:33:32
 * @LastEditTime: 2021-06-23 20:03:34
 * @LastEditors: zuojianghua
 * @Description:
 * @FilePath: /tencentTkeTest/index.js
 */
require("bytenode");
const express = require("express");
const core = require("./core");
const app = express();
const port = 3333;

app.use("/", core);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
