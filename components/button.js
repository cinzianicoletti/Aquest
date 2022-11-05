import React from "react";

export const Button = (item) => {
    return (
        <div className="absolute bottom-0 right-0 mb-12 mr-32 flex z-0">
            <div className="absolute bottom-0 right-0 w-full h-full bg-[#4b4b4b] backdrop-opacity-[.16]
                rounded-[20px] z-0">
            </div>

            <button onClick={() => { item.isSliderActive(true)}} className="z-20">
                <img src="/icon/slider.svg" className="inline-block m-4 w-[46px] h-[34px] z-20" alt=""/>
            </button>
            {/* <a className="z-20 text-red-800">*/}
            {/*     <i className="icon icon-slider inline-block py-4 pl-4 w-[50px] h-[60px]  "> </i>*/}
            {/* </a>*/}
            <div className="inline-block h-[59px] my-2 w-px bg-first z-30"></div>
            <button onClick={() => { item.isSliderActive(false) }} className="z-20">
                <img src="/icon/compact.svg" className="inline-block m-4 w-[38px] h-[34px] z-20 text-red-800"
                     alt=""/>
            </button>
            {/*<a className="z-20">*/}
            {/*    <i className="icon icon-compact inline-block py-4 pr-4 w-[50px] h-[60px] text-red-800"> </i>*/}
            {/*</a>*/}
        </div>
    );
}