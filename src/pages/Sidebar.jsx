import { React } from "react";
import { topCategories, Schedules } from "../context/data";
import { FaHashtag } from "react-icons/fa";
import Schedule from "../components/Schedule/index.jsx";

function Sidebar() {
  return (
    <section className="w-full flex flex-col gap-4 sticky top-0 h-screen">
      <div className="flex flex-col gap-y-6 px-4">
        <div className="">
          <div className="flex gap-x-1 items-center">
            <span className="font-bold rounded-full text-primary">|</span>
            <h6 className="text-[16px] font-semibold text-primary tracking-[2%]">
              Top Categories
            </h6>
          </div>
          <div className="flex flex-col gap-4 w-full p-2 rounded-md">
            {topCategories.map((category) => (
              <div className="flex gap-x-3 border-b pb-2 border-sub">
                <FaHashtag className="text-primary opacity-80" />
                <h6 className="text-[12px] text-footer font-semibold uppercase">
                  {category.tittle}
                </h6>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-y-4">
          <h6 className="text-[14px] font-semibold text-primary">
            Football Schedule
          </h6>
          <div className="flex flex-col border rounded-md">
            <div className="flex flex-wrap items-center">
              <div className="w-[50%] flex items-center justify-center border-r">
                <img
                  src="/images/usanetwork.png"
                  alt="usanetwork"
                  width="80px"
                />
              </div>
              <div className="w-[50%] flex items-center justify-center bg-gray-100">
                <img
                  src="/images/NBCSN.png"
                  alt="nbcsn"
                  width="80px"
                  className="opacity-70"
                />
              </div>
            </div>
            <div>
              <div className="border-t">
                <h6 className="text-[12px] text-text uppercase font-semibold px-2 py-1 w-fit m-2 bg-primary rounded-sm">
                  Today
                </h6>
              </div>
              <div className="flex justify-between items-center border-t p-2">
                <div className="flex items-center gap-x-2">
                  <h6 className="text-[14px] font-bold text-primary leading-[2%]">
                    2:15
                  </h6>
                  <span className="font-semibold rounded-full text-primary">
                    |
                  </span>
                  <h6 className="text-[12px]  text-primary">
                    Chelsea vs Manchester United
                  </h6>
                </div>
                <div className="flex gap-x-3 items-center w-fit">
                  <img
                    src="/images/england.png"
                    alt="england"
                    width="24px"
                    className="border rounded-sm"
                  />
                  <h6 className="text-[12px]  text-primary">Premiere League</h6>
                </div>
              </div>
            </div>
            <div>
              <h6 className="text-[12px] text-title uppercase font-semibold border-t p-2">
                Saturday, 6 April
              </h6>
              {Schedules.map((item) => (
                <Schedule key={item.id} time={item.time} match={item.match} />
              ))}
            </div>
          </div>
        </div>
        <div className="sticky top-0">
          <img src="/images/ads.png" alt="ads" />
        </div>
      </div>
    </section>
  );
}

export default Sidebar;
