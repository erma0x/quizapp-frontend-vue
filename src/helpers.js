
let data

export async function getConfig() {
    let response = await fetch("./config.json", {
        method: "GET",
    });
    let res = await response.json();
    return res
}

getConfig().then( res => data=res)


export async function get(url) {
    let response = await fetch(url, {
        method: "GET",
    });
    let res = await response.json();
    return res
}


export async function post(url) {
    let response = await fetch(url, {
        method: "POST",
        body: {},
        headers: {}
    });
    let res = await response.json();
    return res
}

export async function getNewQuiz() {
    let response = await fetch(data.api_get_quiz, {
        method: "GET",
    });
    let quizzes = await response.json();
    return quizzes
}

export async function getScore(quizAnswers) {
    // quizAnswers {id-quiz : number-answer} => score %
    let response = await fetch(data.api_post_quiz, {
        method: "POST",
        body: JSON.stringify(quizAnswers),
        headers: { "content-type": "application/json" },
    });
    let quizScore = await response.json();
    return quizScore;
}