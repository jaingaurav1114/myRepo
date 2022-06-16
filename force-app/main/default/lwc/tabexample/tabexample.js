import { LightningElement , wire,api} from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import { getPicklistValues } from 'lightning/uiObjectInfoApi';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import {ShowToastEvent} from 'lightning/platform'
import LightningConfirm from 'lightning/confirm';
import Resume_Object from '@salesforce/schema/Resume__c';
import Country_c from '@salesforce/schema/Resume__c.Country__c';
import STATE from '@salesforce/schema/Resume__c.State__c';
import City_c from '@salesforce/schema/Resume__c.City__c';
import NAME from '@salesforce/schema/Resume__c.Name';
import LAST_NAME from '@salesforce/schema/Resume__c.Last_Name__c';
import EMAIL from '@salesforce/schema/Resume__c.Email__c';
import ADDRESS from '@salesforce/schema/Resume__c.Address__c';
import PHONE from '@salesforce/schema/Resume__c.Phone__c';
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
import uploadFile from '@salesforce/apex/FileUploaderClass.uploadFile';



export default class Tabexample extends LightningElement {
    //Bacis Details
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

//    picklistfield of object
  @wire(getObjectInfo, { objectApiName: Resume_Object })
 resumeInfo;

//   picklistfield of countryd
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

    //        //picklist of city
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


                onSave(event)
            {

                //for save the record
                const fields={};
                fields[NAME.fieldApiName]=this.fname;
                fields[LAST_NAME.fieldApiName]=this.lname;
                fields[EMAIL.fieldApiName]=this.email;
                
                const recordInput={apiName:Resume_Object.objectApiName,fields};
                createRecord(recordInput)
                .then(resume=>{
                    console.log("resume:"+JSON.stringify(resume));
                })

              //confirm msg

            //   const result = LightningConfirm.open({
            //       Message : 'this is the confirm msg',
            //       variant: 'heardless',
            //       label:'this is the aria-lable value',
            //     // Text: 'are you sure you want to confirm ',
            //     // confirmButtonLable: 'Delete',
            //     // confirmButtonVariant: 'destructive',
            //     // cancelButtonLabel : 'Never Mind',
            //     // Header: 'confirmDelete'
   
            //   });

            }
            @api recordId;
            fileData
            openFileUpload(event)
            {
                const file=event.target.files[0];
                var reader=new FileReader();
                reader.onload=()=>{
                    var base64=reader.result.split(',')[1];
                    this.fileData={
                        'filename':file.name,
                        'base64':base64,
                        'recordId':this.recordId
                    }
                    console.log(this.fileData);
                }
                reader.readAsDataURL(file);
            }
            handleClick()
            {
                const {base64,filename,recordId}=this.fileData;
                uploadFile({base64,filename,recordId}).then(result=>{
                    this.fileData=null;
                    let title='${filename} uploaded successfully';
                    this.toast(title);
                })
            }
            toast(title)
            {
                const toastEvent=new ShowToastEvent({
                    title,
                    variant:"success"

                }) 
                this.dispatchEvent(toastEvent);
            }

}