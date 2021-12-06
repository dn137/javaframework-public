package com.expleoautomation.stepdefinitions;

import static io.restassured.RestAssured.given;
import static io.restassured.module.jsv.JsonSchemaValidator.matchesJsonSchemaInClasspath;
import static org.junit.Assert.assertEquals;

import java.io.FileNotFoundException;
import java.util.List;

import org.apache.commons.lang3.RandomStringUtils;
import org.junit.Assert;

import com.expleoautomation.commons.TestDataHolder;
import com.expleoautomation.pojo.simplekartservice.OrdersDataBuild;
import com.expleoautomation.pojo.suspectreportservice.AdditionalPVP;
import com.expleoautomation.pojo.suspectreportservice.AdditionalQuestions;
import com.expleoautomation.pojo.suspectreportservice.CountriesTravelled;
import com.expleoautomation.pojo.suspectreportservice.DatesReturned;
import com.expleoautomation.pojo.suspectreportservice.HerdToBusiness;
import com.expleoautomation.pojo.suspectreportservice.ImportedCountries;
import com.expleoautomation.pojo.suspectreportservice.ImportedDates;
import com.expleoautomation.pojo.suspectreportservice.OtherHerds;
import com.expleoautomation.pojo.suspectreportservice.OtherNonSusceptibleSpeciesOnPremises;
import com.expleoautomation.pojo.suspectreportservice.PremisesFragments;
import com.expleoautomation.pojo.suspectreportservice.PriorityQuestions;
import com.expleoautomation.pojo.suspectreportservice.RelevantRVO;
import com.expleoautomation.pojo.suspectreportservice.SpeciesMoved;
import com.expleoautomation.pojo.suspectreportservice.SpeciesPresent;
import com.expleoautomation.pojo.suspectreportservice.SusceptibleSpecies;
import com.expleoautomation.pojo.suspectreportservice.SusceptibleSpeciesAttend;
import com.expleoautomation.pojo.suspectreportservice.SuspectAnimal;
import com.expleoautomation.pojo.suspectreportservice.SuspectAnimalAccommodated;
import com.expleoautomation.pojo.suspectreportservice.SuspectAnimalClinicalSigns;
import com.expleoautomation.pojo.suspectreportservice.SuspectAnimalLesions;
import com.expleoautomation.pojo.suspectreportservice.SuspectAnimalSpeciesAffected;
import com.expleoautomation.pojo.suspectreportservice.SuspectFarmVisitAssignment;
import com.expleoautomation.pojo.suspectreportservice.SuspectFarmVisitPreparation;
import com.expleoautomation.pojo.suspectreportservice.SuspectPremises;
import com.expleoautomation.pojo.suspectreportservice.SuspectRVO;
import com.expleoautomation.pojo.suspectreportservice.SuspectReportDataBuild;
import com.expleoautomation.utils.APIResources;
import com.expleoautomation.utils.ServiceLayerUtils;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;


public class ServiceLayerSteps extends ServiceLayerUtils {
	
	RequestSpecification reqSpec;
	Response response;
	
			
	@Given("user access the {string} BaseUrl")
	public void user_access_the_BaseUrl(String API) throws FileNotFoundException {
	    //TestDataHolder.resetAllDataValues();
	    setBaseUrl(API);
	    reqSpec = requestSpecification();
	}
	
	@Given("user access the {string} BaseUrl with an invalid token")
	public void user_access_the_BaseUrl_with_an_invalid_token(String API) throws FileNotFoundException {
	    // Write code here that turns the phrase above into concrete actions
	    setBaseUrl(API);
	    reqSpec = invalidRequestSpecification();
	}

	@Given("caller details json payload with reporterID reportedByOthers {string}  {string}  {string}  {string}  {string} {string}")
	public void caller_Details_Payload_with_reporterID_reportedByOthers(String dafamNumber, String callerName, String contactNumber, String eirCode, String address, String lastUpdatedBy) throws FileNotFoundException {
		 SuspectReportDataBuild apiDataBuild = new SuspectReportDataBuild();
		 reqSpec =given().spec(reqSpec)
		.body(apiDataBuild.addCallerDetails(dafamNumber, callerName,contactNumber, eirCode, address,lastUpdatedBy));
	}
	
		
	@Given("the json payload for the {string}")
	public void the_json_payload_for_the_end_point(String endPoint) throws FileNotFoundException {
		 
		 //CasesDataBuild casesDataBuild = new CasesDataBuild();
		 OrdersDataBuild ordersDataBuild = new OrdersDataBuild();
		 SuspectReportDataBuild apiDataBuild = new SuspectReportDataBuild();
		 //HoldingServiceDataBuild holdingsServiceDataBuild = new HoldingServiceDataBuild();
		 //VisitsDataBuild visitsDataBuild = new VisitsDataBuild();
		 //CaseHoldingRelationsDataBuild caseHoldingDataBuild = new CaseHoldingRelationsDataBuild(); 
		 switch (endPoint) {
		 
		 case "simpleKartOrderCreateAPI" :
			 reqSpec =given().spec(reqSpec)
				.body(ordersDataBuild.addOrders());
		 break;
		 
		 case "suspectReportCreateAPI" :
			 reqSpec =given().spec(reqSpec)
				.body(apiDataBuild.addSuspectReport());
		 break;
		 
		 case "suspectPremisesAPI" :
			 reqSpec =given().spec(reqSpec)
				.body(apiDataBuild.addSuspectPremises(TestDataHolder.getTestDataRecord("CASE_ID")));
		 break;
		 
		 /*case "nonFarmPremisesAPI" :
			 reqSpec =given().spec(reqSpec)
				.body(apiDataBuild.addNonFarmPremises(TestDataHolder.getTestDataRecord("CASE_ID")));
		 break;*/
		 
		 case "suspectAnimalAPI" :
			 reqSpec =given().spec(reqSpec)
				.body(apiDataBuild.addSuspectAnimal());
		 break;
		 
		 case "priorityQuestionsAPI" :
			 reqSpec =given().spec(reqSpec)
				.body(apiDataBuild.addPriorityQuestions());
		 break;
		 
		 case "additionalInformationAPI" :
			 reqSpec =given().spec(reqSpec)
				.body(apiDataBuild.addAdditionalQuestions());
		 break;
		 
		 case "verbalStandStillFarmAPI" :
			 reqSpec =given().spec(reqSpec)
				.body(apiDataBuild.addVerbalStandStill());
		 break;
		 
		/* case "verbalStandStillNonFarmAPI" :
			 reqSpec =given().spec(reqSpec)
				.body(apiDataBuild.addVerbalStandStillNonFarm());
		 break;*/
		 
		 case "suspectFarmVisitAssignmentAPI" :
			 reqSpec =given().spec(reqSpec)
				.body(apiDataBuild.addSuspectFarmVisitAssignment());
		 break;
		 
		 case "suspectFarmVisitPreparationAPI" :
			 reqSpec =given().spec(reqSpec)
				.body(apiDataBuild.addSuspectFarmVisitPreparation());
		 break;
		 
		 /*case "holdingsAPI" :
			 reqSpec =given().spec(reqSpec)
				.body(holdingsServiceDataBuild.addHoldings());
				//null,RandomStringUtils.randomNumeric(3))
		 break;
		 
		 case "visitsAPI" :
			 reqSpec =given().spec(reqSpec)
				.body(visitsDataBuild.addVisits());
		 break;
		 
		 case "caseHoldingRelationsAPI" :
			 reqSpec =given().spec(reqSpec)
				.body(caseHoldingDataBuild.addCaseHoldingsRelations());
		 break;*/
		 		
		 default:
			break;
		}

	}
	
	
	@When("user calls {string} with {string} http request for the {string}")
	public void user_calls_with_http_request_for_the(String API, String requestMethod, String parameter) throws FileNotFoundException {
        
		switch (parameter) {
		case "orderID":
		    TestDataHolder.addTestDataRecord("ORDER_ID", parameter, true,true);
			System.out.println(TestDataHolder.getTestDataRecord("ORDER_ID"));
			parameter = TestDataHolder.getTestDataRecord("ORDER_ID");
			break;
		case "itemID":
		    TestDataHolder.addTestDataRecord("ITEM_ID", parameter, true,true);
			System.out.println(TestDataHolder.getTestDataRecord("itemID"));
			parameter = TestDataHolder.getTestDataRecord("ITEM_ID");
			break;
		case "nonfarmcaseID":
		    //TestDataHolder.addTestDataRecord("NON_FARM_CASE_ID", "1411", true,true);
			//System.out.println(TestDataHolder.getTestDataRecord("NON_FARM_CASE_ID"));
			parameter = TestDataHolder.getTestDataRecord("NON_FARM_CASE_ID");
			break;
		case "suspectPremisesID":
			System.out.println(TestDataHolder.getTestDataRecord("SUSPECT_PREMISES_ID"));
			parameter = TestDataHolder.getTestDataRecord("SUSPECT_PREMISES_ID");
			break;
		case "holdingID":
			//TestDataHolder.addTestDataRecord("HOLDING_ID", "266", true,true);
			System.out.println(TestDataHolder.getTestDataRecord("HOLDING_ID"));
			parameter = TestDataHolder.getTestDataRecord("HOLDING_ID");
			break;
		case "visitID":
			//TestDataHolder.addTestDataRecord("VISIT_ID", "209", true,true);
		    System.out.println(TestDataHolder.getTestDataRecord("VISIT_ID"));
			parameter = TestDataHolder.getTestDataRecord("VISIT_ID");
			break;
		
		default:
			break;
		}
		TestDataHolder.addTestDataRecord(TestDataHolder.API_PARAMETER, parameter, true,true);
		APIResources apiResources = new APIResources();
		if (requestMethod.equalsIgnoreCase("POST")) {
			response =  reqSpec.when().post(apiResources.getServiceResource(API)).then().spec(responseSpecification()).extract().response();
		}
		else if (requestMethod.equalsIgnoreCase("PUT")) {
			response =  reqSpec.when().put(apiResources.getServiceResource(API)).then().spec(responseSpecification()).extract().response();
		}
		else if (requestMethod.equalsIgnoreCase("GET")) {
			reqSpec =given().spec(reqSpec);
			//System.out.println(apiResources.getServiceResource(API));
		    response =  reqSpec.when().get(apiResources.getServiceResource(API)).then().spec(responseSpecification()).extract().response();
		} 
		
		else if (requestMethod.equalsIgnoreCase("DELETE")) {
			reqSpec =given().spec(reqSpec);
		    response =  reqSpec.when().delete(apiResources.getServiceResource(API)).then().spec(responseSpecification()).extract().response();
		} 
				   		
	}
	
	@When("user calls {string} with {string} http request")
	public void user_calls_with_http_request_for_a_given(String API, String requestMethod) throws FileNotFoundException {
	
		APIResources apiResources = new APIResources();
		if (requestMethod.equalsIgnoreCase("POST")) {
			response =  reqSpec.when().post(apiResources.getServiceResource(API)).then().spec(responseSpecification()).extract().response();
		}
		else if (requestMethod.equalsIgnoreCase("GET")) {
			reqSpec =given().spec(requestSpecification());
		    response =  reqSpec.when().get(apiResources.getServiceResource(API)).then().spec(responseSpecification()).extract().response();
		} 
		
		else if (requestMethod.equalsIgnoreCase("DELETE")) {
			reqSpec =given().spec(reqSpec);
		    response =  reqSpec.when().delete(apiResources.getServiceResource(API)).then().spec(responseSpecification()).extract().response();
		} 
		   		
	}
	
	@When("user calls {string} with {string} http request using the query parameter {string} as {string}")
	public void user_calls_with_http_request_using_the_query_parameter(String API, String requestMethod, String queryParameter, String value) throws FileNotFoundException {
		
		TestDataHolder.addTestDataRecord(TestDataHolder.API_PARAMETER,value, true,true);
		APIResources apiResources = new APIResources();
		if (requestMethod.equalsIgnoreCase("POST")) {
			
			System.out.println("ToDo for POST");
		}
		else if (requestMethod.equalsIgnoreCase("PUT")) {
			
			System.out.println("ToDo for PUT");
		}
		else if (requestMethod.equalsIgnoreCase("GET")) {
		    reqSpec =given().queryParam(queryParameter,Integer.parseInt(TestDataHolder.getTestDataRecord("API_PARAMETER"))).spec(requestSpecification());
		    response =  reqSpec.when().get(apiResources.getServiceResource(API)).then().spec(responseSpecification()).extract().response();
		} 
		else if (requestMethod.equalsIgnoreCase("DELETE")) {
		 			
			System.out.println("ToDo for DELETE");
		}
				   		
	}
		

    	
	@Then("the API call is success with status code {int}")
	public void the_API_call_is_success_with_status_code(int statusCode) {
		assertEquals("StatusCode",statusCode,response.getStatusCode());
  	}
	
	@And("the status line in response body is {string}")
	public void the_status_line_in_response_body_is(String statusLine) {
		assertEquals("StatusLine",statusLine,response.getStatusLine().trim());
	   }
	
	@And("the content type of response is {string}")
	public void the_content_type_of_response_is(String contentType) {
		Assert.assertEquals("ContentType",contentType, response.getHeader("Content-Type"));
   }
	
	@And("the content type of response is not {string}")
	public void the_content_type_of_response_is_not(String contentType) {
		Assert.assertNotEquals("ContentType",contentType, response.getHeader("Content-Type"));
   }
	
	@Then("get the version value from the response body")
	public void get_the_version_value_from_the_response_body() {
         
		TestDataHolder.addTestDataRecord("VERSION", getJsonPath(response,"version"), true, true);
		System.out.println(getJsonPath(response,"version"));
	}
	
	@Then("get the visitId value from the response body")
	public void get_the_visitId_value_from_the_response_body() {
         
		TestDataHolder.addTestDataRecord("VISIT_ID", getJsonPath(response,"visitId"), true, true);
		System.out.println(getJsonPath(response,"visitId"));
	}
	
	@Then("get the caseId value from the response body")
	public void get_the_caseId_value_from_the_response_body() {
         
		TestDataHolder.addTestDataRecord("CASE_ID", getJsonPath(response,"caseId"), true, true);
		System.out.println(getJsonPath(response,"caseId"));
	}
	
	@Then("get the holdingId value from the response body")
	public void get_the_holdingId_value_from_the_response_body() {
         
		TestDataHolder.addTestDataRecord("HOLDING_ID", getJsonPath(response,"holdingId"), true, true);
		System.out.println(getJsonPath(response,"holdingId"));
	}
	
	@Then("get the reportId value from the response body")
	public void get_the_reportId_value_from_the_response_body() {
         
		TestDataHolder.addTestDataRecord("SUSPECT_REPORT_ID", getJsonPath(response,"reportId"), true, true);
		System.out.println(getJsonPath(response,"reportId"));
	}
	
	@Then("get the {string} value from the response body")
	public void get_the_value_from_the_response_body(String key) {
		
		TestDataHolder.addTestDataRecord("KEY_VALUE", getJsonPath(response,key), true, true);
	}	
	
	
	@Then("the response body is validated against the {string} json schema")
	public void the_response_body_is_validated_against_the_json_schema(String endPoint) throws FileNotFoundException {

		 switch (endPoint) {
		 
		 /*case "suspectReportAPI" :
			 Assert.assertThat("validating json schema", response.getBody().asString(), matchesJsonSchemaInClasspath("jsonschema\\suspectReport.json"));
		 break;
		 
		 case "suspectReportSummaryAPI" :
			 Assert.assertThat("validating json schema", response.getBody().asString(), matchesJsonSchemaInClasspath("jsonschema\\suspectReportSummary.json"));
		 break;*/
		 
		 case "suspectPremisesAPI" :
			 Assert.assertThat("validating json schema", response.getBody().asString(), matchesJsonSchemaInClasspath("jsonschema/suspectPremises.json"));
		 break;
		 
		 case "nonFarmPremisesAPI" :
			 Assert.assertThat("validating json schema", response.getBody().asString(), matchesJsonSchemaInClasspath("jsonschema/nonFarmPremises.json"));
		 break;
		 
		 case "suspectAnimalAPI" :
			 Assert.assertThat("validating json schema", response.getBody().asString(), matchesJsonSchemaInClasspath("jsonschema/suspectAnimal.json"));
		 break;
		 
		 case "priorityQuestionsAPI" :
			 Assert.assertThat("validating json schema", response.getBody().asString(), matchesJsonSchemaInClasspath("jsonschema/priorityQuestions.json"));
		 break;
		 
		 case "additionalInformationAPI" :
			 Assert.assertThat("validating json schema", response.getBody().asString(), matchesJsonSchemaInClasspath("jsonschema/additionalInformation.json"));
		 break;
		 
		 case "verbalStandStillNonFarmAPI" :
			 Assert.assertThat("validating json schema", response.getBody().asString(), matchesJsonSchemaInClasspath("jsonschema/verbalStandStillNonFarm.json"));
		 break;
		 
		 /*case "verbalStandStillFarmAPI" :
			 Assert.assertThat("validating json schema", response.getBody().asString(), matchesJsonSchemaInClasspath("jsonschema\\verbalStandStillFarm.json"));
		 break;*/
		 
		 case "suspectFarmVisitAssignmentAPI" :
			 Assert.assertThat("validating json schema", response.getBody().asString(), matchesJsonSchemaInClasspath("jsonschema/suspectFarmVisitAssignment.json"));
		 break;
		 
		 case "suspectFarmVisitPreparationAPI" :
			 Assert.assertThat("validating json schema", response.getBody().asString(), matchesJsonSchemaInClasspath("jsonschema/suspectFarmVisitPreparation.json"));
		 break;
	
		 case "dataIntegrationCallerDetailsAPI" :
			 Assert.assertThat("validating json schema", response.getBody().asString(), matchesJsonSchemaInClasspath("jsonschema/dataIntegrationService/dataIntegrationCallerDetails.json"));
		 break;
		 
		 case "dataIntegrationSuspectPremisesAPI" :
			 Assert.assertThat("validating json schema", response.getBody().asString(), matchesJsonSchemaInClasspath("jsonschema/dataIntegrationService/dataIntegrationSuspectPremises.json"));
		 break;
		 
		 case "dataIntegrationNonFarmPremisesAPI" :
			 Assert.assertThat("validating json schema", response.getBody().asString(), matchesJsonSchemaInClasspath("jsonschema/dataIntegrationService/dataIntegrationNonSuspectPremises.json"));
		 break;
		 
		 case "holdingsAPI" :
			 Assert.assertThat("validating json schema", response.getBody().asString(), matchesJsonSchemaInClasspath("jsonschema/holdingService/holdings.json"));
		 break;
		 
		 case "holdingIdAPI" :
			 Assert.assertThat("validating json schema", response.getBody().asString(), matchesJsonSchemaInClasspath("jsonschema/holdingService/holdingId.json"));
		 break;
		 
		 case "visitSummariesAPI" :
			 Assert.assertThat("validating json schema", response.getBody().asString(), matchesJsonSchemaInClasspath("jsonschema/holdingService/visitSummaries.json"));
		 break;
		 
		 case "visitsAPI" :
			 Assert.assertThat("validating json schema", response.getBody().asString(), matchesJsonSchemaInClasspath("jsonschema/holdingService/visitId.json"));
		 break;
		 
		 case "assignedVisitsAPI" :
			 Assert.assertThat("validating json schema", response.getBody().asString(), matchesJsonSchemaInClasspath("jsonschema/holdingService/assignedVisits.json"));
		 break;
		 		
		 default:
			break;
		}

	}
	
	
	@And("the {string} json body is validated and the json body contains the valid suspectreportID")
	public void the_json_body_is_validated_and_the_json_body_contains_the_valid_suspectreportID(String endPoint) {
	     
		 switch (endPoint) {
		 case "suspectPremisesAPI":
		 Assert.assertEquals("verifyCaseID",Integer.parseInt(TestDataHolder.getTestDataRecord("CASE_ID")),response.getBody().as(SuspectPremises.class).getCaseId());
		 Assert.assertEquals("verifySuspectReportID",Integer.parseInt(TestDataHolder.getTestDataRecord("SUSPECT_REPORT_ID")),response.getBody().as(SuspectPremises.class).getSuspectReportId());
		 List<PremisesFragments> premisesFragmentsList =  response.getBody().as(SuspectPremises.class).getPremisesFragments();
		 Assert.assertTrue(!premisesFragmentsList.isEmpty());
		 List<SusceptibleSpecies> susceptibleSpeciesList =  response.getBody().as(SuspectPremises.class).getSusceptibleSpecies();
		 Assert.assertTrue(!susceptibleSpeciesList.isEmpty());
		 List<SpeciesPresent> speciesPresentList =  response.getBody().as(SuspectPremises.class).getSpeciesPresent();
		 Assert.assertTrue(!speciesPresentList.isEmpty());
		 List<HerdToBusiness> herdToBusinessList =  response.getBody().as(SuspectPremises.class).getHerdToBusiness();
		 Assert.assertTrue(!herdToBusinessList.isEmpty());
		 List<SuspectRVO> suspectRVOList =  response.getBody().as(SuspectPremises.class).getSuspectRVO();
		 Assert.assertTrue(!suspectRVOList.isEmpty());
		 List<RelevantRVO> relevantRVOList =  response.getBody().as(SuspectPremises.class).getRelevantRVO();
		 Assert.assertTrue(!relevantRVOList.isEmpty());
		 List<AdditionalPVP> additionalPVPList=  response.getBody().as(SuspectPremises.class).getAdditionalPVP();
		 Assert.assertTrue(!additionalPVPList.isEmpty());
		 List<SpeciesPresent> SpeciesPresentList =  response.getBody().as(SuspectPremises.class).getSpeciesPresent();
		 Assert.assertTrue(!SpeciesPresentList.isEmpty());
		 break;
		 
		 case "suspectAnimalAPI":
		 Assert.assertEquals("verifySuspectReportID",Integer.parseInt(TestDataHolder.getTestDataRecord("SUSPECT_REPORT_ID")),response.getBody().as(SuspectAnimal.class).getSuspectReportId());
		 List<SuspectAnimalSpeciesAffected> suspectAnimalSpeciesAffectedList =  response.getBody().as(SuspectAnimal.class).getSuspectAnimalSpeciesAffected();
		 Assert.assertTrue(!suspectAnimalSpeciesAffectedList.isEmpty());
		 List<SuspectAnimalClinicalSigns> suspectAnimalClinicalSignsList = response.getBody().as(SuspectAnimal.class).getSuspectAnimalClinicalSigns();
		 Assert.assertTrue(!suspectAnimalClinicalSignsList.isEmpty());
		 List<SuspectAnimalLesions> suspectAnimalLesionsList =  response.getBody().as(SuspectAnimal.class).getSuspectAnimalLesions();
		 Assert.assertTrue(!suspectAnimalLesionsList.isEmpty());
		 break;
		 
		 case "priorityQuestionsAPI":
		 System.out.println(response.getBody().as(PriorityQuestions.class).getSuspectReportId());
		 Assert.assertEquals("verifySuspectReportID",Integer.parseInt(TestDataHolder.getTestDataRecord("SUSPECT_REPORT_ID")),response.getBody().as(PriorityQuestions.class).getSuspectReportId());
		 List<SpeciesMoved> speciesMovedList =  response.getBody().as(PriorityQuestions.class).getSpeciesMoved();
		 Assert.assertTrue(!speciesMovedList.isEmpty());
		 List<ImportedCountries> importedCountriesList = response.getBody().as(PriorityQuestions.class).getImportedCountries();
		 Assert.assertTrue(!importedCountriesList.isEmpty());
		 List<ImportedDates> importedDatesList =  response.getBody().as(PriorityQuestions.class).getImportedDates();
		 Assert.assertTrue(!importedDatesList.isEmpty());
		 List<SusceptibleSpeciesAttend> susceptibleSpeciesAttendList =  response.getBody().as(PriorityQuestions.class).getSusceptibleSpeciesAttend();
		 //Assert.assertTrue(!susceptibleSpeciesAttendList.isEmpty());
		 List<CountriesTravelled> countriesTravelledList=  response.getBody().as(PriorityQuestions.class).getCountriesTravelled();
		 Assert.assertTrue(!countriesTravelledList.isEmpty());
		 List<DatesReturned> datesReturnedList =  response.getBody().as(PriorityQuestions.class).getDatesReturned();
		 //Assert.assertTrue(!datesReturnedList.isEmpty());
		 break;
		 
		 case "additionalInformationAPI":
		 Assert.assertEquals("verifySuspectReportID",Integer.parseInt(TestDataHolder.getTestDataRecord("SUSPECT_REPORT_ID")),response.getBody().as(AdditionalQuestions.class).getSuspectReportId());
		 List<SuspectAnimalAccommodated> suspectAnimalAccommodatedList =  response.getBody().as(AdditionalQuestions.class).getSuspectAnimalAccommodated();
		 Assert.assertTrue(!suspectAnimalAccommodatedList.isEmpty());
		 List<OtherHerds> otherHerdsList = response.getBody().as(AdditionalQuestions.class).getOtherHerds();
		 Assert.assertTrue(!otherHerdsList.isEmpty());
		 List<OtherNonSusceptibleSpeciesOnPremises> otherNonSusceptibleSpeciesOnPremisesList =  response.getBody().as(AdditionalQuestions.class).getOtherNonSusceptibleSpeciesOnPremises();
		 Assert.assertTrue(!otherNonSusceptibleSpeciesOnPremisesList.isEmpty());
		 List<SpeciesMoved> speciesMovedList1 =  response.getBody().as(AdditionalQuestions.class).getSpeciesMoved();
		 Assert.assertTrue(!speciesMovedList1.isEmpty());
		 break;
			 
		 }
   }
	
	@And("the json body for the {string} contains the valid suspectpremisesID")
	public void the_json_body_for_the_contains_the_valid_suspectpremisesID(String endPoint) {
		switch (endPoint) {
	     case "suspectFarmVisitAssignmentAPI":
		 Assert.assertEquals("verifySuspectPremisesID",Integer.parseInt(TestDataHolder.getTestDataRecord("SUSPECT_PREMISES_ID")),response.getBody().as(SuspectFarmVisitAssignment.class).getSuspectPremisesId());
		 break;
	     case "suspectFarmVisitPreparationAPI":
		 Assert.assertEquals("verifySuspectPremisesID",Integer.parseInt(TestDataHolder.getTestDataRecord("SUSPECT_PREMISES_ID")),response.getBody().as(SuspectFarmVisitPreparation.class).getSuspectPremisesId());
		 break;
		}
	}
	
}
