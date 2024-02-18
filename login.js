function check(form) {
    if(form.email.value=="quize123@gmail.com" && form.password.value=="1234")
    {
        window.open("index.html");
    }
    else
    {
        alert("Enter valid user name and password");
    }
}