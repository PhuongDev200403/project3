const form = document.getElementById('form_1');
const fullnameValue = document.getElementById('fullname');
const emailValue = document.getElementById('Email');
const passwordValue = document.getElementById('password');
const passwordConfirmation = document.getElementById('rewrite');

form.addEventListener('submit', (event)=>{
    const Fullname = fullnameValue.value.trim();// loại bỏ các khoảng trắng 
    const Email = emailValue.value.trim();
    const Password = passwordValue.value.trim();
    const PasswordConfirm = passwordConfirmation.value.trim();
    event.preventDefault(); // ngăn chặn submit mặc định của trình duyệt (bắt buộc có);
    try{
        if(Fullname === ""){
            document.querySelector('.spacer_1').innerText = "Quên điền tên đăng nhập rồi này";
            throw new Error("Quên mẹ điền  tên đăng nhập kìa cụ ơi")
            
        }
        if(Email === ""){
            document.querySelector('.spacer_2').innerText = "Quên điền Email rồi còn đâu"
            throw new Error("Quên mẹ điền email mà cũng đòi đăng nhập");
        }
        if(Password === ""){
            document.querySelector('.spacer_3').innerText = "Quên điền mật khẩu rồi còn đâu"
            throw new Error("Quên điền mật khẩu rồi này");
        }
        if(PasswordConfirm === ""){
            document.querySelector('.sapcer_4').innerText = "Mày không xác nhạn mật khẩu thì mày đăng nhập kiểu gì?"
            throw new Error("M còn chưa xác nhận lại mật khẩu nữa kìa");
        }
        if(Password !== PasswordConfirm){
            document.querySelector('.sapcer_4').innerText = "Có mỗi việc xác nhận mật khẩu thôi mà cũng làm không được"
            throw new Error("password và password confirm không giống nhau rồi kìa ");
        }
        alert("Login successful");
    }catch(error){
        alert(error.message);
    }
});