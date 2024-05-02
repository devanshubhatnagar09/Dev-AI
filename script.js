async function handledata() {
    var input = document.getElementById('userInput').value;
    // input = ""; 
    usermessage()
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`;
    // const apiUrl = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=';
    const requestBody = {
        contents: [{
            parts: [{
                text: input
            }]
        }]
    };
    // botmessage("bot is typing")
    await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
    })
        .then(response => response.json())
        .then(data => {
            const text = data.candidates[0].content.parts[0].text;
            botmessage(text)
        })
        .catch(error => {
            console.error('Error generating story:', error);
            document.getElementById('bot').innerHTML = 'An error occurred while generating the story';
        });
}

function usermessage() {
    const input = document.getElementById('userInput').value;
    const message = document.getElementById("chatBox")
    console.log(message)
    const div = document.createElement('div')
    div.classList.add("usermessage")
    div.innerHTML =
        `
    <div class="message user-message" id="bot">${input}</div>
    `
    message.appendChild(div)
    div.style.textAlign = "right"
}
function botmessage(text) {
    const message = document.getElementById("chatBox")
    const div = document.createElement('div')
    div.innerHTML =
        `
    <div class="message bot-message" id="typing">bot is typing.</div>
    `
    message.appendChild(div)
    div.style.textAlign = "left"
    setTimeout(() => {
        const typing = document.getElementById("typing")
        typing.remove()
        const message = document.getElementById("chatBox")
        const div = document.createElement('div')
        div.innerHTML =
            `
        <div class="message bot-message" id="typing">bot is typing..</div>
        `
        message.appendChild(div)
        div.style.textAlign = "left"
    }, 500);
    setTimeout(() => {
        const typing = document.getElementById("typing")
        typing.remove()
        const message = document.getElementById("chatBox")
        const div = document.createElement('div')
        div.innerHTML =
            `
        <div class="message bot-message" id="typing">bot is typing...</div>
        `
        message.appendChild(div)
        div.style.textAlign = "left"
    }, 1000);
    setTimeout(() => {
        const typing = document.getElementById("typing")
        typing.remove()
        const message = document.getElementById("chatBox")
        const div = document.createElement('div')
        div.innerHTML =
            `
        <div class="message bot-message" id="typing">bot is typing..</div>
        `
        message.appendChild(div)
        div.style.textAlign = "left"
    }, 2000);
    setTimeout(() => {
        const typing = document.getElementById("typing")
        typing.remove()
        const message = document.getElementById("chatBox")
        const div = document.createElement('div')
        div.innerHTML =
            `
        <div class="message bot-message" id="typing">bot is typing...</div>
        `
        message.appendChild(div)
        div.style.textAlign = "left"
    }, 2500);
    setTimeout(() => {
        const typing = document.getElementById("typing")
        typing.remove()
        const message = document.getElementById("chatBox")
        const div = document.createElement('div')
        div.innerHTML =
            `
        <div class="message bot-message" id="bot">
        ${text}
        </div>
        `
        message.appendChild(div)
        div.style.textAlign = "left"
    }, 3000);
}