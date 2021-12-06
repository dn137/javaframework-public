package com.expleoautomation.pojo.suspectreportservice;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import lombok.Getter;
import lombok.Setter;

@NoArgsConstructor
public class SusceptibleSpecies {
	
	@Getter @Setter private  Object susceptibleSpeciesId;
	@Getter @Setter private  String otherDescription;
	@Getter @Setter private  int quantity;
	@Getter @Setter private  Object locationSameRegistered;
	@Getter @Setter private  int speciesId;


}
