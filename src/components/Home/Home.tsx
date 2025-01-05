import React from "react";
import Section1 from "./Section1";

const Home: React.FC = () => {
    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-50 mt-10">
            <Section1 />
            <Section1 />
            <Section1 />

        </div>

    );
};

export default Home;
