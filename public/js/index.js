let user = JSON.parse(localStorage.getItem('user'))

if (!user) {
  // 未登录
  $('#header .right ul').prepend(`
    <li class="login"><a href="login.html">登录</a></li>
  `)
} else {
  $('#header .right ul').prepend(`
    <li class="user"><a href="profile.html">${user.username}</a></li>
  `)
}