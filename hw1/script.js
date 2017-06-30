alert ("Hello Friend!")
res1 = confirm("Do you wanna play?")
if (res1){
    var user_details = []
    user_details[0] = prompt("Please enter your name", "Liza")
    user_details[1] = prompt("Please enter your name", "More")
    user_details[2] = prompt("Please enter your age", "4")

    var correct_answers = 0
    var questions =[]
    var points = 0

    questions[0] = prompt("What is the largest city in China?", "Beijing")
    questions[1] = prompt('What is the most developed city in Italy?', "Milan")
    questions[2] = prompt('What is the second most populous country in the world?', "Bangladesh")
    questions[3] = prompt('What is the secondlargest country by land in the world?', "USA")
    questions[4] = prompt('What is the smallest continent in the world?', "Australia")

    var answers =[]
    answers[0] = "shanghai"
    answers[1] = "milan"
    answers[2] = "india"
    answers[3] = "canada"
    answers[4] = "australia"

    for (i = 0; i < questions.length; i++) {
        if (questions[i].toLowerCase() == answers[i]){
            correct_answers++
            points = points + Math.pow((i+1)*2, 2)
        }
    }

    alert("First Name: " + user_details[0] + " Last Name: " + user_details[1] + " Age: " + user_details[2] +
            "   Correct Answers: " + correct_answers +
            "   Points: " + points)

}
else{
    alert ("Game Over!")
}