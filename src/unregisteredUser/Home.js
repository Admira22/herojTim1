
import React from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Navbar";

import srcani from "../images/attack.webp"
import gusenje from "../images/gusenje2.jpg"
import el_udar from "../images/el_udar.jpg"
import ubod from "../images/ubod.jpg"
import temp from "../images/tempp.gif"
import faint from "../images/fainting.jpg"

import Footer1 from "./Footer";
import nasl from "../images/nasl.jpeg"



function Home00() {
    return(
        <div className="image-container">
            <img className="fade-in-image" src={nasl} alt="Opis slike"/>
        </div>

    );
}

function Home1() {
    return (
        <section className="doctor_section layout_padding">
            <div className="container">
                <div className="heading_container heading_center">
                    <h4 id="em">

                        Hitna prva pomoć: Brza uputstva za kritične situacije
                    </h4>
                    <p className="col-md-10 mx-auto px-0" id="em1">
                        Jeste li u hitnoj situaciji? Evo brzih uputstava za prvu pomoć!
                        Molimo vas da pažljivo pročitate uputstva kako biste reagovali
                        i pružili pomoć u hitnoj situaciji najbolje što možete.
                        Vaša brza reakcija može biti ključna za spašavanje života.
                    </p>
                </div>
                <div className="row">
                    <div className="col-sm-6 col-lg-3 mx-auto">
                        <div className="box">
                            <div className="img-box">
                                <a href="/heartattack"> <img src={srcani} alt="" style={{ height: "250px" }}/> </a>
                            </div>
                            <div className="detail-box">
                                <div className="social_box">

                                </div>
                                <h5 id="h5">
                                    Srčani udar
                                </h5>

                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-3 mx-auto">
                        <div className="box">
                            <div className="img-box">
                                <a href="/gusenje"><img src={gusenje} alt="" style={{ height: "250px"}}/> </a>
                            </div>
                            <div className="detail-box">
                                <div className="social_box">

                                </div>
                                <h5 id="h5">
                                    Gušenje
                                </h5>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 mx-auto">
                        <div className="box">
                            <div className="img-box">
                                <a href="/shock"><img src={el_udar} alt="" style={{ height: "250px"}}/> </a>
                            </div>
                            <div className="detail-box">
                                <div className="social_box">

                                </div>
                                <h5 id="h5">
                                    Električni udar
                                </h5>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 mx-auto">
                        <div className="box">
                            <div className="img-box">
                                <a href="/bleeding"><img src={ubod} alt="" style={{ height: "250px"}}/> </a>

                            </div>
                            <div className="detail-box">
                                <div className="social_box">

                                </div>
                                <h5 id="h5">
                                    Ujedi/posjekotine
                                </h5>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 mx-auto">
                        <div className="box">
                            <div className="img-box">
                                <a href="/temperature"><img src={temp} alt="" style={{ height: "225px"}}/> </a>
                            </div>
                            <div className="detail-box">
                                <div className="social_box">

                                </div>
                                <h5 id="h5">
                                    Visoka/niska temperatura
                                </h5>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 mx-auto">
                        <div className="box">
                            <div className="img-box">
                                <a href="/fainting"><img src={faint} alt="" style={{ height: "250px"}} /> </a>
                            </div>
                            <div className="detail-box">
                                <div className="social_box">

                                </div>
                                <h5 id="h5">
                                    Nesvjestica
                                </h5>

                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </section>

    );
}
function Home() {
    return (
        <div>

            <Navbar/>

            <Home00/>


            <Home1/>


            <Footer1/>


        </div>
    );
}
export default Home;