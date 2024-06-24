let btnSound = document.getElementById('btn-sound');
let musicPlayer = document.getElementById('music-player');
let play = 1
musicPlayer.play()

// Agar source icon tombol Sound dinamis disemua halaman
let btnSoundIcon = btnSound.querySelector('img');
let splitedIconSource = btnSoundIcon.src.split('/')
splitedIconSource.pop();
let cleanIconSource = splitedIconSource.join('/')

btnSound.addEventListener('click', (e)=>{
    if (play == 1){
        musicPlayer.pause();
        btnSound.querySelector("img").src = cleanIconSource+'/volume-xmark-solid.png'
        play = 0;
    }else{
        musicPlayer.play();
        btnSound.querySelector("img").src = cleanIconSource+'/volume-high-solid.png'
        play = 1
    }
})