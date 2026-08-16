const startButton = document.getElementById("startButton");
const lovePage = document.getElementById("lovePage");
const loveButton = document.getElementById("loveButton");
const percentage = document.getElementById("percentage");
const tapText = document.getElementById("tapText");
const loveMessage = document.getElementById("loveMessage");
const nextButton = document.getElementById("nextButton");
const memoryIntro =
    document.getElementById("memoryIntro");

const memoryButton =
    document.getElementById("memoryButton");

const galleryPage =
    document.getElementById("galleryPage");

const galleryNext =
    document.getElementById("galleryNext");

const photoCards =
    document.querySelectorAll(".photo-card");

const prevPhoto =
    document.getElementById("prevPhoto");

const nextPhoto =
    document.getElementById("nextPhoto");

const photoIndicator =
    document.getElementById("photoIndicator");

const realizationPage =
    document.getElementById("realizationPage");

const realizationButton =
    document.getElementById("realizationButton");

const thankyouPage =
    document.getElementById("thankyouPage");

const thankyouButton =
    document.getElementById("thankyouButton");

 const envelopePage =
    document.getElementById("envelopePage");

const envelopeButtons =
    document.querySelectorAll(".envelope-button");

const envelopeMessage =
    document.getElementById("envelopeMessage");

const birthdayNext =
    document.getElementById("birthdayNext");

const birthdayPage =
    document.getElementById("birthdayPage");   

const backgroundMusic =
    document.getElementById("backgroundMusic");

const musicToggle =
    document.getElementById("musicToggle");

backgroundMusic.volume = 0.35;
let currentPhoto = 0;
let lovePercent = 0;
let errorMode = false;


/* =========================
   MULAI PERJALANAN
========================= */

startButton.addEventListener("click", function() {

    lovePage.classList.add("active");

    backgroundMusic.play();

});


/* =========================
   TEKAN HATI
========================= */

loveButton.addEventListener("click", function () {

    /* Jika sudah masuk mode ERROR */

    if (errorMode) {
        return;
    }


    /* Naikkan persentase */

    if (lovePercent < 100) {

        lovePercent += 10;

        percentage.textContent =
            lovePercent + "%";


        /* Animasi hati */

        loveButton.classList.remove("pop");

        void loveButton.offsetWidth;

        loveButton.classList.add("pop");


        /* Pesan */

        if (lovePercent === 10) {

            loveMessage.textContent =
                "Hmm... baru mulai ya? 🤭";

        } else if (lovePercent === 20) {

            loveMessage.textContent =
                "Hehe, lumayan... ❤️";

        } else if (lovePercent === 30) {

            loveMessage.textContent =
                "Mulai terasa nih... 🥰";

        } else if (lovePercent === 40) {

            loveMessage.textContent =
                "Jangan berhenti dong... 🤭";

        } else if (lovePercent === 50) {

            loveMessage.textContent =
                "Setengah? Masa cuma segini? 😏";

        } else if (lovePercent === 60) {

            loveMessage.textContent =
                "Wah, mulai banyak nih ❤️";

        } else if (lovePercent === 70) {

            loveMessage.textContent =
                "Aku mulai percaya... 🥹";

        } else if (lovePercent === 80) {

            loveMessage.textContent =
                "Dikit lagi... ❤️";

        } else if (lovePercent === 90) {

            loveMessage.textContent =
                "Serius mau sampai 100%? 👀";

        } else if (lovePercent === 100) {

            loveMessage.textContent =
                "100%? Yakin perasaanmu hanya segitu? 🤭❤️";

            tapText.textContent =
                "Tekan lagi kalau kamu yakin...";

        }

    }

    /* =========================
       SETELAH 100%
    ========================= */

    else {

        errorMode = true;

        percentage.textContent =
            "ERROR!";

        percentage.classList.add("error-text");

        loveButton.classList.add("error-heart");

        tapText.textContent =
            "LOVE SYSTEM OVERLOADED...";

        loveMessage.innerHTML =
            "Rasa sayangmu melebihi kapasitas sistem. ❤️<br>" +
            "Sepertinya angka 100% tidak cukup untuk menghitungnya.";

        nextButton.classList.add("show");

    }

});


/* =========================
   LANJUT KE KENANGAN
========================= */

nextButton.addEventListener("click", function () {

    memoryIntro.classList.add("active");

});
memoryButton.addEventListener("click", function () {

    galleryPage.classList.add("active");

});
/* =========================
   GALERI FOTO
========================= */

function showPhoto(index) {

    photoCards.forEach(function(card) {

        card.classList.remove("active");

    });

    photoCards[index].classList.add("active");

    photoIndicator.textContent =
        (index + 1) + " / " + photoCards.length;

}


/* FOTO BERIKUTNYA */

nextPhoto.addEventListener("click", function() {

    currentPhoto++;

    if (currentPhoto >= photoCards.length) {

        currentPhoto = 0;

    }

    showPhoto(currentPhoto);

});


/* FOTO SEBELUMNYA */

prevPhoto.addEventListener("click", function() {

    currentPhoto--;

    if (currentPhoto < 0) {

        currentPhoto = photoCards.length - 1;

    }

    showPhoto(currentPhoto);

});


/* TOMBOL LANJUT */

galleryNext.addEventListener("click", function() {

    realizationPage.classList.add("active");

});
realizationButton.addEventListener("click", function() {

    thankyouPage.classList.add("active");

});

/* =========================
   SWIPE FOTO DENGAN JARI
========================= */

let touchStartX = 0;
let touchEndX = 0;


const photoSlider =
    document.querySelector(".photo-slider");


photoSlider.addEventListener("touchstart", function(event) {

    touchStartX = event.changedTouches[0].screenX;

});


photoSlider.addEventListener("touchend", function(event) {

    touchEndX = event.changedTouches[0].screenX;

    handleSwipe();

});


function handleSwipe() {

    const distance = touchEndX - touchStartX;


    /* Geser ke kiri → foto berikutnya */

    if (distance < -50) {

        currentPhoto++;

        if (currentPhoto >= photoCards.length) {
            currentPhoto = 0;
        }

        showPhoto(currentPhoto);

    }


    /* Geser ke kanan → foto sebelumnya */

    if (distance > 50) {

        currentPhoto--;

        if (currentPhoto < 0) {
            currentPhoto = photoCards.length - 1;
        }

        showPhoto(currentPhoto);

    }

}
thankyouButton.addEventListener("click", function() {

    envelopePage.classList.add("active");

});
/* =========================
   AMPLOP KEJUTAN
========================= */

let openedEnvelopes = 0;


envelopeButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const messageName =
            button.getAttribute("data-message");


        if (messageName === "message1") {

            envelopeMessage.innerHTML =
                "Terima kasih karena selalu menjadi " +
                "dirimu sendiri. ❤️<br><br>" +
                "Seseorang yang punya cara tersendiri " +
                "untuk membuat hari-hariku terasa lebih berarti.";

        }


        if (messageName === "message2") {

            envelopeMessage.innerHTML =
                "Aku bersyukur untuk setiap cerita " +
                "yang pernah kita lewati bersama. 🥹<br><br>" +
                "Entah itu tawa, obrolan sederhana, " +
                "atau momen-momen kecil yang mungkin " +
                "tidak terlihat istimewa bagi orang lain.";

        }


        if (messageName === "message3") {

            envelopeMessage.innerHTML =
                "Kalau ada satu hal yang ingin selalu " +
                "aku ingat, itu adalah betapa berartinya " +
                "kehadiranmu dalam hidupku. ❤️<br><br>" +
                "Semoga aku juga bisa menjadi seseorang " +
                "yang berarti untukmu.";

        }


        envelopeMessage.classList.add("show");


        if (!button.classList.contains("opened")) {

            button.classList.add("opened");

            openedEnvelopes++;

        }


        if (openedEnvelopes === 3) {

            birthdayNext.classList.add("show");

        }

    });

});
birthdayNext.addEventListener("click", function() {

    birthdayPage.classList.add("active");

});
/* =========================
   KONTROL MUSIK
========================= */

musicToggle.addEventListener("click", function() {

    if (backgroundMusic.paused) {

        backgroundMusic.play();

        musicToggle.textContent = "🎵";

        musicToggle.classList.remove("muted");

    } else {

        backgroundMusic.pause();

        musicToggle.textContent = "🔇";

        musicToggle.classList.add("muted");

    }

});