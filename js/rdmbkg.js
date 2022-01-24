//随机背景图片数组,图片可以换成图床链接，注意最后一条后面不要有逗号
var backimg =[
    "url(https://s4.ax1x.com/2022/01/24/7IgDR1.jpg)",
    "url(https://s4.ax1x.com/2022/01/24/7Ig5RI.png)",
    "url(https://s4.ax1x.com/2022/01/24/7Ig4JA.jpg)",
    "url(https://s4.ax1x.com/2022/01/24/7IgWIH.jpg)",
    "url(https://s4.ax1x.com/2022/01/24/7IgRde.png)",
    "url(https://s4.ax1x.com/2022/01/24/7Ig2ZD.jpg)",
    "url(https://s4.ax1x.com/2022/01/24/7Ighid.jpg)",
    "url(https://s4.ax1x.com/2022/01/24/7IgcqO.png)",
    "url(https://s4.ax1x.com/2022/01/24/7Ig6sK.jpg)",
    "url(https://s4.ax1x.com/2022/01/24/7IgyM6.png)",
    "url(https://s4.ax1x.com/2022/01/24/7Igrxx.jpg)"
  ];
  //获取背景图片总数，生成随机数
  var bgindex =Math.floor(Math.random() * (backimg.length));
  //重设背景图片
  document.getElementById("web_bg").style.backgroundImage = backimg[bgindex];
  //随机banner数组,图片可以换成图床链接，注意最后一条后面不要有逗号
  var bannerimg =[
    "url(https://s4.ax1x.com/2022/01/24/7IgDR1.jpg)",
    "url(https://s4.ax1x.com/2022/01/24/7Ig5RI.png)",
    "url(https://s4.ax1x.com/2022/01/24/7Ig4JA.jpg)",
    "url(https://s4.ax1x.com/2022/01/24/7IgWIH.jpg)",
    "url(https://s4.ax1x.com/2022/01/24/7IgRde.png)",
    "url(https://s4.ax1x.com/2022/01/24/7Ig2ZD.jpg)",
    "url(https://s4.ax1x.com/2022/01/24/7Ighid.jpg)",
    "url(https://s4.ax1x.com/2022/01/24/7IgcqO.png)",
    "url(https://s4.ax1x.com/2022/01/24/7Ig6sK.jpg)",
    "url(https://s4.ax1x.com/2022/01/24/7IgyM6.png)",
    "url(https://s4.ax1x.com/2022/01/24/7Igrxx.jpg)"
  ];
  //获取banner图片总数，生成随机数
  var bannerindex =Math.ceil(Math.random() * (bannerimg.length-1));
  //重设banner图片
  document.getElementById("page-header").style.backgroundImage = bannerimg[bannerindex];