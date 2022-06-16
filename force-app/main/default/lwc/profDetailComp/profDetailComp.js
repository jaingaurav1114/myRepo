import { LightningElement } from 'lwc';

export default class ProfDetailComp extends LightningElement {

    summ ='';
    jobTitle ='';
    companyName ='';
    jStartDate ='';
    jEndDate ='';
    jobCity ='';


    profDetailHandler(event){
        if(event.target.label === 'Professional Summary'){
            this.summ = event.target.value;
        }
        
        else if(event.target.label === 'Job Title'){
            this.jobTitle= event.target.value;
        }
        
        else if(event.target.label === 'Comapny Name'){
            this.companyName = event.target.value;
        }
    
        else if(event.target.label === 'Job Start Date'){
            this.jStartDate = event.target.value;
        }
        
        else if(event.target.label === 'Job End Date'){
            this.jEndDate = event.target.value;
        }
    
        else{
            this.jobCity = event.target.value;
        }
    }
}