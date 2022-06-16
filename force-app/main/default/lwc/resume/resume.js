import { LightningElement } from 'lwc';

export default class Resume extends LightningElement {

  BasicDetailsPage =false;
  personalDetail=false;
  profdetails=false;
  projectDetails=false;
  educationDetails=false;


  Basic(event)
    {
        this.BasicDetailsPage = true;
        this.personalDetail = false;
        this.profdetails = false;
        this.projectDetails = false;
        this.educationDetails = false;
        
    }
    personalDetailPage(event)
    {
        this.BasicDetails = false;
        this.personalDetail = true;
        this.profdetails = false;
        this.projectDetails = false;
        this.educationDetails = false;
    }

      profdetailsaPage(event)
      {
      
      this.BasicDetails = false;
      this.personalDetail = false;
      this.profdetails = true;
      this.projectDetails = false;
      this.educationDetails = false;
      }

      projectDetailsPage(event)
      {
        this.BasicDetails = false;
        this.personalDetail = false;
        this.profdetails = false;
        this.projectDetails = true;
        this.educationDetails = false;
      }
      
      educationDetailsPage(event)
      {
        this.BasicDetails = false;
        this.personalDetail = false;
        this.profdetails = false;
        this.projectDetails = false;
        this.educationDetails = true;
      }
}