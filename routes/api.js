const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

// 获取数据
router.get('/data', (req, res) => {
    fs.readFile(path.join(__dirname, '../data/test.json'), 'utf8', (err, data) => {
        if (err) return res.status(500).send('服务器错误');
        res.json(JSON.parse(data));
    });
});

// 新增数据
router.post('/data', (req, res) => {
    const newData = req.body;
    fs.readFile(path.join(__dirname, '../data/test.json'), 'utf8', (err, data) => {
        if (err) return res.status(500).send('服务器错误');
        const dataArray = JSON.parse(data);
        dataArray.push(newData);
        fs.writeFile(path.join(__dirname, '../data/test.json'), JSON.stringify(dataArray, null, 2), (err) => {
            if (err) return res.status(500).send('服务器错误');
            res.sendStatus(200);
        });
    });
});

// 删除数据
router.delete('/data/:index', (req, res) => {
    const index = parseInt(req.params.index);
    fs.readFile(path.join(__dirname, '../data/test.json'), 'utf8', (err, data) => {
        if (err) return res.status(500).send('服务器错误');
        const dataArray = JSON.parse(data);
        if (index >= 0 && index < dataArray.length) {
            dataArray.splice(index, 1);
            fs.writeFile(path.join(__dirname, '../data/test.json'), JSON.stringify(dataArray, null, 2), (err) => {
                if (err) return res.status(500).send('服务器错误');
                res.sendStatus(200);
            });
        } else {
            res.status(400).send('无效的索引');
        }
    });
});

// 更新数据
router.put('/data/:index', (req, res) => {
    const index = parseInt(req.params.index);
    const updatedData = req.body;
    fs.readFile(path.join(__dirname, '../data/test.json'), 'utf8', (err, data) => {
        if (err) return res.status(500).send('服务器错误');
        const dataArray = JSON.parse(data);
        if (index >= 0 && index < dataArray.length) {
            dataArray[index] = updatedData;
            fs.writeFile(path.join(__dirname, '../data/test.json'), JSON.stringify(dataArray, null, 2), (err) => {
                if (err) return res.status(500).send('服务器错误');
                res.sendStatus(200);
            });
        } else {
            res.status(400).send('无效的索引');
        }
    });
});

module.exports = router;
