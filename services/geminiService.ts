import { GoogleGenAI } from "@google/genai";

export const generateWithGemini = async (prompt: string): Promise<string> => {
  // The API key must be obtained exclusively from the environment variable process.env.API_KEY
  // Assume this variable is pre-configured, valid, and accessible.
  const apiKey = process.env.API_KEY;

  if (!apiKey) {
    console.warn("API_KEY is not defined in the environment variables.");
    return "AI configuration missing. Please check API settings.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    // Use gemini-2.5-flash for basic text tasks
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    const text = response.text;
    
    return text || "No response generated.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Error generating content. Please try again later.";
  }
};