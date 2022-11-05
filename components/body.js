// import it from "../components/it.js";
import items from "../components/items.js";
import {ImageBox} from "./image-box";
import React from "react";
import {motion, useDragControls} from "framer-motion";
import {Button} from "./button";


const transition = {
    type: "spring",
    damping: 500,
    stiffness: 1200,
};

export default function Body() {
    const controls = useDragControls();
    const [isSliderActive, setisSliderActive] = React.useState([true]);
    const [isClickedImage, setOnclick] = React.useState([false]);

    // Reset
    const changeIsSliderActive = (arg) => {
        setisSliderActive(arg);
        setOnclick(false);
    };

    const changeIsClickedImage = (arg) => {
        setOnclick(arg);
    };

    function startDrag(event) {
        if (!isSliderActive)
            controls.start(event);
    }

    return (
        <motion.div
            className="container mx-auto h-full w-full relative flex">
            {/*Text*/}
            <motion.div
                className="flex flex-col shrink-0 w-[570px] bg-red-100 mr-24 mt-48"
                animate={{x: isSliderActive ? 0 : -800, opacity: isSliderActive ? 1 : 0}}
                transition={transition}>
                <h1
                    className="text-8xl leading-tight font-playfair">
                    The Abstract design
                </h1>
                <p
                    className="font-roboto mt-8 text-[#707070] leading-relaxed text-xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </motion.div>

            {/*Slider*/}
            <motion.div
                className={"shrink-0 h-[800px] flex self-start relative overflow-visible "
                    + (!isSliderActive ? "cursor-move" : "")
                    + (isClickedImage ? "w-100" : "w-3/5")}
                animate={{x: isSliderActive ? 0 : -800, width: isSliderActive ? 1000 : items.length * 459}}
                transition={transition}
                onPointerDown={startDrag}>

                <motion.div
                    className="absolute top-0 left-0 flex flex-row w-full h-full cursor-move"
                    drag="x"
                    dragListener={!isSliderActive}
                    dragControls={controls}
                    dragConstraints={{
                        top: 0,
                        right: 200,
                        bottom: 0,
                        left: -(items.length - 3.7) * 500,
                    }}>
                    {items.map((item, index) => {
                        return (
                            <ImageBox
                                className=""
                                key={index}
                                onClick={() => item.key}
                                parentToChild={item}
                                position={index}
                                isSliderActive={isSliderActive}
                                count={items.length}
                                isClickedImage={isClickedImage}
                                changeIsClickedImage={changeIsClickedImage}
                            />
                        )
                    })}
                </motion.div>

            </motion.div>
            <Button isSliderActive={changeIsSliderActive}/>
        </motion.div>

    );
}