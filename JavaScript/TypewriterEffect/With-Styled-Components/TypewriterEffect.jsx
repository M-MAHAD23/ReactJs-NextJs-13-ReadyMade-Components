import React from "react";
import { Center, Background } from "./TypewriterEffect.js";
import Typewriter from 'typewriter-effect';

export default function TypewriterEffect() {
    return (
        <>
            <Center>
                <Background>
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter.typeString('Hello World!')
                                    .callFunction(() => {
                                        console.log('String typed out!');
                                    })
                                    .pauseFor(2500)
                                    .deleteAll()
                                    .callFunction(() => {
                                        console.log('All strings were deleted');
                                    })
                                    .start();
                            }}
                        />
                </Background>
            </Center>
        </>
    )
}
