import * as React from "react";
import Header from "./Header";
import Info from "./Info";
import Footer from "./Footer";
import Test1 from "./Test1";

export default function Test(){
    return(
        <React.Fragment>
                <Header/>
                <Info/>
                <Test1/>
                <Footer/>
        </React.Fragment>
    )
}