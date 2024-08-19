import React from "react";
import aos from "aos";
import pic1 from "../../assets/one.jpg";
import pic2 from "../../assets/two.jpg";
import pic3 from "../../assets/three.jpg";
import pic4 from "../../assets/four.jpg";
import pic5 from "../../assets/five.jpeg";
import pic6 from "../../assets/six.jpg";
import pic7 from "../../assets/seven.jpg"; 
import pic8 from "../../assets/eight.jpg";
import './projects.css'



//list of projects
const carlist=[
    {
        name:"SENNA",
        aosDelay: "0",
        photo:pic1,
        descriptionname:"SUPRA SAE India 2023",
        achievement:["Overall AIR 27"],
        specification:["Bajaj Dominar 400 engine",<br/>,"Suspension ↠ Front - Pull rod, Rear-Push rod",<br/>,"Hanging Chassis",<br/>,"ASI 4130 Chromoly Chassis",<br/>,"7th in design",<br/>,"10th in acceleration"],
    },
    {
        name:"TUW E-KART",
        aosDelay: "200",
        photo:pic2,
        descriptionname:"GKDC GO-KART",
        achievement:["Overall AIR 3"],
        specification:["5KW, 48V PMSM MOTOR",<br/>,"IP67 rated LI-ion NMC battery pack",<br/>," 120AH 48V Capacity",<br/>,"SKF bearings",<br/>,"1st in Brakes",<br/>,"2nd in Acceleration",<br/>,"2nd in Business"],
    },
    {
        name:"MINNAL",
        aosDelay: "450",
        photo:pic3,
        descriptionname:"SAE SUPRA 2022",
        achievement:"Overall AIR 24",
        specification:["Baja Dominar 400 engine",<br/>,"ASI 4130 Chromoly",<br/>,"Suspension: Front and Rear Pushrod suspension"],
    },
    {
        name:"ZEUS E-27",
        aosDelay: "600",
        photo:pic4,
        descriptionname:"SAE E-BAJA 2020",
        achievement:"Overall AIR 24",
        specification:["4.5 kW BLDC motor",<br/>,"Battery 110 AH",<br/>,"AISI 4130 chromoly chassis",<br/>,"9th in cost",<br/>,"7th in design",<br/>,"10th in acceleration"],
    },
    {
        name:"UNLEASHED 5.0",
        aosDelay: "0",
        photo:pic5,
        descriptionname:"SUPRA SAE India 2019",
        achievement:"Overall AIR 24",
        specification:["KTM Duke 390RC (373.2 cc), 42.90HP@ 9000 RPM",<br/>,"Torsen T-1 Limited Slip Differential",<br/>,"AISI 4130 chromoly chassis",<br/>,"9th in cost",<br/>,"7th in design",<br/>,"10th in acceleration"],
    },
    {
        name:"TEQUIP GASOTECH UNLEASHED 5.0",
        photo:pic6,
        aosDelay: "250",
        descriptionname:"SUPRA SAE India 2017",
        achievement:"25th/60",
        specification:["KTM Duke 390RC (373.2 cc), 42.90HP@ 9000 RPM",<br/>,"Torsen T-1 Limited Slip Differential",<br/>,"AISI 4130 chromoly chassis",<br/>,"Double wishbone, rear rocker arm suspension",<br/>,"3D Printed air intake unit and remapped ECU"],
    },
    {
        name:"TEQUIP GASOTECH UNWIND 5.0",
        aosDelay: "500",
        photo:pic7,
        descriptionname:"BAJA SAE India 2017",
        achievement:"22nd/150",
        specification:["10HP Briggs & Stratton OHV engine",<br/>,"Chromoly AISI 4130",<br/>,"Front A arm, rear multi-link Suspension",<br/>,"Open differential",<br/>,"Custom made transmission",<br/>,"12th IN ENDURANCE"],
    },
    {
        name:"GASOTECH UNWIND 3.0",
        aosDelay: "750",
        photo:pic8,
        descriptionname:"BAJA SAE India 2017",
        achievement:"22nd/150",
        specification:["10HP Briggs & Stratton OHV engine",<br/>,"Chromoly AISI 4130",<br/>,"Double Wishbone Suspension",<br/>,"Open differential",<br/>,"Mahindra GIO transmission"],
    },
    
]





const Projects = () => {
  return (
    <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 relative bottom-48">
            {carlist.map(data=>(
                <div class="item" data-aos="fade-up" data-aos-delay={data.aosDelay}>
                    <div class='main'>
                    <img class='tokenImage' src={data.photo} alt="NFT" />
                    
                    <p class='description' className="pt-2 text-center">{data.descriptionname}</p>
                    <div class='tokenInfo'>
                        <div class="name">
                       
                        <p className="text-primary">{data.name}</p>
                        </div>
                        <div class="duration">
                        <ins>◷</ins>
                        <p>{data.achievement}</p>
                        </div>
                    </div>
                    <hr className="p-1" />
                    <div class='creator'>
                        <div class='wrapper'>
                        </div>
                            <p>{data.specification}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        

    </div>
  )
}

export default Projects