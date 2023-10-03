const Data = [
  {
    titulo: "JBL 15",
    imag: "../assets/cajajbl.jpg",
    precio: "$500",
    desc: "parlante",
    carac: "150 watts",
    cat: "CajasAcusticas",
  },
  {
    titulo: "Casio 88",
    imag: "../assets/piano88.jpg",
    precio: "$1500",
    desc: "piano",
    carac: "8 octavas",
    cat: "Instrumentos",
  },
  {
    titulo: "Behringer Xenyx1204",
    imag: "../assets/consola.jpg",
    precio: "$345",
    desc: "consola",
    carac: "Usb 12 Inputs 4 2 BUS",
    cat: "Consolas",
  },
  {
    titulo: "Apogee PS01",
    imag: "../assets/antipop.jpg",
    precio: "$12",
    desc: "antipop",
    carac: "Filtro pop de microfono de fibra",
    cat: "Accesorios",
  },
  {
    titulo: "Shure",
    imag: "../assets/shure.jpg",
    precio: "$75",
    desc: "mic",
    carac: "largo alcance",
    cat: "Microfonos",
  },
];

export const getProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Data);
    }, 500);
  });
};
