import {Head} from "@inertiajs/react";
import App from "@/Layouts/App.jsx";
import Header from "@/Components/Header.jsx";
import Container from "@/Components/Container.jsx";
import Grid from "@/Components/Grid.jsx";
import ArticleBlock from "@/Components/ArticleBlock.jsx";
import Pagination from "@/Components/Pagination.jsx";

export default function Show({category, ...props}) {
    const {data: articles, meta, links} = props.articles;
    return (
        <div>
            <Head title={category.name}/>
            <Header>
                <Header.Title>{category.name}</Header.Title>
                <Header.Subtitle>
                    This page will show you the articles about {category.name}
                </Header.Subtitle>
            </Header>

            <Container>
                {articles.length ?
                    <>
                        <Grid>
                            {articles.map((article) =>
                                <ArticleBlock key={article.slug} article={article}>

                                </ArticleBlock>
                            )}
                        </Grid>
                        <Pagination {...{meta, links}}/>
                    </>
                    : <p>No articles yet...</p>}
            </Container>
        </div>
    )
}

Show.layout = (page) => <App children={page}/>
