import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.API_KEY || '';
const genAI = new GoogleGenerativeAI(apiKey);

export const generateCreativeBrief = async (
  idea: string,
  serviceType: string
): Promise<string> => {
  if (!apiKey) {
    return "API Key is missing. Please configure the environment.";
  }

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

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "An error occurred while communicating with the AI Creative Assistant.";
  }
};