import React from 'react';
import { Container } from './Container';
import { SearchX, ArrowRight } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
    return (
        <section className="min-h-screen flex items-center justify-center bg-[#FAFAFA] px-4 py-20">
            <Container className="max-w-[600px] text-center flex flex-col items-center">

                {/* Icon */}
                <div className="w-[80px] h-[80px] rounded-full bg-[#FFE4E6] flex items-center justify-center mb-8">
                    <SearchX className="w-10 h-10 text-[#E11D48]" />
                </div>

                {/* Heading */}
                <h1 className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[40px] sm:text-[56px] leading-[1.1] text-[#0F172A] mb-6">
                    Page Not Found
                </h1>

                {/* Body */}
                <p className="font-['Inter',sans-serif] text-[16px] sm:text-[18px] leading-[28px] text-[#64748B] mb-10 max-w-[480px]">
                    Oops! It looks like the page you are looking for doesn't exist, has been removed, or is temporarily unavailable.
                </p>

                {/* Back Button */}
                <a
                    href="/"
                    className="bg-black hover:bg-[#1A1A1A] text-white font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[15px] leading-[19px] px-[32px] py-[16px] rounded-[50px] transition-all duration-300 shadow-md inline-flex items-center gap-[10px] cursor-pointer"
                >
                    Back to Home
                    <ArrowRight className="w-4 h-4 text-white" />
                </a>
            </Container>
        </section>
    );
};

export default NotFoundPage;
