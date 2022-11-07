// import it from "../components/it.js";
import items from "../components/items.js";
import {ImageBox} from "./image-box";
import React, {useRef, useLayoutEffect, useState} from "react";
import {motion, useDragControls} from "framer-motion";
import {Button} from "./button";


const transition = {
    type: "spring",
    damping: 300,
    stiffness: 1200,
};

export default function Body() {
    const controls = useDragControls();
    const [isSliderActive, setisSliderActive] = React.useState([true]);
    const [isClickedImage, setOnclick] = React.useState([false]);
    const constraintsRef = useRef(null);
    const targetRef = useRef();
    const [dimensions, setDimensions] = useState({width: 0, height: 0});

    useLayoutEffect(() => {
        if (targetRef.current) {
            setDimensions({
                width: targetRef.current.offsetWidth,
                height: targetRef.current.offsetHeight
            });
        }
    }, []);


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
            className={"h-full w-full relative flex mt-20 " +
                (isSliderActive ? "container mx-auto " : "")}
            ref={constraintsRef}
            onPointerDown={startDrag}
        >
            {/*Text*/}
            <motion.div
                className="flex flex-col shrink-0 w-[570px] mr-24 mt-28"
                animate={{
                    opacity: isSliderActive ? 1 : 0,
                    x: isSliderActive ? 0 : -800
                }}
                transition={transition}>
                <h1
                    className="text-8xl leading-tight font-bold font-playfair">
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
                ref={targetRef}
                className={"relativew-full w-[" + (dimensions.width) + "] px-10 h-full flex self-start "
                    + (!isSliderActive ? "cursor-move " : " ")}
                animate={{
                    x: isSliderActive ? 0 : -800,
                }}
                transition={transition}
                drag="x"
                dragListener={!isSliderActive}
                dragControls={controls}
                dragConstraints={constraintsRef}
            >
                {items.map((item, index) => {
                    return (
                        <ImageBox
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
            <Button isSliderActive={changeIsSliderActive}/>
        </motion.div>

    );
}