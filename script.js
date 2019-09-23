var DoneSetsButtonsSelector = document.getElementsByClassName("done-sets")
var collapseSelector = document.getElementsByClassName("collapse")
var formSelector = document.getElementsByClassName("MaxWeightForm")
var previousWeightSelector = document.getElementsByClassName("Previousweight")
var currentWorkout = workout1
var MaxWeightFormSelector = document.getElementsByClassName("MaxWeightForm")
var workingSetsSelector = document.getElementsByClassName("workingSets")


// strings to create a card element
var stylesHtml = {
    FindMaxWeight: [
        '<div class="top-item item-content collapse"><p>',
        '</p><p class="srp"> Find Max weight </p></div><div class="middle-item item-content"><p>Find ',
        ' Reps Max</p></div><div class="max-weight item-content"><form class="weight-form MaxWeightForm"><label for="max-Weight">Max Weight: </label><input type="number" name="max-Weight"><br></form></div><hr><div class="middle-item item-content"><p class ="workingSets">working sets weight: ',
        ' lbs </p><p > ',
        ' sets / ',
        ' reps</p></div></div></div>'
    ],

    WeeklyIncreaseReps: [
        '<div class="top-item item-content collapse"><p>',
        '</p><p class="srp">',
        ' sets / ',
        ' reps</p></div></div><div class="middle-item item-content">',
        '<form class="weight-form Previousweight"><label for="previous-Weight">Weight: </label><input type="number" name="max-Weight"><br></form></div>'
    ],

    SuperSet: [
        '<div class="top-item item-content collapse"><p>',
        '   +   ',
        '</p><p class="srp">',
        ' sets </p></div>      <div class="middle-item item-content"><p>superset</p></div><hr> <div class="superset-card">',
        '</div></div>'
    ],

    ForTime: [
        '<div class="top-item item-content"><p>',
        '</p><p class="srp"> Tiempo: ',
        ' /s</p></div>'
    ],



    CompletePartial: [
        '<div class="top-item item-content "><p> ',
        '</p><p class="srp"> ',
        ' reps + ',
        ' Partials</p></div><div class="middle-item item-content"><form class="weight-form Previousweight"><label for="previous-Weight">Weight: </label><input type="number" name="max-Weight"><br></form></div>'
    ],
    Simple: [
        '<div class="top-item item-content "><p>',
        '</p><p class="srp">',
        ' sets / ',
        'reps</p></div><div class="middle-item item-content"><form class="weight-form Previousweight"><label for="previous-Weight">Weight: </label><input type="number" name="max-Weight"><br></form></div>',
    ]

}
// returns a string
function stylesStr(style, e, week) {
    var tempStr = ""
    if (style === "FindMaxWeight") {

        tempStr =
            stylesHtml.FindMaxWeight[0] +
            e.name +
            stylesHtml.FindMaxWeight[1] +
            e.reps[week] +
            stylesHtml.FindMaxWeight[2] +
            "0" +
            stylesHtml.FindMaxWeight[3] +
            e.sets[week] +
            stylesHtml.FindMaxWeight[4] +
            e.reps[week] +
            stylesHtml.FindMaxWeight[5]

        return tempStr
    }
    if (style === "WeeklyIncreaseReps") {
        tempStr =
            stylesHtml.WeeklyIncreaseReps[0] +
            e.name +
            stylesHtml.WeeklyIncreaseReps[1] +
            e.sets +
            stylesHtml.WeeklyIncreaseReps[2] +
            (e.reps + week) +
            stylesHtml.WeeklyIncreaseReps[3] +
            stylesHtml.WeeklyIncreaseReps[4]

        return tempStr
    }
    if (style === "SuperSet") {

        tempStr =

            stylesHtml.SuperSet[0] +
            e.SSexercises[0].name +
            stylesHtml.SuperSet[1] +
            e.SSexercises[1].name +
            stylesHtml.SuperSet[2] +
            e.sets +
            stylesHtml.SuperSet[3]

        for (let i = 0; i < 2; i++) {
            if (e.SSexercises[i].style === "CompletePartial") {
                tempStr += stylesHtml.CompletePartial[0] +
                    e.SSexercises[i].name +
                    stylesHtml.CompletePartial[1] +
                    e.SSexercises[i].reps +
                    stylesHtml.CompletePartial[2] +
                    e.SSexercises[i].reps +
                    stylesHtml.CompletePartial[3]
            }
            if (e.SSexercises[i].style === "ForTime") {
                tempStr += stylesHtml.ForTime[0] +
                    e.SSexercises[i].name +
                    stylesHtml.ForTime[1] +
                    (30 + (week * 5)) +
                    stylesHtml.ForTime[2]
            }
            if (e.SSexercises[i].style === "Simple") {
                tempStr += stylesHtml.Simple[0] +
                    e.SSexercises[i].name +
                    stylesHtml.Simple[1] +
                    e.SSexercises[i].sets +
                    stylesHtml.Simple[2] +
                    e.SSexercises[i].reps +
                    stylesHtml.Simple[3]


            }




            if (i === 0) {
                tempStr += "<hr>"
            }
        }
        tempStr += stylesHtml.SuperSet[4]


        return tempStr
    }
    if (style === "Simple") {
        tempStr =
            stylesHtml.Simple[0] +
            e.name +
            stylesHtml.Simple[1] +
            e.sets +
            stylesHtml.Simple[2] +
            e.reps +
            stylesHtml.Simple[3]
        return tempStr
    }
}

function loadWorkout() {
    for (let i = 0; i < currentWorkout.weeks; i++) {

        var weekCard = document.createElement("div")
        weekCard.classList.add("weekCard")
        weekCard.innerHTML = '<div class="collapse"><p class="weekP ">week ' + (i + 1) + '</p></div>'
        document.getElementById("container").appendChild(weekCard)

        // create day
        for (let j = 0; j < currentWorkout.exercises.length; j++) {


            var dayDiv = document.createElement("div")
            dayDiv.classList.add("dayCard")
            dayDiv.innerHTML = '<div class="collapse"><p class="dayP">Day ' + (j + 1) + '</p></<div>'
            weekCard.appendChild(dayDiv)


            // create exercises
            currentWorkout.exercises[j].forEach(function (element, index) {

                var test = document.createElement("div")
                test.classList.add("card")
                var style = element.style
                var exerciseHTMLStr = '<div class="item">'
                exerciseHTMLStr += stylesStr(style, element, i)


                test.innerHTML = exerciseHTMLStr
                dayDiv.appendChild(test)


            })
        }

    }
    loadWeights()
}
loadWorkout()




// toggle css button
for (let i = 0; i < DoneSetsButtonsSelector.length; i++) {
    DoneSetsButtonsSelector[i].addEventListener("click", function (e) {
        e.target.classList.toggle("completed-sets")

    })

}

// weight form save
for (let i = 0; i < MaxWeightFormSelector.length; i++) {

    MaxWeightFormSelector[i].addEventListener("change", function (e) {
        var exercise = e.target.parentNode.parentNode.parentNode.children[0].children[0].innerHTML
        var week = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.children[0].children[0].innerText

        localStorage.setItem((week + " " + exercise), e.target.value)

        e.target.parentNode.parentNode.parentNode.children[4].children[0].innerText = "working sets weight: " + Math.round((e.target.value * .8) / 5) * 5 + " lbs"

    })

}
// get weights from first week
for (let i = 0; i < previousWeightSelector.length / currentWorkout.weeks; i++) {
    previousWeightSelector[i].addEventListener("change", function (e) {
        var {
            day,
            exercise
        } = GetDayNExercise(e.target)

        localStorage.setItem((day + " " + exercise), e.target.value)
        setWeights()
    })

}
// load weigths for all days
function setWeights() {
    for (var i = 0; i < previousWeightSelector.length / currentWorkout.weeks; i++) {
        for (var j = 0; j < currentWorkout.weeks; j++) {
            var {
                day,
                exercise
            } = GetDayNExercise(previousWeightSelector[(j * 26) + i].children[1])



            previousWeightSelector[(j * 26) + i].children[1].value = localStorage.getItem(day + " " + exercise)
        }
    }
}

// helper function that returns day and exercise name
function GetDayNExercise(e) {

    if (e.parentNode.parentNode.parentNode.classList.contains("card")) {
        var exercise = e.parentNode.parentNode.parentNode.children[0].children[0].children[0].innerText;
        var day = e.parentNode.parentNode.parentNode.parentNode.children[0].children[0].innerText;
    } else if (e.parentNode.parentNode.parentNode.parentNode.classList.contains("card")) {
        var exercise = e.parentNode.parentNode.previousSibling.children[0].innerText;
        var day = e.parentNode.parentNode.parentNode.parentNode.parentNode.children[0].children[0].innerText;
    } else if (e.parentNode.parentNode.parentNode.parentNode.parentNode.classList.contains("card")) {
        var exercise = e.parentNode.parentNode.previousSibling.children[0].innerText;
        var day = e.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.children[0].children[0].innerText;
    }
    return {
        day,
        exercise
    };
}

// load max weights
function loadWeights() {
    for (let i = 0; i < MaxWeightFormSelector.length; i++) {
        var exercise = MaxWeightFormSelector[i].parentNode.parentNode.parentNode.children[0].children[0].children[0].innerHTML
        var week = MaxWeightFormSelector[i].parentNode.parentNode.parentNode.parentNode.parentNode.children[0].children[0].innerText
        var weight = localStorage.getItem(week + " " + exercise)

        MaxWeightFormSelector[i].children[1].value = weight
        MaxWeightFormSelector[i].parentNode.parentNode.children[4].children[0].innerText = "working sets weight: " + Math.round((weight * .8) / 5) * 5 + " lbs"
    }
    setWeights()

}



// collapse items
for (let i = 0; i < collapseSelector.length; i++) {
    collapseSelector[i].addEventListener("click", function (e) {

        if (e.target.classList.contains("collapse")) {
            collapseCard(e.target)
        } else if (e.target.parentNode.classList.contains("collapse")) {
            collapseCard(e.target.parentNode)
        }
    })
}

function collapseCard(e) {
    var tempSiblings = e.parentNode.children;
    for (let j = 1; j < tempSiblings.length; j++) {
        if (tempSiblings[j].style.display === "none") {
            tempSiblings[j].style.display = "block";
        } else {
            tempSiblings[j].style.display = "none";
        }
    }
}