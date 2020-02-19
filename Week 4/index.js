//user's rock paper scissors choice
var user_choice = null;

//user's score
var user_score = 0;

//system's rock ppaer scissors choice
var system_choice = null;

//system's score
var system_score = 0;

//array to pull random choice from
var rps = ["rock", "paper", "scissors"];

document.addEventListener('DOMContentLoaded', function()
{
    /*Rock button handler*/
    document.getElementById("Rock").addEventListener('click', function ()
    {
        user_choice = "rock";
        system_choice = rps[Math.floor(Math.random() * rps.length)]
        result = run_rps(user_choice,system_choice);
        show_choices(user_choice, system_choice);
        calculate_score(result);
    });

    /*Paper button handler*/
    document.getElementById("Paper").addEventListener('click', function ()
    {
        user_choice = "paper";
        system_choice = rps[Math.floor(Math.random() * rps.length)]
        result = run_rps(user_choice,system_choice);
        show_choices(user_choice, system_choice);
        calculate_score(result);
    });

    /*Scissors button handler*/
    document.getElementById("Scissors").addEventListener('click', function ()
    {
        user_choice = "scissors";
        system_choice = rps[Math.floor(Math.random() * rps.length)]
        result = run_rps(user_choice,system_choice);
        show_choices(user_choice, system_choice);
        calculate_score(result);
    }); 

    /*About me button handler */
    document.getElementById("ABT_Button").addEventListener('click', function ()
    {
        document.getElementById("About_me_view").style.display = "block";
        document.getElementById("Travel_list_view").style.display = "none";
        document.getElementById("RPS_view").style.display = "none";
    });

    /*Travel list button handler */
    document.getElementById("TVL_Button").addEventListener('click', function ()
    {
        document.getElementById("About_me_view").style.display = "none";
        document.getElementById("Travel_list_view").style.display = "block";
        document.getElementById("RPS_view").style.display = "none";
        console.log("tvl");
    });

    /*Rock paper scissors button handler */
    document.getElementById("RPS_Button").addEventListener('click', function ()
    {
        document.getElementById("About_me_view").style.display = "none";
        document.getElementById("Travel_list_view").style.display = "none";
        document.getElementById("RPS_view").style.display = "block";
    });

});

/*determines result of game */
function run_rps(choice1,choice2)
{
    if(choice1===choice2){
        return "tie";
    }
    if(choice1==="rock"){
        if(choice2==="scissors"){
            return "user";
        }
        else{
            return "system";
        }
    }
    if(choice1==="paper"){
        if(choice2==="rock"){
            return "user";
        }
        else{
            return "system";
        }
    }
    if(choice1==="scissors"){
        if(choice2==="rock"){
            return "system";
        }
        else{
            return "user";
        }
    }
};

/* calculates players' scores and show them */
function calculate_score(result)
{
    if (result == "user")
    {
        user_score += 1;
    }
    else if(result == "system")
    {
        system_score += 1;
    }

    document.getElementById("User_score").innerHTML = "Your score is: " + user_score;
    document.getElementById("System_score").innerHTML = "My score is: " + system_score;
};

/*show players choices*/
function show_choices(user_choice, system_choice)
{
    document.getElementById("User_choice").innerHTML = "Your choice is: " + user_choice;
    document.getElementById("System_choice").innerHTML = "My choice is: " + system_choice;
};

