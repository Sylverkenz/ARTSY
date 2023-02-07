import { Footer, NewsLetter } from "../components";
import { Link } from "react-router-dom";
import { pageAnim } from "../utils/animations";
import { motion } from "framer-motion";
import { drops } from "../utils/data";

function DropPage() {
  return (
    <motion.main variants={pageAnim} initial="hidden" animate="show">
      <section className="px-8 mdl:px-[10rem] font-Satoshi">
        <div className="font-Satoshi text-[2.4rem] text-[#BCB7B7] capitalize pb-[3rem] hidden mdl:block ">
          <Link to="/">home</Link> /
          <Link to="/drops" className="text-[#000]">
            Drop
          </Link>{" "}
        </div>
        <article className="dropTitle">
          <h5>Upcoming drops</h5>
          <p>Turn on notifications so that no drops will miss you.</p>
          <button>Notify me</button>
        </article>
        <div>
          {drops.map((drop, index) => {
            const { img, status, creator, name } = drop;
            return (
              <article
                key={index}
                className="flex flex-col sm:flex-row gap-10 mdl:gap-16 sm:h-[28rem] mdl:h-[35rem] mb-[8rem]"
              >
                <div className="w-full sm:w-[50%] overflow-hidden rounded-[1rem]">
                  <img src={img} alt={img} />
                </div>
                <div className="w-full sm:w-[40%] flex flex-col justify-between h-[35rem] sm:h-[28rem] mdl:h-auto">
                  <span
                    className="block text-[1.8rem] text-white uppercase px-16 py-4 rounded-[1rem] w-fit "
                    style={{
                      backgroundColor:
                        status === "live now"
                          ? "#3EA03B"
                          : status === "upcoming"
                          ? "#4693ED"
                          : "#999EA5",
                    }}
                  >
                    {status}
                  </span>
                  <h5 className="text-[1.6rem] mdl:text-[2rem]">
                    November 21 at 11 am WAT
                  </h5>
                  <h2 className="text-[2.4rem] font-medium mdl:text-[3.2rem] capitalize">
                    {name}
                  </h2>
                  <p className="text-[1.6rem] mdl:text-[2rem] text-[#616161]">
                    Lorem ipsum dolor sit amet consectetur. Amet odio a aenean
                    quis vitae tempus. Sed nunc tempus aliquet lectus ut
                    vulputate.
                  </p>
                  <p className="text-[2.2rem]">
                    Creator :{" "}
                    <span className="text-[#006ca2] capitalize">{creator}</span>
                  </p>
                  <button className="text-[1.8rem] block w-fit capitalize text-[#006ca2] border-b-2  border-[#006ca2]">
                    {status === "live now"
                      ? "join now"
                      : status === "upcoming"
                      ? "get notified"
                      : "view"}
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </section>
      <NewsLetter />
      <Footer />
    </motion.main>
  );
}

export default DropPage;
