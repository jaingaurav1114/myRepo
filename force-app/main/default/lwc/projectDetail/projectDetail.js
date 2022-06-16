import { LightningElement } from 'lwc';

export default class ProjectDetail extends LightningElement {

    projectName='';
    projectDuration='';
    projectRole='';
    projectDescription='';

    projDetailsHandler(event){
        if(event.target.label === 'Project Name'){
            this.projectName= event.target.value;
        }

        else if(event.target.label === 'Project Duration'){
            this.projectDuration= event.target.value;
        }

        else if(event.target.label === 'Project Role'){
            this.projectRole= event.target.value;
        }

        else {
            this.projectDescription= event.target.value;
        }
    }
}