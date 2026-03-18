import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";




function Package() {

    const images= {
        src:"src/images/whatsapp def.jpeg",
        alt:"whatsapp def"
    }
  return (
    <div>
      <img src={images.src} alt={images.alt} className="img-fluid" />
    </div>
  );
}

export default Package;

