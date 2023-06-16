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

import nasl from "../images/nasl.jpeg"

import Footer from "../registeredUser/Footer";



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
                      <p className="col-md-10 mx-auto px-0" id="em1" >
                        Jeste li u hitnoj situaciji? Evo brzih uputstava za prvu pomoć!
                        Molimo vas da pažljivo pročitate uputstva kako biste reagovali
                        i pružili pomoć u hitnoj situaciji najbolje što možete.
                        Vaša brza reakcija može biti ključna za spasavanje života.
                    </p>
                </div>
                <div className="row">
                    <div className="col-sm-6 col-lg-4 mx-auto">
                        <div className="box">
                            <div className="img-box">
                                <a href={"bolest/1"}>
                                    <img src={srcani} alt="" style={{ height: "375px", fontFamily: 'Nunito Sans', fontWeight: 'bold' }}/>
                                </a>
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
                    <div className="col-sm-6 col-lg-4 mx-auto">
                        <div className="box">
                            <div className="img-box">
                                <a href={"bolest/3"}><img src={gusenje} alt="" style={{ height: "375px"}}/> </a>
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
                    <div className="col-sm-6 col-lg-4 mx-auto">
                        <div className="box">
                            <div className="img-box">
                                <a href="/bolest/2"><img src={el_udar} alt="" style={{ height: "375px"}}/> </a>
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
                    <div className="col-sm-6 col-lg-4 mx-auto">
                        <div className="box">
                            <div className="img-box">
                                <a href={"bolest/4"}><img src={ubod} alt="" style={{ height: "375px"}}/> </a>

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
                    <div className="col-sm-6 col-lg-4 mx-auto">
                        <div className="box">
                            <div className="img-box">
                                <a href={"bolest/5"}><img src={temp} alt="" style={{ height: "375px"}}/> </a>
                            </div>
                            <div className="detail-box">
                                <div className="social_box">

                                </div>
                                <h5 id="h5">
                                    Visoka temperatura
                                </h5>

                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-4 mx-auto">
                        <div className="box">
                            <div className="img-box">
                                <a href={"bolest/7"}><img src={faint} alt="" style={{ height: "375px"}} /> </a>
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
            <Footer/>
        </div>
    );
}
export default Home;