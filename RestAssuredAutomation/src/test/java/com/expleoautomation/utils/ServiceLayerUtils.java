package com.expleoautomation.utils;

import static io.restassured.RestAssured.given;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.PrintStream;
import java.nio.file.Paths;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Properties;

import org.apache.commons.lang3.RandomStringUtils;
import org.joda.time.DateTime;
import org.json.JSONObject;

import com.expleoautomation.commons.ConstantsProvider;
import com.expleoautomation.commons.TestDataHolder;

import freemarker.template.utility.Constants;
import io.restassured.builder.RequestSpecBuilder;
import io.restassured.builder.ResponseSpecBuilder;
import io.restassured.filter.log.RequestLoggingFilter;
import io.restassured.filter.log.ResponseLoggingFilter;
import io.restassured.http.ContentType;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import io.restassured.specification.ResponseSpecification;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;


public class ServiceLayerUtils {
	
	public RequestSpecification reqSpec;
	public ResponseSpecification respSpec;
	public Response response;
	public Response accessTokenResponse;
	public String accessToken;
	public String tokenType;
	public String baseUrl;
	public String userDirectory;
	
	
	/********************************************************************************************* 
	 * Extracting the access token for accessing the APIs. This is for grant type "password" only
	 *********************************************************************************************/
	public String getAccessTokenForPasswordGrantType()
	{
		     accessTokenResponse = given().auth().preemptive().basic(ConstantsProvider.getCLIENTID(), "")
	                .formParam("grant_type", ConstantsProvider.getGRANT_TYPE())
	                .formParam("username", ConstantsProvider.getUSERNAME())
	                .formParam("password", ConstantsProvider.getPASSWORD())
	                .when().log().all().post(ConstantsProvider.getACCESS_TOKEN_URL());
	          JSONObject jsonObject = new JSONObject(accessTokenResponse.getBody().asString());
	          accessToken = jsonObject.get("access_token").toString();
	          tokenType = jsonObject.get("token_type").toString();
	          
	          System.out.println("Access Token " + accessToken);
	          
	          return accessToken;
		
	}
	
	public String setBaseUrl(String API)
	{
        
		switch (API) {
			case "simpleKart":			baseUrl = ConstantsProvider.getSIMPLE_KART_SERVICE_URL();		break;
			case "CaseSuspectReport":	baseUrl = ConstantsProvider.getSUSPECT_REPORT_SERVICE_URL();	break;
			case "DataIntegration":		baseUrl = ConstantsProvider.getDATA_INTEGRATION_SERVICE_URL();	break;
	  		case "LookUps":				baseUrl = ConstantsProvider.getLOOKUPS_SERVICE_URL();			break;
	  		case "Cases":				baseUrl = ConstantsProvider.getCASES_SERVICE_URL();				break;
		  	case "Holdings":			baseUrl = ConstantsProvider.getHOLDINGS_SERVICE_URL();			break;
			default:					break;
		}
		TestDataHolder.addTestDataRecord(TestDataHolder.BASE_URL, baseUrl, true, false);
		return baseUrl;
		
	}
	
	/********************************************************************************************* 
	 * For setting the BASE URL and creating API Logs
	 *********************************************************************************************/
	public RequestSpecification requestSpecification() throws FileNotFoundException
	{
		   String timeStamp = new SimpleDateFormat("yyyyMMddHHmmss").format(new Date());
		  //PrintStream printStream = new PrintStream(System.getProperty("user.dir")+"/apilogs/"+"APILogs"+timeStamp+".txt");
		   PrintStream printStream = new PrintStream(CommonUtils.getUserDirectory()+"/resources/logs/"+"APILogs"+timeStamp+".txt");
		   reqSpec = new RequestSpecBuilder().setBaseUri(TestDataHolder.getTestDataRecord("BASE_URL"))
	      .addFilter(RequestLoggingFilter.logRequestTo(printStream))
	      .addFilter(ResponseLoggingFilter.logResponseTo(printStream))
	      .setContentType(ContentType.JSON).build();
	       //for setting authentication
	      //.auth().oauth2(getAccessTokenForPasswordGrantType());
		   return reqSpec;
			
	}
	
	/********************************************************************************************* 
	 * For setting the BASE URL with an invalid token and creating API Logs
	 *********************************************************************************************/
	public RequestSpecification invalidRequestSpecification() throws FileNotFoundException
	{
		   String timeStamp = new SimpleDateFormat("yyyyMMddHHmmss").format(new Date());
		   PrintStream printStream = new PrintStream(CommonUtils.getUserDirectory()+"/resources/logs/"+"APILogs"+timeStamp+".txt");
		   reqSpec = new RequestSpecBuilder().setBaseUri(TestDataHolder.getTestDataRecord("BASE_URL"))
	      .addFilter(RequestLoggingFilter.logRequestTo(printStream))
	      .addFilter(ResponseLoggingFilter.logResponseTo(printStream))
	      .build()
	      .auth().oauth2(RandomStringUtils.randomAlphanumeric(8));
		   
		   return reqSpec;
			
	}
	
	/********************************************************************************************* 
	 * ResponseSpecification
	 *********************************************************************************************/
	public ResponseSpecification responseSpecification() throws FileNotFoundException
	{
		//respSpec = new ResponseSpecBuilder().expectContentType(ContentType.JSON).build();
		respSpec = new ResponseSpecBuilder().build();
		return respSpec;
			
	}
	
	/********************************************************************************************* 
	 Getting a value from from JSON Body
	 *********************************************************************************************/
	
	public String getJsonPath(Response response,String key)
	{
		String resp = response.asString();
		JsonPath js = new JsonPath(resp);
	    return js.get(key).toString();
    }

}
