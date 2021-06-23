/*
 * @Author: zuojianghua
 * @Date: 2021-06-23 18:33:32
 * @LastEditTime: 2021-06-23 18:39:22
 * @LastEditors: zuojianghua
 * @Description:
 * @FilePath: /tencentTkeTest/index.js
 */
const express = require("express");
const app = express();
const port = 3333;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
