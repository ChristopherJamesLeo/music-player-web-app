console.log("hello world");
let now_playing = document.querySelector(".now-playing");
let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");
let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let wave = document.getElementById("wave");
let randomIcon = document.querySelector(".fa-random");
let curr_track = document.createElement("audio");

let track_index = 0;
let isPlaying = false;
let isRandom = false;
let updateTimer ;


const music_list = [
    {
        img : "/music_list/christina_parris.jpg",
        name : "A Thousand Years",
        artist : "christina_parris",
        music : "/music_list/Christina_Perri_A_Thousand_Years_Official_Music.mp3"
    },
    {
        img : "/music_list/justin-bieber-te-220906-50b634.jpg",
        name : "I am The One",
        artist : "Justin Bieber",
        music : "/music_list/DJ_Khaled_I_m_The_One_ft_Justin_Bieber_Quavo_.mp3"
    },
    {
        img : "/music_list/one_direction.jpg",
        name : "Moving The Night",
        artist : "One Direction",
        music : "/music_list/Swinging_Mix_Moving_Through_the_Night.mp3"
    },
    {
        img : "/music_list/dj1.jpg",
        name : "DJ 1",
        artist : "DJ 1",
        music : "/music_list/Tie_Me_Down_Remix_2020_TikTok_DJ_Revanila_Ful.mp3"
    },
    {
        img : "/music_list/dj2.jpg",
        name : "All Falls Down",
        artist : "Syleen Johnson",
        music : "/music_list/Kanye_West_All_Falls_Down_ft_Syleena_Johnson.mp3"
    }
]

loadTrack(track_index);
function loadTrack(track_index){
    clearInterval(updateTimer);
    reset();

    curr_track.src = music_list[track_index].music;
    curr_track.load();

    track_art.style.backgroundImage = `url(${music_list[track_index].img})`;
    track_name.textContent = music_list[track_index].name;
    track_artist.textContent = music_list[track_index].artist;
    now_playing.textContent = "Playing music " + (track_index + 1) + "of" + music_list.length;

    updateTimer = setInterval(setUpdate , 1000);

    curr_track.addEventListener("ended" , nextTrack);
    random_bg_color();
}

function random_bg_color(){
    let hex = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e"];
    let a;

    function populate(a){
        for(let i = 0 ; i < 6 ; i++){
            let x = Math.round(Math.random() * 14);
            let y = hex[x];
            a += y;
        }
        return a;
    }
    let Color1 = populate("#");
    let Color2 = populate("#");
    let angle = "to right";

    let gradient = `linear-gradient(${angle},${Color1},${Color2})`;
    document.style.background = gradient;
}

function reset(){
    curr_time.textContent = "00:00";
    total_duration.textContent ="00:00";
    seek_slider.value = 0;
    
}
function randomTrack(){
    isRandom ? pauseRandom() : playRandom();
    // 18 minutes 
}