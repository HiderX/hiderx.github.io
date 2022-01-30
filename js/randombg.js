//随机背景图片数组,图片可以换成图床链接，注意最后一条后面不要有逗号
var backimg =[
    "url(https://pic.imgdb.cn/item/61f146032ab3f51d91b7066e.jpg)",
    "url(https://pic.imgdb.cn/item/61f60d692ab3f51d91432a4c.jpg)",
    "url(https://pic.imgdb.cn/item/61f60d692ab3f51d91432a5a.jpg)",
    "url(https://pic.imgdb.cn/item/61f60d692ab3f51d91432a5f.jpg)",
    "url(https://pic.imgdb.cn/item/61f60d692ab3f51d91432a74.jpg)",
    "url(https://pic.imgdb.cn/item/61f60d962ab3f51d914354c5.jpg)",
    "url(https://pic.imgdb.cn/item/61f60d962ab3f51d914354cb.jpg)",
    "url(https://pic.imgdb.cn/item/61f60d962ab3f51d914354d3.jpg)",
    "url(https://pic.imgdb.cn/item/61f60d962ab3f51d914354e1.jpg)",
    "url(https://pic.imgdb.cn/item/61f60d962ab3f51d914354ea.jpg)",
    "url(https://pic.imgdb.cn/item/61f60dbc2ab3f51d91437d8a.jpg)",
    "url(https://pic.imgdb.cn/item/61f60dbc2ab3f51d91437d91.jpg)",
    "url(https://pic.imgdb.cn/item/61f60dbc2ab3f51d91437d97.jpg)",
    "url(https://pic.imgdb.cn/item/61f60dbc2ab3f51d91437d9f.jpg)",
    "url(https://pic.imgdb.cn/item/61f60dbc2ab3f51d91437db4.jpg)",
    "url(https://pic.imgdb.cn/item/61f1463b2ab3f51d91b73519.jpg)",
    "url(https://pic.imgdb.cn/item/61f60dd92ab3f51d91439a3b.jpg)",
    "url(https://pic.imgdb.cn/item/61f60dd92ab3f51d91439a3f.jpg)",
    "url(https://pic.imgdb.cn/item/61f60dd92ab3f51d91439a47.jpg)",
    "url(https://pic.imgdb.cn/item/61f60dd92ab3f51d91439a51.jpg)"
  ];
  //获取背景图片总数，生成随机数
  var bgindex =Math.floor(Math.random() * (backimg.length));
  //重设背景图片
  document.getElementById("web_bg").style.backgroundImage = backimg[bgindex];
  //随机banner数组,图片可以换成图床链接，注意最后一条后面不要有逗号
  // var bannerimg =[

  // ];
  // //获取banner图片总数，生成随机数
  // var bannerindex =Math.ceil(Math.random() * (bannerimg.length-1));
  // //重设banner图片
  // document.getElementById("page-header").style.backgroundImage = bannerimg[bannerindex];