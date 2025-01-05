import { motion } from "framer-motion";
import React from "react";

const Section1: React.FC = () => {
    return (
        <section className="h-screen flex flex-col xl:flex-row items-center gap-10 xl:gap-20 px-8 xl:px-20 py-10 relative">
            {/* Text Content */}
            <div className="flex-1 flex flex-col justify-center gap-6">
                <h1 className="text-5xl xl:text-6xl font-extrabold uppercase text-primary-blue">
                    QuantMaster <br />
                    Platform
                </h1>
                <p className="text-lg text-primary-gray-th1">
                    Supercharge your trading with cutting-edge quantitative strategies.
                    Optimize performance, minimize risk, and stay ahead in the markets.
                </p>
                <button className="px-6 py-3 bg-primary-blue text-white font-bold uppercase rounded-md hover:bg-primary-blue/90 transition duration-200">
                    Get Started Now
                </button>
            </div>

            {/* Image Section */}
            <motion.div
                className="flex-1 h-4/5 w-full xl:w-[90%] rounded-lg overflow-hidden shadow-lg"
                initial={{ opacity: 0, x: "100%" }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
            >
                <img
                    src="https://images.pexels.com/photos/29828496/pexels-photo-29828496/free-photo-of-hi-n-th-th-tr-ng-ti-n-di-n-t-d-ng-tren-may-tinh-b-ng.jpeg"
                    alt="Chart"
                    className="w-full h-full object-cover"
                />
            </motion.div>
        </section>
    );
};

export default Section1;
