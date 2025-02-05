/* // 获取账号和密码的值
const zh = document.querySelector('.zh input');
const password = document.querySelector('.password input');
const btn = document.querySelector('.btn button');

// 登录事件
btn.addEventListener('click', function() {
    // 检测账号和密码是否正确
    const correctUsername = ''; // 正确的账号
    const correctPassword = '123456'; // 正确的密码

    if (zh.value === correctUsername && password.value === correctPassword) {
        // 如果账号和密码正确，跳转到另一个页面
        window.location.href = '/all/welcome.html'; // 替换为实际的页面路径
    } else {
        // 如果账号或密码错误，弹出提示
        alert('账号或密码错误，请重新输入！');
    }
}); */

// 获取账号和密码的值
const zh = document.querySelector('.zh input');
const password = document.querySelector('.password input');
const btn = document.querySelector('.btn button');

// 登录事件
btn.addEventListener('click', function() {
    // 检测账号和密码是否正确
    const correctUsername = 'admin'; // 正确的账号
    const correctPassword = '123456'; // 正确的密码

    if (zh.value === correctUsername && password.value === correctPassword) {
        // 如果账号和密码正确，存储登录状态
        localStorage.setItem('isLoggedIn', 'true');
        // 跳转到另一个页面
        window.location.href = '/all/html/index1.html'; // 替换为实际的页面路径
    } else {
        // 如果账号或密码错误，弹出提示
        alert('账号或密码错误，请重新输入！');
    }
});

// 登出按钮逻辑
{/* <button onclick="logout()">登出</button>
<script>
    function logout() {
        // 清除登录状态
        localStorage.removeItem('isLoggedIn');
        // 跳转回登录页面
        window.location.href = '/all/index.html'; // 替换为实际的登录页面路径
    }
</script> */}