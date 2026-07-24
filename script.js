// =====================================
// Firebase Authentication Script
// =====================================

// Initialize reCAPTCHA
window.onload = function () {

    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
        "recaptcha-container",
        {
            size: "normal",
            callback: function () {
                console.log("reCAPTCHA verified");
            }
        }
    );

    recaptchaVerifier.render();

};


// ===============================
// Send OTP
// ===============================

function sendOTP() {

    const phone = document.getElementById("phoneNumber").value.trim();

    if (phone === "") {
        alert("Please enter your mobile number.");
        return;
    }

    auth.signInWithPhoneNumber(phone, recaptchaVerifier)

        .then((confirmationResult) => {

            window.confirmationResult = confirmationResult;

            alert("OTP Sent Successfully!");

        })

        .catch((error) => {

            alert(error.message);

            console.error(error);

        });

}



// ===============================
// Verify OTP
// ===============================

function verifyOTP() {

    const code = document.getElementById("otp").value.trim();

    if (code === "") {
        alert("Please enter OTP.");
        return;
    }

    confirmationResult.confirm(code)

        .then((result) => {

            alert("Login Successful!");

            window.location.href = "home.html";

        })

        .catch((error) => {

            alert("Invalid OTP");

            console.error(error);

        });

}



// ===============================
// Google Sign In
// ===============================

function googleLogin() {

    auth.signInWithPopup(provider)

        .then((result) => {

            alert("Welcome " + result.user.displayName);

            window.location.href = "home.html";

        })

        .catch((error) => {

            alert(error.message);

            console.error(error);

        });

}



// ===============================
// Check Login State
// ===============================

auth.onAuthStateChanged((user) => {

    if (user) {

        console.log("Logged In:", user.displayName || user.phoneNumber);

    } else {

        console.log("User Logged Out");

    }

});



// ===============================
// Logout
// ===============================

function logout() {

    auth.signOut()

        .then(() => {

            alert("Logged Out");

            window.location.href = "index.html";

        })

        .catch((error) => {

            alert(error.message);

        });

}