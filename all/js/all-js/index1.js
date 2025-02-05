// 检查用户是否已经登录
if (!localStorage.getItem('isLoggedIn') || localStorage.getItem('isLoggedIn') !== 'true') {
    // 如果用户未登录，跳转回登录页面
    window.location.href = '../../index.html'; // 替换为实际的登录页面路径
}