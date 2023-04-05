import React from "react";

const Card = () => {
  const imgDir = "/img/";

  const cardsCiudades = [
    {
      ciudad: "París",
      img: imgDir + "paris.jpg",
      descripcion:
        "París, la capital de Francia, es una importante ciudad europea y un centro mundial del arte, la moda, la gastronomía y la cultura. Su paisaje urbano del siglo XIX está entrecruzado por amplios bulevares y el río Sena. Aparte de estos hitos, como la Torre Eiffel y la catedral gótica de Notre Dame del siglo XII, la ciudad es famosa por su cultura del café y las tiendas de moda de diseñador a lo largo de la calle Rue du Faubourg Saint-Honoré.",
    },
    {
      ciudad: "Múnich",
      img: imgDir + "munich.jpg",
      descripcion:
        "Múnich, la capital de Baviera, tiene edificios con siglos de antigüedad y varios museos. La ciudad es conocida por su celebración anual del Oktoberfest y sus cervecerías, incluida la famosa Hofbräuhaus, fundada en 1589. En la Altstadt (Ciudad Vieja), la plaza central Marienplatz tiene monumentos, como el neogótico Neues Rathaus (ayuntamiento), con un espectáculo popular de xilófonos que recrea historias del siglo XVI.",
    },
    {
      ciudad: "Nueva York",
      img: imgDir + "nueva_york.jpg",
      descripcion:
        "Nueva York incluye 5 distritos que se ubican donde el río Hudson desemboca en el océano Atlántico. En su centro se encuentra Manhattan, un distrito densamente poblado que se encuentra entre los principales centros comerciales, financieros y culturales del mundo. Sus sitios icónicos incluyen rascacielos, como el Empire State Building, y el amplio Central Park. El teatro Broadway se ubica en la zona del Times Square iluminada con neones.",
    },
    {
      ciudad: "Tokio",
      img: imgDir + "tokyo.jpg",
      descripcion:
        "Tokio, la ajetreada capital de Japón, mezcla lo ultramoderno y lo tradicional, desde los rascacielos iluminados con neones hasta los templos históricos. El opulento santuario Shinto Meiji es conocido por su puerta altísima y los bosques circundantes. El Palacio Imperial se ubica en medio de grandes jardines públicos. Los distintos museos de la ciudad ofrecen exhibiciones que van desde el arte clásico (en el Museo Nacional de Tokio) hasta un teatro kabuki reconstruido (en el Museo Edo-Tokyo).",
    },
    {
      ciudad: "Toronto",
      img: imgDir + "toronto.jpg",
      descripcion:
        "Toronto, la capital de la provincia de Ontario, es una importante ciudad de Canadá ubicada a lo largo de la orilla noroeste del lago Ontario. Es una metrópolis dinámica con un centro de rascacielos altos, todos sobrepasados por la icónica Torre CN. Toronto también tiene muchas áreas verdes, desde el prolijo óvalo de Queen's Park hasta el High Park de 400 acres y sus senderos, instalaciones deportivas y zoológico.",
    },
    {
      ciudad: "Boston",
      img: imgDir + "boston.jpg",
      descripcion:
        "Boston es la capital de Massachusetts y su ciudad más grande. Fundada en 1630, es una de las ciudades más antiguas de los Estados Unidos. El rol fundamental que desempeñó en la Independencia de los Estados Unidos se destaca en el Freedom Trail (Sendero de la Libertad), una ruta peatonal de 4 km de sitios históricos que cuenta la historia de la fundación de la nación. Una parada, la antigua casa de reuniones Faneuil Hall, es un mercado popular.",
    },
    {
      ciudad: "Londres",
      img: imgDir + "londres.jpg",
      descripcion:
        "Londres, la capital de Inglaterra y del Reino Unido, es una ciudad del siglo XXI con una historia que se remonta a la época romana. En su centro se alzan el imponente Palacio del Parlamento, la torre del icónico reloj Big Ben y la Abadía de Westminster, lugar de las coronaciones monárquicas británicas. Al otro lado del río Támesis, la rueda de observación London Eye ofrece vistas panorámicas del complejo cultural South Bank y de toda la ciudad.",
    },
    {
      ciudad: "Zúrich",
      img: imgDir + "zurich.jpg",
      descripcion:
        "Zurich Insurance Group, comúnmente conocida como Zurich, es una empresa de seguros suiza, con sede en Zúrich, Suiza. Zurich Insurance Group es la empresa de seguros más grande de Suiza.​",
    },
    {
      ciudad: "Edimburgo",
      img: imgDir + "edimburgo.jpg",
      descripcion:
        "Edimburgo es la capital compacta y montañosa de Escocia. Tiene una ciudad antigua medieval y una elegante ciudad nueva georgiana con jardines y edificios neoclásicos. Sobre la ciudad se alza el castillo de Edimburgo, que alberga las joyas de la corona de Escocia y la Piedra del Destino, que se usó en la coronación de los gobernantes de Escocia. Arthur's Seat es una imponente cima en el Parque de Holyrood con vistas panorámicas y Calton Hill tiene monumentos y memoriales en su parte superior.",
    },
    {
      ciudad: "Sídney",
      img: imgDir + "sidney.jpg",
      descripcion:
        "Sídney, capital de Nueva Gales del Sur y una de las ciudades más grandes de Australia, es famosa por su Casa de la Ópera de Sídney junto al puerto, con un característico diseño con forma de velas. El enorme Puerto Darling y el puerto Circular Quay más pequeño son núcleos de la vida ribereña, con el arqueado puente de la bahía de Sídney y el reconocido Real Jardín Botánico que se encuentra cerca. La plataforma exterior de la Sydney Tower, el Skywalk, ofrece vistas en 360 grados de la ciudad y los suburbios.",
    },
  ];

  return (
    <>
      {cardsCiudades.map((ciudad) => (
        // "width: 50%; height:auto; display:block; margin:auto;
        // padding: 10px; border: solid 1px; border-color: black;";
        <div
          style={{
            width: "50%",
            height: "auto",
            display: "block",
            margin: "10px auto 10px auto",
            padding: "10px",
            border: "solid 1px",
            borderRadius: "10px",
            borderColor: "black",
          }}
        >
          <h2>{ciudad.ciudad}</h2>
          <img
            src={ciudad.img}
            alt={ciudad.ciudad}
            style={{
              width: "80%",
              height: "auto",
              borderRadius: "10px",
              display: "block",
              margin: "auto",
            }}
          />
          <p>{ciudad.descripcion}</p>
        </div>
      ))}
    </>
  );
};

export default Card;
