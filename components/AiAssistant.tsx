
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Message, WelcomeMessage } from '../types';
import { sendMessageStream } from '../services/geminiService';
import { AiAvatarIcon } from './Icons';

const AiAssistant: React.FC = () => {
    const [messages, setMessages] = useState<(Message | WelcomeMessage)[]>([
        {
            id: 'welcome-1',
            role: 'welcome',
            content: "Hello! I'm Dr. Echo AI, Dr. Echo's AI assistant. I can answer questions about bat ecology, conservation efforts, research methodologies, and help you understand the fascinating world of chiropterology. How can I assist you today?"
        }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const chatWindowRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (chatWindowRef.current) {
            chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSendMessage = useCallback(async () => {
        const trimmedInput = input.trim();
        if (!trimmedInput || isLoading) return;

        const userMessage: Message = { id: Date.now().toString(), role: 'user', content: trimmedInput };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        const modelMessageId = (Date.now() + 1).toString();
        
        try {
            const stream = await sendMessageStream(trimmedInput);
            
            setMessages(prev => [...prev, { id: modelMessageId, role: 'model', content: '' }]);

            for await (const chunk of stream) {
                const chunkText = chunk.text;
                setMessages(prev => prev.map(msg => 
                    msg.id === modelMessageId 
                    ? { ...msg, content: (msg as Message).content + chunkText } 
                    : msg
                ));
            }
        } catch (error) {
            console.error("Error sending message:", error);
            const errorMessage: Message = { id: modelMessageId, role: 'model', content: "I'm sorry, I encountered an error. Please try again later." };
            setMessages(prev => {
                const existing = prev.find(m => m.id === modelMessageId);
                if (existing) {
                    return prev.map(m => m.id === modelMessageId ? errorMessage : m);
                }
                return [...prev, errorMessage];
            });
        } finally {
            setIsLoading(false);
        }
    }, [input, isLoading]);

    return (
        <section id="ai-assistant" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight">
                    Our AI Research Assistant<br />Dr. Echo AI
                </h2>
                <p className="text-lg text-slate-400">Ask questions about bat ecology, conservation, or our research</p>
            </div>
            
            <div className="bg-gradient-to-br from-[rgba(26,26,46,0.9)] to-[rgba(22,33,62,0.9)] rounded-2xl p-4 sm:p-8 border border-indigo-500/20 shadow-2xl shadow-black/30">
                <div 
                    ref={chatWindowRef}
                    id="chatWindow" 
                    className="h-[500px] bg-[rgba(15,15,26,0.5)] rounded-xl p-6 overflow-y-auto mb-6 custom-scrollbar"
                    aria-live="polite"
                >
                    <AnimatePresence>
                        {messages.map((msg) => (
                            <motion.div
                                key={msg.id}
                                layout
                                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3, ease: 'easeOut' }}
                                className={`mb-6 flex gap-4 items-start ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                {msg.role !== 'user' && <AiAvatarIcon />}
                                <div className={`py-3 px-5 rounded-2xl max-w-[80%] ${
                                    msg.role === 'user' ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white order-last' : 
                                    'bg-[rgba(26,26,46,0.8)] text-slate-200 border border-indigo-500/20'
                                }`}>
                                    <div className="prose prose-invert prose-p:my-2" dangerouslySetInnerHTML={{ __html: msg.content.replace(/\n/g, '<br />') }} />
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                    {isLoading && messages[messages.length-1].role === 'user' && (
                         <div className="mb-6 flex gap-4 items-start justify-start">
                            <AiAvatarIcon />
                            <div className="py-3 px-5 rounded-2xl max-w-[80%] bg-[rgba(26,26,46,0.8)] text-slate-200 border border-indigo-500/20">
                                <div className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-pulse"></span>
                                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-pulse [animation-delay:0.2s]"></span>
                                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-pulse [animation-delay:0.4s]"></span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                
                <div className="flex gap-4">
                    <input 
                        type="text" 
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                        className="flex-1 px-6 py-3 bg-[rgba(15,15,26,0.8)] border border-indigo-500/20 rounded-full text-slate-200 text-base transition-all duration-300 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/50" 
                        placeholder="Ask about bat species, echolocation..."
                        disabled={isLoading}
                    />
                    <motion.button
                        onClick={handleSendMessage}
                        disabled={isLoading}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-shine px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white border-none rounded-full font-semibold cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Send
                    </motion.button>
                </div>
            </div>
        </section>
    );
};

export default AiAssistant;