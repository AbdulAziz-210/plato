//react-countdown

// import React from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import topImg from "../../assets/images/top-purple.png";
import boldBottomImg from "../../assets/images/bottom-bold-purple.png";

import "./index.css";

const Time = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5
  });

  return (
    <div className="time-section " ref={ref}>
      <img src={topImg} alt="" />
      <div className="time-wrapper">
        <p className="time-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl  m-auto text-center pb-12 px-2">
          You could spend thousands of hours researching the perfect safe
          solution, but we already did
        </p>
        <div className="time-folder">
          <div className="time-block">
            <ul className="time-list px-4 flex items-center justify-between m-auto text-center">
              <li className="time-item ">
                <span className=" text-4xl sm:text-6xl lg:text-8xl font-f0">
                  {inView && <CountUp start={0} end={3} duration={5} />}
                </span>
              </li>
              <li className="time-item">
                <span className="text-4xl sm:text-6xl lg:text-8xl font-f0">
                  {inView && <CountUp start={0} end={30} duration={5} />}
                </span>
              </li>
              <li className="time-item">
                <span className="text-4xl sm:text-6xl lg:text-8xl font-f0">
                  {inView && <CountUp start={0} end={4} duration={5} />}
                </span>
              </li>
              <li className="time-item">
                <span className="text-4xl sm:text-6xl lg:text-8xl font-f0">
                  {inView && <CountUp start={0} end={18} duration={5} />}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <img className="time-img" src={boldBottomImg} alt="" />
    </div>
  );
};

export default Time;

{
  //
  //
  //
  // import "./index.css";
  // import topImg from "../../assets/images/top-purple.png";
  // import timeImg from "../../assets/images/time-number.png";
  // import boldBottomImg from "../../assets/images/bottom-bold-purple.png";
  // import CountUp from "react-countup";
  // // import { useInView } from "@react-intersection-observer";
  // import { useInView } from "react-intersection-observer";
  // const Time = () => {
  //   const { ref, inView } = useInView({
  //     triggerOnce: true,
  //     threshold: 0.5
  //   });
  //   return (
  //     <div className="time-section">
  //       <img src={topImg} alt="" />
  //       <div className="time-wrapper">
  //         <p className="time-title text-6xl m-auto text-center pb-12">
  //           You could spend thousands of hours researching the perfect safe
  //           solution, but we already did
  //         </p>
  //         <div className="time-folder">
  //           <div className="time-block">
  //             <ul className="time-list flex items-center justify-between m-auto">
  //               <li className="time-item">
  //                 <span className="text-8xl font-f0">
  //                   {inView && <CountUp start={0} end={3} duration={5} />}
  //                 </span>
  //               </li>
  //               <li className="time-item">
  //                 <span className="text-8xl font-f0">
  //                   {inView && <CountUp start={0} end={30} duration={5} />}
  //                 </span>
  //               </li>
  //               <li className="time-item">
  //                 <span className="text-8xl font-f0">
  //                   {inView && <CountUp start={0} end={4} duration={5} />}
  //                 </span>
  //               </li>
  //               <li className="time-item">
  //                 <span className="text-8xl font-f0">
  //                   {inView && <CountUp start={0} end={18} duration={5} />}
  //                 </span>
  //               </li>
  //             </ul>
  //           </div>
  //         </div>
  //       </div>
  //       <img className="time-img" src={boldBottomImg} alt="" />
  //     </div>
  //   );
  // };
  // export default Time;
}
{
  /* <img className="time m-auto" src={timeImg} alt="" /> */
}
