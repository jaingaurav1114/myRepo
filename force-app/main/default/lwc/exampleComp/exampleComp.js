import { LightningElement,track } from 'lwc';
import updateRecord from '@salesforce/apex/UpdateResume.updateRecord';


export default class ExampleComp extends LightningElement 
{
    @track data=[];
    @track columns=[
        {label:'Name',fieldName:'Name'},
        {label:'Id',fieldName:'Id'}
    ];
    connectedCallback()
    {
        updateRecord()
        .then(result=>{
            this.data=result;
            const array=result;
            const dataObj=array[0].Id;
            console.log('id :'+dataObj);
        })
        .catch(error=>{
            console.log("error has been occured");
        })
    }
}