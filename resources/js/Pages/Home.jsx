import App from "@/Layouts/App.jsx";
import {Head} from "@inertiajs/react";

export default function Home(){
    return (
        <div>
            <Head title="What's happening..."/>
            Home
        </div>
    )
}

Home.layout = page => <App children={page} />
