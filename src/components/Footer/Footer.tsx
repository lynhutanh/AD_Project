import React from "react";
import { FaFacebook, FaDiscord, FaLinkedinIn } from "react-icons/fa";

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-100 w-full px-4 md:px-40 py-4 flex flex-col md:flex-row items-center justify-between">
            <div className="text-center text-lg text-primary-blue font-bold">
                AD Project | All Rights Reserved
            </div>
            <div className="flex items-center gap-4">
                <a
                    href="https://www.facebook.com/profile.php?id=61570887473470"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0866FF]"
                >
                    <FaFacebook className="h-6 w-6" />
                </a>
                <a
                    href="https://www.linkedin.com/company/105314712"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0A63BC]"
                >
                    <FaLinkedinIn className="h-6 w-6" />
                </a>
                <a
                    href="https://discord.gg/77puGmBYxn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#5562EA]"
                >
                    <FaDiscord className="h-6 w-6" />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
