import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  query = 'My Custom text 1';
  artists: any;
  isAuth: boolean;

  // showArtist(e: any, artisItemt: { name: string; }){
  //   console.log(e)
  //   this.query = artisItemt.name
  // }

  showArtist(e: any){
    this.query = "NEW VALUE"
  }

  constructor(){
    this.isAuth = false;
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    )
    this.artists = [
      {
        "name":"Barot Bellingham",
        "shortname":"Barot_Bellingham",
        "reknown":"Royal Academy of Painting and Sculpture",
        "bio":"Barot has just finished his final year at The Royal Academy of Painting and Sculpture, where he excelled in glass etching paintings and portraiture. Hailed as one of the most diverse artists of his generation, Barot is equally as skilled with watercolors as he is with oils, and is just as well-balanced in different subject areas. Barot's collection entitled \"The Un-Collection\" will adorn the walls of Gilbert Hall, depicting his range of skills and sensibilities - all of them, uniquely Barot, yet undeniably different",
        "status":'active'}
      ,
      {
        "name":"Jonathan G. Ferrar II",
        "shortname":"Jonathan_Ferrar",
        "reknown":"Artist to Watch in 2012",
        "bio":"The Artist to Watch in 2012 by the London Review, Johnathan has already sold one of the highest priced-commissions paid to an art student, ever on record. The piece, entitled Gratitude Resort, a work in oil and mixed media, was sold for $750,000 and Jonathan donated all the proceeds to Art for Peace, an organization that provides college art scholarships for creative children in developing nations",
        "status":''}
      ,
      {
        "name":"Hillary Hewitt Goldwynn-Post",
        "shortname":"Hillary_Goldwynn",
        "reknown":"New York University",
        "bio":"Hillary is a sophomore art sculpture student at New York University, and has already won all the major international prizes for new sculptors, including the Divinity Circle, the International Sculptor's Medal, and the Academy of Paris Award. Hillary's CAC exhibit features 25 abstract watercolor paintings that contain only water images including waves, deep sea, and river.",
        "status":'active'
      }
    ];
  }

  onAlumer(){
    console.log('');
  }

  getColor(){
    return 'red';
  }
}
