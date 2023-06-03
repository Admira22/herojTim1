import React from 'react';
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Maindio.css';
import Navbar from "./Navbar";

import Footer1 from "./Footer";
import nesvjestica from "../images/fainting.jpg"

function AboutSection() {
    return (
        <section className="about_section layout_padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-6" style={{ marginTop:"-90px"}}>
                        <div className="img-box">

                            <figure>
                                <img src={nesvjestica}/>
                                <figcaption>
                                     Prva pomoć prvi nesvjestici - <a href="https://www.youtube.com/watch?v=ddHKwkMwNyI" target="_blank">Watch video</a>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                    <div className="col-md-6" style={{ marginTop:"-50px"}}>
                        <div className="detail-box">
                            <div className="heading_container">
                                <h2 style={{ color: 'brown', fontWeight: 'bolder'}}>
                                    Šta je nesvjestica i šta je uzrokuje?
                                </h2>
                            </div>
                            <p>

                                Gubitak svijesti je kada neko privremeno postane neodzivan jer ne dolazi dovoljno krvi do mozga. Ljudi često gube svijest kao reakciju na bol, iscrpljenost, glad ili emocionalni stres. Kada neko padne u nesvijest, puls će mu se usporiti, ali obično će se brzo oporaviti i vratiti u normalu. Ako neko ko je pao u nesvijest i nastavlja biti neodzivan nakon nekoliko minuta, to bi moglo biti ozbiljnije.
                                <br/>
                                Znakovi i simptomi: <br/>
                                Tražite:<br/>

                               - kratko razdoblje neodzivnosti<br/>
                               - često ih uzrokuje pad na pod<br/>
                               - usporen puls<br/>
                               - blijeda, hladna koža<br/>
                               - znojenje.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </section>

    );
}



function Fainting() {
    return (
        <section className="department_section layout_padding" style={{ marginTop:"-100px", textAlign:"center"}}>
            <div className="department_container">
                <div className="container ">
                    <div className="heading_container heading_center">
                        <h2 style={{ color: "brown", fontWeight: 'bolder' }}>
                            Šta uraditi:
                            <hr/>
                        </h2>
                        <div>

                            <br />

                        </div>

                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-2">
                            <div className="box ">

                                <div className="detail-box">
                                    <h5 style={{ color: "brown", fontWeight: 'bolder'}}>
                                        Korak 1:
                                    </h5>
                                    <p>
                                       - Zamolite ih da legnu. <br/>
                                       - Provjerite ima li drugih ozljeda. <br/>
                                        - Moguće je da su se povrijedili prilikom pada,
                                        stoga provjerite glavne ozljede i druge rane. <br/>
                                       - Liječite prema potrebi.


                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-2">
                            <div className="box ">

                                <div className="detail-box">
                                    <h5 style={{ color: "brown", fontWeight: 'bolder' }}>
                                        Korak 2:
                                    </h5>
                                    <p>
                                       - Kleknite do njih i podignite im noge, podržavajući im gležnjeve na vašim ramenima kako bi se krv vratila u mozak.<br/>
                                        - Provjerite da imaju dovoljno svježeg zraka.
                                       - Zamolite druge ljude da se udalje, a ako se nalazite unutar prostora, zamolite nekoga da otvori prozor.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-2">
                            <div className="box ">
                                <div className="detail-box">
                                    <h5  style={{ color: "brown", fontWeight: 'bolder' }}>
                                        Korak 3:
                                    </h5>
                                    <p>
                                        - Umirite povrijeđenu osobu i pomozite im da polako ustaju.<br/>
                                        - Ako ponovno počnu osjećati vrtoglavicu, ponovno ih spustite da leže.<br/>
                                        - Ako ostanu neodzivni, otvorite im dišne puteve, provjerite disanje i pripremite se za tretiranje nekoga ko je neodzivan.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-2">
                            <div className="box ">

                                <div className="detail-box">
                                    <h5 style={{ color: "brown", fontWeight: 'bolder' }}>
                                        Korak 4:
                                    </h5>
                                    <p>
                                        Ako ne dišu: <br/>

                                        - Pozovite broj 124 za hitnu pomoć. <br/>
                                        - Započnite sa CPR-om (kardiopulmonalna reanimacija).
                                    </p>
                                </div>
                            </div>


                        </div>


                    </div>
                </div>
            </div>
            <hr/>
        </section>

    );
}
function Fainting1() {
    return (
        <div>
            <Navbar/>
            <AboutSection />
            <Fainting />
            <Footer1/>

        </div>
    );
}

export default Fainting1;


