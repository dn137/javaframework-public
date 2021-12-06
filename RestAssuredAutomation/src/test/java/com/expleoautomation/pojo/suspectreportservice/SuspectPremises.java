package com.expleoautomation.pojo.suspectreportservice;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;

import java.util.List;

import lombok.Getter;
import lombok.Setter;

@NoArgsConstructor
public class SuspectPremises {
	
	@Getter @Setter private  int caseId;
	@Getter @Setter private  int suspectReportId;
	@Getter @Setter private  Object suspectPremisesId;
	@Getter @Setter private  Object premisesSubtypeId;
	@Getter @Setter private  boolean availableFlag;
	@Getter @Setter private  String attendantPVP;
	@Getter @Setter private  String reasonForNotAvailable;
	@Getter @Setter private  boolean locSameRegFlag;
	@Getter @Setter private  MainContactDetails mainContactDetails;
	@Getter @Setter private  List<PremisesFragments> premisesFragments;
	@Getter @Setter private  List<SusceptibleSpecies> susceptibleSpecies;
	@Getter @Setter private  List<SpeciesPresent> speciesPresent;
	@Getter @Setter private  Herd herd;
	@Getter @Setter private  List<HerdToBusiness> herdToBusiness;
	@Getter @Setter private  List<SuspectRVO> suspectRVO;
	@Getter @Setter private  List<RelevantRVO> relevantRVO;
	@Getter @Setter private  List<AdditionalPVP> additionalPVP;
	@Getter @Setter private  List<SpeciesPresent> SpeciesPresent;
	@Getter @Setter private  int versionNum;
		
}
