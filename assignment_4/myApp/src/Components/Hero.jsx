
const Hero = () => {


    return (
        <section className="hero">
            <div className="container ">
            <div className="d-flex align-items-center flex-column">
                <h1 className="heading"> Generate more leads with a professional landing page!</h1>
                <form className="row g-3 ce">
                     <div className="col-auto">
                        <label htmlFor="email" className="visually-hidden">Password</label>
                        <input type="email" style={{width:'350px'}} className="form-control" id="email" placeholder="Email" />
                    </div>
                    <div className="col-auto">
                        <button type="submit" className="btn btn-primary mb-3">Submit</button>
                    </div>
                </form>
            </div>
            </div>
        </section>
    )
}
export default Hero