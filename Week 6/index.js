/*This object stores the title, codes and corresponding descriptions for the first standard */
var standard_1 = 
{
    title: "Mathematics_Florida_Standards" ,
    MAFS4OA11:"Interpret a multiplication equation as a comparison, e.g., interpret 35 = 5 × 7 as a statement that 35 is 5 times as many as 7 and 7 times as many as 5. Represent verbal statements of multiplicative comparisons as multiplication equations." ,
    MAFS4OA12:"Multiply or divide to solve word problems involving multiplicative comparison, e.g., by using drawings and equations with a symbol for the unknown number to represent the problem, distinguishing multiplicative comparison from additive comparison." ,
    MAFS4OA13:"Solve multistep word problems posed with whole numbers and having wholenumber answers using the four operations, including problems in which remainders must be interpreted. Represent these problems using equations with a letter standing for the unknown quantity. Assess the reasonableness of answers using mental computation and estimation strategies including rounding." ,
    MAFS4OA1a:"Determine whether an equation is true or false by using comparative relational thinking. For example, without adding 60 and 24, determine whether the equation 60 + 24 = 57 + 27 is true or false." ,
    MAFS4OA1b:"Determine the unknown whole number in an equation relating four whole numbers using comparative relational thinking. For example, solve 76 + 9 = n + 5 for n by arguing that nine is four more than five, so the unknown number must be four greater than 76."
};

/*This object stores the title, codes and corresponding descriptions for the second standard */
var standard_2 = 
{
    title: "Science_Next_Generation" ,
    SC912E61:"Describe and differentiate the layers of Earth and the interactions among them." ,
    SC912E62:"Connect surface features to surface processes that are responsible for their formation." ,
    SC912L1412:"Describe the anatomy and histology of bone tissue." ,
    SC912L1413:"Distinguish between bones of the axial skeleton and the appendicular skeleton." ,
    SC912L1419:"Explain the physiology of skeletal muscle."
};

/*This is a simple list of the codes for standard 1 used to get the DOM elements later*/
var standard_1_codes = ["MAFS4OA11","MAFS4OA12","MAFS4OA13","MAFS4OA1a","MAFS4OA1b"];

/*This is a simple list of the codes for standard 2 used to get the DOM elements later*/
var standard_2_codes = ["SC912E61","SC912E62","SC912L1412","SC912L1413","SC912L1419"];

/*This fuction runs as soon as the DOM has been loaded and is ready */
document.addEventListener("DOMContentLoaded", function(){

/* Once the DOM is loaded, create a list of elements where the code descriptions are supposed to go*/
standards_element_list1 = document.getElementById(standard_1.title).getElementsByClassName("col-sm-9");
standards_element_list2 = document.getElementById(standard_2.title).getElementsByClassName("col-sm-9");

/*This loop gets each standard's codes in the html and populates elements with the corresponding descriptiions */
for (let step = 0; step < standards_element_list1.length; step++)
{
    /*This means: "get me the code and its description area in HTML, get that code from the list of codes above, 
    using that code, get the actual description from the objects defined above, 
    then put that description into the HTML element where its supposed to go" */
    standards_element_list1[step].innerHTML = standard_1[standard_1_codes[step]];
    standards_element_list2[step].innerHTML = standard_2[standard_2_codes[step]];
}


});

