$(() => {
  let canRegister = true
  // 验证电子邮箱
  $('#register input[name=email]').on('blur', function () {
    let value = $(this).val().trim()

    if (!value) {
      canRegister = false
      $(this).addClass('error').next().text('邮箱为空')
    } else {
      $(this).removeClass('error')
    }
  })

  // 验证密码
  $('#register input[name=password]').on('blur', function () {
    let value = $(this).val().trim()

    if (!value) {
      canRegister = false
      $(this).addClass('error').next().text('密码为空')
    } else {
      $(this).removeClass('error')
    }
  })
  $('#register input[name=password1]').on('blur', function () {
    let value = $(this).val().trim()

    if (!value || value !== $('#register input[name=password]').val().trim()) {
      canRegister = false
      $(this).addClass('error').next().text('密码不一致')
    } else {
      $(this).removeClass('error')
    }
  })

  // 验证姓名
  $('#register input[name=username]').on('blur', function () {
    let value = $(this).val().trim()

    if (!value) {
      canRegister = false
      $(this).addClass('error').next().text('用户名为空')
    } else {
      $(this).removeClass('error')
    }
  })

  

  // 注册验证
  // 验证协议是否勾选
  $('#register form').on('submit', function (e) {
    e.preventDefault()
    canRegister = true

    let chks = $('#register div.checkbox input[type=checkbox]')
    chks.each((i, ele) => {
      if (!$(ele).prop('checked')) {
        canRegister = false
        return alert('请勾选协议')
      }
    })    

    $('#register input[name=email]').trigger('blur')
    $('#register input[name=password]').trigger('blur')
    $('#register input[name=password1]').trigger('blur')
    $('#register input[name=username]').trigger('blur')

    if (canRegister) {
      // 信息完整，允许注册
      let users = JSON.parse(localStorage.getItem('users'))
      if (!users) users = []

      let user = {
        username: $('#register input[name=username]').val().trim(),
        email: $('#register input[name=email]').val().trim(),
        password: $('#register input[name=password]').val().trim(),
      }
      // 搜索用户名和邮箱
      let isReady = false
      users.forEach(item => {
        if (item.username === user.username || item.email === user.email) {
          isReady =true
        }
      })
      if (isReady) {
        return alert('用户名或邮箱重复！')
      }
      users.push(user)

      localStorage.setItem('users', JSON.stringify(users))
      location.href = 'login.html'
    }
  })
})