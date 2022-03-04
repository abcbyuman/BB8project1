// - Reset Button

//  "Remember the following grade associations:
// A = 4
// A- = 3.7
// B+ = 3.4
// B = 3
// B- = 2.7
// C+ = 2.4
// C = 2
// C- = 1.7
// D+ = 1.4
// D = 1
// D- = .7
// E = 0
// When the page is first displayed (or loaded) or if the user clicks on the RESET button, the IS201 drop down list should have focus.

// When the user clicks on the RESET button you should call a JavaScript function called clearCircle()
// and clear the circle (style.display = "none" and style.fill = "none" for the element),
// clear the output GPA, clear the overall GPA and the last 30 credits GPA, reset all drop downs to A's
// and the checkboxes to false (empty), and then set focus to the IS202 drop down.

//Focus on the IS201 dropdown
function focus201() {
    document.getElementById("IS201grade").focus();
}


function resetAll()
{
    // focusing on IS201
    document.getElementById("IS201grade").focus();

    // destroying the circle
    document.getElementById("Circle").style.display = "none";
    document.getElementById("Circle").style.fill = "none";
    
    // clear the output GPA
    sOutputGPA = "";

    // clear the overall GPA
    document.getElementById("OverallGPA").value = "";

    // clear the last 30 credits GPA
    document.getElementById("Last30CreditsGPA").value = "";

    // resetting all the dropdowns to A
    document.getElementById("IS201grade").options.reset;
    document.getElementById("IS303_CS142").options.reset;
    document.getElementById("ACC200").options.reset;

    document.getElementById("IS201grade").value = "";
    document.getElementById("IS303_CS142").value = "";
    document.getElementById("ACC200").value = "";

    // resetting all the checkboxes to false (empty)

    // this should happen when you press the reset button

    // focusing on IS201
    document.getElementById("IS201grade").focus();
}



