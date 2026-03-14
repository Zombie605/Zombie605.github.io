// 获取账号和密码的值
const mima = document.querySelector('.submit input');
const btn = document.querySelector('button');

// 登录事件
btn.addEventListener('click', function() {
    // 检测账号和密码是否正确
    const correctPassword = 'CUPL10053'; // 正确的密码
    // 谜底答案:CUPL10053(含义:中国政法大学英文简称和国标代码)
    if (mima.value === correctPassword) {
        // 如果账号和密码正确，存储登录状态
        localStorage.setItem('isLoggedIn', 'true');
        // 跳转到另一个页面
        window.location.href = '/all/html/ZZ10053.html'; // 替换为实际的页面路径
    } else {
        // 如果账号或密码错误，弹出提示
        alert('账号或密码错误，请重新输入！');
    }
});