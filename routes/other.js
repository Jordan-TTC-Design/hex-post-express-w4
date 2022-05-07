const express = require('express');
const router = express.Router();
const multiparty = require('multiparty');
const imgur = require('imgur-node-api');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
// 上傳圖片
router.post('/image', async (req, res, next) => {
  let form = new multiparty.Form();
  form.parse(req, async (err, fields, file) => {
    const imgFile = file.image[0];
    if (imgFile) {
      // 設定 app ID
      imgur.setClientID(process.env.IMGUR_TOKEN);
      // 取得檔案目錄，上傳至 imgur
      try {
        const updateResult = await imgur.upload(imgFile.path, (err, image) => {
          if (err) {
            return err;
          } else {
            return image.link;
          }
        });
      } catch (err) {
        res
          .status(400)
          .send({
            status: false,
            message: err,
          })
          .end();
      }
      res
        .status(200)
        .send({
          status: true,
          data: updateResult,
          message: '成功上傳圖片',
        })
        .end();
    } else {
      res
        .status(400)
        .send({
          status: false,
          message: '沒有選擇圖片',
        })
        .end();
    }
  });
});

module.exports = router;
