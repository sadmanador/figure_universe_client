import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const About = () => {
  return (
    <div className="text-center py-10">
      <h1 className="font-bold text-3xl mb-6">About</h1>
      <div
        className=" min-h-screen  "
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1499334650700-42e4f7ffc63d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className=" bg-gradient-to-b from-black lg:pt-36 text-white h-screen">
          <div className="max-w-lg mx-auto" data-aos="zoom-out-up">
            <p className="text-xl font-semibold">
              "Figure Universe - Unleashing the Power of Imagination"
            </p>
            <p>
              At Figure Universe, we believe in the limitless potential of
              action figures to ignite imagination and transport individuals to
              extraordinary worlds. We curate a diverse collection of action
              figures, encompassing iconic superheroes, legendary characters,
              and fantastical beings from across universes. Our commitment to
              quality ensures that every figure is meticulously crafted with
              exceptional attention to detail. Whether you're a passionate
              collector or a dedicated fan, Figure Universe is your gateway to
              an immersive realm of action and adventure. Unleash your
              imagination and embark on thrilling journeys with Figure Universe
              - Where Action Figures Come to Life!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
