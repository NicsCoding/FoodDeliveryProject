import { DotLottieReact } from "@lottiefiles/dotlottie-react";
const Loader = () => {
  return (
    <div className="for-Home-All">
      <DotLottieReact
        src="../../../public/Animation - 1729254580740.lottie"
        loop
        autoplay
        onError={(e) => console.error("Error Loading animation", e)}
      />
    </div>
  );
};

export default Loader;
