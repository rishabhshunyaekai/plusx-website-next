function Animated({ children, animation, easing, duration, ...props }) {

  const aosProps = {
    "data-aos": animation,
    "data-aos-easing": easing || "ease-out",
    "data-aos-duration": duration || 1000,
  };

  return (
    <div {...aosProps} {...props}>
      {children}
    </div>
  );
}

export default Animated;