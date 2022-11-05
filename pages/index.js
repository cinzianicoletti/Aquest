import Header from '../components/header.js'
import Body from '../components/body.js'

export default function HomePage() {
    return (
        <div className="bg-standard h-screen w-screen flex flex-col overflow-hidden ">
            <Header/>
            <Body/>
        </div>
    );
}