# BB8project1
Repo for bb8 project 1 assignment

Austin - 
Forms


Ella - 



Mitch - 
Calc GPA Function


Wade - 



David - Reset Button



- Forms

 "On this page you will have the following inputs in the html form.

NOTE: Default the drop downs to A’s and the retake checkbox to false (empty). Do this for all of the drop downs and checkboxes.

IS 201 Intro to Management Information Systems Grade and a drop down box (with A, A-, B+, B, B-, C+, C, C-, D+, D, D-, E) and a checkbox asking if this score is a retake.
IS 303 or CS 142 Intro to Computer Programming Grade and a drop down box (with A, A-, B+, B, B-, C+, C, C-, D+, D, D-, E) and a checkbox asking if this score is a retake.
ACC 200 Principles of Accounting Grade and a drop down box (with A, A-, B+, B, B-, C+, C, C-, D+, D, D-, E) and a checkbox asking if this score is a retake.
Text box to enter BYU Overall GPA
Text box to enter BYU Last 30 credits GPA
Button that says CALCULATE
Button that says RESET
Try to make the input area look very nice and clean."


- Calc GPA function

 "If the user clicks on the Calculate button, then you should call a JavaScript function called calcGPA() and calculate the GPA using the following information:

IS 201 is worth 30%

IS 303 or CS142 is worth 30%

ACC 200 is worth 5%

The overall GPA is worth 15%

The last 30 GPA credits is worth 20%"
 
 
 
- Reset function

 "Remember the following grade associations:
A = 4
A- = 3.7
B+ = 3.4
B = 3
B- = 2.7
C+ = 2.4
C = 2
C- = 1.7
D+ = 1.4
D = 1
D- = .7
E = 0
When the page is first displayed (or loaded) or if the user clicks on the RESET button, the IS201 drop down list should have focus.

When the user clicks on the RESET button you should call a JavaScript function called clearCircle() and clear the circle (style.display = "none" and style.fill = "none" for the element), clear the output GPA, clear the overall GPA and the last 30 credits GPA, reset all drop downs to A's and the checkboxes to false (empty), and then set focus to the IS202 drop down.


- Must Select An Item alert

 Make sure the user has selected a value for each of the drop down list boxes and that a value (don't worry about numeric vs non-numeric) for the overall and last 30 credit GPAs. If they did not enter everything display an alert that says, "You must select an item in each drop down and enter a value in the GPA text boxes!" and set the focus to the IS 201 drop down list box.

- Circle Output (Final)

Then if the GPA is 3.7 or above, display a green circle.
If the GPA is 3.4 and above but less than 3.7, display a yellow circle.
Otherwise display a red circle.
This is how you can use the SVG tag to display a circle:
<svg height="100" width="100">
<circle id="myCircle" cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="green" display = "none" /></svg>
And how you can change its color:
document.getElementById("myCircle").style.display = "block";                                         
document.getElementById("myCircle").style.fill="green";
Then display the calculated GPA on the web page somewhere.
