function register(event) {
    event.preventDefault();

    var userName = document.getElementById("userName").value;
    var userEmail = document.getElementById("userEmail").value;
    var userPassword = document.getElementById("userPassword").value;
    var userData = { name: userName, email: userEmail, password: userPassword };

    var dataFromLs = JSON.parse(localStorage.getItem("userData")) || [];
    console.log(dataFromLs, "dataFromLs");

    var flag = false;
    for (var i = 0; i < dataFromLs.length; i++) {
        if (dataFromLs[i].email === userEmail) {
            flag = true;
        }
    }

    if (flag === true) {
        alert("Email already Present");
        document.getElementById("userEmail").value = '';
    }
    else if (userName.length < 1 && userEmail.length < 1) {
        alert("must filled all fields");
    }
    else if (userPassword.length < 8) {
        alert("Password Must be more than 8 digit");
        document.getElementById("userPassword").value = "";
    }
    else {
        dataFromLs.push(userData);
        localStorage.setItem("userData", JSON.stringify(dataFromLs));
        document.getElementById("userName").value = '';
        document.getElementById("userEmail").value = '';
        document.getElementById("userPassword").value = "";
        window.location.href = "/Login.html";
        alert("registration Done");
    }
}
function login(event) {
    event.preventDefault(event);
    var userEmail = document.getElementById("email").value;
    var userPassword = document.getElementById("password").value;

    var dataFromLs = JSON.parse(localStorage.getItem("userData"));

    var flag = false;

    for (var i = 0; i < dataFromLs.length; i++) {
        if (dataFromLs[i].email === userEmail && dataFromLs[i].password === userPassword) {
            flag = true;
        }
    }

    if (flag) {
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";

        var user = {};
        user["current-user-email"] = userEmail;
        localStorage.setItem("currentUser", JSON.stringify(user));
        window.location.href = "/SnapdealHome.html";
        alert("Login sucessful");
    }
    else {
        alert("Email or Password does not match");
    }

}

function logout(event) {
    event.preventDefault(event);
    var dataFromLs = JSON.parse(localStorage.getItem("userData"));
    for (var i = 0; i < dataFromLs.length; i++){

    localStorage.removeItem("currentUser");
    window.location.href = "/Login.html";
    alert("Logout sucessful");
    }

}

