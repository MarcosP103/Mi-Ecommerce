const Data = [
  {
    id: "1",
    titulo: "JBL 15",
    imag: "../assets/cajajbl.jpg",
    precio: 500,
    desc: "Parlante",
    carac: "150 watts",
    cat: "Cajas Acusticas",
    stock: 10,
    cantidad: 1,
  },
  {
    id: "2",
    titulo: "Casio 88",
    imag: "../assets/piano88.jpg",
    precio: 1500,
    desc: "Piano",
    carac: "8 octavas",
    cat: "Instrumentos",
    stock: 10,
    cantidad: 1,
  },
  {
    id: "3",
    titulo: "Behringer Xenyx1204",
    imag: "../assets/consola.jpg",
    precio: 345,
    desc: "Consola",
    carac: "Usb 12 Inputs 4 2 BUS",
    cat: "Consolas",
    stock: 10,
    cantidad: 1,
  },
  {
    id: "4",
    titulo: "Apogee PS01",
    imag: "../assets/antipop.jpg",
    precio: 12,
    desc: "Antipop",
    carac: "Filtro pop de microfono de fibra",
    cat: "Accesorios",
    stock: 10,
    cantidad: 1,
  },
  {
    id: "5",
    titulo: "Shure",
    imag: "../assets/shure.jpg",
    precio: 75,
    desc: "Mic",
    carac: "largo alcance",
    cat: "Microfonos",
    stock: 10,
    cantidad: 1,
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
