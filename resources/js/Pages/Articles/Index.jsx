import {Head} from "@inertiajs/react";
import App from "@/Layouts/App.jsx";
import Header from "@/Components/Header.jsx";
import Container from "@/Components/Container.jsx";
import Grid from "@/Components/Grid.jsx";
import ArticleBlock from "@/Components/ArticleBlock.jsx";
import Pagination from "@/Components/Pagination.jsx";

export default function Index({...props}) {
    const {data: articles, meta, links} = props.articles;
    return (
        <div>
            <Head title="The Articles"/>
            <Header>
                <Header.Title>The Articles</Header.Title>
                <Header.Subtitle>
                    Read if you need it!
                </Header.Subtitle>
            </Header>

            <Container>
                {articles.length ?
                    <>
                        <Grid>
                            {articles.map((article) =>
                                <ArticleBlock key={article.slug} article={article}/>
                            )}
                        </Grid>
                        <Pagination {...{meta, links}}/>
                    </>
                    : <p>No articles yet...</p>}
            </Container>
        </div>
    )
}

Index.layout = (page) => <App children={page}/>
