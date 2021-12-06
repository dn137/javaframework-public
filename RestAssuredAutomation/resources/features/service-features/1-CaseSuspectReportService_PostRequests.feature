Feature: validate the POST requests for the end points in case suspect report service

 @edms-suspect-report-service @edms-cases-service
 Scenario: Validate if a new edms case is created
 Given user access the "Cases" BaseUrl
 Given the json payload for the "casesCreateAPI"
 When user calls "casesCreateAPI" with "POST" http request
 Then the API call is success with status code 201
 And the status line in response body is "HTTP/1.1 201"
 And the content type of response is "application/json"
 Then get the caseId value from the response body

 @edms-suspect-report-service
 Scenario: Validate if suspectReport is created for the asssociated case
 Given user access the "CaseSuspectReport" BaseUrl
 Given the json payload for the "suspectReportCreateAPI"
 When user calls "suspectReportCreateAPI" with "POST" http request
 Then the API call is success with status code 201
 And the status line in response body is "HTTP/1.1 201"
 And the content type of response is "application/json"
 Then get the reportId value from the response body
 #Given get the next caseID from the database table for the given "SEQUENCE_NAME"
 #Then get the suspectReportID from the database table for the "caseID"
 

@edms-suspect-report-service
 Scenario Outline: Validate if Caller Details are posted successfully for the given CaseID
 Given user access the "CaseSuspectReport" BaseUrl
 Given caller details json payload with reporterID reportedByOthers "<dafamNumber>"  "<name>"  "<contactNumber>"  "<eirCode>"  "<address>" "<lastUpdatedBy>"
 When user calls "callerDetailsAPI" with "POST" http request for the "caseID"
 Then the API call is success with status code 201
 And the status line in response body is "HTTP/1.1 201"
 And the content type of response is "application/json"
 
	Examples:
	|dafamNumber		   |name              |contactNumber      |eirCode     |address                     |lastUpdatedBy     |diseasetype          |premisestype|
  |P020915           |Joe Bloggs        |0859819862         |D16 RY27    |12 Millennium Walkway,Dublin|MAUREEN FITZGERALD|Foot & Mouth Disease |Non-Farm	  |
  
@edms-suspect-report-service
 Scenario Outline:  validate if the data is posted succcessfully for the given end points in case suspect report servie
 Given user access the "CaseSuspectReport" BaseUrl
 Then get the suspectReportID from the database table for the "caseID"
 Given the json payload for the "<EndPoint>"
 When user calls "<EndPoint>" with "POST" http request for the "caseID"
 Then the API call is success with status code 201
 And the status line in response body is "HTTP/1.1 201"
 And the content type of response is "application/json"
 
   Examples:
	  |EndPoint                |
	  |suspectPremisesAPI      |
	  #|nonFarmPremisesAPI     |
	  |suspectAnimalAPI        |
	  |priorityQuestionsAPI    |
	  |additionalInformationAPI|
	  #|verbalStandStillNonFarmAPI|
	  |verbalStandStillFarmAPI |
	  

	  

	


