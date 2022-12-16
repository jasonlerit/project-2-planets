import Navbar from "../Navbar"

const HeroSection = ({ planet }) => {
    return (
        <header className="heroSection__header vh-100">
                {/* Navbar */}
                {/* <img src={require("../../assets/img/heroSectionSideImg.png")} alt="" /> */}
                <div className="heroSection__wrapper"></div>
                <Navbar/>
                    <div className="hero-content container text-center">
                        <div className="row">
                            <div className="col-lg-5 text-start">
                                <h4>Travel to the outside world</h4>
                                <h1 className="ff-merriweather">SPACE</h1>
                                <h4 className="lh-base">Space is the boundless three-dimensional
                                    extent in which objects and events have
                                    relative position.</h4>
                            </div>
                            <div className="col-lg-7"></div>
                        </div>
                    </div>
        </header>
    )
}

export default HeroSection