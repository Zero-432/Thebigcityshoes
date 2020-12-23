var users = JSON.parse(localStorage.getItem('users')) || [];
// register
function onRegister() {
    users = JSON.parse(localStorage.getItem('users')) || [];
    let user = {
        email: '',
        password: ''
    };
    user.email = $('#email').val();
    user.password = $('#password').val();
    let confirm_password = $('#confirm').val();
    // kiểm tra confirm password
    if (confirm_password === user.password) {
        // kiểm tra email hoặc password có rỗng hay không
        for (key in user) {
            if (user[key] === "") return false
        }

        if (users.find(item => item.email === user.email)) {
            alert("Email existed!");
            return false;
        }
        users.push(user); // đẩy user vừa nhập vào mảng users 
        localStorage.setItem('users', JSON.stringify(users)); // Lưu mảng users vào localstorage
        alert('Register user success!');
        // chuyễn đến trang login
        window.location = "Login.html";
    } else {
        alert("Password confirm does not match");
        // focus và clear confirm input
        $('#confirm').focus();
        $('#confirm').val('');
        return false;
    }

}
function onLogin() {
    let users = JSON.parse(localStorage.getItem('users'));

    let user = {
        email: '',
        password: ''
    };
    user.email = $('#email').val();
    user.password = $('#password').val();
    // kiểm tra user 
    let temp = users.find(item => item.email === user.email);   // tìm kiếm xem email nhập vào có trong mảng users đã lưu vào localstorage k
    if (temp) {
        if (temp.password === user.password) {
            alert("Login success!");
            localStorage.setItem('is_logged', true);
            window.location = "../index.html";
            return true;
        } else {
            alert("Password is incorrect!");
            // focus và clear confirm input
            $('#password').focus();
            $('#password').val('');
            return false;
        }
    } else {
        alert("Email not exist!");
        // focus và clear confirm input
        $('#email').focus();
        $('#email').val('');
        $('#password').focus();
        $('#password').val('');
        return false;
    }
}

$('#login_btn').click(function () {
    onLogin();
})

$('#register_btn').click(function () {
    onRegister();
})