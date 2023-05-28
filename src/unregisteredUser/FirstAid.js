import React, {useEffect, useState} from 'react';
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HeartAttack.css';
import Navbar from "./Navbar";
import {useParams} from "react-router";
import axios from "axios";


function FirstAid() {
    const url = 'http://127.0.0.1:8000/'

    const [bolest, setBolest] = useState([])

    const { id } = useParams()

    async function fetchLesson(){
        const response =  await axios.get(`${url}bolest/${id}/`)
        console.log(`${url}bolest/${id}`)
        console.log(response.data)
        setBolest(response.data[0])
        console.log('HEJ')

    }

    useEffect(()=>{
        fetchLesson()
    },[])
    return (
        <div>
            <Navbar/>
            <section className="about_section layout_padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="img-box">
                                <img src={bolest.image} id="attack" alt="" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="detail-box">
                                <div  className="heading_container">
                                    <h2 style={{ color: 'brown', fontWeight: 'bolder'}}>
                                        {bolest.maintitle}: <span>SOS</span>
                                    </h2>
                                </div>
                                <p>
                                    {bolest.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="department_section layout_padding">
                <div className="department_container">
                    <div className="container ">
                        <div className="heading_container heading_center">
                            <h2 style={{ color: "brown", fontWeight: 'bolder', textAlign: 'center' }}>
                                {bolest.title}
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
                                            {bolest.subtitle1}:
                                        </h5>
                                        <p> {bolest.part1} </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-2">
                                <div className="box ">
                                    <div className="detail-box">
                                        <h5 style={{ color: "brown", fontWeight: 'bolder' }}>
                                            {bolest.subtitle2}:
                                        </h5>
                                        <p>
                                            {bolest.part2}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-2">
                                <div className="box ">
                                    <div className="detail-box">
                                        <h5  style={{ color: "brown", fontWeight: 'bolder' }}>
                                            {bolest.subtitle3}
                                        </h5>
                                        <p>
                                            {bolest.part3}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-2">
                                <div className="box ">
                                    <div className="detail-box">
                                        <h5 style={{ color: "brown", fontWeight: 'bolder' }}>
                                            {bolest.subtitle4}
                                        </h5>
                                        <p>
                                            {bolest.part4}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default FirstAid;

