document.addEventListener("DOMContentLoaded", function(){

    
    document.getElementById("Submit").addEventListener('click', function ()
    {
        var checkboxes = document.getElementsByClassName("form-check");
        for (var i=0; i<checkboxes.length; i++) 
        {
            
            console.log(checkboxes[i].checked);
            // And stick the checked ones onto an array...
            if (checkboxes[i].value) {
                console.log(checkboxes[i]);
               //checkboxesChecked.push(checkboxes[i]);
            }
         }

    });
    
});



    