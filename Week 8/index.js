document.addEventListener("DOMContentLoaded", function(){

    
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
               console.log(checkboxesChecked);
            }
        }

        //loop through the checked boxes to show the resources wanted
        for (var i=0; i<checkboxesChecked.length; i++) 
        {
            var resource_id = checkboxesChecked[i].id;
            
            console.log("checked box " + checkboxesChecked[i].id);
            document.getElementById(resource_id).style.display = "block";
        }

    });
    
});



    