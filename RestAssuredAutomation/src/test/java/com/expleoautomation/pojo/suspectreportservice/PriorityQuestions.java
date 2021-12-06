package com.expleoautomation.pojo.suspectreportservice;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;

import java.util.List;

import lombok.Getter;
import lombok.Setter;

@NoArgsConstructor
public class PriorityQuestions {
	
	
	@Getter @Setter private  int suspectReportId;
	@Getter @Setter private  boolean movementOntoPremises;
	@Getter @Setter private  List<SpeciesMoved> speciesMoved;
	@Getter @Setter private  String otherSpecies;
	@Getter @Setter private  int numberOfAnimals;
	@Getter @Setter private  boolean suspectAnimalMoved;
	@Getter @Setter private  boolean movedAnimalContactWithSuspectAnimal;
	@Getter @Setter private  boolean movedAnimalsImported;
	@Getter @Setter private  List<ImportedCountries> importedCountries;
	@Getter @Setter private  List<ImportedDates> importedDates;
	@Getter @Setter private  String otherAttendanceAtPremises;
	@Getter @Setter private  List<AttendanceAtPremises> attendanceAtPremises;
	@Getter @Setter private  boolean associatedPersonAttend;
	@Getter @Setter private  boolean suspectAnimalAttend;
	@Getter @Setter private  boolean susceptibleAnimalAssociatedWithPremisesAttend;
	@Getter @Setter private  List<SusceptibleSpeciesAttend> susceptibleSpeciesAttend;
	@Getter @Setter private  String otherSusceptibleSpecies;
	@Getter @Setter private  boolean nonSusceptibleAnimalsAttend;
	@Getter @Setter private  List<NonSusceptibleSpeciesAttend> nonSusceptibleSpeciesAttend;
	@Getter @Setter private  String otherNonSusceptibleSpecies;
	@Getter @Setter private  String attendingAnimalsContactWithSuspectAnimal;
	@Getter @Setter private  String otherDetails;
	@Getter @Setter private  boolean pigsPresentOrAssociated;
	@Getter @Setter private  int numberOfPigs;
	@Getter @Setter private  String detailsOfAssociation;
	@Getter @Setter private  boolean associatedPersonTravelAbroad;
	@Getter @Setter private  List<CountriesTravelled> countriesTravelled;
	@Getter @Setter private  List<DatesReturned> datesReturned;
	@Getter @Setter private  String contactWithSusceptibleSpecies;
	@Getter @Setter private  String detailsOfContact;
	@Getter @Setter private  int versionNum;
	
	

		
}
