
import { GoogleGenAI } from "@google/genai";
import { Product } from "../types";
import { PRODUCTS } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getAIAdvisorResponse = async (userPrompt: string, history: { role: 'user' | 'assistant', content: string }[]) => {
  try {
    const productContext = PRODUCTS.map(p => 
      `${p.name} (${p.category}): $${p.price}. ${p.description} Specs: ${JSON.stringify(p.specs)}`
    ).join('\n');

    const systemInstruction = `
      You are 'ElectroBot', an expert electronics shopping assistant for ElectroPulse.
      You have access to the following product catalog:
      ${productContext}

      Rules:
      1. ONLY recommend products from the catalog above.
      2. If a user asks for something we don't have, politely say so and suggest the closest alternative.
      3. Be concise, friendly, and technical.
      4. If users ask for comparisons, use the specs provided.
      5. Always format your output in clean Markdown.
    `;

    const chat = ai.models.generateContentStream({
      model: 'gemini-3-flash-preview',
      contents: [
        ...history.map(h => ({
          role: h.role === 'user' ? 'user' : 'model',
          parts: [{ text: h.content }]
        })),
        { role: 'user', parts: [{ text: userPrompt }] }
      ],
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    return chat;
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};
