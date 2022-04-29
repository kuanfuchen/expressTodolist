const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/hotel')
  .then(()=>console.log('資料庫已連接'))
  .catch(()=>console.log('資料庫連接錯誤'));