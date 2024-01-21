// 取得導覽列元素
const nav = document.querySelector('.dropdown_menu');
// 取得導覽列元素頂端位置
const topOfNav = nav.offsetTop;

function fixNav() {
  // 如果觀景窗頂部位置值大於導覽列頂部就沾黏，反之取消沾黏
  if(window.scrollY >= topOfNav) {
    document.body.classList.add('fixed-nav');
  } else {
    document.body.classList.remove('fixed-nav');
  }
}

// 監聽滾動事件
window.addEventListener('scroll', fixNav);