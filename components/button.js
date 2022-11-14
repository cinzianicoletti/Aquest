import Slider from "../public/icon/slider.svg";
import Compact from "../public/icon/compact.svg";

export const Button = (item) => {
    return (
        <div className="absolute bottom-0 right-0 mb-12 flex z-20 overflow-hidden rounded-[20px]">
            <div className="absolute bottom-0 right-0 w-full h-full bg-[#4b4b4b] backdrop-opacity-[.16]
                 z-0">
            </div>

            <button onClick={() => { item.changeIsSliderActive(true) }}
                    className={"flex z-20 self-center " + (item.isSliderActive ? "fill-[#FDF2DC]" : "fill-[#938F85]")}>
                <Slider height={"34px"} width={"45px"} className={"m-4"} />
            </button>

            <div className="inline-block h-[59px] my-2 w-px bg-first z-20"></div>

            <button onClick={() => { item.changeIsSliderActive(false) }}
                    className={"flex z-20 self-center " + (!item.isSliderActive ? "fill-[#FDF2DC]" : "fill-[#938F85]")}>
                <Compact height={"34px"} width={"40px"} className={"m-4"}/>
            </button>

        </div>
    );
}