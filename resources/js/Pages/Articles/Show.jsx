import {Head} from "@inertiajs/react";
import Header from "@/Components/Header.jsx";
import Container from "@/Components/Container.jsx";
import App from "@/Layouts/App.jsx";
import Index from "@/Pages/Articles/Index.jsx";
import Markdown from "@/Components/Markdown.jsx";

export default function Show({article}){
    return (
        <div>
            <Head title={article.title}/>
            <Header>
                <Header.Title>{article.title}</Header.Title>
                <Header.Subtitle>{article.subtitle}</Header.Subtitle>
            </Header>
            <Container>
                <div className="grid grid-cols-12">
                    <div className="col-span-9">
                        <Markdown>{article.body}</Markdown>
                    </div>
                    <div className="col-span-3">
                        lorem, ipsum
                    </div>
                </div>
            </Container>
        </div>
    )
}

Show.layout = (page) => <App children={page}/>
