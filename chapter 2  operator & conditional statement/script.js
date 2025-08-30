function calculateGrade() {
    let score = document.getElementById("scoreInput").value;
    let grade = "";
    let remark = "";
    let resultBox = document.getElementById("resultBox");
    let gradeText = document.getElementById("grade");
    let remarkText = document.getElementById("remark");

    // Validation for empty or invalid input
    if (score === "" || score < 0 || score > 100) {
        alert("⚠️ Please enter a valid score between 0 and 100!");
        return;
    }

    // Calculate Grade
    if (score >= 90 && score <= 100) {
        grade = "A";
        remark = "🌟 Excellent! Keep it up!";
        resultBox.className = "result-box success";
    } 
    else if (score >= 70 && score <= 89) {
        grade = "B";
        remark = "😊 Good job! You can do even better.";
        resultBox.className = "result-box success";
    } 
    else if (score >= 60 && score <= 69) {
        grade = "C";
        remark = "🙂 Fair, but try harder next time.";
        resultBox.className = "result-box average";
    } 
    else if (score >= 50 && score <= 59) {
        grade = "D";
        remark = "⚠️ Passed, but you need improvement.";
        resultBox.className = "result-box average";
    } 
    else {
        grade = "F";
        remark = "❌ Failed. Don't give up, keep practicing!";
        resultBox.className = "result-box fail";
    }

    // Show the result
    gradeText.textContent = "Your Grade: " + grade;
    remarkText.textContent = remark;
    resultBox.style.display = "block";
}
