import {Head, useForm} from "@inertiajs/react";
import Header from "@/Components/Header.jsx";
import App from "@/Layouts/App.jsx";
import Container from "@/Components/Container.jsx";
import TextInput from "@/Components/TextInput.jsx";
import InputLabel from "@/Components/InputLabel.jsx";
import InputFile from "@/Components/InputFile.jsx";
import Textarea from "@/Components/Textarea.jsx";
import Editor from "@/Components/Editor.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import Select from "@/Components/Select.jsx";
import MultipleSelect from "@/Components/MultipleSelect.jsx";

export default function Create({tags, categories}) {

    const {data, setData, post, errors} = useForm({
        title: '',
        teaser: '',
        category_id: '',
        body: '',
        picture: '',
        tags: [tags[0], tags[1]]
    });

    const onChange = (e) => setData(e.target.name, e.target.value);
    const onSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <Head title={`Create new article`}/>
            <Header>
                <Header.Title>{data.title || 'The title...'}</Header.Title>
                <Header.Subtitle>{data.teaser || 'The teaser...'}</Header.Subtitle>
            </Header>
            <Container>
                <form onSubmit={onSubmit}>
                    <div className="mb-6">
                        <InputLabel forInput='picture' value='Picture' isLight={true}/>
                        <InputFile
                            name='title'
                            id="title"
                            onChange={(e) => setData('picture', e.target.files[0])}/>
                    </div>
                    <div className="grid grid-cols-12 gap-6 mb-6">
                        <div className="col-span-4">
                            <div>
                                <InputLabel forInput={'category_id'} isLight={true}>Category</InputLabel>
                                <Select value={data.category_id} data={categories}
                                        onChange={(e) => setData('category_id', e)}></Select>
                            </div>
                        </div>
                        <div className="col-span-8">
                            <div>
                                <InputLabel forInput="tags" isLight={true}>Tags</InputLabel>
                                <MultipleSelect
                                    selectedItem={data.tags}
                                    data={tags}
                                    onChange={(e) => setData('tags', e)}>
                                </MultipleSelect>
                            </div>
                        </div>
                    </div>
                    <div className="mb-6">
                        <InputLabel forInput='title' value='Title' isLight={true}/>
                        <TextInput name='title' id="title" onChange={onChange} value={data.title}/>
                    </div>
                    <div className="mb-6">
                        <InputLabel forInput='teaser' value='Teaser' isLight={true}/>
                        <Textarea name='teaser' id="teaser" onChange={onChange} value={data.teaser}/>
                    </div>
                    <div className="mb-6">
                        <Editor name='body' id="body" onChange={onChange} value={data.body}/>
                    </div>
                    <PrimaryButton>Create</PrimaryButton>
                </form>
            </Container>
        </div>
    )
}

Create.layout = (page) => <App children={page}/>
