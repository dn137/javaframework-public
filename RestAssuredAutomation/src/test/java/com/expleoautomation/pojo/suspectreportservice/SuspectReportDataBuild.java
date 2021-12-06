package com.expleoautomation.pojo.suspectreportservice;

import static org.junit.Assert.assertTrue;

import java.time.OffsetDateTime;
import java.util.ArrayList;
import java.util.List;

import org.junit.Test;

import com.expleoautomation.commons.TestDataHolder;
import com.expleoautomation.utils.RandomUtils;
public class SuspectReportDataBuild {
	
	public SuspectReport addSuspectReport()
	{
		SuspectReport suspectReport = new SuspectReport();
		suspectReport.setPremisesTypeId(2);
		suspectReport.setCaseId(Integer.parseInt(TestDataHolder.getTestDataRecord("CASE_ID")));
		return suspectReport;
		
	}
	
	public CallerDetails addCallerDetails(String dafamNumber,String callerName,String contactNumber,String eirCode,String address,String lastUpdatedBy)
	{
		
		CallerDetails callerDetails = new CallerDetails();
		callerDetails.setReporterId(1);
		callerDetails.setReportedByOthers("PVP");
		callerDetails.setDafmNumber(dafamNumber);
		callerDetails.setName(callerName);
		callerDetails.setContactNumber(contactNumber);
		callerDetails.setEircode(eirCode);
		callerDetails.setAddress(address);
		callerDetails.setReportMethodId(1);
		callerDetails.setVersionNum(0);
		callerDetails.setLastUpdatedBy(lastUpdatedBy);
		callerDetails.setLastUpdatedDate(null);
		return callerDetails;

	}
	
	public SuspectPremises addSuspectPremises(String caseID)
	{
		SuspectPremises suspectPremises = new SuspectPremises();
		suspectPremises.setCaseId(Integer.parseInt(caseID));
		suspectPremises.setSuspectReportId(Integer.parseInt(TestDataHolder.getTestDataRecord("SUSPECT_REPORT_ID")));
		suspectPremises.setSuspectPremisesId(null);
		suspectPremises.setPremisesSubtypeId(7);
		suspectPremises.setAvailableFlag(true);
		suspectPremises.setReasonForNotAvailable("Not available");
  	    suspectPremises.setAttendantPVP("PAUL NYHAN");
	    suspectPremises.setLocSameRegFlag(false);
	    
	    MainContactDetails mainContactDetails = new MainContactDetails();
	    mainContactDetails.setMainContactDetailsId(null);
	    mainContactDetails.setIndexHerdId("A1010134");
	    mainContactDetails.setName("JOHN VALENTINE");
	    mainContactDetails.setRegisteredAddress("DRUMHURRIN GRANGE BALLYDANGAN CO LIMERICK ");
	    mainContactDetails.setEircode("D16 RY26");
	    mainContactDetails.setContactNumber("00353-087-344994");
	    mainContactDetails.setContactNumber2("00353-051-344991");
	    suspectPremises.setMainContactDetails(mainContactDetails);
	    
	    PremisesFragments premisesFragments = new PremisesFragments();
	    premisesFragments.setPremisesFragmentsId(1);
	    premisesFragments.setFragmentNo("02");
	    premisesFragments.setxCoordinate(35);
	    premisesFragments.setyCoordinate(25);
	    premisesFragments.setAddress("Ireland Farms");
	    premisesFragments.setEircode("D16RY26");
	    premisesFragments.setLocSameRegFlag(false);
	   	List<PremisesFragments> premisesFragementsList =new ArrayList<PremisesFragments>();
	    premisesFragementsList.add(premisesFragments);
	    suspectPremises.setPremisesFragments(premisesFragementsList);
	    
	    SusceptibleSpecies susceptibleSpecies = new SusceptibleSpecies();
	    susceptibleSpecies.setSusceptibleSpeciesId(1);
	    susceptibleSpecies.setOtherDescription("Bovine");
	    susceptibleSpecies.setQuantity(10);
	    susceptibleSpecies.setLocationSameRegistered(true);
	    susceptibleSpecies.setSpeciesId(3);
	    
	   	List<SusceptibleSpecies> susceptibleSpeciesList =new ArrayList<SusceptibleSpecies>();
	    susceptibleSpeciesList.add(susceptibleSpecies);
	    suspectPremises.setSusceptibleSpecies(susceptibleSpeciesList);
	    
	    SpeciesPresent speciesPresent = new SpeciesPresent();
	    speciesPresent.setSpeciesPresentId(1);
	    speciesPresent.setSpeciesId(2);
	    speciesPresent.setQuantity(2);
	    speciesPresent.setOtherDescription("other species");
	   	List<SpeciesPresent> speciesPresentList =new ArrayList<SpeciesPresent>();
	   	speciesPresentList.add(speciesPresent);
	    suspectPremises.setSpeciesPresent(speciesPresentList);
	    
	    Herd herd = new Herd();
	    herd.setHerdId((Integer) null);
	    herd.setIndexHerdId("1");
	    herd.setFarmId(2);
	    herd.setKeeperName("COLM MOONEY");
	    herd.setCreameryCode("123");
        herd.setCreameryName("testcreamery");
        herd.setAddress("RAHALLY MONARD CO GALWAY");
        herd.setEircode("F16 RY87");
        herd.setContactNumber("00353-087-345291");
        herd.setContactNumber2("00353-087-345291");
        AssociatedHerds associatedHerds = new AssociatedHerds();
        associatedHerds.setAssociatedHerdsId(0);
        associatedHerds.setIndexHerdId("HERD123");
        associatedHerds.setSpeciesId(3);
        associatedHerds.setKeeperName("TestKeeper");
        associatedHerds.setActivityStatus("Active");
        associatedHerds.setReason("Test Reason");
        associatedHerds.setDateOfAssociation(RandomUtils.requiredDate(-10, "yyyy-MM-dd"));
        associatedHerds.setComment("test");
    	List<AssociatedHerds> associatedHerdsList =new ArrayList<AssociatedHerds>();
    	associatedHerdsList.add(associatedHerds);
	    herd.setAssociatedHerds(associatedHerdsList);
	    suspectPremises.setHerd(herd);
	    
	    HerdToBusiness herdToBusiness = new HerdToBusiness();
	    herdToBusiness.setHerdToBusinessId("1");
	    herdToBusiness.setRoleType("Creamery");
	    herdToBusiness.setBusinessCode("CR1515");
	    herdToBusiness.setBusinessName("CAVANAGH IRELAND LTD");
	    herdToBusiness.setBusinessReason("MILK SUPPLY CONTRACT");
	    herdToBusiness.setComment("test");
	   	List<HerdToBusiness> herdToBusinessList =new ArrayList<HerdToBusiness>();
	   	herdToBusinessList.add(herdToBusiness);
	    suspectPremises.setHerdToBusiness(herdToBusinessList);
	    
	    SuspectRVO suspectRVO = new SuspectRVO();
	    suspectRVO.setSuspectRVOId(0);
	    suspectRVO.setRvoId(3);
	   	List<SuspectRVO> suspectRVOList =new ArrayList<SuspectRVO>();
	   	suspectRVOList.add(suspectRVO);
	    suspectPremises.setSuspectRVO(suspectRVOList);
	    
	    RelevantRVO relevantRVO = new RelevantRVO();
		relevantRVO.setRelevantRVOId(0);
		relevantRVO.setRvoId(2);
	   	List<RelevantRVO> relevantRVOList =new ArrayList<RelevantRVO>();
	   	relevantRVOList.add(relevantRVO);
	    suspectPremises.setRelevantRVO(relevantRVOList);
	    
	    AdditionalPVP additionalPVP = new AdditionalPVP();
	    additionalPVP.setAdditionalPVPId(1);
	    additionalPVP.setAdditionalPVPName("NEIL JAMES");
	   	List<AdditionalPVP> additionalPVPList =new ArrayList<AdditionalPVP>();
	    additionalPVPList.add(additionalPVP);
	    suspectPremises.setAdditionalPVP(additionalPVPList);
	    
	    suspectPremises.setVersionNum(0);
	     
	    return suspectPremises;
		
	}
	
	
	
	public SuspectAnimal addSuspectAnimal()
	{
		SuspectAnimal suspectAnimal = new SuspectAnimal();
		//TestDataHolder.addTestDataRecord("SUSPECT_REPORT_ID", "1441", true, true);
		suspectAnimal.setSuspectReportId(Integer.parseInt(TestDataHolder.getTestDataRecord("SUSPECT_REPORT_ID")));
		suspectAnimal.setDateFirstClinicalSigns(OffsetDateTime.now().toString());
		
		SuspectAnimalSpeciesAffected suspectAnimalSpeciesAffected  = new SuspectAnimalSpeciesAffected();
		suspectAnimalSpeciesAffected.setSuspectAnimalSpeciesAffectedId(1038);
		suspectAnimalSpeciesAffected.setSpeciesId(2);
		List<SuspectAnimalSpeciesAffected>suspectAnimalSpeciesAffectedList = new ArrayList<SuspectAnimalSpeciesAffected>();
		suspectAnimalSpeciesAffectedList.add(suspectAnimalSpeciesAffected);
		suspectAnimal.setSuspectAnimalSpeciesAffected(suspectAnimalSpeciesAffectedList);
		
		suspectAnimal.setOtherSpeciesAffected("Bovine");
		suspectAnimal.setAnimalsAffected(5);
		
		SuspectAnimalClinicalSigns suspectAnimalClinicalSigns  = new SuspectAnimalClinicalSigns();
		suspectAnimalClinicalSigns.setSuspectAnimalClinicalSignsId(1260);
		suspectAnimalClinicalSigns.setClinicalSignsId(22);
		List<SuspectAnimalClinicalSigns>suspectAnimalClinicalSignsList = new ArrayList<SuspectAnimalClinicalSigns>();
		suspectAnimalClinicalSignsList.add(suspectAnimalClinicalSigns);
		suspectAnimal.setSuspectAnimalClinicalSigns(suspectAnimalClinicalSignsList);
		
		suspectAnimal.setOtherClinicalSigns("Anorexia");
		
		SuspectAnimalLesions suspectAnimalLesions  = new SuspectAnimalLesions();
		suspectAnimalLesions.setSuspectAnimalLesionsId(1170);
		suspectAnimalLesions.setLesionsId(16);
		List<SuspectAnimalLesions>suspectAnimalLesionsList = new ArrayList<SuspectAnimalLesions>();
		suspectAnimalLesionsList.add(suspectAnimalLesions);
		suspectAnimal.setSuspectAnimalLesions(suspectAnimalLesionsList);
		
		suspectAnimal.setOtherLesions("bulb lesisons");
		suspectAnimal.setAdditionalDetails("additional details of animals");
		suspectAnimal.setVersionNum(0);
		
	    return suspectAnimal;
		
	}
	
	
	
	public PriorityQuestions addPriorityQuestions()
	{
		PriorityQuestions priorityQuestions = new PriorityQuestions();
		priorityQuestions.setSuspectReportId(Integer.parseInt(TestDataHolder.getTestDataRecord("SUSPECT_REPORT_ID")));
		priorityQuestions.setMovementOntoPremises(true);
		
		SpeciesMoved speciesMoved  = new SpeciesMoved();
		speciesMoved.setSpeciesId(0);
		speciesMoved.setSpeciesDescription("Bovine");
		List<SpeciesMoved> speciesMovedList = new ArrayList<SpeciesMoved>();
		speciesMovedList.add(speciesMoved);
		priorityQuestions.setSpeciesMoved(speciesMovedList);
		
		priorityQuestions.setOtherSpecies("Bovine");
		priorityQuestions.setNumberOfAnimals(10);
		priorityQuestions.setSuspectAnimalMoved(true);
		priorityQuestions.setMovedAnimalContactWithSuspectAnimal(true);
		priorityQuestions.setMovedAnimalsImported(true);
		
		ImportedCountries importedCountries  = new ImportedCountries();
		importedCountries.setCountriesId(0);
		importedCountries.setCountryName("Albania");
		List<ImportedCountries> importedCountriesList = new ArrayList<ImportedCountries>();
		importedCountriesList.add(importedCountries);
		priorityQuestions.setImportedCountries(importedCountriesList);
		
		ImportedDates importedDates  = new ImportedDates();
		importedDates.ImportedDate = (OffsetDateTime.now().toString());
		//2021-02-0300:00:00Z
		//(RandomUtils.requiredDate(-1,"yyyy-MM-dd")+"00:00:00Z");
		List<ImportedDates> importedDatesList = new ArrayList<ImportedDates>();
		importedDatesList.add(importedDates);
		priorityQuestions.setImportedDates(importedDatesList);
		
		priorityQuestions.setOtherAttendanceAtPremises("bcp");
		
		AttendanceAtPremises attendanceAtPremises  = new AttendanceAtPremises();
        List<AttendanceAtPremises> attendanceAtPremisesList = new ArrayList<AttendanceAtPremises>();
        //attendanceAtPremisesList.add(attendanceAtPremises);
		priorityQuestions.setAttendanceAtPremises(attendanceAtPremisesList);
		
		priorityQuestions.setAssociatedPersonAttend(true);
		priorityQuestions.setSuspectAnimalAttend(true);
		priorityQuestions.setSusceptibleAnimalAssociatedWithPremisesAttend(true);
		
		SusceptibleSpeciesAttend susceptibleSpeciesAttend  = new SusceptibleSpeciesAttend();
        List<SusceptibleSpeciesAttend> susceptibleSpeciesAttendList = new ArrayList<SusceptibleSpeciesAttend>();
        //susceptibleSpeciesAttendList.add(susceptibleSpeciesAttend);
		priorityQuestions.setSusceptibleSpeciesAttend(susceptibleSpeciesAttendList);
	    
		priorityQuestions.setOtherSusceptibleSpecies("bovine");
		priorityQuestions.setNonSusceptibleAnimalsAttend(true);
		
		NonSusceptibleSpeciesAttend nonSusceptibleSpeciesAttend  = new NonSusceptibleSpeciesAttend();
        List<NonSusceptibleSpeciesAttend> nonSusceptibleSpeciesAttendList = new ArrayList<NonSusceptibleSpeciesAttend>();
        //nonSusceptibleSpeciesAttendList.add(nonSusceptibleSpeciesAttend);
		priorityQuestions.setNonSusceptibleSpeciesAttend(nonSusceptibleSpeciesAttendList);
		
		priorityQuestions.setOtherNonSusceptibleSpecies("Poultry");
		priorityQuestions.setAttendingAnimalsContactWithSuspectAnimal("No");
		priorityQuestions.setOtherDetails("OtherDetails");
		priorityQuestions.setPigsPresentOrAssociated(true);
		priorityQuestions.setNumberOfPigs(5);
		priorityQuestions.setDetailsOfAssociation("AssociateAnimalss");
		priorityQuestions.setAssociatedPersonTravelAbroad(true);
		
		CountriesTravelled countriesTravelled  = new CountriesTravelled();
		countriesTravelled.setCountriesId(1);
		countriesTravelled.setCountryName("Andorra");
		List<CountriesTravelled> countriesTravelledList = new ArrayList<CountriesTravelled>();
		countriesTravelledList.add(countriesTravelled);
		priorityQuestions.setCountriesTravelled(countriesTravelledList);
		
		DatesReturned datesReturned  = new DatesReturned();
	    datesReturned.DateReturned =(OffsetDateTime.now().toString());
		List<DatesReturned> datesReturnedList = new ArrayList<DatesReturned>();
		datesReturnedList.add(datesReturned);
		priorityQuestions.setDatesReturned(datesReturnedList);
		
		priorityQuestions.setContactWithSusceptibleSpecies("Yes");
		priorityQuestions.setDetailsOfContact("test");
		priorityQuestions.setVersionNum(0);
		
		return priorityQuestions;
		
		
	}
	
	
	public AdditionalQuestions addAdditionalQuestions()
	{
		AdditionalQuestions additionalQuestions = new AdditionalQuestions();
		additionalQuestions.setSuspectReportId(Integer.parseInt(TestDataHolder.getTestDataRecord("SUSPECT_REPORT_ID")));
		
		SuspectAnimalAccommodated suspectAnimalAccommodated  = new SuspectAnimalAccommodated();
		suspectAnimalAccommodated.setAccomodationId(1);
		suspectAnimalAccommodated.setAccomodationName("Housed");
		List<SuspectAnimalAccommodated> suspectAnimalAccommodatedList = new ArrayList<SuspectAnimalAccommodated>();
		suspectAnimalAccommodatedList.add(suspectAnimalAccommodated);
		additionalQuestions.setSuspectAnimalAccommodated(suspectAnimalAccommodatedList);
		
		additionalQuestions.setOtherAccommodated("housed and pastured");
		additionalQuestions.setOtherHerdsPresent("Yes");
		
		OtherHerds otherHerds  = new OtherHerds();
		otherHerds.setHerdId("Herd123");
		otherHerds.setSpecies("Bovine");
		otherHerds.setQuantity(5);
		otherHerds.setKeeper("IRISH FARMS");
		otherHerds.setActivityStatus("Active");
		List<OtherHerds> otherHerdsList = new ArrayList<OtherHerds>();
		otherHerdsList.add(otherHerds);
		additionalQuestions.setOtherHerds(otherHerdsList);
		
		additionalQuestions.setOtherNonSusceptible("Yes");
		
		OtherNonSusceptibleSpeciesOnPremises otherNonSusceptibleSpeciesOnPremises  = new OtherNonSusceptibleSpeciesOnPremises();
		otherNonSusceptibleSpeciesOnPremises.setSpeciesId(1);
		otherNonSusceptibleSpeciesOnPremises.setSpeciesDescription("Equine");
		List<OtherNonSusceptibleSpeciesOnPremises> OtherNonSusceptibleSpeciesOnPremisesList = new ArrayList<OtherNonSusceptibleSpeciesOnPremises>();
		OtherNonSusceptibleSpeciesOnPremisesList.add(otherNonSusceptibleSpeciesOnPremises);
		additionalQuestions.setOtherNonSusceptibleSpeciesOnPremises(OtherNonSusceptibleSpeciesOnPremisesList);
		
		additionalQuestions.setOtherNonSusceptibleSpecies("Yes");
		additionalQuestions.setClinicalDisease("Yes");
		additionalQuestions.setClinicalDiseaseDetails("Swine");
		additionalQuestions.setMovementOffPremises("Yes");
		
		SpeciesMoved speciesMoved  = new SpeciesMoved();
		speciesMoved.setSpeciesId(1);
		speciesMoved.setSpeciesDescription("Bovine");
		List<SpeciesMoved> speciesMovedList = new ArrayList<SpeciesMoved>();
		speciesMovedList.add(speciesMoved);
		additionalQuestions.setSpeciesMoved(speciesMovedList);
		
		additionalQuestions.setOtherSpecies("ovine");
		additionalQuestions.setQuantityOfMovedAnimals(5);
		additionalQuestions.setVisitorOnPremises("Yes");
		additionalQuestions.setVisitorDetails("From DAFAM");
		additionalQuestions.setEquipmentMoved("Yes");
		additionalQuestions.setEquipmentDetails("Animal Diagnosis Equipments");
		
		additionalQuestions.setVersionNum(0);
		
		return additionalQuestions;
		
		
	}
	
	public VerbalStandStill addVerbalStandStill()
	{
		VerbalStandStill verbalStandStill = new VerbalStandStill();
		verbalStandStill.setVerbalDirectionGiven("Y");
		verbalStandStill.setVersionNum(0);
		return verbalStandStill;
		
	}
	
		
	public SuspectFarmVisitAssignment addSuspectFarmVisitAssignment()
	{
		SuspectFarmVisitAssignment suspectFarmVisitAssignment = new SuspectFarmVisitAssignment();
	    suspectFarmVisitAssignment.setSuspectVisitAssignmentId(0);
		suspectFarmVisitAssignment.setSuspectPremisesId(Integer.parseInt(TestDataHolder.getTestDataRecord("SUSPECT_PREMISES_ID")));
		suspectFarmVisitAssignment.setMethodsOfAssignmentId(2);
		suspectFarmVisitAssignment.setDessignatedAssignerId("2");
		suspectFarmVisitAssignment.setOvToAssign("1");
		suspectFarmVisitAssignment.setVersionNumber(0);
		return suspectFarmVisitAssignment;
		
	}
	
	public SuspectFarmVisitPreparation addSuspectFarmVisitPreparation()
	{
		SuspectFarmVisitPreparation suspectFarmVisitPreparation = new SuspectFarmVisitPreparation();
		suspectFarmVisitPreparation.setSuspectVisitPreparationId(0);
		suspectFarmVisitPreparation.setSuspectPremisesId(Integer.parseInt(TestDataHolder.getTestDataRecord("SUSPECT_PREMISES_ID")));
		suspectFarmVisitPreparation.setRoRequiredFlag("Y");
		suspectFarmVisitPreparation.setTechStaffRequiredFlag("Y");
		suspectFarmVisitPreparation.setAdditionalPersonnelRequireFlag("Y");
		suspectFarmVisitPreparation.setPrepareSuspectVisitStatusId(1);
		suspectFarmVisitPreparation.setVersionNumber(0);
		return suspectFarmVisitPreparation;
		
	}
	
	
	

}
