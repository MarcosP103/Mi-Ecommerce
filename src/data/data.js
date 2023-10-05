const Data = [
  {
    id: "1",
    titulo: "JBL 15",
    imag: "../assets/cajajbl.jpg",
    precio: "$500",
    desc: "parlante",
    carac: "150 watts",
    cat: "cajasacusticas",
    stock: "10",
  },
  {
    id: "2",
    titulo: "Casio 88",
    imag: "../assets/piano88.jpg",
    precio: "$1500",
    desc: "piano",
    carac: "8 octavas",
    cat: "instrumentos",
    stock: "10",
  },
  {
    id: "3",
    titulo: "Behringer Xenyx1204",
    imag: "../assets/consola.jpg",
    precio: "$345",
    desc: "consola",
    carac: "Usb 12 Inputs 4 2 BUS",
    cat: "consolas",
    stock: "10",
  },
  {
    id: "4",
    titulo: "Apogee PS01",
    imag: "../assets/antipop.jpg",
    precio: "$12",
    desc: "antipop",
    carac: "Filtro pop de microfono de fibra",
    cat: "accesorios",
    stock: "10",
  },
  {
    id: "5",
    titulo: "Shure",
    imag: "../assets/shure.jpg",
    precio: "$75",
    desc: "mic",
    carac: "largo alcance",
    cat: "microfonos",
    stock: "10",
  },
];

export const getProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Data);
    }, 500);
  });
};

export const getProdcutoById = (DataId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Data.find((Data) => Data.id === DataId));
    }, 500);
  });
};

export const getProductoByCat = (DataCat) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Data.filter((prod) => prod.cat === DataCat));
    }, 500);
  });
};
