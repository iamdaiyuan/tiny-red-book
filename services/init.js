const mongoose = require('../config/mongoose');
const feedService = require('./feed.service');

// 命令行读取用户名密码
const processArgs = process.argv.splice(2);
const user = processArgs[0];
const pwd = processArgs[1];
const host = processArgs[2];

// 1. 初始化数据库链接
mongoose({ user, pwd, host });

const oids = [
  'recommend',
  'fasion',
  'cosmetics',
  'food',
  'sport',
  'travel',
  'home',
  'babycare',
  'books',
  'digital',
  'mens_fasion',
];

// 2. 初始化获取Feed数据
async function start() {
  oids.forEach((oid) => {
    feedService.initFeedInfo(oid);
  });
}

start();