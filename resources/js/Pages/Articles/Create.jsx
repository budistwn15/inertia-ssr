import {Head, useForm} from "@inertiajs/react";
import Header from "@/Components/Header.jsx";
import App from "@/Layouts/App.jsx";

export default function Create({tags, categories}) {
    const {data, setData, post, errors} = useForm({
        title: '',
        teaser: '',
        category_id: '',
        body: '',
        picture: '',
        tags: [tags[0], tags[1]]
    });
    return (
        <div>
            <Head title={`Create new article`}/>
            <Header>
                <Header.Title>{data.title || 'The title...'}</Header.Title>
                <Header.Subtitle>{data.teaser || 'The teaser...'}</Header.Subtitle>
            </Header>
        </div>
    )
}

Create.layout = (page) => <App children={page}/>
