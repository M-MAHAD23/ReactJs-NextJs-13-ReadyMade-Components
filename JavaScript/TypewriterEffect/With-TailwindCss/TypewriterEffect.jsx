import React from "react";
import Typewriter from 'typewriter-effect';

export default function TypewriterEffect() {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="flex justify-center items-center flex-col bg-indigo-500 rounded-lg p-10">
                <Typewriter
                    options={{
                        strings: ['Hello World!'],
                        autoStart: true,
                        loop: true
                    }}
                />
            </div>
        </div>
    )
}
