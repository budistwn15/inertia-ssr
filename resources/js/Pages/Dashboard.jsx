import {Head} from "@inertiajs/react";
import App from "@/Layouts/App.jsx";
import Container from "@/Components/Container.jsx";

export default function Dashboard(){
    return (
        <div>
            <Head title="Dashboard"/>
            <Container>Dashboard</Container>
        </div>
    )
}

Dashboard.layout = page => <App children={page}/>
