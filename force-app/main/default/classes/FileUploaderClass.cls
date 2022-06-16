public with sharing class FileUploaderClass 
{
    @AuraEnabled
    public static String uploadFile(String base64,String filename,String recordId)
    {
        ContentVersion cv=new ContentVerssion(base64,filename);
        ContentDocumentLink cdl=new ContentDocumentLink(cv.Id,recordId);
        if(cv==null || cdl==null)
        {
            return null;
        }
        return cdl.Id;
    }
    private static ContentVersion createContentVersion(String base64,String filename)
    {
        ContentVersion cv=new ContentVersion();
        cv.VersionData=EncodingUtil.base64Decode(base64);
        cv.Title=filename;
        cv.PathOnclient=filename;
        try {
            insert cv;
            return cv;
            
        } catch (Exception e) {
            System.debug(e);
            return null;
            
        }
    } 
    private static ContentDocumentLink createContentLink(String contentVersionId,String recordId)
    {
        if(contentVersionId==null || recordId==null)
        {
            return null;
        }
        contentDocumentLink cdl=new contentDocumentLink();
        cdl.contentDocumentId=[
            Select ContentDocumentId from ContentVersion
            WHERE Id =: contentVersionId
        ].ContentDocumentId;
        cdl.LinkedEntityId=recordId;
        cdl.ShareType='V';
        try {
            insert cdl;
            return cdl;
        } catch (Exception e) {
            System.debug(e);
            return null;
            
        }
    }   
}
