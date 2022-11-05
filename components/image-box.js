import * as React from "react";
import {useState} from "react";
import {motion} from "framer-motion";
import {useEffect} from 'react';

const transition = {
    type: "spring",
    damping: 10,
    stiffness: 80
};

const transition_text = {
    type: "spring",
    damping: 10,
    stiffness: 100
};

export const ImageBox = (item) => {
    const [isSliderActive, setIsSliderActive] = useState([]);
    const position = item.position;

    useEffect(() => {
        if (item.isSliderActive !== isSliderActive) {
            setIsSliderActive(item.isSliderActive);
        }
    }, [item.isSliderActive]);

    return (
        // Animation Slider - Compact
        <motion.div
            className={'h-auto w-[459px] text-center mr-10 image-container absolute top-0 left-0 overflow-visible flex flex-col justify-start '}
            animate={{
                // zIndex: position % item.count,
                x: isSliderActive ? position * 200 * (5 / 7) : position * 500,
                scale: isSliderActive ? ((3 / 2) * (position / item.count) + 1) / 2 : 1,
                width: item.isClickedImage && !isSliderActive ? 1000 : 459
            }}
            transition={transition}
            key={item.parentToChild.ig}>

            {/*Hidden text*/}
            <motion.div
                className={" text-[100px] bg-[red] text-left font-playfair leading-none " +
                    (!item.isClickedImage && !isSliderActive ? "mt-40 visible w-[500px] h-full" : "hidden")}
                animate={{
                    opacity: item.isClickedImage && !isSliderActive ? 1 : 0,
                    x: item.isClickedImage && !isSliderActive ? 0 : -1000,
                    position: item.isClickedImage && !isSliderActive ? "relative" : "absolute",
                    visible: item.isClickedImage && !isSliderActive ? "visible" : "hidden",
                }}>
                {item.parentToChild.name}
                <div className="text-[20px] text-[#848484] font-playfair mt-4">
                    {item.parentToChild.ig}
                </div>

                <div className="text-[20px] text-[#707070] font-roboto mt-4">
                    {item.parentToChild.text}
                </div>
            </motion.div>

            {/*Image*/}
            <div
                className={"flex h-[583px] w-[459px] relative mt-20 self-start"}>
                <motion.img
                    src={"/img/" + item.parentToChild.img}
                    className="absolute w-full h-full top-0 left-0 rounded-[260px] overflow-hidden"
                    alt=""
                    draggable="false"
                    animate={{
                        scale: item.isClickedImage && !isSliderActive ? 2.5 : 1,
                        y: item.isClickedImage && !isSliderActive ? 600 : 0
                    }}
                    onClick={() => {
                        console.log(item.isClickedImage);
                        if (!isSliderActive)
                            item.changeIsClickedImage(!item.isClickedImage);
                    }}
                />
            </div>

            {/*Text*/}
            <motion.div
                animate={{
                    y: !isSliderActive ? 0 : 400,
                    opacity: isSliderActive ? 0 : 1
                }}
                transition={transition_text}
                className="text-center">

                <div className={"text-[40px] font-playfair w-full leading-tight mt-8"}>
                    {item.parentToChild.name}
                </div>
                <div
                    className={"text-[20px] font-playfair w-full text-[#848484] leading-normal "}>
                    {item.parentToChild.ig}
                </div>
            </motion.div>
        </motion.div>
    );
};
