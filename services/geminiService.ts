
import { GoogleGenAI, Chat } from "@google/genai";
import type { GenerateContentResponse } from "@google/genai";

let ai: GoogleGenAI | null = null;
let chat: Chat | null = null;

const getAi = (): GoogleGenAI => {
  if (!ai) {
    if (!process.env.API_KEY) {
      throw new Error("API_KEY environment variable not set");
    }
    ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
  return ai;
};

export const startChat = (): void => {
  const genAI = getAi();
  chat = genAI.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: "You are Dr. Echo AI, Dr. Echo's personal AI assistant and an expert in chiropterology (the study of bats). Your purpose is to answer questions *only* about bat ecology, conservation, research methodologies, and the information presented on this website. Your knowledge is strictly limited to bats. If a user asks a question about any other topic, you MUST respond with the exact phrase: 'We are Bat Community. Please ask question about someting BAT' and nothing else. For on-topic questions, keep your answers informative, engaging, and accessible to a general audience. Use markdown for formatting, like lists or bold text, to improve readability. Be friendly and helpful for bat-related queries.",
    },
  });
};

export const sendMessageStream = async (
  message: string
): Promise<AsyncGenerator<GenerateContentResponse>> => {
  if (!chat) {
    startChat();
  }
  if (chat) {
     return chat.sendMessageStream({ message });
  }
  throw new Error("Chat not initialized");
};