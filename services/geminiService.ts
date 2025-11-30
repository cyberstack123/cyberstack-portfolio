import { GoogleGenAI } from "@google/genai";

export const generateWithGemini = async (prompt: string) => {
  // The API key is obtained from process.env.API_KEY as per guidelines.
  // We assume it is pre-configured and valid.
  
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    // Using gemini-2.5-flash as per guidelines for basic text tasks
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });
    
    return response.text || "No response generated.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Error generating content. Please try again later.";
  }
};