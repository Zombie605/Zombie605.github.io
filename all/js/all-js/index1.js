// 检查用户是否已经登录
if (!localStorage.getItem('isLoggedIn') || localStorage.getItem('isLoggedIn') !== 'true') {
    window.location.href = '../../index.html'; // 替换为实际的登录页面路径
}