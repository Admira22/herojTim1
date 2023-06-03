import React from 'react';
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HeartAttack.css';
import Navbar from "./Navbar";

import srcani from "../images/fa_ha.jpg"
import Footer1 from "./Footer";
function FirstHA() {
    return (
        <section className="about_section layout_padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="img-box">
                                <img src={srcani} id="attack" alt="" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="detail-box">
                            <div  className="heading_container">
                                <h2 style={{ color: 'brown', fontWeight: 'bolder'}}>
                                    Srčani udar prva pomoć: <span>SOS</span>
                                </h2>
                            </div>
                            <p>
                                - Odmah pozovite broj 124 ako sumnjate da neko ima srčani udar.<div></div>
                                - Imajte lokalni broj hitne pomoći na brzom biranju.<div></div>
                                - Ne dajte nikakve lijekove pacijentu u pokušaju da ih sami liječite.<div></div>
                                - Započnite sa kardiopulmonalnom reanimacijom ako pacijent gubi svijest. <div></div>
                            </p>
                        </div>

,                    </div>
                </div>
            </div>
        </section>
    );
}



function SecondHA() {
    return (
        <section className="department_section layout_padding">
            <div className="department_container">
                <div className="container ">
                    <div className="heading_container heading_center">
                        <h2 style={{ color: "brown", fontWeight: 'bolder', textAlign: 'center' }}>
                            Koraci koje treba poduzeti prilikom prve pomoći kod srčanog udara:
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
                                        Korak broj 1:
                                    </h5>
                                    <p>
                                        Prvi korak koji trebate poduzeti kada sumnjate da neko
                                        ima srčani udar jest da pozovete pomoć. Trebali biste
                                        odmah birati broj 112 i zatražiti hitnu pomoć ili se
                                        povezati s obližnjim zdravstvenim ustanovama.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-2">
                            <div className="box ">

                                <div className="detail-box">
                                    <h5 style={{ color: "brown", fontWeight: 'bolder' }}>
                                        Korak broj 2:
                                    </h5>
                                    <p>

                                        Analizirajte zdravstveno stanje pogođene osobe i provjerite da li diše.
                                        Dodatno, provjerite da li osoba ima puls pregledajući isti na njihovom zglobu.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-2">
                            <div className="box ">
                                <div className="detail-box">
                                    <h5  style={{ color: "brown", fontWeight: 'bolder' }}>
                                        Korak broj 3(a):
                                    </h5>
                                    <p>

                                        Ukoliko osoba ne diše, odmah trebate započeti <b style={{ color: "brown", fontWeight: 'bolder' }}>reanimaciju srca.</b>
                                        Reanimacija srca, poznata kao CPR (kardiopulmonalna reanimacija), je mjera koja se primjenjuje kako bi se spasila osoba koja može imati srčani udar ili se nalazi u stanju gušenja.
                                        CPR za srčani udar može izvoditi bilo ko – prolaznici ili prvi odazivači.
                                        Sam CPR podrazumijeva ponavljajuće i brze pritiske na prsni koš u ritmu od oko 100-120 puta u minuti, sve dok medicinska pomoć ne stigne.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-2">
                            <div className="box ">

                                <div className="detail-box">
                                    <h5 style={{ color: "brown", fontWeight: 'bolder' }}>
                                        Korak broj 3(b):
                                    </h5>
                                    <p>

                                        Ako osoba nije bez svijesti, ali pokazuje očigledne znakove srčanog udara, trebate učiniti sljedeće:
                                        Zamolite osobu da sjedne i pokuša se opustiti.
                                        Pitajte ih da otpuste uske odjevne predmete ako ih nose.
                                        Pitajte ih uzimaju li lijekove za bol u prsima. Ako da, organizirajte lijekove i pomozite im da ih uzmu.
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
function HeartAttack() {
    return (
        <div>
            <Navbar/>
            <FirstHA />
            <SecondHA />
            <Footer1/>

        </div>
    );
}

export default HeartAttack;

