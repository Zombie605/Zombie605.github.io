// 获取轮播图元素
const carouselImages = document.querySelector('.carousel-images');
const carouselDots = document.querySelector('.carousel-dots');
const dots = document.querySelectorAll('.dot');

// 初始化轮播图
let currentIndex = 0;
let intervalId;

// 显示当前图片
function showImage(index) {
  const images = carouselImages.querySelectorAll('img');
  images.forEach((img, i) => {
    img.classList.remove('active');
    dots[i].classList.remove('active');
    if (i === index) {
      img.classList.add('active');
      dots[i].classList.add('active');
    }
  });
}

// 自动轮播
function autoPlay() {
  currentIndex = (currentIndex + 1) % dots.length;
  showImage(currentIndex);
}

// 设置定时器
function startAutoPlay() {
  intervalId = setInterval(autoPlay, 3000);
}

// 停止定时器
function stopAutoPlay() {
  clearInterval(intervalId);
}

// 点击切换
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentIndex = index;
    showImage(currentIndex);
  });
});

// 鼠标悬停暂停
carouselImages.addEventListener('mouseover', stopAutoPlay);
carouselImages.addEventListener('mouseout', startAutoPlay);

// 初始化
showImage(currentIndex);
startAutoPlay();