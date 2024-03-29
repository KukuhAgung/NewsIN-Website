import React from "react";
import { FaCircle } from "react-icons/fa";

const News = [
  {
    id: 1,
    title:
      "Media Tenar Prancis Soroti Timnas Indonesia Buat Troussier Dipecat - CNN Indonesia",
    image:
      "https://akcdn.detik.net.id/visual/2023/05/18/philippe-troussier_169.jpeg?w=650&q=90",
    publishedAt: "2024-03-28T12:07:38Z",
  },
  {
    id: 2,
    title:
      "STY: Beberapa Pemain Keturunan Akan Dinaturalisasi Sebelum Juni - CNN Indonesia",
    image:
      "https://akcdn.detik.net.id/visual/2024/03/21/timnas-indonesia-menang-melawan-vietnam-3_169.jpeg?w=650&q=90",
    publishedAt: "2024-03-28T12:07:38Z",
  },
  {
    id: 3,
    title:
      "Badai Matahari Bombardir Bumi, Radiasi Jebol Atmosfer - CNBC Indonesia",
    image:
      "https://akcdn.detik.net.id/visual/2024/01/01/asap-membubung-di-atas-gaza-saat-matahari-terbenam-di-tengah-konflik-yang-sedang-berlangsung-antara-israel-dan-kelompok-islam-_169.jpeg?w=715&q=90",
    publishedAt: "2024-03-28T11:30:00Z",
  },
  {
    id: 4,
    title:
      "Curhat Jokowi Kena Bully Saat Rebut Freeport ke Pangkuan RI - detikFinance",
    image:
      "https://akcdn.detik.net.id/community/media/visual/2024/03/08/jokowi-dalam-keterangan-persnya-usai-meresmikan-pelaksanaan-ijd-di-kabupaten-madiun-jawa-timur_169.jpeg?w=700&q=90",
    publishedAt: "2024-03-28T11:08:18Z",
  },
  {
    id: 5,
    title: "Flu singapura bukan flu setelah pergi ke Singapura - ANTARA",
    image:
      "https://img.antaranews.com/cache/800x533/2024/03/28/IMG_0027.jpeg.webp",
    publishedAt: "2024-03-28T10:41:18Z",
  },
];
function Other() {
  return (
    <div className="flex flex-col gap-y-4 px-4">
      <div className="flex gap-x-1 items-center">
        <span className="font-bold rounded-full text-primary">|</span>
        <h6 className="text-[16px] font-semibold text-primary leading-[2%]">
          Latest Other
        </h6>
      </div>
      <div className="flex flex-col gap-y-4">
        {News.map((news) => (
          <div key={news.id} className="flex gap-4 md:w-[90%]">
            <div className="flex items-center justify-center w-full md:w-[30%] ">
              <img src={news.image} alt={news.image} className="rounded-md h-[70%] md:h-full" />
            </div>
            <div className="w-full md:w-[60%] flex flex-col gap-y-3 p-4">
              <div className="flex flex-col gap-y-4 md:w-[90%]">
                <h1 className="text-title font-bold text-[23px]">
                  {news.title}
                </h1>
                <div className="flex gap-3 items-center">
                  <h6 className="text-primary font-semibold text-[11px]">
                    Published at
                  </h6>
                  <FaCircle className="text-sub w-[8px] h-[8px]" />
                  <p className="text-sub font-medium text-[9px]">
                    {news.publishedAt}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Other;
