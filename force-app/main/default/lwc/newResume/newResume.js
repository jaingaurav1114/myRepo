import { LightningElement ,wire } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import { getPicklistValues } from 'lightning/uiObjectInfoApi';
import Resume_Object from '@salesforce/schema/Resume__c';
import NAME from '@salesforce/schema/Resume__c.Name';
import LAST_NAME from '@salesforce/schema/Resume__c.Last_Name__c';
import EMAIL from '@salesforce/schema/Resume__c.Email__c';
import ADDRESS from '@salesforce/schema/Resume__c.Address__c';
import PHONE from '@salesforce/schema/Resume__c.Phone__c';
import Country_c from '@salesforce/schema/Resume__c.Country__c';
import STATE from '@salesforce/schema/Resume__c.State__c';
import City_c from '@salesforce/schema/Resume__c.City__c';
import DOB from '@salesforce/schema/Resume__c.DOB__c';
import PLACE_OF_BIRTH from '@salesforce/schema/Resume__c.PlaceOfBirth__c';
import POSTAL_CODE from '@salesforce/schema/Resume__c.PostalCode__c';
import JOB_TITLE from '@salesforce/schema/Resume__c.Job_Title__c';
import COMPANY_NAME from '@salesforce/schema/Resume__c.Comapny_Name__c';
import JOB_START_DATE from '@salesforce/schema/Resume__c.Job_Start_Date__c';
import JOB_END_DATE from '@salesforce/schema/Resume__c.Job_End_Date__c';
import PROF_CITY from '@salesforce/schema/Resume__c.Prof_City__c';
import PROF_SUMMARY from '@salesforce/schema/Resume__c.Profesional_Summary__c';
import PROJECT_NAME_c from '@salesforce/schema/Resume__c.Project_Name__c';
import PROJECT_DURATION_c from '@salesforce/schema/Resume__c.Project_Duration__c';
import ROLES_c from '@salesforce/schema/Resume__c.Roles_And_Responsibilities__c';
import PROJECT_DESC_c from '@salesforce/schema/Resume__c.Project_Description__c';
import SCHOOL_COLLEGE from '@salesforce/schema/Resume__c.School_and_College__c';
import SCHOOL_COLLEGE_NAME from '@salesforce/schema/Resume__c.School_Collage_Name__c';
import START_DATE from '@salesforce/schema/Resume__c.Start_Date__c';
import END_DATE from '@salesforce/schema/Resume__c.End_Date__c';
import EDUCATION_CITY from '@salesforce/schema/Resume__c.EduOfCity__c';



export default class NewResume extends LightningElement 
{
    activeSection = [''];
            // handleToggleSection(event) {
            //     this.activeSectionMessage =
            //         'Open section name:  ' + event.detail.openSections;
            // }

            handleToggleSection(event) 
            {
               
                   const  active2 = event.detail.openSections;
            }

            handleSetActiveSectionC() 
            {
                const accordion = this.template.querySelector('.example-accordion');

                accordion.activeSectionName = 'C';
            }

            //basic detail
            fname='';
            lname='';
            email='';

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

            address='';
            phone='';
            country='';
            state='';
            city='';
            DOB='';
            PlaceOfBirth='';
            postalCode='';

            handleAddress(event)
            {
            this.address = event.target.value;
            }
  
            handlePhone(event)
            {
            
             this.phone=event.target.value;
            }
            handleCountry(event)
            {
                
                this.country =  event.target.value;
            }
            handleState(event)
            {
                this.state = event.target.value;
            }
                
            handleCity(event)
            {
                this.city =  event.target.value;
            }

            handleDOB(event)
            {
                this.DOB = event.target.value;
            }
 

            handlePlaceOfBirth(event)
            {
            this.placeOfBirth = event.target.value;
            }

            handlePostalCode(event)
            {
            this.postalCode = event.target.value;
            }

            //picklistfield of object
            @wire(getObjectInfo, { objectApiName: Resume_Object })
             resumeInfo;

                //picklistfield of country
            @wire(getPicklistValues,{
                    recordTypeId: '$resumeInfo.data.defaultRecordTypeId', 
                    fieldApiName: Country_c
                })
            Country_cPicklist;

            //picklist of state
            @wire(getPicklistValues, {
                recordTypeId:'$resumeInfo.data.defaultRecordTypeId',
                fieldApiName: STATE
            })
                STATEpicklist;

                //picklist of city
            @wire(getPicklistValues,{
                    recordTypeId: '$resumeInfo.data.defaultRecordTypeId',
                    fieldApiName: City_c
                })
                City_cpicklist;
     
               

            


        // Professional Detail Fields

            jobTitle ='';
            companyName ='';
            jStartDate ='';
            jEndDate ='';
            jobCity ='';
            profSumm ='';


                    profDetailHandler(event)
                    {
                        if(event.target.label === 'Professional Summary')
                        {
                            this.summ = event.target.value;
                        }
                    
                        else if(event.target.label === 'Job Title')
                        {
                            this.jobTitle= event.target.value;
                        }
                    
                        else if(event.target.label === 'Comapny Name')
                        {
                            this.companyName = event.target.value;
                        }

                        else if(event.target.label === 'Job Start Date')
                        {
                            this.jStartDate = event.target.value;
                        }
                    
                        else if(event.target.label === 'Job End Date')
                        {
                            this.jEndDate = event.target.value;
                        }

                        else
                        {
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
            fieldApiName: SCHOOL_COLLEGE
            })
            SCHOOL_COLLEGEpicklist;

            onSave()
            {
                const fields={};
                fields[NAME.fieldApiName]=this.fname;
                fields[LAST_NAME.fieldApiName]=this.lname;
                fields[EMAIL.fieldApiName]=this.email;
                fields[ADDRESS.fieldApiName]=this.address;
                fields[PHONE.fieldApiName]=this.phone;
                fields[Country_c.fieldApiName]=this.country;
                fields[STATE.fieldApiName]=this.state;
                fields[City_c.fieldApiName]=this.city;
                fields[DOB.fieldApiName]=this.DOB;
                fields[PLACE_OF_BIRTH.fieldApiName]=this.placeOfBirth;
                fields[POSTAL_CODE.fieldApiName]=this.postalCode;
                fields[JOB_TITLE.fieldApiName]=this.jobTitle;
                fields[COMPANY_NAME.fieldApiName]=this.companyName;
                fields[JOB_START_DATE.fieldApiName]=this.jStartDate;
                fields[JOB_END_DATE.fieldApiName]=this.jEndDate;
                fields[PROF_CITY.fieldApiName]=this.jobCity;
                fields[PROF_SUMMARY.fieldApiName]=this.profSumm;
                fields[PROJECT_NAME_c.fieldApiName]=this.projectName;
                fields[PROJECT_DURATION_c.fieldApiName]=this.projectDuration;
                fields[ROLES_c.fieldApiName]=this.projectRole;
                fields[PROJECT_DESC_c.fieldApiName]=this.projectDescription;
                fields[SCHOOL_COLLEGE.fieldApiName]=this.schCollege;
                fields[SCHOOL_COLLEGE_NAME.fieldApiName]=this.schCollegeName;
                fields[START_DATE.fieldApiName]=this.startDate;
                fields[END_DATE.fieldApiName]=this.endDate;
                fields[EDUCATION_CITY.fieldApiName]=this.eduCity;
                



                console.log("fields :"+JSON.stringify(fields));

                const recordInput={apiName:Resume_Object.objectApiName,fields};
                createRecord(recordInput)
                .then(resume=>{
                    console.log("resume:"+JSON.stringify(resume));
                })

            }
 }