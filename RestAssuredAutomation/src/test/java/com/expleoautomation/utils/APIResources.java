package com.expleoautomation.utils;

import com.expleoautomation.commons.ConstantsProvider;
import com.expleoautomation.commons.TestDataHolder;

public class APIResources extends ServiceLayerUtils{
	
       
    public String getServiceResource(String serviceResource)
    {
		switch (serviceResource) {
		
			case "simpleKartItemsAPI":			    	return ConstantsProvider.getSIMPLE_KART_SERVICE_URL()+"/items";
	  		case "simpleKartOrderDetailsAPI":			return ConstantsProvider.getSIMPLE_KART_SERVICE_URL()+"/orders/"+TestDataHolder.getTestDataRecord("API_PARAMETER");
	  		case "simpleKartOrderCreateAPI":			return ConstantsProvider.getSIMPLE_KART_SERVICE_URL()+"/orders";
			case "suspectReportCreateAPI":				return ConstantsProvider.getSUSPECT_REPORT_SERVICE_URL()+ "/suspect-reports";
			case "suspectReportAPI":					return ConstantsProvider.getSUSPECT_REPORT_SERVICE_URL()+ "/cases/"+TestDataHolder.getTestDataRecord("API_PARAMETER")+"/suspect-report";
			case "suspectReportSummaryAPI":				return ConstantsProvider.getSUSPECT_REPORT_SERVICE_URL()+ "/cases/"+TestDataHolder.getTestDataRecord("API_PARAMETER")+"/suspect-report-summary";
			case "callerDetailsAPI":			    	return ConstantsProvider.getSUSPECT_REPORT_SERVICE_URL()+ "/cases/"+TestDataHolder.getTestDataRecord("API_PARAMETER")+"/suspect-report/caller-details";
			case "suspectPremisesAPI":					return ConstantsProvider.getSUSPECT_REPORT_SERVICE_URL()+ "/cases/"+TestDataHolder.getTestDataRecord("API_PARAMETER")+"/suspect-premises";
			case "nonFarmPremisesAPI":					return ConstantsProvider.getSUSPECT_REPORT_SERVICE_URL()+ "/cases/"+TestDataHolder.getTestDataRecord("API_PARAMETER")+"/non-farm-premises";
			case "suspectAnimalAPI":					return ConstantsProvider.getSUSPECT_REPORT_SERVICE_URL()+ "/cases/"+TestDataHolder.getTestDataRecord("API_PARAMETER")+"/suspect-report/suspect-animal";
			case "priorityQuestionsAPI":				return ConstantsProvider.getSUSPECT_REPORT_SERVICE_URL()+ "/cases/"+TestDataHolder.getTestDataRecord("API_PARAMETER")+"/suspect-report/priority-questions";
			case "additionalInformationAPI":			return ConstantsProvider.getSUSPECT_REPORT_SERVICE_URL()+ "/cases/"+TestDataHolder.getTestDataRecord("API_PARAMETER")+"/suspect-report/additional-information";
			case "verbalStandStillFarmAPI":				return ConstantsProvider.getSUSPECT_REPORT_SERVICE_URL()+ "/cases/"+TestDataHolder.getTestDataRecord("API_PARAMETER")+"/suspect-report/verbal-standstill-farm";
			case "verbalStandStillNonFarmAPI":			return ConstantsProvider.getSUSPECT_REPORT_SERVICE_URL()+ "/cases/"+TestDataHolder.getTestDataRecord("API_PARAMETER")+"/suspect-report/verbal-standstill-non-farm";
			case "suspectFarmVisitAssignmentAPI":		return ConstantsProvider.getSUSPECT_REPORT_SERVICE_URL()+ "/suspect-premises/"+TestDataHolder.getTestDataRecord("API_PARAMETER")+"/suspect-farm-visit-assignment";
			case "suspectFarmVisitPreparationAPI":		return ConstantsProvider.getSUSPECT_REPORT_SERVICE_URL()+ "/suspect-premises/"+TestDataHolder.getTestDataRecord("API_PARAMETER")+"/suspect-farm-visit-preparation";
			case "lookUpsAPI":							return ConstantsProvider.getLOOKUPS_SERVICE_URL()+ "/lookups/";
			case "lookUpsDiseaseTypesAPI":				return ConstantsProvider.getLOOKUPS_SERVICE_URL()+ "/lookups/disease-types";
			case "casesCreateAPI":						return ConstantsProvider.getCASES_SERVICE_URL()+ "/cases";
			case "casesAPI":							return ConstantsProvider.getCASES_SERVICE_URL()+ "/cases/"+TestDataHolder.getTestDataRecord("API_PARAMETER");
			case "caseIndexHoldingAPI":					return ConstantsProvider.getCASES_SERVICE_URL()+ "/cases/"+TestDataHolder.getTestDataRecord("API_PARAMETER")+"/index-holding";
			case "caseSuspectContactHoldingAPI":		return ConstantsProvider.getCASES_SERVICE_URL()+ "/cases/"+TestDataHolder.getTestDataRecord("API_PARAMETER")+"/suspect-contact-holding";
			case "caseSummariesListAPI":				return ConstantsProvider.getCASES_SERVICE_URL()+ "/case-summaries";
			case "caseSummariesAPI":					return ConstantsProvider.getCASES_SERVICE_URL()+ "/case-summaries/"+TestDataHolder.getTestDataRecord("API_PARAMETER");
			case "dataIntegrationCallerDetailsAPI": 	return ConstantsProvider.getDATA_INTEGRATION_SERVICE_URL()+ "/data-integration/caller-details/"+TestDataHolder.getTestDataRecord("API_PARAMETER");
			case "dataIntegrationSuspectPremisesAPI":	return ConstantsProvider.getDATA_INTEGRATION_SERVICE_URL()+ "/data-integration/suspect-premises/"+TestDataHolder.getTestDataRecord("API_PARAMETER");
			case "dataIntegrationNonFarmPremisesAPI":	return ConstantsProvider.getDATA_INTEGRATION_SERVICE_URL()+ "/data-integration/non-farm-premises/"+TestDataHolder.getTestDataRecord("API_PARAMETER");
			case "holdingsQueryAPI":					return ConstantsProvider.getHOLDINGS_SERVICE_URL()+"/holdings";
			case "holdingsAPI":						    return ConstantsProvider.getHOLDINGS_SERVICE_URL()+"/holdings/"+TestDataHolder.getTestDataRecord("API_PARAMETER");
			case "visitSummariesAPI":				    return ConstantsProvider.getHOLDINGS_SERVICE_URL()+"/holdings/"+TestDataHolder.getTestDataRecord("API_PARAMETER")+"/visit-summaries";
			case "RVOUsersAPI":						    return ConstantsProvider.getHOLDINGS_SERVICE_URL()+"/rvos/"+TestDataHolder.getTestDataRecord("API_PARAMETER")+"/users";
			case "designatedAssignersAPI":			    return ConstantsProvider.getHOLDINGS_SERVICE_URL()+"/designated-assigners";
			case "visitsAPI":						    return ConstantsProvider.getHOLDINGS_SERVICE_URL()+"/visits/"+TestDataHolder.getTestDataRecord("VISIT_ID");
			case "visitCreationAPI":				    return ConstantsProvider.getHOLDINGS_SERVICE_URL()+"/visits";
			case "assignedVisitsAPI":				    return ConstantsProvider.getHOLDINGS_SERVICE_URL()+"/assigned-visits/"+TestDataHolder.getTestDataRecord("API_PARAMETER");
			case "caseHoldingRelationsAPI":			    return ConstantsProvider.getHOLDINGS_SERVICE_URL()+"/case-holding-relations" ;
			case "simpleKartItemDetailsAPI":			//System.out.println(ConstantsProvider.getSIMPLE_KART_SERVICE_URL()+"/items/"+":"+TestDataHolder.getTestDataRecord("API_PARAMETER"));
														return ConstantsProvider.getSIMPLE_KART_SERVICE_URL()+"/items/"+TestDataHolder.getTestDataRecord("API_PARAMETER");
			
			default:									break;
		}
		return null;
     }

}
