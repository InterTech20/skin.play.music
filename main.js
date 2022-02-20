
        var icon = document.querySelector(".play");
        var player = document.getElementById("audio");
        var portada =document.getElementById("img-portada");
        var title=document.querySelector(".title");
        var subtitle=document.querySelector(".subtitle");

        function togglePlay() {
            toggle();
            
            setInterval( function () {
                console.log("barra.value");
            }, 900);
        }

        //Funcion para pausar o darle play 
function toggle() {
	if (player.paused){
		toggleIcon();
		player.play();
        setInterval( updateProgress, 1000);
	} else {
		toggleIcon();
		player.pause();

	}
}
//Funcion para cambiar el icono play o pause
function toggleIcon() {
    icon.classList.toggle("fa-pause");
    icon.classList.toggle("fa-play");
}

//Funcion para actualizar la barra de progreso del reprodutor
function updateProgress(){
	if (player.currentTime >0){
		const barra = document.getElementById('progress');
		barra.value = (player.currentTime / player.duration) * 100;
		
        document.title="Beat It - Michael Jackson";
        if(player.currentTime==100){
            console.log(barra.value);
            nextMusic();
        }
        }else{
            toggle();
        }
}
var index_music=0;
function prevMusic() {
    index_music--;
    if(index_music>=0){
    document.title=datos.databd[index_music].title+" - "+datos.databd[index_music].subtitle;
    portada.src=datos.databd[index_music].portada;
    title.innerHTML=datos.databd[index_music].title;
    subtitle.innerHTML=datos.databd[index_music].subtitle;
    player.src=datos.databd[index_music].music;
    console.log(index_music);

    document.querySelector(".controler_right").style.visibility="visible";
    }else{
        document.querySelector(".controler_left").style.visibility="hidden";
        index_music++;
    }
   
}


function nextMusic() {
    
    if (index_music<=6) {
        document.title=datos.databd[index_music].title+" - "+datos.databd[index_music].subtitle;
        portada.src=datos.databd[index_music].portada;
        title.innerHTML=datos.databd[index_music].title;
        subtitle.innerHTML=datos.databd[index_music].subtitle;
        player.src=datos.databd[index_music].music;
        console.log(datos.databd[index_music].title);
        index_music++; 
        document.querySelector(".controler_left").style.visibility="visible";
    }else{
        document.querySelector(".controler_right").style.visibility="hidden";
    }
}

// http://v2.malitos.net/descargar-mp3/beat-it