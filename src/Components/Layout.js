import logo from "../logo.svg"
import Header from "./Header"
import Footer from "./Footer"
import Weather from "./Weather"
import PageTitle from "./PageTitle"

const Layout = (props) => {
    return (
        <>
            <div className="container-fluid">
                <Header logo={logo} />
                <div className="container">
                    <div className="mb-4">
                        <PageTitle title={props.title} description="..." />
                    </div>
                    <div className="row g-md-5">
                        <div className="col-md-8 mb-md-4">
                            {props.children}
                        </div>
                        <div className="col-md-4 mb-4 mb-md-0">
                            <div className="position-sticky">
                                <div className="p-4 mb-3 bg-light border shadow-sm rounded">
                                    <h4 className="fst-italic">About</h4>
                                    <p className="mb-0">Hi there! I am Ihsan Engul. Blog page I made for <b><i>React</i></b> examples.</p>
                                </div>

                                <div className="mb-3">
                                    <Weather country="Mecca" />
                                </div>

                                <div className="p-4 mb-3 bg-light border shadow-sm rounded">
                                    <div className="mb-4">
                                        <h4 className="fst-italic">Archives</h4>
                                        <ol className="list-unstyled mb-0">
                                            <li><a href="#">Temmuz 2022</a></li>
                                            <li><a href="#">Haziran 2022</a></li>
                                        </ol>
                                    </div>

                                    <div>
                                        <h4 className="fst-italic">Elsewhere</h4>
                                        <ol className="list-unstyled">
                                            <li><a href="https://github.com/ihsanengul" target="_blank">GitHub</a></li>
                                            <li><a href="https://twitter.com/ihsanengul" target="_blank">Twitter</a></li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Layout