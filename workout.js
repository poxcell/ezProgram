var workout1 = {
    weeks: 4,
    days: 0,


    exercises: [
        [{
                style: "FindMaxWeight",
                name: "Bench Press",
                weight: 0,
                reps: [5, 3, 1, 5],
                sets: [3, 3, 3, 3]
            },
            {
                style: "WeeklyIncreaseReps",
                name: "Arnold Press",
                weight: 0,
                reps: 8,
                sets: 5
            },
            {
                style: "SuperSet",
                sets: 3,
                SSexercises: [{
                        style: "CompletePartial",
                        name: "Lateral Shoulder",
                        weight: 0,
                        reps: 15,

                    },
                    {
                        style: "CompletePartial",
                        name: "Front Raise",
                        weight: 0,
                        reps: 8,
                    }
                ]
            },
            {
                style: "SuperSet",
                sets: 3,
                SSexercises: [{
                        style: "ForTime",
                        name: "C Curve",
                        time: 0,
                        reps: "time /"
                    },
                    {
                        style: "Simple",
                        name: "Face Pull",
                        weight: 0,
                        reps: 15,
                        sets: 3
                    }
                ]
            }

        ],
        [{
                style: "FindMaxWeight",
                name: "Squat",
                weight: 0,
                reps: [5, 3, 1, 5],
                sets: [3, 3, 3, 3]
            },
            {
                style: "FindMaxWeight",
                name: "Skull Crusher",
                weight: 0,
                reps: [9, 6, 3, 9],
                sets: [3, 3, 3, 3]
            },
            {
                style: "SuperSet",
                sets: 3,
                SSexercises: [{
                        style: "CompletePartial",
                        name: "Pull Down",
                        weight: 0,
                        reps: 8,

                    },
                    {
                        style: "CompletePartial",
                        name: "Tricep Rope",
                        weight: 0,
                        reps: 8,
                    }
                ]
            },
            {
                style: "SuperSet",
                sets: 3,
                SSexercises: [{
                        style: "Simple",
                        name: "Side Bends",
                        time: 0,
                        reps: 15,
                        sets: 3

                    },
                    {
                        style: "CompletePartial",
                        name: "Pull over Lats",
                        weight: 0,
                        reps: 10,
                    }
                ]
            }
        ],
        [
            {
                style: "Simple",
                name: "lagartija",
                weight: 0,
                reps: "Max",
                sets: 5
            },
            {
                style: "Simple",
                name: "Lsit",
                weight: 0,
                reps: "Max",
                sets: 5
            },
            {
                style: "FindMaxWeight",
                name: "Predicador",
                weight: 0,
                reps: [9, 6, 3, 9],
                sets: [3, 3, 3, 3]
            },
            {
                style: "SuperSet",
                sets: 3,
                SSexercises: [{
                        style: "WeeklyIncreaseRepsSS",
                        name: "Bicep Concentrado",
                        weight: 0,
                        reps: 8,
                        sets: 3,
                    },
                    {
                        style: "WeeklyIncreaseRepsSS",
                        name: "SL Deadlift",
                        weight: 0,
                        reps: 5,
                        sets: 3,
                    }
                ]
            },
            {
                style: "SuperSet",
                sets: 3,
                SSexercises: [
                    
                    {
                        style: "ForTime",
                        name: "hollow hold",
                        weight: 0,
                        reps: "Time /"
                    },
                    {
                        style: "Simple",
                        name: "GHD",
                        time: 0,
                        reps: "10",
                        sets: 3
                    }
                ]
            }
        ],
        [
            {
                style: "Simple",
                name: "Pull Up",
                weight: 0,
                reps: "Max",
                sets: 5
            },
            {
                style: "Simple",
                name: "Negative Pull Up",
                weight: 0,
                reps: "Max",
                sets: 5
            },
            {
                style: "FindMaxWeight",
                name: "single Arm Bench Press",
                weight: 0,
                reps: [9, 6, 3, 9],
                sets: [3, 3, 3, 3]
            },
            {
                style: "SuperSet",
                sets: 5,
                SSexercises: [{
                        style: "CompletePartial",
                        name: "tricep pushDown",
                        weight: 0,
                        reps: 8,
                    },
                    {
                        style: "CompletePartial",
                        name: "W Raise",
                        weight: 0,
                        reps: 15,
                    }
                ]
            },
            {
                style: "SuperSet",
                sets: 3,
                SSexercises: [{
                        style: "Simple",
                        name: "Weighted Crunch",
                        reps: "15",
                        sets:3
                    },
                    {
                        style: "Simple",
                        name: "overhead tricep",
                        weight: 0,
                        reps: 15,
                        sets: 3
                    }
                ]
            }
        ],
        [
            {
                style: "FindMaxWeight",
                name: "Single Arm Press",
                weight: 0,
                reps: [5, 3, 1, 5],
                sets: [3, 3, 3, 3]
            },

            {
                style: "WeeklyIncreaseReps",
                name: "Single Leg Squat",
                weight: 0,
                reps: 5,
                sets: 5
            }, 
            {
                style: "SuperSet",
                sets: 3,
                SSexercises: [{
                        style: "CompletePartial",
                        name: "hack Squat",
                        time: 0,
                        reps: 8
                    },
                    {
                        style: "CompletePartial",
                        name: "Chest Fly",
                        weight: 0,
                        reps: 10,
                    }
                ]
            },
            {
                style: "SuperSet",
                sets: 3,
                SSexercises: [{
                        style: "ForTime",
                        name: " lateral plank",
                        time: 0,
                        reps: "time /"
                    },
                    {
                        style: "CompletePartial",
                        name: "Hammer Curl",
                        weight: 0,
                        reps: 10,
                    }
                ]
            }
        ],
        [
            {
                style: "FindMaxWeight",
                name: "Deadlift",
                weight: 0,
                reps: [5, 3, 1, 5],
                sets: [3, 3, 3, 3]
            },

            {
                style: "SuperSet",
                sets: 3,
                SSexercises: [{
                        style: "CompletePartial",
                        name: "Bicep Machine",
                        weight: 0,
                        reps: 10,
                    },
                    {
                        style: "CompletePartial",
                        name: "Hamstring Curl",
                        weight: 0,
                        reps: 8,
                    }
                ]
            }, 
            {
                style: "FindMaxWeight",
                name: "Row",
                weight: 0,
                reps: [9, 6, 3, 9],
                sets: [3, 3, 3, 3]
            },
            {
                style: "SuperSet",
                sets: 3,
                SSexercises: [{
                        style: "Simple",
                        name: "hanged leg raise",
                        time: 0,
                        reps: 15,
                        sets: 3
                    },
                    {
                        style: "CompletePartial",
                        name: "Hammer Curl",
                        weight: 0,
                        reps: 10,
                    }
                ]
            }
        ]
    ]

}