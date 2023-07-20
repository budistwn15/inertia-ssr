import App from "@/Layouts/App.jsx";
import {Head, Link} from "@inertiajs/react";
import Container from "@/Components/Container.jsx";
import Header from "@/Components/Header.jsx";
import Grid from "@/Components/Grid.jsx";
import ArticleBlock from "@/Components/ArticleBlock.jsx";

export default function Home({articles}){
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

            <Container>
                {articles.length ?
                    <>
                        <Grid>
                            {articles.map((article) =>
                                <ArticleBlock key={article.slug} article={article}>

                                </ArticleBlock>
                            )}
                        </Grid>
                        <Link className="text-blue-600 block mt-10" href={route('articles.index')}>See all articles</Link>
                    </>
                    : <p>No articles yet...</p>}
            </Container>
        </div>
    )
}

Home.layout = page => <App children={page} />
