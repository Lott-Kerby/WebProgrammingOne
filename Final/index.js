document.addEventListener("DOMContentLoaded", function(){

    //this is the handler for the submit button
    //when clicked, the page will show links to sites helpful to the user
    document.getElementById("Submit").addEventListener('click', function ()
    {
        //this is the array of chek boxes
        var checkboxes = document.getElementsByName("checkbox");
        var checkboxesChecked = [];
        
        //loop through the check boxes to see which are checked
        for (var i=0; i<checkboxes.length; i++) 
        {
            // the checked ones onto an array...
            if (checkboxes[i].checked) 
            {
               checkboxesChecked.push(checkboxes[i]);
            }
        }

        //loop through the checked boxes and show the resources wanted
        for (var i=0; i<checkboxesChecked.length; i++) 
        {
            var resource = checkboxesChecked[i].value;
            document.getElementById(resource).style.display = "block";
        }

    });
    
});



    