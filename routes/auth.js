const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

// 登录验证
router.post('/login', (req, res) => {
    const { username, password } = req.body;
    fs.readFile(path.join(__dirname, '../data/user.json'), 'utf8', (err, data) => {
        if (err) return res.status(500).send('服务器错误');
        const users = JSON.parse(data);
        const user = users.find(u => u.name === username && u.password === password);
        if (user) {
            res.sendStatus(200);
        } else {
            res.status(401).send('用户名或密码错误');
        }
    });
});

module.exports = router;
