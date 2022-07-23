const PageTitle = (props) => {
    return (
        <div className="text-center">
            <h1>{props.title}</h1>
            <span>{props.description}</span>
        </div>
    )
}

export default PageTitle