import React, { useState } from 'react';
import Navbar from './Navbar'
import Menu from './Menu'
import './Styles/home_style.css';
import { TiLocationOutline } from 'react-icons/ti';
import { FaPen ,FaInfoCircle} from 'react-icons/fa';
import Card from './Cards/Card'

const Home = ()=>{

    var followers = "143,765";
   
    return(<>
   
        {/* First Navigation Bar */}
        <Navbar/>
        <header className="headerBg">
            <div className="mainHeader">
                <div className="headerTitle">
                    <h1>Computer Engineering</h1>
                    <h4>{followers} Computer Engineers follow this</h4> 
                </div>
            </div>
        </header>    
        <span className="smWritePost"><FaPen/></span>
       <main className="mainSection">
       {/* Second Navigation Bar */}
          <Menu/>

            <section className="heroSection">
        {/* ----------Posts----------- */}
                <div className="cards">
                    <Card   coverImage="https://s3-alpha-sig.figma.com/img/8f0b/5f52/59515bfc8d2d4ff8928be097376153e9?Expires=1632096000&Signature=PqqPCuVkpkfsRLBksliMqa9OjjXlX~Q3cgXKFnf6q-XTQWi1iF9QqOD5x-h-xWs2-t4yMA1T5hByyi9mDl4U0IMseLvrXVX4jXnzLSlUfa8Au-csvMXIBrc~3Ztk1TfWSz-vfRDf0qZ5o8SjcfXa0RePho0CJI8A4S5LjiJ7sh89rtnrD7P~Zw4xru4cqzBHPNBQtRBwp0nco8xNXmVHROL4l~uqLZ9yyBJyD9XX1RbPXrMDU9OZJFhiH4VfEMzck5ulnsr9LtJBdODBYEzECEZA9FpDmYGdIo2A0B788RfcBq0IlJcqoLhpfbu-koVm8dsSI3Sazj1k5Nv5NFdWcg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                            cardType="✍ Article"
                            heading="What if famous brands have regular fonts? Meet RegulaBrands!"
                            description="I’ve worked in UX for the better part of a decade. From now on, I plan to rei…"
                            profilePic="https://s3-alpha-sig.figma.com/img/d809/8d9d/f42d73f4b2b7835b4c918c4edcf10f64?Expires=1632096000&Signature=QbZFMZzmryyJQ5aXXoKLxgR9d2V0zU04ORijPxg2P5nYJ0tgCm-e3ZXuOMbecLgq-S~4Ur~APIHSQrQd5XDn7-y5xpmKMf-~AiDo5uKnyy6XvbPwq7YozWOU1HVL7PahYeGrHGWSpo9vlIdE1nqbySZ52NQZWQo~d-22fjtJETALDveatAsPmAIub3jDjv8qqml9lqaTaatJl2NwxdADpE78Lnps8wkG8OTz32AxR~vg1QVnRFd9KP7o7Q3XlzxVU-QUoJv8bRX6TCWhj-HBX95HeIBePuQX9hPuvR~0yf5PhBbIaUc9bazzvf4xNhNQjeKzAd8ygc1wEBvnvPlOwg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                            userName="Sarthak Kamra"
                    ></Card>

                    
                    <Card   coverImage="https://s3-alpha-sig.figma.com/img/250a/24fe/c8e32137d06a7bb3fd57b6dfb4e07bfe?Expires=1632096000&Signature=duLI1mbrzql6mXy~qc2PhCepMpEFUsp0jagCU9agCKvALMzhhF630jWNMqrim28g3fKnKM5lxv5yxfsyA2Q8q2QpfV7lWGzNeKSSHYv2mV7QggIlCB~vcstcMM878mVVHguCWXfa6S9Pnx0xnReErPGpSms2XL5pKkQqZOd7X-KqLO8EFcQcrroMkOiK2l7N5ppOYnEX~nOXlGzMJubFeYFqfrbqWnFoMhjbbXWzays7~jol-ahjYN7A3O9WTQBWCOXwIXUR5KA3kYrEgSv7hXELenfev5wsoPpMLi9BkM8bvqyqR9URxPXdxsfSDGWeLcFw8F~e1E-mn4zO5E3kWA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                            cardType="🔬 Education"
                            heading="Tax Benefits for Investment under National Pension Scheme launched by Government"
                            description="I’ve worked in UX for the better part of a decade. From now on, I plan to rei…"
                            profilePic="https://s3-alpha-sig.figma.com/img/c20f/9a59/15d7211204149d93adda6dfafb5d81f2?Expires=1632096000&Signature=ILbRzVZogM9A82PHowbeErzI1bbpcYftfvVNaGevl0hNPNZPEMr7eQoxWNDCyK99c812sAbgNAyCRybfRlwktBj22aM8lzQ6WXff3TuYCjUQntFdf0rfRD7WG0~nR~W1bgEl0r-JmBnOASOkdffnb3jCUaH8se99giYbp1f9dx2QaGIXZJUnZQsvy8yZ~3FTh8o-ajcCXY3qPWL3AKBsh5R7xTnk7KqcYLlvBMwYHZ5BPdeOT~t6jxpFisk6DrjgscZKRZ8Q~Zpb1QuxnJFSm9AXKGwtnxRSY5RYfjVePeZiNsIzWesd4g~wJvE6x1Inw~KP5nSQrIh0EkORjkvKeA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                            userName="Sarah West"
                    ></Card>
                    
                    <Card   EventCard = {true}
                            EventLocation = "Ahmedabad, India"
                            EventDate = "Fri, 12 Oct, 2018"
                            coverImage="https://s3-alpha-sig.figma.com/img/bdc0/79a9/a2e530610a1b91c9682ba7889c87c1b2?Expires=1632096000&Signature=ZHhF5vEORltxOw0b77hdgh2Zpwtxc2sc-E2pTGO1Td5ZIXjpxxR-A8NymiOQhWQrLnEtVqFGOjPrxMkL7Au9~Nf3YxUSfw3Yfg7Kch-8IOAplQ4l9NMqFmFTf0ILB-TJ9CHflLwhTlyAZRvJB8Vk1sT0kPt64b--NQEF8Pu9Km0RKmeum7SL1fxPqEKH8h1YI1AEPqzuiW3FEVIYLysTru5hN077E6Nh6Xfk4z~IcGlfJABPOdWFixqa2j-Ix1st0bdHYtpf9mOMTAl0XZ-ziXWHrSkxmJ78cHjKtfEtp36rmQeGPzGsprGVxfArSSEwfFJ7K6UJVsBMLVQLnNg5Ag__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                            cardType="🗓️ Meetup"
                            heading="Finance & Investment Elite Social Mixer @Lujiazui"
                            profilePic="https://s3-alpha-sig.figma.com/img/b8a9/097f/c3ac7682e52df2e10d0a36ec3f243a44?Expires=1632096000&Signature=MeD4CWyYWLLSqMg6O4-ymkMYSJsOnQjCWx2-DEOO-wZUMoX95KPXJujGOcBIkwMLrIlI4BL7UCHPIWytw3TWSLPo6BLqfWIyWNbzVW1OIEsXxi8e~3BzzeJp4uIzRazF06W0FRBssdOfxyk0zz72LdaxCysMM8nuAfgqfnrxz0wp3P9KdwIfb~3n0zYZtvYiseuaS2rEUm6DOwM4PyKOS3IuFyTh0CPHALACJlDQBivWWRN~4OhidI5~WYWBVbuXZXdnRouejQjFk6QR0no80c2VF4uFCfOlJFYWjSIwpZ2c9IfYc1IeQBamWt4lQMLhrrt5RlF~-gy1yrqGG30Tgg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                            userName="Ronal Jones"
                    ></Card>

                    <Card   NeedCoverImage = {false}
                            JobCard={true}
                            JobCompany="Innovaccer Analytics Private Ltd."
                            JobLocation="Noida, India"
                            cardType="💼️ Job"
                            heading="Software Developer"
                            profilePic="https://s3-alpha-sig.figma.com/img/8199/8e3c/09c5683fd07ee58841475464a08ce69f?Expires=1632096000&Signature=NlxxtqLJVTD1inGoSaGxCdoo4tuEXJ34iAm6OEQHsbYEunvFZCrXG~LgdXmjKoKqJrYBJlYaq6xeHH-CWTZ0cgcDahtIBzdLMf7tg1Zwf7YRLp1FJX8d3RWI1Y8uQvFm6hS-kdC0XTOX22DqU8uSGogih-UTeqIufQf0R9Kk~USd7QKTbnVCKqjr40UyhX~q2l6Zg9JFx-iFJMd9skNz~q-IFiq0~XsRTf0pmOsLObgszYmwmAaw~7aYjPL1TDqUxTToCN11UQjtXm0dSEQ7khBn5krKnZ1raZV27397Qmvtkx~N6G6lVEoLPOjDmR~YwgiID3H9kP~C~AnXGpq2SA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                            userName="Joseph Gray"
                    ></Card>


                </div>

                <div className="locationDetais">
                   <div className="LocInput"><TiLocationOutline/><input type="text" placeholder="Enter your location"/></div>
                   <div className="info">
                   <div><FaInfoCircle/></div>
                   <div><p>Your location will help us serve better and extend a personalised experience.</p></div>
                   </div>
                   
                </div>
               
            </section>

        </main>
       
        </>
    )
}

export default Home;