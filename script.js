// عناصر الصفحات
const welcomePage = document.getElementById("welcome-page");
const letterPage = document.getElementById("letter-page");
const secretPage = document.getElementById("secret-page");

// إنشاء القلوب المتحركة
function createHeart() {
    const heart = document.createElement("div");

    heart.className = "floating-heart";
    heart.textContent = ["♥", "♡", "❤️"][Math.floor(Math.random() * 3)];

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (15 + Math.random() * 22) + "px";
    heart.style.animationDuration = (5 + Math.random() * 6) + "s";

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 11000);
}

setInterval(createHeart, 700);


// الانتقال من الصفحة الأولى للثانية
function openLetter() {
    welcomePage.classList.add("hidden");
    letterPage.classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
}


// فتح نافذة كلمة السر
function openPassword() {
    document.getElementById("password-popup").classList.remove("hidden");

    const input = document.getElementById("password");
    input.value = "";

    document.getElementById("error").textContent = "";
}


// إغلاق نافذة كلمة السر
function closePassword() {
    document.getElementById("password-popup").classList.add("hidden");
}


// التحقق من كلمة السر
function checkPassword() {
    const password = document.getElementById("password").value;
    const error = document.getElementById("error");

    if (password === "04.15") {
        document.getElementById("password-popup").classList.add("hidden");

        letterPage.classList.add("hidden");
        secretPage.classList.remove("hidden");

        window.scrollTo({ top: 0, behavior: "smooth" });

        // قلوب إضافية عند فتح الرسالة
        for (let i = 0; i < 25; i++) {
            setTimeout(createHeart, i * 100);
        }

    } else {
        error.textContent = "كلمة السر مو صحيحة يا أميرتي 🥺";
    }
}


// الرجوع إلى رسالة الاعتذار
function closeSecret() {
    secretPage.classList.add("hidden");
    letterPage.classList.remove("hidden");

    window.scrollTo({ top: 0, behavior: "smooth" });
}