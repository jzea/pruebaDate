import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DatePicker } from '@ionic-native/date-picker';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  myDate:string;
  myTime:string;
  myDateNTime:string;
  current_datetime;
  constructor(private datePicker: DatePicker) {

  }
  ionViewDidEnter(){
    let Today = new Date().toISOString();
    let date = String(Today).substr(0,10)
    let Time = new Date().toLocaleTimeString();
    this.current_datetime = date+" "+Time;
    }
  getDate() {
    // sunday, monday, tuesday...etc... by russian
    let dayNames = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Пятница", "Суббота"]; 
    const date = new Date();
    console.log(date.getDay())
    let day = dayNames[date.getDay()];
    return day
}
showDatepicker(){
  this.datePicker.show({
    date: new Date(),
    mode: 'date',
    androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK,
    okText:"Save Date",
    todayText:"Set Today"
  }).then(
    date => {
      this.myDate = date.getDate()+"/"+date.toLocaleString('default', { month: 'long' })+"/"+date.getFullYear();
    },
    err => console.log('Error occurred while getting date: ', err)
  );
} 
}
