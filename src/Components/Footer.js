import React from 'react'

const Footer = () => {
    return <div className="container-fluid m-0 p-0 footer">
        <footer className="text-center text-white" style={{"backgroundColor": "#f1f1f1"}}>

            <div className="container pt-4 ">

                <section className="mb-4">

                <a
                        className="btn btn-link btn-floating btn-lg text-dark m-1"
                        href="https://santhosh1217.github.io/#contact"
                        target='_blank'
                        role="button"
                        data-mdb-ripple-color="dark"
                    ><i className="fa-solid fa-user"></i></a>

                    <a
                        className="btn btn-link btn-floating btn-lg text-dark m-1"
                        href="mailto:joshcandyjosh@gmail.com"
                        target='_blank'
                        role="button"
                        data-mdb-ripple-color="dark"
                    ><i className="fa-solid fa-envelope"></i></a>

                    <a
                        className="btn btn-link btn-floating btn-lg text-dark m-1"
                        href="https://www.instagram.com/santhosh__1217"
                        role="button"
                        target='_blank'
                        data-mdb-ripple-color="dark"
                    ><i className="fa-brands fa-instagram"></i></a>

                    <a
                        className="btn btn-link btn-floating btn-lg text-dark m-1"
                        href="https://www.linkedin.com/in/santhosh-m-423a90223/"
                        role="button"
                        target='_blank'
                        data-mdb-ripple-color="dark"
                    ><i className="fa-brands fa-linkedin"></i></a>

                    <a
                        className="btn btn-link btn-floating btn-lg text-dark m-1"
                        href="https://github.com/santhosh1217"
                        role="button"
                        target='_blank'
                        data-mdb-ripple-color="dark"
                    ><i className="fa-brands fa-github"></i></a>
                </section>

            </div>


            <div className="text-center text-dark " style={{"backgroundColor" : "rgba(0, 0, 0, 0.2)"}}>
                © {new Date().getFullYear()} Copyright :  
                <a className="text-dark m-2" href="https://santhosh1217.github.io">josh candy</a>
            </div>

        </footer>


    </div>
}

export default Footer