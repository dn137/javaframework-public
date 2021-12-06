package com.expleoautomation.pojo.suspectreportservice;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import lombok.Getter;
import lombok.Setter;

@NoArgsConstructor
public class SuspectAnimalSpeciesAffected {
	
	@Getter @Setter private  int suspectAnimalSpeciesAffectedId;
	@Getter @Setter private  int speciesId;

}
