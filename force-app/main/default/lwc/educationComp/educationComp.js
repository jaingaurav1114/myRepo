import { LightningElement } from 'lwc';

export default class EducationComp extends LightningElement {

    schCollege = '';
    schCollegeName = '';
    startDate = '';
    endDate = '';
    eduCity = '';

    eduDetailHandler(event){
        if(event.target.label === 'School/College'){
            this.schCollege = event.target.value;
        }
    
        else if(event.target.label === 'School Name/College Name'){
            this.schCollegeName = event.target.value;
        }

        else if(event.target.label === 'Start Date'){
            this.startDate = event.target.value;
        }

        else if(event.target.label === 'End Date'){
            this.endDate = event.target.value;
        }
    
        else{
            this.eduCity = event.target.value;
        }
    }
}