import { Component } from '@angular/core';
interface productos{
  titulo: string;
  imagen: string;
  tipoEnvio: string;
  precio: number;
  id: string
}
@Component({
  selector: 'app-angular-material',
  templateUrl: './angular-material.component.html',
  styleUrls: ['./angular-material.component.scss']
})
export class AngularMaterialComponent {
  cardSelec = false;
  product: productos = {
    titulo:"",
    imagen:"",
    tipoEnvio:"",
    precio:0,
    id: ""
  };
  arrObj = [
    {
      titulo: 'licuadora 3000',
      imagen: "https://http2.mlstatic.com/D_Q_NP_2X_807812-MLV48317824414_112021-AB.webp",
      tipoEnvio: "delivery",
      precio: 20,
      id: '1'
    },
    {
      titulo: "perolito",
      imagen: "https://http2.mlstatic.com/D_Q_NP_2X_775676-MLV49288010405_032022-AB.webp",
      tipoEnvio: "barco",
      precio: 200,
      id: '2'
    },
    {
      titulo: "control",
      imagen: "https://http2.mlstatic.com/D_Q_NP_2X_789721-MLV43767028508_102020-AB.webp",
      tipoEnvio: "helicoptero",
      precio: 8935,
      id: '3'
    },
    {
      titulo: "alexa",
      imagen: "https://http2.mlstatic.com/D_Q_NP_2X_605860-MLV49805949070_042022-AB.webp",
      tipoEnvio: "lancha",
      precio: 582,
      id: '4'
    },
    {
      titulo: "no se quejesto",
      imagen: "https://http2.mlstatic.com/D_Q_NP_2X_606756-MLV51018861844_082022-AB.webp",
      tipoEnvio: "carrito",
      precio: 8,
      id: '5'
    },
    {
      titulo: "un kenet",
      imagen: "https://http2.mlstatic.com/D_Q_NP_2X_622146-MLV41217181792_032020-AB.webp",
      tipoEnvio: "encava",
      precio: 99,
      id: '6'
    },
    {
      titulo: "impresora hp negra",
      imagen: "https://http2.mlstatic.com/D_Q_NP_2X_696448-MLV51262771555_082022-AB.webp",
      tipoEnvio: "Nave espacial",
      precio: 120,
      id: '7'
    },
    {
      titulo: "reloj",
      imagen: "https://http2.mlstatic.com/D_Q_NP_2X_665112-MLV49616203452_042022-AB.webp",
      tipoEnvio: "tren",
      precio: 20,
      id: '8'
    },
    {
      titulo: "nintendo switch",
      imagen: "https://http2.mlstatic.com/D_Q_NP_2X_876428-MLV52972715413_122022-AB.webp",
      tipoEnvio: "mario te lo lleva",
      precio: 400,
      id: '9'
    },
    {
      titulo: "esmeril",
      imagen: "https://http2.mlstatic.com/D_Q_NP_2X_737851-MLV32805229317_112019-AB.webp",
      tipoEnvio: "maritimo",
      precio: 50,
      id: '10'
    },
    {
      titulo: "bomba",
      imagen: "https://http2.mlstatic.com/D_Q_NP_2X_769155-MLV52641336062_112022-AB.webp",
      tipoEnvio: "terrestre",
      precio: 500,
      id: '11'
    },
    {
      titulo: "audifonos",
      imagen: "https://http2.mlstatic.com/D_Q_NP_2X_893572-MLV46540813329_062021-AB.webp",
      tipoEnvio: "terrestre",
      precio: 5,
      id: '12'
    }
  ];
  seleccionado(producto:productos){
    this.cardSelec = true;
    this.product = {
      titulo: producto.titulo,
      imagen: producto.imagen,
      tipoEnvio: producto.tipoEnvio,
      precio: producto.precio,
      id: producto.id
    };
  }
    
}
