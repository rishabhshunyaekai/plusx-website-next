import IntroSection from "@/sharedComponents/introSection/introSection";

const introData = [
  {
    maintitle : `PlusX Electric Blog`,
    content: `EV charging tips, guides, and stories from Dubai&apos;s EV community`,
    additionalContent: "The PlusX Electric blog is where we share everything we learn from helping EV owners across Dubai and the UAE. From step-\nby-step guides on what to do when your battery dies, to tips on charger installation and insurance, to stories from our \nrescue team on the road, every post is written to make EV ownership easier for you. Whether you're new to EVs or\n have been driving one for years, you'll find something useful here.",
  },
];

function BlogIntro() {
  return (
    <>
      {introData.map((section, index) => (
        <IntroSection key={index} maintitle={section.maintitle} content={section.content} additionalContent={section.additionalContent} />
      ))}
    </>
  );
}

export default BlogIntro;
