
import { GoogleGenAI } from "@google/genai";
import { SYSTEM_PROMPT } from "../constants";

// Correct implementation of Gemini API using Chat for conversation history
export const getGeminiResponse = async (userMessage: string, history: { role: 'user' | 'model', content: string }[]) => {
  // Initialize AI client with required parameter format
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  // Create a chat session with history and system instructions
  const chat = ai.chats.create({
    model: 'gemini-3-flash-preview',
    history: history.map(msg => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: [{ text: msg.content }]
    })),
    config: {
      systemInstruction: SYSTEM_PROMPT,
      temperature: 0.7,
      topP: 0.95,
    },
  });

  try {
    // Send the user message using the sendMessage method
    const response = await chat.sendMessage({ message: userMessage });

    // Access the .text property directly (not a method) as per SDK rules
    return response.text || "I'm sorry, I couldn't process that.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Error: Unable to connect to the AI brain. Please try again later.";
  }
};
