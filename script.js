// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  
    const closeChatButton = document.getElementById('close-chat-btn');
    const chatBubble = document.getElementById('chat');
    const chatBody = document.getElementById('chat-body');
    const input = document.getElementById('chat-input');
    const sendBtn = document.getElementById('send-btn');

    // Close button logic
    if (closeChatButton && chatBubble) {
      closeChatButton.addEventListener('click', () => {
        chatBubble.style.display = 'none';
      });
    }

    // Add message to chat
    function addMessage(text, sender = 'bot') {
      const div = document.createElement('div');
      div.classList.add('chat-message', sender);
      div.textContent = text;
      chatBody.appendChild(div);
      chatBody.scrollTop = chatBody.scrollHeight;
    }

    // Handle sending user message
    sendBtn.addEventListener('click', () => {
      const msg = input.value.trim();
      if (msg) {
        addMessage(msg, 'user');
        input.value = '';
      }
    });

    // Allow Enter key to send
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') sendBtn.click();
    });

    // Simulated bot messages every 7 seconds
    const autoMessages = [
      "What do you do for fun?",
      "Your definitely my type.",
      "Just finished work, now Im gonna get to dating",
      "We should meet up soon.",
      "Tell me more about your job.",
      "What are you looking for here?",
      "I'm not on here much, wanna text?",
      "Sry for the late reply!",
      "Got back from the gym, time to socialize",
      "I'm nervous about all of this.",
      "These links seem really interesting.",
      "I'm actually new to online dating.",
      "Just checking in, how r you?",
      "My friend think Im loco for this.",
      "Tell me something random about yourself.",
      "Do you prefer texting or calling?",
      "You seem like someone I could trust.",
      "What's the best concert you've attended?",
      "My day just got better after talking on these pages",
      "Any fun plans for the holidays?",
      "Let me know when your free."
    ];

    function sendRandomBotMessage() {
      // Show "Typing..." indicator
      const typingEl = document.createElement('div');
      typingEl.classList.add('chat-message', 'bot');
      typingEl.textContent = 'Typing...';
      chatBody.appendChild(typingEl);
      chatBody.scrollTop = chatBody.scrollHeight;
    
      setTimeout(() => {
        typingEl.remove();
        const msg = autoMessages[Math.floor(Math.random() * autoMessages.length)];
        addMessage(msg, 'bot');
    
        // Call the function again with a new random delay
        const nextDelay = Math.floor(Math.random() * 5000) + 4000; // between 4s and 9s
        setTimeout(sendRandomBotMessage, nextDelay);
      }, 1500); // Time for typing effect
    }
    
    // Start the first message
    sendRandomBotMessage();
  
  }); // End DOMContentLoaded