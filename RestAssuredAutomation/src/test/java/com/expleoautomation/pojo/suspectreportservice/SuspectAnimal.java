package com.expleoautomation.pojo.suspectreportservice;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;

import java.time.OffsetDateTime;
import java.util.List;

import lombok.Getter;
import lombok.Setter;

@NoArgsConstructor
public class SuspectAnimal {
	
	@Getter @Setter private  int suspectReportId;
	@Getter @Setter private  Object dateFirstClinicalSigns;
	@Getter @Setter private  List<SuspectAnimalSpeciesAffected> suspectAnimalSpeciesAffected;
	@Getter @Setter private  String otherSpeciesAffected;
	@Getter @Setter private  int animalsAffected;
	@Getter @Setter private  List<SuspectAnimalClinicalSigns> suspectAnimalClinicalSigns;
	@Getter @Setter private  String otherClinicalSigns;
	@Getter @Setter private  List<SuspectAnimalLesions> suspectAnimalLesions;
    @Getter @Setter private  String otherLesions;
	@Getter @Setter private  String additionalDetails;
	@Getter @Setter private  int versionNum;
	

}
