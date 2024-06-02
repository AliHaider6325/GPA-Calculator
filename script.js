// Page 02
let input = document.getElementById("Select");
let label = document.createElement("h4");
let Courses = document.getElementsByClassName("Courses")
let c = document.querySelector(".Calculator");
SubBtn = document.createElement("button");
SubBtn.innerHTML = "Calculate";
SubBtn.classList.add("CalculateBtn")
mainReset = document.getElementsByClassName("MainF")
mainReset1 = document.getElementById("MainT");
let inputs;
let selectedOption;
let TotalCreditHour;
let TotalCreditHours = 0;
let QualityPoints = 0;
Changing();
function Changing() {
    input.addEventListener("change", function () {
        selectedOption = parseInt(input.value);
        for (let i = 1; i <= 12; i++) {
            if (selectedOption === i) {
                input.style.display = "none";
                c.appendChild(SubBtn)
                for (let j = 0; j < 3; j++) {
                    let course = Courses[j];
                    for (let k = 0; k < i; k++) {
                        inputs = document.createElement("input");
                        course.appendChild(inputs);
                    }
                }
            }
        }
        CreditHour();
    });
}

function CreditHour() {
    SubBtn.addEventListener("click", function () {
        TotalCreditHour = Courses[1].getElementsByTagName("input");
        for (let l = 0; l < selectedOption; l++) {
            if (TotalCreditHour[l].value <= 4 && TotalCreditHour[l].value.trim() !== "") {
                TotalCreditHours += parseInt(TotalCreditHour[l].value);
            }
            else {
                alert("Please Enter the Valid or Credit Hours between 1 to 4")
                validd = false;
                break;
            }
        }
        if (validd) {
            Grades();
        }
        else {
            validd = true;
        }

    })
}
function Grades() {
    let TotalGrade = Courses[2].getElementsByTagName("input");
    for (let l = 0; l < selectedOption; l++) {
        if (TotalGrade[l].value === 'A' || TotalGrade[l].value === 'B' || TotalGrade[l].value === 'C' || TotalGrade[l].value === 'D' || TotalGrade[l].value === 'F') {
            if (TotalGrade[l].value === 'A') {
                QualityPoints += parseInt(TotalCreditHour[l].value) * 4;
            }
            else if (TotalGrade[l].value === 'B') {
                QualityPoints += parseInt(TotalCreditHour[l].value) * 3;
            }
            else if (TotalGrade[l].value === 'C') {
                QualityPoints += parseInt(TotalCreditHour[l].value) * 2;
            }
            else if (TotalGrade[l].value === 'D') {
                QualityPoints += parseInt(TotalCreditHour[l].value) * 1;
            }
            else if (TotalGrade[l].value === 'F') {
                QualityPoints += 0;
            }
        }
        else {
            alert("Please Enter valid or Capital Grades")
            valid = false;
            break;
        }
    }
    if (valid) {
        FinalCalculation();
    }
    else {
        valid = true;
    }
}

//WebPage 03
let cong = document.getElementsByClassName("Cong")
let CreditHourtxt = document.querySelector("#CreditHour");
let Qpointstxt = document.querySelector("#Qpoints");
let Gpatxt = document.querySelector("#Gpa");
let Remark = document.querySelector("#Remark");
let s;
let GPA = 0;
let valid = true;
let validd = true;
function FinalCalculation() {
    for (let i = 0; i < mainReset.length; i++) {
        mainReset[i].style.display = "none";
    }
    GPA = QualityPoints / TotalCreditHours
    CreditHourtxt.innerHTML = `Total Credit Hour: ${TotalCreditHours}`;
    Qpointstxt.innerHTML = `Total Quality Points: ${QualityPoints}`;
    Gpatxt.innerHTML = `Your GPA: ${GPA.toFixed(2)}`;

    if (GPA >= 3.5 && GPA <= 4) {
        Remark.innerHTML = "Remarks: Your GPA is outstanding! Well done!";
        Remark.style.color = "green";
    } else if (GPA >= 3 && GPA < 3.5) {
        Remark.innerHTML = "Remarks: Congratulations! You have an excellent GPA.";
        Remark.style.color = "green";
    } else if (GPA >= 2 && GPA < 3) {
        Remark.innerHTML = "Remarks: Your GPA is good. Keep up the good work!";
        Remark.style.color = "#5C00FF";
    } else {
        Remark.innerHTML = "Remarks: Your GPA is below average. Consider improving your grades.";
        Remark.style.color = "red";
    }
}