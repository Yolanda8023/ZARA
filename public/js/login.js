$(() => {
  let canLogin = true
  // 验证电子邮箱
  $('#login input[name=email]').on('blur', function () {
    let value = $(this).val().trim()

    if (!value) {
      canLogin = false
      $(this).addClass('error').next().text('邮箱为空')
    } else {
      $(this).removeClass('error')
    }
  })

  // 验证密码
  $('#login input[name=password]').on('blur', function () {
    let value = $(this).val().trim()

    if (!value) {
      canLogin = false
      $(this).addClass('error').next().text('密码为空')
    } else {
      $(this).removeClass('error')
    }
  })

  // 登录验证
  $('#login form').on('submit', function (e) {
    e.preventDefault()
    canLogin = true

    $('#login input[name=email]').trigger('blur')
    $('#login input[name=password]').trigger('blur')

    if (canLogin) {
      // 信息完整，允许登录
      let users = JSON.parse(localStorage.getItem('users'))
      if (!users) users = []

      let user = {
        email: $('#login input[name=email]').val().trim(),
        password: $('#login input[name=password]').val().trim(),
      }
      // 搜索用户名和邮箱
      let isReady = false
      users.forEach(item => {
        if (item.username === user.username || item.email === user.email) {
          isReady =true
        }
      })
      if (isReady) {
        localStorage.setItem('user', JSON.stringify(user))
        location.href = 'index.html'
      } else {
        alert('邮箱或密码错误！')
      }
    }
  })
})