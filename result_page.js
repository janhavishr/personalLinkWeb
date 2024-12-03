document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const testType = urlParams.get('test');
    const resultContainer = document.getElementById('result-container');

    if (testType === 'personality') {
        const answers = JSON.parse(localStorage.getItem('personalityAnswers'));
        if (answers) {
            const personalityResult = generatePersonalityResult(answers);
            resultContainer.innerHTML = personalityResult;
        }
    } else if (testType === 'compatibility') {
        const answers = JSON.parse(localStorage.getItem('compatibilityAnswers'));
        if (answers) {
            const compatibilityResult = generateCompatibilityResult(answers);
            resultContainer.innerHTML = compatibilityResult;
        }
    }
});

function generatePersonalityResult(answers) {
    // Simple logic to process personality answers
    const { q1, q2, q3 } = answers;
    let result = "<h3>Your Personality Result</h3><ul>";
    result += `<li>Prefer working in: ${q1}</li>`;
    result += `<li>Introverted/Extroverted: ${q2}</li>`;
    result += `<li>Planning/Spontaneous: ${q3}</li>`;
    result += "</ul>";
    result += "<p>Your personality suggests you are a " + (q2 === "extroverted" ? "social and outgoing" : "reserved and thoughtful") + " person.</p>";
    return result;
}

function generateCompatibilityResult(answers) {
    // Simple logic to process compatibility answers
    const { q1, q2, q3 } = answers;
    let result = "<h3>Your Compatibility Result</h3><ul>";
    result += `<li>Independence/Closeness: ${q1}</li>`;
    result += `<li>Listener/Talker: ${q2}</li>`;
    result += `<li>Conflict Style: ${q3}</li>`;
    result += "</ul>";
    result += "<p>Your compatibility style suggests you're best suited with someone who values " + (q1 === "closeness" ? "close relationships" : "independence") + ".</p>";
    return result;
}
