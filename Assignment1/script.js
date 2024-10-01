function calculateResult() {
    // Get the values of the user's responses
    const q1 = document.querySelector('input[name="q1"]:checked')?.value;
    const q2 = document.querySelector('input[name="q2"]:checked')?.value;
    const q3 = document.querySelector('input[name="q3"]:checked')?.value;
    const q4 = document.querySelector('input[name="q4"]:checked')?.value;
    const q5 = document.querySelector('input[name="q5"]:checked')?.value;

    if (!q1 || !q2 || !q3 || !q4 || !q5) {
        alert('Please answer all questions.');
        return;
    }

    // Calculate the overall score
    const scoreMap = { low: 1, medium: 2, high: 3 };
    const totalScore = scoreMap[q1] + scoreMap[q2] + scoreMap[q3] + scoreMap[q4] + scoreMap[q5];

    let resultText = "";
    let resources = "";

    // Determine result based on score
    if (totalScore <= 5) {
        resultText = "Your mental health seems stable!";
        resources = `
            <ul>
                <li><a href="https://www.mentalhealth.gov/get-help" target="_blank">General Mental Health Resources</a></li>
                <li><a href="https://www.headspace.com/" target="_blank">Headspace - Meditation and Mindfulness</a></li>
                <li><a href="https://www.mind.org.uk/" target="_blank">Mind - Mental Health Support</a></li>
            </ul>
        `;
    } else if (totalScore <= 10) {
        resultText = "You may be experiencing moderate stress, anxiety, or emotional distress.";
        resources = `
            <ul>
                <li><a href="https://www.betterhelp.com/" target="_blank">BetterHelp - Online Therapy</a></li>
                <li><a href="https://www.calm.com/" target="_blank">Calm - Meditation and Sleep Support</a></li>
                <li><a href="https://www.psychologytoday.com/" target="_blank">Psychology Today - Find a Therapist</a></li>
            </ul>
        `;
    } else {
        resultText = "You may be experiencing significant levels of stress, anxiety, or depression. Consider reaching out for professional help.";
        resources = `
            <ul>
                <li><a href="https://suicidepreventionlifeline.org/" target="_blank">National Suicide Prevention Lifeline</a></li>
                <li><a href="https://www.talkspace.com/" target="_blank">Talkspace - Online Therapy</a></li>
                <li><a href="https://www.samhsa.gov/find-help/national-helpline" target="_blank">SAMHSA National Helpline</a></li>
            </ul>
        `;
    }

    // Display the result
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<h3>${resultText}</h3><p>Here are some resources that may help you:</p>${resources}`;
}
