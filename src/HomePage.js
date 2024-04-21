import React, { useState, useEffect } from 'react';
import './Lookbook.css'
import Juhlissa_Unikko from './Images/Juhlissa_Unikko.png'
import MM_244_sh_juhlissa_unikko_093641_099_DE1 from './Images/MM_244_sh_juhlissa_unikko_093641_099_DE1.jpg'
import MM_244_sh_juhlissa_unikko_093641_099_FR3 from './Images/MM_244_sh_juhlissa_unikko_093641_099_FR3.jpg'
import {read, utils} from 'xlsx';


const HomePage = () => {

    // this is the initial code for the excel file reader
    // useEffect(() => { (async() => {
    //     const file = await fetch('url_goes_here')
    //     const ab = await file.arrayBuffer();

    //     const wb = read(ab);

    //     const ws = wb.Sheets[wb.SheetsNames[0]]
    //     const data = utils.sheet_to_json(ws);

    // })(); }, []);

    return (
        <div className='App'>
            <h2>COLLECTION LOOKBOOK</h2>
            <h1>Pre-Spring 24 Fashion</h1>
            <h4>IN-STOCK: Jan 10 - Feb 15</h4>
            <div className="look-book-grid">
                {/* Display look book images and information here */}
                <div className="look-item-main">
                    <img src={Juhlissa_Unikko} alt="Look 1" />
                    <p>Look description</p>
                </div>
                <div className="look-item-small">
                    <img src={MM_244_sh_juhlissa_unikko_093641_099_DE1} alt="Look 2" />
                </div>
                <div className="look-item-large">
                    <img src={MM_244_sh_juhlissa_unikko_093641_099_FR3} alt="Look 3" />
                </div>
                {/* Add more look items as needed */}
            </div>
        </div>
    );
};

export default HomePage;
