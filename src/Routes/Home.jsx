import HomePosts from "../Components/HomePosts"
import Layout from "../Components/Layout"
import PageTitle from "../Components/PageTitle"

function Home() {
    return (
        <Layout title="Home Page">
            <section>
                <HomePosts />
            </section>
        </Layout>
    )
}

export default Home