import SecondaryHeading from "@/sharedComponents/heading/secondaryHeading";
import Testimonial      from "@/sharedComponents/testimonial/testimonial";

const testimonials = [
  {
    text: `"My BYD Atto 3 died in my JLT building parking at 11 PM. The tow company said they couldn't access B2. PlusX van drove straight down, jump-started the 12V, and I was home by midnight. Lifesaver."`,
    name: "Rashid M.",
    location: "BYD Atto 3 owner, JLT",
    // role: "Resident",
    rating: 5,
  },
  {
    text: `"Ran out of charge on Al Khail Road coming back from Abu Dhabi. PlusX reached me in 45 minutes and gave me enough charge to get home to Dubai Marina. Cost me a fraction of what a tow would have been."`,
    name: "Sarah T.",
    // role: "Apartment Owner",
    location: "Tesla Model Y owner, Dubai Marina",
    rating: 4,
  },
  {
    text: `"We manage 12 EVs for our delivery fleet. Two breakdowns in one week, both fixed on-site in under an hour each. We switched to PlusX subscription after that. No more towing bills."`,
    name: "Khalid A.",
    // role: "OA Chairperson",
    location: "Fleet Manager, Dubai South",
    rating: 5,
  },
  {
    text: `"My Mercedes EQA showed a dead dashboard even though I charged it the night before. Turned out the 12V battery was gone. PlusX technician diagnosed it in 5 minutes and jump-started it. I had no idea that was even a thing."`,
    name: "Priya S.",
    // role: "OA Chairperson",
    location: "Mercedes EQA owner, Business Bay",
    rating: 5,
  },
];

function Testimonials() {
  return (
    <section className="wrapper">
      <div className="container">
        <SecondaryHeading title={"What Our Customers Say"} />
        <Testimonial testimonials={testimonials} />
      </div>
    </section>
  );
}

export default Testimonials;