document.addEventListener("DOMContentLoaded", function() {
    // Handle Personality Test Form Submission
    const personalityForm = document.getElementById('personality-form');
    if (personalityForm) {
        personalityForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const answers = {
                q1: document.querySelector('input[name="q1"]:checked')?.value,
                q2: document.querySelector('input[name="q2"]:checked')?.value,
                q3: document.querySelector('input[name="q3"]:checked')?.value
            };
            
            if (validateForm(answers)) {
                localStorage.setItem('personalityAnswers', JSON.stringify(answers));
                window.location.href = 'result_page.html?test=personality';
            } else {
                alert('Please answer all questions!');
            }
        });
    }

    // Handle Compatibility Test Form Submission
    const compatibilityForm = document.getElementById('compatibility-form');
    if (compatibilityForm) {
        compatibilityForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const answers = {
                q1: document.querySelector('input[name="q1"]:checked')?.value,
                q2: document.querySelector('input[name="q2"]:checked')?.value,
                q3: document.querySelector('input[name="q3"]:checked')?.value
            };

            if (validateForm(answers)) {
                localStorage.setItem('compatibilityAnswers', JSON.stringify(answers));
                window.location.href = 'result_page.html?test=compatibility';
            } else {
                alert('Please answer all questions!');
            }
        });
    }

    // Validate the form answers
    function validateForm(answers) {
        return Object.values(answers).every(value => value !== undefined);
    }
});
