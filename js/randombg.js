//随机背景图片数组,图片可以换成图床链接，注意最后一条后面不要有逗号
var backimg =[
    "url(https://pic.imgdb.cn/item/61f538042ab3f51d916b92d9.jpg)",
    "url(https://pic.imgdb.cn/item/61f538042ab3f51d916b92dc.jpg)",
    "url(https://pic.imgdb.cn/item/61f538042ab3f51d916b92e3.jpg)",
    "url(https://pic.imgdb.cn/item/61f538042ab3f51d916b92ec.jpg)",
    "url(https://pic.imgdb.cn/item/61f538042ab3f51d916b92fb.jpg)",
    "url(https://pic.imgdb.cn/item/61f539132ab3f51d916c9a6b.jpg)",
    "url(https://pic.imgdb.cn/item/61edfba22ab3f51d91de79a0.jpg)",
    "url(https://pic.imgdb.cn/item/61edfb832ab3f51d91de61c3.jpg)",
    "url(https://pic.imgdb.cn/item/61f5550d2ab3f51d918b6cc1.jpg)",
    "url(https://pic.imgdb.cn/item/61f0d4b92ab3f51d9150c4e5.png)",
    "url(https://pic.imgdb.cn/item/61f0d4d12ab3f51d9150d623.png)"
  ];
  //获取背景图片总数，生成随机数
  var bgindex =Math.floor(Math.random() * (backimg.length));
  //重设背景图片
  document.getElementById("web_bg").style.backgroundImage = backimg[bgindex];
  //随机banner数组,图片可以换成图床链接，注意最后一条后面不要有逗号
  // var bannerimg =[
  //   "url(https://pic.imgdb.cn/item/61f538042ab3f51d916b92d9.jpg)",
  //   "url(https://pic.imgdb.cn/item/61f538042ab3f51d916b92dc.jpg)",
  //   "url(https://pic.imgdb.cn/item/61f538042ab3f51d916b92e3.jpg)",
  //   "url(https://pic.imgdb.cn/item/61f538042ab3f51d916b92ec.jpg)",
  //   "url(https://pic.imgdb.cn/item/61f538042ab3f51d916b92fb.jpg)",
  //   "url(https://pic.imgdb.cn/item/61f539132ab3f51d916c9a6b.jpg)"
  // ];
  // //获取banner图片总数，生成随机数
  // var bannerindex =Math.ceil(Math.random() * (bannerimg.length-1));
  // //重设banner图片
  // document.getElementById("page-header").style.backgroundImage = bannerimg[bannerindex];