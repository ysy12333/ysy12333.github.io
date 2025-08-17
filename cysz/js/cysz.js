const menuToggle = document.getElementById('menu-toggle');
const mainMenu = document.getElementById('main-menu');
const backBtn = document.getElementById('back-btn');
const homeContent = document.getElementById('home-content');
const menuItems = document.querySelectorAll('.menu-item[data-page]');
    
// 显示/隐藏菜单
menuToggle.addEventListener('click', (event) => {
    event.stopPropagation(); // 阻止事件冒泡
    mainMenu.classList.toggle('active');
});
    
// 返回首页按钮
backBtn.addEventListener('click', () => {
  document.querySelectorAll('.subpage-content').forEach(content => {
    content.classList.remove('active');
  });
  homeContent.style.display = 'block';
  backBtn.style.display = 'none';
  document.title = '朝阳市第四中学官网-伊思宇模拟制作';
});
    
// 菜单项点击事件
menuItems.forEach(item => {
  item.addEventListener('click', (event) => {
    event.stopPropagation(); // 阻止事件冒泡
    const page = item.getAttribute('data-page');
    showPage(page);
    mainMenu.classList.remove('active');
  });
});
    
// 关闭菜单事件
const menuClose = document.getElementById('menu-close');
menuClose.addEventListener('click', () => mainMenu.classList.remove('active'));
    
// 点击空白处关闭菜单
document.addEventListener('click', (event) => {
    if (mainMenu.classList.contains('active') && !mainMenu.contains(event.target) && event.target !== menuToggle) {
        mainMenu.classList.remove('active');
    }
});
    
function showPage(page) {
  // 隐藏所有内容
  homeContent.style.display = 'none';
  document.querySelectorAll('.subpage-content').forEach(content => {
    content.classList.remove('active');
  });
      
  // 显示选中的内容
  document.getElementById(page + '-content').classList.add('active');
  backBtn.style.display = 'block';
      
  // 更新标题
  // document.title = page === 'uniform' ? 'MC版本的朝阳市第四中学校服' : 
                   page === 'teacher' ? '老师介绍' : 
                   page === 'school_badge' ? '校徽' : 
                   page === 'exercise' ? '广播体操视频及音频' : '';
}