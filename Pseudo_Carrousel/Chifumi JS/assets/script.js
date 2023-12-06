let currentIndex = 0;
const avatars = document.querySelectorAll('.avatar');

function showAvatar(index) {
    avatars.forEach((avatar, i) => {
        avatar.classList.toggle('active', i === index);
    });
}

function changeAvatar(direction) {
    currentIndex = (currentIndex + direction + avatars.length) % avatars.length;
    showAvatar(currentIndex);
}

document.addEventListener('DOMContentLoaded', function () {
    showAvatar(currentIndex);
});

function submitForm() {
    const usernameInput = document.getElementById('username');
    const selectedAvatar = document.querySelector('.avatar.active img');

    if (usernameInput.value.trim() === '') {
        alert('Veuillez entrer un pseudo.');
        return;
    }

    if (!selectedAvatar) {
        alert('Veuillez choisir un avatar.');
        return;
    }

    const username = usernameInput.value;
    const avatarSrc = selectedAvatar.src;

    alert(`Votre profil à bien été enregistré !`);
}

