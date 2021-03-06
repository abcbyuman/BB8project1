// Make sure the user has selected a value for each of the drop down list boxes and that a value
// (don't worry about numeric vs non-numeric) for the overall and last 30 credit GPAs. If they did not
// enter everything display an alert that says, "You must select an item in each
// drop down and enter a value in the GPA text boxes!" and set the focus to the IS 201 drop down list box.

// Alert to make sure all fields are filled
function checkInfoFields() {
  if (
    // check if fields don't have a value
    document.getElementById("overallGPA").value == "" ||
    document.getElementById("last30GPA").value == ""
  ) {
    alert(
      "You must select an item in each drop down and enter a value in the GPA text boxes!"
    );

    // display nothing in the calculated GPA box
    document.getElementById("calcGPA").style.display = "none";

    // autofocus to the IS201 list
    document.getElementById("IS201Grade").focus();

    // display nothing in the circle box
    document.getElementById("myCircle").style.display = "none";
    document.getElementById("myCircle").style.fill = "none";
  }
}
