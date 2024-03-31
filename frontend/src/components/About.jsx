import React from "react";
function About() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.4"
      className="w-full py-20 bg-[#CDEA68] rounded-t-[30px] text-black"
    >
      <p className="px-[5vw] pb-20 font-[Poppins] text-[3vw] mt-[4vw] mr-[5vw] leading-[3.5vw]">
        Ochi is a strategic partner for fast-growing tech businesses that need
        to raise funds, sell products, explain complex ideas, and hire great
        people.
      </p>
      <div className="flex justify-between gap-20 p-20 border-t-[1px] border-b-[1px] border-[#74747466]">
        <p>What can you Expect:</p>
        <p className="max-w-[18vw]">
          We create tailored presentations to help you persuade your colleagues,
          clients, or investors. Whether it's live or digital, delivered for one
          or a hundred people. We believe the mix of strategy and design with a
          bit of coffee is what makes your message clear, convincing, and
          captivating.
        </p>
        <div className="mr-[7vw]">
          <p>Follow Us:</p>
          <ul>
            <li>Instagram</li>
            <li>Behance</li>
            <li>Facebook</li>
            <li>Linkdin</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
