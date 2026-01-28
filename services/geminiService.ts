
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getProjectConsultation = async (query: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: query,
      config: {
        systemInstruction: `You are an expert construction consultant for VSK Traders, located in Chennai. 
        We specialize in:
        1. Building Demolition (Safe, controlled demolition of houses, high-rises, commercial units).
        2. Roofing Materials (Metal Sheets, Cement Sheets, MS Pipes, GP Pipes, Polycarbonate Sheets).
        
        Provide concise, helpful, and professional advice. Focus on materials needed, safety considerations, or the demolition process. 
        Always mention that users should contact VSK Traders for a personalized quote.
        Use a helpful, industrial, and professional tone.`,
        temperature: 0.7,
        topP: 0.9,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I apologize, but I'm having trouble connecting to my consultation system right now. Please contact our team directly at +91 98765 43210 for immediate assistance.";
  }
};
