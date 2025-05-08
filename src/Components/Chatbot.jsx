import React, { useState, useEffect, useRef } from "react";
import Message from "./Message";
import { Carousel } from "bootstrap";
import Navbar from "./Navbar";
import Footer from "./Footer";


const ChatBot = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! I'm your breakfast assistant. How can I help?" }
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const chatRef = useRef(null);

  useEffect(() => {
    chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setTyping(true);

    setTimeout(() => {
      const botReply = getBotResponse(input);
      setMessages(prev => [...prev, { sender: "bot", text: botReply }]);
      setTyping(false);
    }, 1000);
  };

  const getBotResponse = (input) => {
    input = input.toLowerCase();

    const responses = [
      { pattern: /^(hi|hello|hey)$/, replies: ["Hello, how can I assist you today?", "Hi there! How can I help?", "Hey! What's on your mind today?"] },
      { pattern: /how are you\??/, replies: ["I'm doing great, thanks for asking!", "I'm good, how about you?"] },
      { pattern: /am good/, replies: ["Nice to hear that", "That's great", "That's wonderful"] },
      { pattern: /(.*)(question|query)(.*)/, replies: ["Go on...", "I'm ready for the question", "Ask your question"] },
      { pattern: /\b(who|whom)\b/, replies: ["I was developed by Evans Musembi"] },
      { pattern: /purpose/, replies: ["I was developed to serve you. Got anything on your mind?"] },
      { pattern: /(.*)name(.*)/, replies: ["I am your helper", "I am your guide, but you can call me whichever name you like"] },
      { pattern: /(.*)breakfast(.*)/, replies: ["Breakfast is more than just a meal—it’s the fuel that kickstarts your day!", "Breakfast provides the energy and nutrients your body needs."] },

      // Food
      { pattern: /(.*)pancake(.*)/, replies: ["You can try American or buttermilk pancake."] },
      { pattern: /(.*)popular(.*)/, replies: ["You can try American or buttermilk pancake."] },
      { pattern: /(.*)coffee(.*)/, replies: [
        "We offer different types of coffee including latte, cappuccino and espresso. What would you like to have?",
        "Coffee contains a stimulant that jumpstarts your mind in the morning. At BreakfastChap, we offer latte, cappuccino and espresso. What would you prefer?"
      ] },
      { pattern: /(.*)latte(.*)/, replies: ["Espresso with lots of steamed milk."] },
      { pattern: /(.*)cappuccino(.*)/, replies: ["1/3 espresso, 1/3 steamed milk, 1/3 foam."] },
      { pattern: /(.*)espresso(.*)/, replies: ["Strong, concentrated shot of coffee."] },
      { pattern: /(.*)(egg|eggs)(.*)/, replies: ["Would you prefer fried, scrambled, boiled or omelet? Whichever the choice, we promise your satisfaction."] },
      { pattern: /(.*)strong\s?tea(.*)/, replies: ["Natural tea containing only tea leaves and water."] },
      { pattern: /(.*)dishes(.*)/, replies: ["We provide a lot of choices: eggs, toast, sausage, tea, pancake, juice, fruit, or even just a cup of coffee."] },
      { pattern: /(.*)juice(.*)/, replies: [
        "We provide natural juice blended from fruits just harvested from the farm.",
        "We provide mango, orange, pineapple, apple, or if you prefer mixed—we got you!"
      ] },

      // Contact info
      { pattern: /(.*)(located|found|situated|find|shop)(.*)/, replies: ["We are located in Oloitoktok along the Emali-Oloitoktok road near Triple(n) electronic shop."] },
      { pattern: /(.*)(time|open|close)(.*)/, replies: ["We open from 6:00 AM to 5:00 PM from Monday to Saturday."] },
      { pattern: /(.*)(contact|reach|talk)(.*)/, replies: ["You can talk to me. I'd be happy to help. For more clarification, you can talk to our customer care through this line: +254745332156"] },
      { pattern: /(.*)breakfastchap(.*)|(.*)deal\s?with(.*)/, replies: [
        "We offer a variety of dishes including coffee, strong tea, milk, pancakes and more.",
        "We provide a lot of choices for breakfast to ensure your day starts well.",
        "We deal in providing our customers with lavish breakfast to kickstart your day."
      ] },
    ];

    for (const res of responses) {
      if (res.pattern.test(input)) {
        const reply = res.replies[Math.floor(Math.random() * res.replies.length)];
        return reply;
      }
    }

    return "Sorry, I didn’t understand that. Could you ask something else?";
  };

  return (
    <div className="row">
      <Navbar/>
      <div className="col-md-4"></div>
      <div className="chatbot-container mb-4 p-3 col-md-4 ">
      <div className="chat-header">BreakfastChap Bot</div>
      <div className="chat-window" ref={chatRef}>
        {messages.map((msg, i) => (
          <Message key={i} sender={msg.sender} text={msg.text} />
        ))}
        {typing && <Message sender="bot" text="Typing..." />}
      </div>
      <div className="chat-input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="Type your message..."
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
    <div className="col-md-4"></div>
    <Footer/>
    </div>
  );
};

export default ChatBot;
