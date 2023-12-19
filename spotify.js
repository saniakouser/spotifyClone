
let songIndex=0;
let audioElement= new Audio('song@7.mp3');
let masterPlay=document.getElementById('masterPlay');
let myprogressbar=document.getElementById('myProgressBar');
let gif= document.getElementById('gif');
let songItem= Array.from(document.getElementsByClassName('songItem'));





let songs=[ {songName:"main phir bhi tumko chahunga",filePath:"song@0.mp3",coverPath:"cover1.jpeg"},
           {songName:"Raaz aankhein teri",filePath:"song@1.mp3",coverPath:"cover2.jpeg"},
           {songName:"jaan-nisar-hai",filePath:"song@2.mp3",coverPath:"cover3.jpg"},
           {songName:"pal pal dil ke pass",filePath:"song@3.mp3",coverPath:"cover4.jpg"},
           {songName:"tera chehra jab nazar aaye",filePath:"song@4.mp3",coverPath:"cover5.jpeg"},
           {songName:"phir aur kya chahiyea",filePath:"song@5.mp3",coverPath:"cover6.jpeg"},
           {songName:"agar tum sath ho",filePath:"song@6.mp3",coverPath:"cover7.jpg"},
           {songName:"aaj jane ki zid na kro",filePath:"song@7.mp3",coverPath:"cover8.jpeg"},
        
        ]
    songItem.forEach((element,p)=>{
element.getElementsByTagName("img")[0].src=songs[p].coverPath;
element.getElementsByClassName("songName")[0].innerText=songs[p].songName;

    }
    )
    


masterPlay.addEventListener('click',()=>{
if(audioElement.paused|| audioElement.currentTime<=0){
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    gif.style.opacity=1;
   
}
else{
    audioElement.pause();
    masterPlay.classList.remove('fa-circle-pause');
   masterPlay.classList.add('fa-circle-play');
    gif.style.opacity=0;
    
}
})

audioElement.addEventListener('timeupdate',()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myprogressbar.value=progress;
    
})

myprogressbar.addEventListener('change',()=>{
audioElement.currentTime=(myprogressbar.value*audioElement.duration)/100;

})

const makeAllplay=()=>{
    
  Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
    element.classList.remove('fa-circle-pause');
    element.classList.add('fa-circle-play');

    
       
    })
}




  Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
element.addEventListener('click',(e)=>{
    makeAllplay();
    index= parseInt(e.target.id);
    console.log(index);
    

    e.target.classList.remove('fa-circle-play');
    e.target.classList.add('fa-circle-pause');
    audioElement.src='song@'+index+'.mp3';
     audioElement.currentTime=0;
     audioElement.play();
     masterPlay.classList.remove('fa-circle-play');
     masterPlay.classList.add('fa-circle-pause');






    
})


})






