import React from "react";

const Contact = () => {
  return (
    <section id="contactMeSection">
      <h1 className="bg-slate-50 dark:bg-slate-700 text-center text-5xl py-72">
        <span className="text-orange-500">Contact</span> Me
      </h1>
      <div className="contactCards bg-slate-50 dark:bg-slate-700 px-2 gap-10 flex flex-col md:justify-center md:flex-row pb-32">
        <div className="cards flex justify-center gap-8 flex-col p-10 bg-orange-400 rounded-lg shadow-xl md:w-96">
          <h1 className="cardTitle text-center text-3xl">Phone Number</h1>
          <h1 className="cardInfo text-center text-3xl">(514) 770-5230</h1>
        </div>
        <div className="cards h-fit flex justify-center gap-8 flex-col p-10 bg-orange-400 rounded-lg shadow-xl">
          <h1 className="cardTitle text-center text-3xl">E-mail address</h1>
          <h1 className="cardInfo text-center text-3xl">bertg1427@gmail.com</h1>
        </div>
      </div>
    </section>
  );
};

export default Contact;
