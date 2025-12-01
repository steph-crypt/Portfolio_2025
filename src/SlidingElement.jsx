import useInView from "./useInView.jsx";

export default function SlidingElement() {
  const [ref, isVisible] = useInView({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`slide-in-right ${isVisible ? "visible" : ""}`}
      style={{ width: "300px", height: "200px", background: "#ffb703" }}
    >
        <div className="about-me">
            <h3>About Me</h3>
            <p>
                I am an experienced Frontend engineer with expertise in AI Machine Learning. I build beautiful scalable, mobile-first React and Next.js applications, intelligent chatbots, and train models.
            </p>
          </div>
          <div className="neural-image">
            <img className="neural" src="/—Pngtree—human brain neural network connections_21128488.png" alt="neural" />
          </div>
    </div>
  );
}