import { LightningElement } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';

export default class Saveresume extends LightningElement {
    strNamef;
    strNameL;
    stremail;
    // Change Handlers.
    fnameChangedHandler(event){
        this.strNamef = event.target.value;
    }
    lnameChangedHandler(event){
        this.strNameL = event.target.value;
    }
    emailChangedHandler(event){
        this.stremail = event.target.value;
    }
    // Insert record.
    createAccount(){
        // Creating mapping of fields of Account with values
        var fields = {'First_Name__c' : this.strNamef, 'Last_Name__c' : this.strNameL, 'Email__c' : this.stremail};

        // Record details to pass to create method with api name of Object.
        var objRecordInput = {'apiName' : 'Resume__c', fields};
        // LDS method to create record.
        
        createRecord(objRecordInput).then(response => {
            
            alert('Account created with Id: ' +response.id);
            console.log('response' + response);

        }).catch(error => {
            alert('Error: ' +JSON.stringify(error));
        });
    }
}