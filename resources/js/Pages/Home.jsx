import App from "@/Layouts/App.jsx";
import {Head} from "@inertiajs/react";
import Container from "@/Components/Container.jsx";
import Header from "@/Components/Header.jsx";

export default function Home(){
    return (
        <div>
            <Head title="What's happening..."/>

            <Header>
                <Header.Title>
                    Consectetur
                </Header.Title>
                <Header.Subtitle>
                    Lorem ipsum dolor sit amet, consectetur adipisicing.
                </Header.Subtitle>
                <Header.Content>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium animi corporis culpa cum deserunt dicta dolor dolores ducimus eum ipsum minima, necessitatibus officia perspiciatis praesentium quaerat saepe temporibus ullam?
                </Header.Content>
            </Header>

            <Container>Home</Container>
        </div>
    )
}

Home.layout = page => <App children={page} />
