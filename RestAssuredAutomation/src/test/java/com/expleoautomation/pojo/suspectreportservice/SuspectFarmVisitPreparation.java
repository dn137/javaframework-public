package com.expleoautomation.pojo.suspectreportservice;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import lombok.Getter;
import lombok.Setter;

@NoArgsConstructor
public class SuspectFarmVisitPreparation {
	
	@Getter @Setter private  int suspectVisitPreparationId;
	@Getter @Setter private  int suspectPremisesId;
	@Getter @Setter private  String roRequiredFlag;
	@Getter @Setter private  String techStaffRequiredFlag;
	@Getter @Setter private  String additionalPersonnelRequireFlag;
	@Getter @Setter private  int prepareSuspectVisitStatusId;
	@Getter @Setter private  int versionNumber;

	

}
