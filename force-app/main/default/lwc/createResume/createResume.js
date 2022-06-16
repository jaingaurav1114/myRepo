import { LightningElement , track ,wire} from 'lwc';
import {NavigationMixin} from 'lightning/navigation';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import { getPicklistValues } from 'lightning/uiObjectInfoApi';
import Resume_Object from '@salesforce/schema/Resume__c';
import Country_c from '@salesforce/schema/Resume__c.Country__c';
import City_c from '@salesforce/schema/Resume__c.City__c';
import state_c from '@salesforce/schema/Resume__c.State__c';
import SchoolandCollege from '@salesforce/schema/Resume__c.School_and_College__c';





export default class CreateResume extends NavigationMixin(LightningElement) 
{
    isModalOpen=false;
    isPersonalModal=false;
    isProfModal=false;
    isProjModal=false;
    isEduModal=false;

    fname='';
    lname='';
    email='';

    connectedCallback()
    {
        this.isModalOpen=true;
    }
    closeModal()
    {
        this.isModalOpen=false;
    }
    personalDetailClick()
    {
        this.isModalOpen=false;
        this.isPersonalModal=true;

    }
    profDetailClick()
    {
        this.isPersonalModal=false;
        this.isProfModal=true;

    }
    projectDetailClick()
    {
        this.isProfModal=false;
        this.isProjModal=true;
    }
    educationDetailClick()
    {
        this.isProjModal=false;
        this.isEduModal=true;
    }

    // Previous button code

    prevBasicDetail(event)
    {
        this.isPersonalModal=false;
        this.isModalOpen=true;
    }
    prevPersonalDetail(event)
    {
        this.isProfModal=false;
        this.isPersonalModal=true;
    }
    prevProfDetail(event)
    {
        this.isProjModal=false;
        this.isProfModal=true;
    }
    prevProjectDetail(event)
    {
        this.isEduModal=false;
        this.isProjModal=true;

    }

    // Basic Detail Fields
     
    basicHandler(event)
    {
        if(event.target.label==='First Name')
        {
            this.fname=event.target.value;
        }
        else if(event.target.label==='Last Name')
        {
            this.lname=event.target.value;
        }
        else
        {
            this.email=event.target.value;
        }

    }

    // Personal Detail Fields

    jobTitle='';
    Address='';
    Phone='';
    City='';
    DOB='';
    country='';
    PlaceofBirth='';
    postalcode='';
    

    handleJobTitle(event)
    {
        this.jobTitle  = event.target.value;
    }
    handleAddress(event){
    this.Address = event.target.value;
    }
     
            handlePhone(event)
            {
       
             this.Phone=event.target.value;
           }
            
          handleCity(event)
           {
            this.City =  event.target.value;
            }

          handleDOB(event)
          {
            this.DOB = event.target.value;
          }

          handlecountry(event)
          {
            
            this.country =  event.target.value;
          }

          handlestate(event)
          {
              this.state = event.target.value;
          }

         handlePlaceofBirth(event)
         {
          this.PlaceofBirth = event.target.value;
         }

         handlepostalcode(event)
         {
        this.postalcode = event.target.value;
         }


      //picklistfield of oject
        @wire(getObjectInfo, { objectApiName: Resume_Object })

        resumeInfo;

        optionofcountry;
        optionofcity;
           //picklistfield of country
        @wire(getPicklistValues,

          {
              recordTypeId: '$resumeInfo.data.defaultRecordTypeId', 
              fieldApiName: Country_c
          }

        )
        Country_cPicklist;

          //picklist of city
        @wire(getPicklistValues,
            {
                recordTypeId: '$resumeInfo.data.defaultRecordTypeId',
                fieldApiName: City_c
            })

            City_cpicklist;



         //picklist of state
       @wire(getPicklistValues, {
           recordTypeId:'$resumeInfo.data.defaultRecordTypeId',
           fieldApiName: state_c
       })
       state_cpicklist;


    // Professional Detail Fields

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

   // Project Details Field
   projectName='';
   projectDuration='';
   projectRole='';
   projectDescription='';



   handleProjectName(event)
    {
     this.projectName = event.target.value;
    }

   handleProjectDuration(event)
    {
        this.projectDuration = event.target.value;
    }

   handleProjectRole(event)
    {
        this.projectRole = event.target.value;
    }

   handleProjectDescription(event)
    {
        this.projectDescription = event.target.value;
    }
    


// Education Details Fields

schCollege = '';
schCollegeName = '';
startDate = '';
endDate = '';
eduCity = '';
    
eduDetailHandler(event)
{
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
     
     @wire(getPicklistValues, {
    recordTypeId:'$resumeInfo.data.defaultRecordTypeId',
    fieldApiName: SchoolandCollege
      })
      SchoolandCollegepicklist;





}