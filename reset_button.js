// When the page is first displayed (or loaded) or if the user clicks on the RESET button, the IS201 drop down list should have focus.

// When the user clicks on the RESET button you should call a JavaScript function called clearCircle()
// and clear the circle (style.display = "none" and style.fill = "none" for the element),
// clear the output GPA, clear the overall GPA and the last 30 credits GPA, reset all drop downs to A's
// and the checkboxes to false (empty), and then set focus to the IS202 drop down.

// Function to set focus on the IS201 dropdown
function focus201()
{
    document.getElementById("IS201Grade").focus();
}


// Function to clear the circle
function clearCircle()
{
    document.getElementById("circle").style.display = "none";
    document.getElementById("circle").style.fill = "none";
}


function resetAll()
{
    // focusing on IS201
    focus201();

    // clearing the circle
    clearCircle();
    
    // clear the overall GPA
    document.getElementById("OverallGPA").value = "";

    // clear the last 30 credits GPA
    document.getElementById("Last30CreditsGPA").value = "";

    // clear the output GPA
    sOutputGPA = "";

    // focusing on IS201
    focus201();
}



