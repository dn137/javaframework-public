package com.expleoautomation.pojo.suspectreportservice;

import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;

import java.util.List;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
public class AdditionalQuestions {
	
	
	@Getter @Setter private  int suspectReportId;
	@Getter @Setter private  List<SuspectAnimalAccommodated> suspectAnimalAccommodated;
	@Getter @Setter private  String otherAccommodated;
	@Getter @Setter private  String otherHerdsPresent;
	@Getter @Setter private  List<OtherHerds> otherHerds;
	@Getter @Setter private  String otherNonSusceptible;
	@Getter @Setter private  List<OtherNonSusceptibleSpeciesOnPremises> otherNonSusceptibleSpeciesOnPremises;
	@Getter @Setter private  String otherNonSusceptibleSpecies;
	@Getter @Setter private  String clinicalDisease;
	@Getter @Setter private  String clinicalDiseaseDetails;
	@Getter @Setter private  String movementOffPremises;
	@Getter @Setter private  List<SpeciesMoved> speciesMoved;
	@Getter @Setter private  String otherSpecies;
	@Getter @Setter private  int quantityOfMovedAnimals;
	@Getter @Setter private  String visitorOnPremises;
	@Getter @Setter private  String visitorDetails;
	@Getter @Setter private  String equipmentMoved;
	@Getter @Setter private  String equipmentDetails;
	@Getter @Setter private  int versionNum;
	
	
}
