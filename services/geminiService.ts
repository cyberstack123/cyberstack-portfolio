import { GoogleGenAI } from "@google/genai";

// The API key must be obtained exclusively from the environment variable process.env.API_KEY.
// Assume this variable is pre-configured, valid, and accessible.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

export const generateCreativeBrief = async (
  idea: string,
  serviceType: string
): Promise<string> => {
  try {
    const prompt = `
      You are a senior creative director at a design studio called CyberStack.
      A potential client has an idea: "${idea}" regarding the service: "${serviceType}".
      
      Please generate a structured, professional project brief in HTML format (using <h3>, <ul>, <li>, <p> tags only, no <html> or <body>).
      The brief should include:
      1. Project Objective
      2. Key Features/Requirements
      3. Target Audience (Make an educated guess)
      4. Suggested Mood/Vibe (Futuristic, Clean, etc.)
      
      Keep it concise and inspiring.
    `;

    // Use gemini-2.5-flash for basic text tasks.
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });
    
    return response.text || "";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "<p>An error occurred while communicating with the AI Creative Assistant. Please check your network connection or API key.</p>";
  }
};