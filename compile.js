/*
 * @Author: zuojianghua
 * @Date: 2021-06-23 20:04:25
 * @LastEditTime: 2021-06-23 20:15:40
 * @LastEditors: zuojianghua
 * @Description:
 * @FilePath: /tencentTkeTest/compile.js
 */
// 编译脚本
const bytenode = require("bytenode");
const fs = require("fs");

bytenode
  .compileFile({
    filename: "./core.js",
  })
  .then(() => {
    fs.unlinkSync("./core.js");
  });
