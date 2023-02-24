import { Component, OnInit} from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})

 // var res;  

export class Tab1Page implements OnInit{

   public weight: number = 10;
   public height: number = 2;

  res = this.weight / this.height;

  IMC = String(this.res)
  
  
  constructor(private toastController: ToastController) {}

  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: this.IMC,
      duration: 1500,
      position: position
    });

    await toast.present();
  }

  ngOnInit(){}

}

