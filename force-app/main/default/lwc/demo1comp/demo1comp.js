import { LightningElement,track } from 'lwc';

export default class Demo1comp extends LightningElement 
{
    @track arr=[];
    handleUser(event)
    {
        this.arr=event.target.value;
    }

}