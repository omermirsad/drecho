import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
// FIX: Import Variants type from framer-motion to resolve typing errors with animation properties.
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { XIcon } from './Icons';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'auto';
        };
    }, [isOpen, onClose]);

    const backdropVariants: Variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    // FIX: Explicitly type animation variants with the Variants type to resolve easing type error.
    const modalVariants: Variants = {
        hidden: { opacity: 0, scale: 0.9, y: 50 },
        visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
        exit: { opacity: 0, scale: 0.9, y: 50, transition: { duration: 0.2, ease: 'easeIn' } },
    };

    return ReactDOM.createPortal(
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm"
                    onClick={onClose}
                    variants={backdropVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    role="dialog"
                    aria-modal="true"
                >
                    <motion.div
                        ref={modalRef}
                        className="relative bg-gradient-to-br from-[#1a1a2e] to-[#10101b] rounded-2xl border border-indigo-500/30 shadow-2xl shadow-black/50 w-full max-w-2xl m-4"
                        onClick={(e) => e.stopPropagation()}
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors duration-200 z-10"
                            aria-label="Close modal"
                        >
                            <XIcon />
                        </button>
                        <div className="p-8">
                            {children}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>,
        document.body
    );
};

export default Modal;
