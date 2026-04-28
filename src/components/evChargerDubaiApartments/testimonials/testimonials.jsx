"use client";

const testimonials = [
  {
    text: `"My building had never approved an EV charger before. PlusX handled the entire conversation with the building management and got me approved in under two weeks. The installation itself took a day."`,
    name: "Junaid Alam",
    role: "Resident",
    location: "Dubai Marina",
    rating: 5,
  },
  {
    text: `"I was quoted three different prices by three different installers. PlusX gave me a fixed number after the site survey and stuck to it. The app is genuinely useful — I schedule all my charging during off-peak hours."`,
    name: "Rifat Omer",
    role: "Apartment Owner",
    location: "Business Bay",
    rating: 4,
  },
  {
    text: `"We had 12 residents in our tower who wanted chargers. PlusX worked with our residents association to set up a building-wide rollout instead of individual approvals. Much cleaner process for everyone."`,
    name: "Alexander Litvinov",
    role: "OA Chairperson",
    location: "JVC",
    rating: 5,
  },
];

import { useState }     from "react";
import style            from "./testimonials.module.css";
import SecondaryHeading from "@/sharedComponents/heading/secondaryHeading";
import Animated         from "@/sharedComponents/animatedComponent/animated";
import useVisibleCards  from "@/hooks/useVisibleCards";
import { IoStar }       from "react-icons/io5";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

function Testimonials() {
  const [index, setIndex] = useState(0);
  const visibleCards = useVisibleCards(3);

  const maxIndex   = testimonials.length - visibleCards;
  const handlePrev = () => { if (index > 0) setIndex(index - 1); };
  const handleNext = () => { if (index < maxIndex) setIndex(index + 1); };

  return (
    <section className="wrapper">
      <div className="container">
        <SecondaryHeading title={"What PlusX Electric Customers Say"} />

        <Animated className={style.sliderWrapper} animation="fade" easing="ease-in" duration={1000}>
          <div className={style.slider} style={{ transform: `translateX(-${index * (100 / visibleCards)}%)`}}>
            {testimonials.map((item, i) => (
              <div key={i} className={style.slide}>
                <div className={style.card}>
                  <div className={style.stars}>
                    {[...Array(5)].map((_, j) => <IoStar key={j} className={ j < item.rating ? style.starFilled : style.starEmpty } /> )}
                  </div>
                  <p className={style.text}>{item.text}</p>
                  <div>
                    <p className={style.name}>{item.name}</p>
                    <p className={style.meta}>{item.role}, {item.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Animated>

        {testimonials.length > visibleCards && (
          <div className={style.controls}>
            <button onClick={handlePrev} disabled={index === 0}><IoChevronBack /></button>
            <button onClick={handleNext} disabled={index === maxIndex}><IoChevronForward /></button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Testimonials;

// import { IoStar }       from "react-icons/io5";
// import style            from "./testimonials.module.css";
// import SecondaryHeading from "@/sharedComponents/heading/secondaryHeading";
// import Animated         from "@/sharedComponents/animatedComponent/animated";

// const testimonials = [
//   {
//     text: `"My building had never approved an EV charger before. PlusX handled the entire conversation with the building management and got me approved in under two weeks. The installation itself took a day."`,
//     name: "Amit Sharma",
//     role: "Resident",
//     location: "Dubai Marina",
//     rating: 4,
//   },
//   {
//     text: `"I was quoted three different prices by three different installers. PlusX gave me a fixed number after the site survey and stuck to it. The app is genuinely useful — I schedule all my charging during off-peak hours."`,
//     name: "Neha Kapoor",
//     role: "Apartment Owner",
//     location: "Business Bay",
//     rating: 4,
//   },
//   {
//     text: `"We had 12 residents in our tower who wanted chargers. PlusX worked with our residents association to set up a building-wide rollout instead of individual approvals. Much cleaner process for everyone."`,
//     name: "Rohit Verma",
//     role: "OA Chairperson",
//     location: "JVC",
//     rating: 5,
//   },
//   // {
//   //   text: `"Installation was smooth and professional. The team explained everything clearly and left the site clean."`,
//   //   name: "Sarah Khan",
//   //   role: "Homeowner",
//   //   location: "Downtown Dubai",
//   //   rating: 4,
//   // },
//   // {
//   //   text: `"Great customer support and transparent pricing. Highly recommend PlusX for EV charger setup."`,
//   //   name: "Vikram Singh",
//   //   role: "Resident",
//   //   location: "Palm Jumeirah",
//   //   rating: 5,
//   // },
//   // {
//   //   text: `"The scheduling feature in the app is a game changer. Saves me money every month."`,
//   //   name: "Anjali Mehta",
//   //   role: "EV Owner",
//   //   location: "Dubai Hills",
//   //   rating: 4,
//   // },
// ];

// function Testimonials() {
//   return (
//     <section className="wrapper">
//       <div className="container">
//         <SecondaryHeading title={"What PlusX Customers Say"} />

//         <Animated className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" animation="fade" easing="ease-in" duration={1000}>

//           {testimonials.map((item, index) => (
//             <div key={index} className={style.card}>

//               <div className={style.stars}>
//                 {[...Array(5)].map((_, i) =>  <IoStar key={i} className={ i < item.rating ? style.starFilled : style.starEmpty } /> )}
//               </div>

//               <p className={style.text}>{item.text}</p>

//               <div>
//                 <p className={style.name}>{item.name}</p>
//                 <p className={style.meta}>{item.role}, {item.location}</p>
//               </div>
//             </div>
//           ))}
//         </Animated>
//       </div>
//     </section>
//   );
// }

// export default Testimonials;