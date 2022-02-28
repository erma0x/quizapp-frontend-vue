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

export async function post(url,body) {
    let response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(body),
            headers: { "content-type": "application/json" },
        });
    let res = await response.json();
    return res
}

export default async function getNewQuiz() {
    let quizzes = await get(data.api_get_quiz);
    return quizzes
}

export async function getScore(quizAnswers) {
    // quizAnswers {id-quiz : number-answer} => score %
    let quizScore = await post(data.api_post_quiz,quizAnswers);
    return quizScore;
}