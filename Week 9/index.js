//this array holds the list of sound bite div ids
var sound_bite_list = ["Baby_audio", "Camera_audio", "Dj_audio", "Horse_audio", "Programmer_audio", "Tiger_audio"];

//this variable will hold the randomly chosen div id from the list
var rndm_sound = "";

document.addEventListener('DOMContentLoaded', function () 
{
    /*Play button handler
      when clicked, a random sound will be played */
    document.getElementById("Play_button").addEventListener('click', function () 
    {
        //get a random div id from the sound bite list
        rndm_sound = sound_bite_list[Math.floor(Math.random() * sound_bite_list.length)];
        console.log(rndm_sound);

        //call the play audio function passing in the div id
        playAudio(rndm_sound);
    });

    document.getElementById("Baby_button").addEventListener('click', function () 
    {
        check("Baby_audio");
    });

    document.getElementById("Camera_button").addEventListener('click', function () 
    {
        check("Camera_audio");
    });

    document.getElementById("Dj_button").addEventListener('click', function () 
    {
        check("Dj_audio");
    });

    document.getElementById("Horse_button").addEventListener('click', function () 
    {
        check("Horse_audio");
    });

    document.getElementById("Programmer_button").addEventListener('click', function () 
    {
        check("Programmer_audio");
    });

    document.getElementById("Tiger_button").addEventListener('click', function () 
    {
        check("Tiger_audio");
    });
});

//this function uses an id to play the corresponding sound bite
function playAudio(sound_bite_id) 
{
    //get the audio element from the DOM and play it
    sound_bite = document.getElementById(sound_bite_id);
    sound_bite.play();
}

function pauseAudio(sound_bite_id) 
{
    //get the audio element from the DOM and pause it
    sound_bite = document.getElementById(sound_bite_id);
    sound_bite.pause();
}

//this function is used to check if the users choice is correct
function check(user_choice) 
{
    if (rndm_sound == user_choice) 
    {
        document.getElementById("Result").innerHTML = "That's correct!";
    }
    else 
    {
        document.getElementById("Result").innerHTML = "Sorry try again";
    }
}



