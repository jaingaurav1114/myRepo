import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import RESUME_OBJECT from '@salesforce/schema/Resume__c';
import FIRSTNAME from '@salesforce/schema/Resume__c.Name';
import LASTNAME from '@salesforce/schema/Resume__c.Last_Name__c';
import EMAIL from '@salesforce/schema/Resume__c.Email__c';


export default class BasicDetailsComp extends LightningElement
{
    ObjectApiName=RESUME_OBJECT;
    fnameField=FIRSTNAME;
    lnameField=LASTNAME;
    emailField=EMAIL;
    

    handleSuccess(event)
    {  
        const events = new ShowToastEvent ({
            
            title:"Successful",
            message:"Record created",
            variant:"success"
        });
        this.dispatchEvent(events);
    }

    

   
    
}