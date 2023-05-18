import React from 'react';
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Bleeding.css';
import Navbar from "./Navbar";
import temp from "../images/temp.jpg"

function Cuts() {
    return (
        <section className="about_section layout_padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="img-box">
                            <img src={temp} id="attack" alt="posjekotina" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="detail-box">
                            <div className="heading_container">
                                <h2 style={{ color: 'brown', fontWeight: 'bolder'}}>
                                    Prva pomoć kod visoke/niske temperature:
                                </h2>
                            </div>
                            <p>
                                - Izmjerite temperaturu toplomjerom.<div></div>
                                - Ako je temperatura iznad 37 stepeni C osoba ima povišenu temperaturu.<div></div>
                                - Ukoliko je temperatura ispod 36 stepeni C osoba ima hipotermiju.<div></div>
                                - Potražiti hitnu medicinsku pomoć na broj 124 ako
                                temperatura prelazi 39 stepeni ili je ispod 35.<div></div>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <a href="#niska">

                <button id="plavi">Prva pomoć - niska temperatura ⬇️</button>

            </a>
        </section>
    );
}

function Steps() {
    return (
        <section className="department_section layout_padding">
            <div className="department_container">
                <div className="container ">
                    <div className="heading_container heading_center">
                        <h2 style={{ color: "brown", fontWeight: 'bolder', textAlign: 'center' }}>
                            Koraci koje treba poduzeti prilikom prve pomoci kod povišene temperature:
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
                                        Popijete lijek koji je namjenjen za snižavanje temperature.
                                        Koristiti paracetamol ili ibuprofen prema uputama kako biste
                                        smanjili temperaturu i ublažili druge simptome poput glavobolje ili bolova u mišićima.
                                        Pomoću hladnih obloga ili komada tkanine natopljenih hladnom vodom možete
                                        lagano trljati ili nanijeti
                                        na područja kao što su čelo, vrat ili stopala.
                                        To će pomoći u smanjenju tjelesne temperature.
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
                                        Povišena temperatura može uzrokovati povećanu tjelesnu potrošnju tekućine.
                                        Stoga je važno piti dovoljno tekućine kako biste spriječili dehidraciju.
                                        Osigurajte dovoljno odmora i spavanja kako biste pomogli tijelu
                                        u borbi protiv infekcije ili uzroka povišene temperature.
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
                                        Ako je osoba s povišenom temperaturom pretopla,
                                        možete pomoći u smanjenju tjelesne temperature skidanjem viška odjeće ili pokrivača.
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
                                        Ako se temperatura nastavi povećavati, traje duže vrijeme ili se pojave
                                        ozbiljniji simptomi poput zbunjenosti, grčeva ili teškog disanja,
                                        važno je potražiti medicinsku pomoć odmah.
                                    </p>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}


function Steps2() {
    return (
        <section className="department_section layout_padding">
            <div className="department_container">
                <div className="container" id="niska">
                    <div className="heading_container heading_center">
                        <h2 style={{ color: "#0077b6", fontWeight: 'bolder', textAlign: 'center' }}>
                            Koraci koje treba poduzeti prilikom prve pomoći kod snižene temperature:
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
                                    <h5 style={{ color: "#0077b6", fontWeight: 'bolder'}}>
                                        Korak 1:
                                    </h5>
                                    <p>
                                        Premjestite osobu na toplo mjesto ako je osoba izložena hladnoći.
                                        Ako je odjeća osobe mokra, uklonite je kako biste spriječili dalje hlađenje.
                                        Zamotajte je u suhe deke ili koristite suhu odjeću kako biste je zagrijali.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-2">
                            <div className="box ">

                                <div className="detail-box">
                                    <h5 style={{ color: "#0077b6", fontWeight: 'bolder' }}>
                                        Korak 2:
                                    </h5>
                                    <p>
                                        Možete koristiti grijaće jastučiće ili bocu sa toplom vodom samo pripazite
                                        da ne stavljate izvor topline izravno na kožu kako biste izbjegli opekline.

                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-2">
                            <div className="box ">
                                <div className="detail-box">
                                    <h5  style={{ color: "#0077b6", fontWeight: 'bolder' }}>
                                        Korak 3:
                                    </h5>
                                    <p>
                                        Ako je osoba svjesna i sposobna gutati, napravite joj toplu tekućinu poput
                                        toplog čaja ili vruće supe. To može pomoći u zagrijavanju tijela iznutra.
                                        Izbjegavajte alkohol i kofein, jer oni mogu pogoršati stanje hipotermije.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-2">
                            <div className="box ">

                                <div className="detail-box">
                                    <h5 style={{ color: "#0077b6", fontWeight: 'bolder' }}>
                                        Korak 4:
                                    </h5>
                                    <p>
                                        Hipotermija je ozbiljno stanje i zahtijeva medicinsku procjenu i tretman.
                                        Ako je osoba snažno hipotermična ili pokazuje ozbiljne simptome poput gubitka svijesti,
                                        konfuzije ili nemogućnosti zagrijavanja, odmah pozovite hitnu pomoć.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}


function Temperatura() {
    return (
        <div>
            <Navbar/>

            <Cuts/>

            <Steps/>

            <Steps2/>
        </div>
    );
}

export default Temperatura;




