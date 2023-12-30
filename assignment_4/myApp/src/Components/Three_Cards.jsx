const Three_Cards = () => {
        return (
        <section className="three-cards">
            <div className="container ">
                <div className="d-flex justify-content-cente">
                    <div className="p-2 flex-fill"></div>
                    <div className="p-2 flex-fill">
                        <div className="card-custom">
                            <img src="./react.svg" width="60" alt="Icon" className="icon"/>
                            <h3>Fully Responsive </h3>
                            <p>This theme will look great on any device, no matter the size!</p>
                        </div>
                    </div>
                    <div className="p-2 flex-fill">
                        <div className="card-custom">
                            <img src="./react.svg" width="60" alt="Icon" className="icon"/>
                            <h3>Bootstrap 5 Ready </h3>
                            <p>Featuring the latest build of the new Bootstrap 5 framework!</p>
                        </div>
                    </div>
                    <div className="p-2 flex-fill">
                        <div className="card-custom">
                            <img src="./react.svg" width="60" alt="Icon" className="icon"/>
                            <h3>Easy to Use</h3>
                            <p>Ready to use with your own content, or customize the source files! </p>
                        </div>
                    </div>
                    <div className="p-2 flex-fill"></div>
                </div>
            </div>
        </section>
    )
}
export default Three_Cards