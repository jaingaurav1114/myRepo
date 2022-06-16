import { LightningElement } from 'lwc';

export default class Demo2Comp extends LightningElement
 {
    username='';
    handleUser(event)
    {
        this.username=event.target.value;
    }
    handleClick()
    {

    }
 }