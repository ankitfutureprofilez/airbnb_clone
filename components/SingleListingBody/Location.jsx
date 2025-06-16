import React from "react";

const Location = React.forwardRef(({ listing }, ref) => {
  let record;
  try {
    record = JSON?.parse(JSON?.parse(listing?.location));
    console.log("record" ,record)
  } catch (error) {
    console.error("Error parsing JSON:", error);
  }

  const latitude = parseFloat(record?.latitude);
  const longitude = parseFloat(record?.longitude);

  const mapSrc = `https://www.google.com/maps?q=${latitude},${longitude}&hl=es;&output=embed`;

  return (
    <div ref={ref} className="py-8">
      <h1 className="text-2xl mb-4 font-semibold">Location</h1>
      <p className="text-md mb-4">{listing?.lt}</p>
      <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-md">
        <iframe
          title="Google Map Location"
          width="100%"
          height="100%"
          loading="lazy"
          allowFullScreen
          src={mapSrc}
          className="border-0 w-full h-full"
        ></iframe>
      </div>
    </div>
  );
});

export default React.memo(Location);
