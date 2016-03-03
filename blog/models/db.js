var setting = require('../config/setting'),
    Db = require('mongodb').Db,
    Connection = require('mongodb').Connection,
    Server = require('mongodb').server;

module.exports = new db(setting.dbName, new Server(setting.host, setting.port), {safe: true});