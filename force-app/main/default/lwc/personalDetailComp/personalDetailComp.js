import { LightningElement,track,api } from 'lwc';
import updateRecord from '@salesforce/apex/UpdateResume.updateRecord';
import RESUME_OBJECT from '@salesforce/schema/Resume__c';
import NAME from '@salesforce/schema/Resume__c.Name';
import ADDRESS from '@salesforce/schema/Resume__c.Address__c';
import COUNTRY from '@salesforce/schema/Resume__c.Country__c';
import EMAIL from '@salesforce/schema/Resume__c.Email__c';


export default class PersonalDetailComp extends LightningElement 
{
    @api recordId;
    @track fields=[NAME,ADDRESS,COUNTRY,EMAIL];
    objectApiName=RESUME_OBJECT;
    @track data=[];

    connectedCallback(){
        updateRecord()
        .then(result=>{
            this.data=result;
            console.log("result is"+this.data);
            this.recordId=result[0].Id;
            console.log('recordId is:'+this.recordId);

        })
        .catch(error=>{
            console.log("error occured");
        })
    }
    
    
    

}