const Header = (props) => {
    return (
        <div className="row mb-5 bg-light border-bottom shadow-sm">
            <div className="col-md-4"></div>
            <div className="col-md-4 text-center"><img src={props.logo} width="250" height="250" className="img-fluid" /></div>
            <div className="col-md-4"></div>
        </div>
    )
}
export default Header