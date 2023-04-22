import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-descripcion',
  templateUrl: './descripcion.component.html',
  styleUrls: ['./descripcion.component.scss']
})
export class DescripcionComponent implements OnInit{
  idPro: any;
  
  constructor (private route: ActivatedRoute){
    
  }

  ngOnInit() {
    this.idReturn()
  }
  
  arrObj = [
    {
      titulo: 'licuadora 3000',
      imagen: "https://http2.mlstatic.com/D_Q_NP_2X_807812-MLV48317824414_112021-AB.webp",
      miniImg1: "https://http2.mlstatic.com/D_NQ_NP_797811-MLV51850101210_102022-O.webp",
      miniImg2: "https://http2.mlstatic.com/D_NQ_NP_715374-MLV51372747143_092022-O.webp",
      tipoEnvio: "delivery",
      precio: 20,
      id: '1'
    },
    {
      titulo: "perolito",
      imagen: "https://http2.mlstatic.com/D_Q_NP_2X_775676-MLV49288010405_032022-AB.webp",
      miniImg1: "https://http2.mlstatic.com/D_NQ_NP_905907-MLV52462020748_112022-V.webp",
      miniImg2: "https://http2.mlstatic.com/D_NQ_NP_868284-MLV52697734702_122022-V.webp",
      tipoEnvio: "barco",
      precio: 200,
      id: '2'
    },
    {
      titulo: "control",
      imagen: "https://http2.mlstatic.com/D_Q_NP_2X_789721-MLV43767028508_102020-AB.webp",
      miniImg1: "https://http2.mlstatic.com/D_NQ_NP_807722-MLV52085856301_102022-V.webp",
      miniImg2: "https://http2.mlstatic.com/D_NQ_NP_900929-MLV54630766188_032023-V.webp",
      tipoEnvio: "helicoptero",
      precio: 8935,
      id: '3'
    },
    {
      titulo: "alexa",
      imagen: "https://http2.mlstatic.com/D_Q_NP_2X_605860-MLV49805949070_042022-AB.webp",
      miniImg1: "https://http2.mlstatic.com/D_NQ_NP_750620-MLV54712430723_032023-W.webp",
      miniImg2: "https://http2.mlstatic.com/D_NQ_NP_619801-MLV46194556321_052021-W.webp",
      tipoEnvio: "lancha",
      precio: 582,
      id: '4'
    },
    {
      titulo: "no se quejesto",
      imagen: "https://http2.mlstatic.com/D_Q_NP_2X_606756-MLV51018861844_082022-AB.webp",
      miniImg1: "https://http2.mlstatic.com/D_NQ_NP_706590-MLV52520226571_112022-W.webp",
      miniImg2: "https://http2.mlstatic.com/D_NQ_NP_883472-MLV49620894296_042022-W.webp",
      tipoEnvio: "carrito",
      precio: 8,
      id: '5'
    },
    {
      titulo: "un kenet",
      imagen: "https://http2.mlstatic.com/D_Q_NP_2X_622146-MLV41217181792_032020-AB.webp",
      miniImg1: "https://http2.mlstatic.com/D_Q_NP_749944-MLV32047972571_092019-R.webp",
      miniImg2: "https://http2.mlstatic.com/D_NQ_NP_683774-MLV32047966948_092019-O.webp",
      tipoEnvio: "encava",
      precio: 99,
      id: '6'
    },
    {
      titulo: "impresora hp negra",
      imagen: "https://http2.mlstatic.com/D_Q_NP_2X_696448-MLV51262771555_082022-AB.webp",
      miniImg1: "https://http2.mlstatic.com/D_NQ_NP_874525-MLV51442090308_092022-W.webp",
      miniImg2: "https://http2.mlstatic.com/D_NQ_NP_861735-MLV47975931371_102021-W.webp",
      tipoEnvio: "Nave espacial",
      precio: 120,
      id: '7'
    },
    {
      titulo: "reloj",
      imagen: "https://http2.mlstatic.com/D_Q_NP_2X_665112-MLV49616203452_042022-AB.webp",
      miniImg1: "https://http2.mlstatic.com/D_NQ_NP_774649-MLV49654430293_042022-V.webp",
      miniImg2: "https://http2.mlstatic.com/D_NQ_NP_959627-MLV54439728228_032023-V.webp",
      tipoEnvio: "tren",
      precio: 20,
      id: '8'
    },
    {
      titulo: "nintendo switch",
      imagen: "https://http2.mlstatic.com/D_Q_NP_2X_876428-MLV52972715413_122022-AB.webp",
      miniImg1: "https://http2.mlstatic.com/D_NQ_NP_828750-MLV54383019343_032023-V.webp",
      miniImg2: "https://http2.mlstatic.com/D_NQ_NP_828750-MLV54383019343_032023-V.webp",
      tipoEnvio: "mario te lo lleva",
      precio: 400,
      id: '9'
    },
    {
      titulo: "esmeril",
      imagen: "https://http2.mlstatic.com/D_Q_NP_2X_737851-MLV32805229317_112019-AB.webp",
      miniImg1: "https://http2.mlstatic.com/D_NQ_NP_696920-MLV46267999332_062021-V.webp",
      miniImg2: "https://http2.mlstatic.com/D_NQ_NP_903525-MLV54132962608_032023-V.webp",
      tipoEnvio: "maritimo",
      precio: 50,
      id: '10'
    },
    {
      titulo: "bomba",
      imagen: "https://http2.mlstatic.com/D_Q_NP_2X_769155-MLV52641336062_112022-AB.webp",
      miniImg1: "https://http2.mlstatic.com/D_NQ_NP_618158-MLV52603839011_112022-V.webp",
      miniImg2: "https://http2.mlstatic.com/D_NQ_NP_779956-MLV51984013892_102022-V.webp",
      tipoEnvio: "terrestre",
      precio: 500,
      id: '11'
    },
    {
      titulo: "audifonos",
      imagen: "https://http2.mlstatic.com/D_Q_NP_2X_893572-MLV46540813329_062021-AB.webp",
      miniImg1: "https://http2.mlstatic.com/D_NQ_NP_996419-MLV53349235120_012023-V.webp",
      miniImg2: "https://http2.mlstatic.com/D_NQ_NP_760753-MLV51571519729_092022-V.webp",
      tipoEnvio: "terrestre",
      precio: 5,
      id: '12'
    }
  ];

  

  idReturn(){
    this.idPro = this.route.snapshot.paramMap.get('id');
    return this.idPro
  }
}

