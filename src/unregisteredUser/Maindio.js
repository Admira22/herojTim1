import React from 'react';
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Maindio.css';
import Navbar from "./Navbar";
import Footer1 from "./Footer";
import zahvat from "../images/zahvat.jpg"
function AboutSection() {
    return (
        <section className="about_section layout_padding">
            <div className="container">
                <div className="row" style={{ marginTop:"-50px" }}>
                    <div className="col-md-6">
                        <div className="img-box">
                            <figure>
                                <img src={zahvat} id="zahvat" alt="heimlich maneuver" />
                                <figcaption>
                                    Heimlichov zahvat - <a href="https://www.youtube.com/watch?v=7CgtIgSyAiU" target="_blank">Watch video</a>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="detail-box">
                            <div className="heading_container">
                                <h2 style={{ color: 'brown', fontWeight: 'bolder'}}>
                                   Gušenje prva pomoć: <span>SOS</span>
                                </h2>
                            </div>
                            <p>
                                Ako sumnjate da se neko guši, važno je brzo djelovati i odmah pozvati hitnu medicinsku pomoć. Nemojte pokušavati sami izvaditi predmet iz grla osobe. Ako je osoba svjesna i ne može disati, možete razmotriti primjenu Heimlichove tehnike kako biste pomogli ukloniti predmet.<br/> <br/>

                                Heimlichova tehnika je tehnika koja se koristi za uklanjanje predmeta koji blokira dišne puteve nekoga. Uključuje primjenu pritiska na abdomen na određeni način kako bi se silom izbacilo zrak iz pluća i gurnulo predmet van. Heimlichova tehnika može biti tehnika koja spašava život u slučaju gušenja, ali treba je izvoditi samo osoba koja je obučena za to, jer može uzrokovati ozljede ako se nepravilno izvodi
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}



function Maindio() {
    return (
    <section className="department_section layout_padding" >
        <div className="department_container">
            <div className="container " style={{ marginTop:"-50px" }}>
                <div className="heading_container heading_center" >
                    <h2 style={{ color: "brown", fontWeight: 'bolder', textAlign: "center" }}>
                        Koraci koje treba poduzeti prilikom prve pomoći kod gušenja:
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
                                    Procijenite situaciju: Utvrdite da li osoba zaista ima problem s gušenjem.
                                    Ako kašlje ili čujete buku, može još uvijek biti sposobna disati.
                                    Ako ne može kašljati ili govoriti, postoji mogućnost da je zaista ugušena.
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
                                    Ne pokušavajte ukloniti predmet sami:
                                    Važno je da ne pokušavate izvaditi predmet
                                    iz grla osobe sami, jer to može pogoršati situaciju.
                                    Pričekajte stručnu pomoć.
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
                                    Izvodite Heimlichov zahvat: Ako je osoba svjesna,
                                    ali ne može disati, možete primijeniti Heimlichov zahvat.
                                    Stojte iza osobe, stavite šaku iznad pupka i držite drugu ruku
                                    oko šake. Zatim pritisnite snažno prema unutra i prema gore
                                    nekoliko puta, kako biste izazvali izbacivanje predmeta iz grla.
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
                                    Nastavite pružati pomoć: Bez obzira na rezultate Heimlichovog zahvata,
                                    pratite stanje osobe i čekajte dolazak hitne pomoći. Ako osoba izgubi
                                    svijest, odmah započnite s CPR-om (kardiopulmonalna reanimacija) i
                                    slijedite upute hitne medicinske pomoći.
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
function Main() {
    return (
        <div>
            <Navbar/>
            <AboutSection />
            <Maindio />
            <Footer1/>
        </div>
    );
}

export default Main;


