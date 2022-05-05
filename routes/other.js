const express = require('express');
const router = express.Router();

// 上傳圖片
router.post('/image', async (req, res, next) => {
  console.log(req.body)
  // const item = req.body.postImgUrl;
  // const base64String = item.replace('data:image/jpeg;base64,', '');
  // const data = {
  //   image: base64String,
  //   type: 'base64',
  // };
  // axios({
  //   method: 'POST',
  //   url: 'https://api.imgur.com/3/image',
  //   data,
  //   headers: {
  //     Authorization: 'Client-ID ef6e862acf052df',
  //   },
  // }).then((response) => {
  //   console.log(response);
  // })
  // try {
  //   const result = await axios.post('https://api.imgur.com/3/image', {
  //     headers: {
  //       Authorization: 'Client-ID ef6e862acf052df',
  //     },
  //     data
  // });
  //   res.status(200).send({
  //     status:true,
  //     data:result,
  //     message:'成功上傳圖片'
  //   }).end();
  //   console.log(result);
  // } catch (err) {
  //   console.log(err);
  //   res.status(400).send({
  //     status:false,
  //     message:'上傳失敗'
  //   }).end();
  // }
});

module.exports = router;
