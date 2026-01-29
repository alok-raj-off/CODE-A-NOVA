// src/services/aiService.js
import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize the API with your key
// (Ideally, use import.meta.env.VITE_API_KEY if using Vite, or process.env for Create-React-App)
const genAI = new GoogleGenerativeAI("AIzaSyDluxnf2GgPQBAz3mzOwMaiG1U-3plAYmo");

export const getAIResponse = async (prompt) => {
  try {
    // 1. Select the model
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
    // 2. Generate content
    const result = await model.generateContent(prompt);
    const response = await result.response;
    
    // 3. Get text
    return response.text();
    
  } catch (error) {
    console.error("Error generating AI response:", error);
    throw error;
  }
}; 