import React from 'react';
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HeartAttack.css';
import Navbar from "./Navbar";
import './Bleeding.css';
import krv from "../images/bleeding.png"
import osa from "../images/osa.jpg"
import Footer1 from "./Footer";


function Cuts() {
    return (

        <section className="about_section layout_padding">

            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="img-box">
                            <img src={krv} id="attack" alt="posjekotina" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="detail-box">
                            <div className="heading_container">
                                <h2 style={{ color: 'brown', fontWeight: 'bolder'}}>
                                    Prva pomoć kod posjekotina/rana:
                                </h2>
                            </div>
                            <p>
                                - Pozovite hitnu pomoć na broj 124.<div></div>
                                - Započnite pružanjem prve pomoći povrijeđenoj osobi.<div></div>
                                - Ako rana krvari, stavite pritisak izravno na posjekotinu.<div></div>
                                - Ne vadite strana tijela iz rane.<div></div>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <a href="#ubod">

                <button>Prva pomoć - ubod insekta ⬇️</button>

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
                            Koraci koje treba poduzeti prilikom prve pomoći kod posjekotina:
                        </h2>
                        <hr/>
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
                                        Stavite pritisak izravno na posjekotinu koristeći čistu
                                        tkaninu poput gaze ili čistu maramicu.
                                        Ukoliko nemate čistu tkaninu možete primjeniti drugi postupak
                                        kao što je pritiskanje rane prstima.
                                        Ako krvarenje ne staje i krv prodire kroz materijal, nemojte ga uklanjati,
                                        već stavite novi sloj preko njega.
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
                                        Strana tijela i fragmetni kosti se ne vade iz rane prilikom
                                        ukazivanja prve pomoći.
                                        Ranu ne ispirati vodom ako krvarenje nije zaustavljeno.
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
                                        Dezinficirajte ranu, nanesite antiseptičku otopinu na ranu kako biste
                                        spriječili infekciju.
                                        Možete koristiti vodikov peroksid ili alkohol za dezinfekciju.
                                        Nakon što ste dezinficirali ranu, prekrijte je sterilnim flasterom ili zavojem
                                        kako biste je zaštitili od daljnjih oštećenja i infekcija.
                                        Osigurajte zavoj tako da bude čvrsto, ali ne previše stegnuto kako biste omogućili protok zraka.
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
                                        Povrijeđeni ekstremitet treba imobilisati i postaviti u horizontalni položaj.
                                        Ako je posjekotina duboka, velika, krvarenje je obilno ili
                                        je nastala od prljavog predmeta poput stakla ili metala,
                                        važno je potražiti medicinsku pomoć.
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

function Bite() {
    return (
        <section className="about_section layout_padding">
            <div  className="container" id="ubod">
                <div className="row">
                    <div className="col-md-6">
                        <div className="img-box">
                            <img src={osa} alt="ubod insketa"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="detail-box">
                            <div className="heading_container">
                                <h2 style={{ color: 'brown', fontWeight: 'bolder'}}>
                                    Prva pomoć kod uboda insekta:
                                </h2>
                            </div>
                            <p>
                                - Uklonite ubod što je prije moguće.<div></div>
                                - Ako primijetite da imate tešku reakciju na ubod insekta,
                                kao što su oticanje lica, otežano disanje ili vrtoglavica,
                                odmah potražite hitnu medicinsku pomoć.<div></div>

                            </p>
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
                <div className="container ">
                    <div className="heading_container heading_center">
                        <h2 style={{ color: "brown", fontWeight: 'bolder', textAlign: 'center' }}>
                            Koraci koje treba poduzeti prilikom prve pomoći kod uboda insekta:
                        </h2>
                        <hr/>
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
                                        Ako je ubod pčele, stršljena ili ose, važno je ukloniti žalac što prije.
                                        Možete to učiniti pomoću ravne površine poput kreditne kartice ili nokta.
                                        Nemojte koristiti pincetu jer može istisnuti dodatnu količinu otrova.
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
                                        Isperite područje uboda hladnom vodom.
                                        Ako je područje uboda oteklo, možete nanijeti hladni oblog kako biste
                                        smanjili oticanje i ublažili bol.
                                        Zamotajte led u čistu tkaninu i nježno držite na mjestu uboda nekoliko minuta.
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
                                        Možete nanijeti umirujući losion ili kremu na područje uboda kako biste
                                        umanjili svrbež, iritaciju i nelagodu.
                                        Iako je svrbež uobičajena reakcija na ubod insekta,
                                        važno je izbjegavati grebanje kako biste spriječili infekciju.
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
                                        Ako simptomi ne prolaze ili se pogoršavaju potražite pomoć kod
                                        doktora.
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


function Bleeding() {
    return (
        <div>
            <Navbar/>

            <Cuts/>

            <Steps/>

            <Bite/>

            <Steps2/>
            <Footer1/>

        </div>
    );
}

export default Bleeding;
