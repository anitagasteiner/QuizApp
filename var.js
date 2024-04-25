questions = [
    {
        "question": "Warum sind so wenige Erfindungen von Frauen bekannt?",
        "answer1": "Weil Frauen nicht viel erfunden haben.",
        "answer2": "Weil Frauen bis vor wenigen Jahrzehnten kein Patent anmelden durften und ihre Ideen daher unter dem Namen eines Mannes einreichen mussten.",
        "answer3": "Weil die meisten Frauen möchten, dass ihre Ideen geheim bleiben.",
        "answer4": "Weil Erfindungen von Frauen nicht funktionieren.",
        "rightAnswer": 2
    },
    {
        "question": "Von wem wurde die Kreissäge erfunden?",
        "answer1": "Walter Baker (1826)",
        "answer2": "Hermine Granger (2001)",
        "answer3": "Tabitha Babbitt (1813)",
        "answer4": "Harry Potter (1998)",
        "rightAnswer": 3
    },
    {
        "question": "Wann wurde der Geschirrspüler erfunden?",
        "answer1": "1956 von Heinz Wintermiller",
        "answer2": "1872 von Josephine Cochrane",
        "answer3": "1959 von Yoko Ono",
        "answer4": "1981 von Linda McCartney",
        "rightAnswer": 2
    },
    {
        "question": "Von wem stammt die Einteilung der Wolken in Cumulus, Stratus, Cirrus und Nimbus?",
        "answer1": "Christa Kummer",
        "answer2": "Kevin Hebenstreit",
        "answer3": "Luke Howard",
        "answer4": "Ingeborg Auer",
        "rightAnswer": 3
    },
    {
        "question": "Wer hat die Autoheizung erfunden?",
        "answer1": "Barbara Streisand (1994)",
        "answer2": "Henry Ford (1929)",
        "answer3": "Herbert Grönemeyer (1984)",
        "answer4": "Margaret Wilcox (1893)",
        "rightAnswer": 4
    },
    {
        "question": "Wann wurde der Raketentreibstoff Hydyne, der erste Flüssigtreibstoff, erfunden?",
        "answer1": "1957 von Mary Sherman Morgan",
        "answer2": "1959 von Juri Alexejewitsch Gagarin",
        "answer3": "1951 von Laika Pasova",
        "answer4": "1960 von Walentina Wladimirowna Tereschkowa",
        "rightAnswer": 1
    }
];

let currentQuestion = 0;

let rightAnswers = 0;

let audioSuccess = new Audio('audio/yes.wav');

let audioFail = new Audio('audio/oh-no.wav');