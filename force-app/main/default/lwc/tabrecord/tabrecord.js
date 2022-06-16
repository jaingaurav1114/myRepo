import { LightningElement } from 'lwc';
import LightningConfirm from 'lightning/confirm'

export default class Tabrecord extends LightningElement {
//    activeTab = '1';

//    handleActive(event) {
//     this.activeTab = event.target.value;
//    }

//    get bDisableBackBtn(){
//     return Number(this.activeTab) == 1 ? true : false;
// }
// get bDisableNextBtn(){
//     return Number(this.activeTab) == 4 ? true : false;
// }

// goBack(){
//     let activeTabValue = Number(this.activeTab) - 1;
//     this.activeTab = activeTabValue.toString();
//   }
// goNext(){
//   let activeTabValue = Number(this.activeTab) + 1;
//   this.activeTab = activeTabValue.toString();
// }
  save()
{
   const result= LightningConfirm.open({
       Message : 'hi',
       variant: 'hello',
       label: 'this is value',
   });
}
}