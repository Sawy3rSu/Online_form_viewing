const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

const apiRoutes = require('./routes/api');
const authRoutes = require('./routes/auth');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 使用路由
app.use('/api', apiRoutes);
app.use('/auth', authRoutes);

const specificIP = '192.168.3.6'; // 替换为你的实际 IP 地址
app.listen(port, specificIP, () => {
    console.log(`服务器在 http://${specificIP}:${port} 上运行`);
});
