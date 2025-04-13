// API Configuration
const API_CONFIG = {
    HUGGING_FACE_API_KEY: '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', // Get this from https://huggingface.co/settings/tokens
    MODEL: 'mistralai/Mistral-7B-Instruct-v0.1', // A powerful free model
    API_URL: 'https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.1'
};

// DOM Elements
const chatMessages = document.getElementById('chat-messages');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');
const searchButton = document.getElementById('search-button');
const citeButton = document.getElementById('cite-button');
const studyButton = document.getElementById('study-button');

// State
let currentMode = 'chat'; // 'chat', 'search', 'cite', or 'study'
let isTyping = false;

// Add initial welcome message
addMessage('Hello! I\'m your AI assistant. How can I help you today?', 'ai');

// Event Listeners
sendButton.addEventListener('click', handleSendMessage);
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleSendMessage();
    }
});

searchButton.addEventListener('click', () => setMode('search'));
citeButton.addEventListener('click', () => setMode('cite'));
studyButton.addEventListener('click', () => setMode('study'));

// Functions
function setMode(mode) {
    currentMode = mode;
    const modeMessages = {
        search: '🔍 Type what you want to search for...',
        cite: '📚 Type the source you want to cite...',
        study: '📝 Type the topic you want to study...'
    };
    userInput.placeholder = modeMessages[mode];
    addMessage(`Mode set to: ${mode}`, 'system');
}

function showTypingIndicator() {
    if (!isTyping) {
        isTyping = true;
        const typingDiv = document.createElement('div');
        typingDiv.id = 'typing-indicator';
        typingDiv.classList.add('message', 'ai-message', 'typing');
        typingDiv.innerHTML = '<span class="typing-dots">...</span>';
        chatMessages.appendChild(typingDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
}

function hideTypingIndicator() {
    const typingIndicator = document.getElementById('typing-indicator');
    if (typingIndicator) {
        typingIndicator.remove();
    }
    isTyping = false;
}

async function handleSendMessage() {
    const message = userInput.value.trim();
    if (message) {
        addMessage(message, 'user');
        userInput.value = '';
        showTypingIndicator();
        
        try {
            let prompt = message;
            if (currentMode === 'search') {
                prompt = `Act as a helpful research assistant. Provide detailed, accurate information about: ${message}. Format your response with proper HTML tags:
- Use <ul> and <li> for lists
- Use <strong> for important terms
- Use <em> for emphasis
- Use <h3> for section headers
Include key facts, explanations, and relevant examples.`;
            } else if (currentMode === 'cite') {
                prompt = `Create a proper APA citation for: ${message}. Format your response with proper HTML tags:
- Use <div class="citation"> for the citation
- Use <ul> and <li> for any additional information
- Use <strong> for important notes
If any information is missing, explain what information is needed for a complete citation. Also provide a brief explanation of how to use this citation in a paper.`;
            } else if (currentMode === 'study') {
                prompt = `Create a comprehensive study guide for: ${message}. Format your response with proper HTML tags:
- Use <h3> for section headers
- Use <ul> and <li> for lists
- Use <div class="flashcard"> for any flashcards
- Use <strong> for key terms
- Use <em> for important notes
Include:
1. Key concepts and definitions
2. Important examples
3. Common misconceptions
4. Practice questions with answers
5. Tips for remembering the material
Format the response in a clear, easy-to-read way.`;
            }
            
            const response = await getAIResponse(prompt);
            hideTypingIndicator();
            addMessage(response, 'ai');
            currentMode = 'chat'; // Reset mode after response
            userInput.placeholder = 'Type your message...';
        } catch (error) {
            console.error('Error:', error);
            hideTypingIndicator();
            addMessage('Sorry, I encountered an error. Please try again.', 'ai');
        }
    }
}

async function getAIResponse(message) {
    const response = await fetch(API_CONFIG.API_URL, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${API_CONFIG.HUGGING_FACE_API_KEY}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            inputs: `<s>[INST] ${message} [/INST]`,
            parameters: {
                max_new_tokens: 1000,
                temperature: 0.7,
                top_p: 0.95,
                repetition_penalty: 1.1
            }
        })
    });

    const data = await response.json();
    if (data.error) {
        throw new Error(data.error);
    }
    return data[0].generated_text.split('[/INST]')[1].trim();
}

function addMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message');
    messageDiv.classList.add(sender === 'user' ? 'user-message' : 'ai-message');
    if (sender === 'system') {
        messageDiv.classList.add('system-message');
    }
    
    // Format the text with proper HTML
    let formattedText = text
        .replace(/\n/g, '<br>')
        .replace(/\*\s*(.*?)\n/g, '<li>$1</li>')
        .replace(/<li>/g, '<ul><li>')
        .replace(/<\/li>(?!<li>)/g, '</li></ul>');
    
    messageDiv.innerHTML = formattedText;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
} 