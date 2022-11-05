import Image from "next/image";

export default function Header() {
    return (
        <header className="py-8 border-solid border-b-[1px] border-first">
            <div className="container mx-auto flex justify-between">
                <a href="/">
                    <Image src="/icon/logo.svg"
                           className=""
                           alt="Aquest logo"
                           width={65}
                           height={37}/>
                </a>
                <a className="self-center">
                    Test Cinzia Nicoletti
                </a>
            </div>
        </header>
    );
}