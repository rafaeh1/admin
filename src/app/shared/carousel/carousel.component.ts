import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  private backgroundIndex: number = 0;
  private backgroundCount: number = 5;

  public backgroundImage = "url(../../../assets/img/carousel/0.jpg)";


  testimonies = [
    {
      hotelLogolUrl: "http://images.all-free-download.com/images/graphiclarge/riu_85177.jpg",
      personName: "Philip Anderson",
      personPosition: "Gerente Comercial",
      story: "\"La mejor aplicación para atención a clientes en la industria hotelera\""
    },
    {
      hotelLogolUrl: "http://insidethegate.com/wp-content/uploads/2016/01/VelasResorts-big.png",
      personName: "Charlie Eighta",
      personPosition: "Designer",
      story: "\"El mejor diseño en una aplicación que he visto en mi vida\""
    }
  ];

  testimonyIndex: number = 0;

  constructor() {

  }

  ngOnInit() {
    setInterval(() => {
      this.backgroundIndex = this.backgroundIndex < this.backgroundCount - 1 ? this.backgroundIndex + 1 : 0;
      this.backgroundImage = "url(../../../assets/img/carousel/" + this.backgroundIndex + ".jpg)";
      console.log("cambio", this.backgroundIndex);
    }, "5000");
  }

  changeTestimony(index: number) {
    this.testimonyIndex = index;
  }

}