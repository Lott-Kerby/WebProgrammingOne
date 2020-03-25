document.addEventListener("DOMContentLoaded", function(){

    
    document.getElementById("Submit").addEventListener('click', function ()
    {
        //this is the array of chek boxes
        var checkboxes = document.getElementsByName("box");
        var checkboxesChecked = [];

        //loop through the check boxes to see which are checked
        for (var i=0; i<checkboxes.length; i++) 
        {
            // And stick the checked ones onto an array...
            if (checkboxes[i].checked) 
            {
               checkboxesChecked.push(checkboxes[i]);
            }
         }

    });
    
});



    