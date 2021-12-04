export default function Index({ crypto }) {
  return (
    <div className="max-h-screen">
      <div className="grid-cols-6 grid gap-10 bg-brand-blue-900 p-20">
        <div className="bg-brand-blue-700 col-span-2 rounded-2xl shadow relative p-10">
          <div>
            <img src="/il1.png" className="h-72 w-full object-cover"></img>
          </div>
          <div className="">
            <h1 className="text-white font-semibold text-md uppercase">
              Crypto
              <span className="block mt-1 text-2xl tracking-wider">
                Portfolio
              </span>
            </h1>
          </div>
        </div>
        <div className="bg-brand-blue-700 col-span-4 rounded-2xl shadow p-10 relative">
          <div className="mb-10">
            <h1 className="text-white uppercase font-semibold text-lg tracking-wider">
              Portfolio
            </h1>
          </div>
          <div className="grid grid-cols-7 gap-20">
            {["OCT", "NOV", "DEC", "FEB", "MAR", "APR", "JUN"].map((i) => (
              <div key={i}>
                <div className="bg-gradient-to-t from-yellow-500 via-indigo-700 to-purple-600 w-5 py-20 "></div>
                <div className="text-brand-gray-800 -ml-1 font-bold text-sm mt-2">
                  {i}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-brand-blue-700 col-span-3 rounded-2xl shadow p-10 relative">
          <div className="mb-10">
            <h1 className="text-white uppercase font-semibold text-lg tracking-wider">
              Rates
            </h1>
          </div>
          <div className="h-56  overflow-y-scroll firefox-scrollbar">
            {crypto.data.map((i) => (
              <div className="flex w-full my-5" key={i.id}>
                <i className="fa fa-facebook text-2xl rounded-full text-white" />
                <div className="text-white my-auto px-5 flex justify-between w-full ">
                  <div>
                    <span className="uppercase font-semibold tracking-wider text-brand-gray-700">
                      {i.name}
                    </span>
                    <span className="pl-5 text-brand-gray-500 ">
                      {new Intl.NumberFormat("de-DE", {
                        style: "currency",
                        currency: "USD",
                        maximumFractionDigits: 2,
                      }).format(i.quote.USD.price)}
                    </span>
                  </div>
                  <span
                    className={`${
                      i.quote.USD.percent_change_1h < 0
                        ? "text-red-500"
                        : "text-green-500"
                    }`}
                  >
                    {new Intl.NumberFormat("en-IN", {
                      maximumSignificantDigits: 3,
                    }).format(i.quote.USD.percent_change_1h)}{" "}
                    %
                  </span>
                  <i className="fa fa-arrow-down text-sm my-auto rounded-full text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-brand-blue-700 col-span-3 rounded-2xl shadow p-10 relative">
          <div></div>
        </div>
      </div>
    </div>
  );
}
export async function getServerSideProps({ req, res }) {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  const top10 = await fetch(
    "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=10",
    {
      method: "GET",
      headers: {
        "X-CMC_PRO_API_KEY": "3e6350fe-ce25-4ba0-89fb-6857d171447a",
      },
    }
  )
    .then((response) => response.json())
    .then((resJson) => {
      return resJson;
    });

  return {
    props: { crypto: top10 }, // will be passed to the page component as props
  };
}
