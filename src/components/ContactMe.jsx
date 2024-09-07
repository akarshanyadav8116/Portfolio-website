/* eslint-disable react/prop-types */
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Tilt } from 'react-tilt';
const ContactMe = ({b, visible, myref}) => {
    const form=useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_yejhtnf', 'template_0txz2wp', form.current, 'wcIEco4uCAAHS5AwZ')
            .then((result) => {
                console.log('Success:', result.text);
            }, (error) => {
                console.log('Error:', error.text);
            });
        e.target.reset();
    }
  return (
    <>
        <div id="contactme" ref={(el) => (myref.current[3] = el)} className={`flex flex-col h-1/6 w-full text-center justify-center items-center text-6xl ${visible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
            <div id="contact" className="flex flex-col text-center justify-center items-center text-6xl gap-5 mx-36">
                Contact Me
                <div className="flex w-full justify-between gap-20">
                <form ref={form} onSubmit={sendEmail} className="flex flex-col font-light text-xl text-left">
                    <label className="mb-2" htmlFor="name">Full Name</label>
                    <input className="h-10 w-80 sm:w-96 lg:w-96 md:w-96 bg-gray-800 rounded-lg p-2 mb-3 focus:outline-none focus:ring-1 focus:ring-cyan-400" type="text" placeholder="Enter your full name" 
                    name="user_name" 
                    required
                    />
                    <label className="mb-2" htmlFor="email">Email</label>
                    <input className="h-10 w-80 sm:w-96 lg:w-96 md:w-96 bg-gray-800 rounded-lg p-2 mb-3 focus:outline-none focus:ring-1 focus:ring-cyan-400" type="email" placeholder="Enter your email address"
                    name="user_email" 
                    required/>
                    <label className="mb-2" htmlFor="subject">Subject</label>
                    <input className="h-10 w-80 sm:w-96 lg:w-96 md:w-96 bg-gray-800 rounded-lg p-2 mb-3 focus:outline-none focus:ring-1 focus:ring-cyan-400" type="text" placeholder="What's it for?"
                    name="subject"
                    required/>
                    <label className="mb-2" htmlFor="description">Description</label>
                    <textarea className="h-32 w-80 sm:w-96 lg:w-96 md:w-96 bg-gray-800 text-wrap rounded-lg p-2 mb-8 focus:outline-none focus:ring-1 focus:ring-cyan-400" type="text" placeholder="What's it for?" 
                    name="message"
                    required/>
                    <div className="flex justify-end mb-10"><input className="w-28 border-2 border-cyan-400 p-2 rounded-2xl hover:bg-cyan-400 hover:cursor-pointer" type="submit" value="Submit"/></div>
                </form>
                <div className="w-full h-full hidden sm:hidden lg:block md:hidden">
                    <Tilt
                        options={{
                        max: 25, // Maximum tilt angle in degrees
                        scale: 1.1, // Scale factor on hover
                        speed: 1000, // Transition speed in milliseconds
                        glare: true, // Enable glare effect
                        'max-glare': 0.5, // Maximum intensity of the glare effect
                        }}
                    >
                    <img className={`size-full ${b === true ? 'animate-levitate':null}`} src="../assets/Contact pic.svg" alt="contact me" />
                    </Tilt>
                </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default ContactMe;
