package com.expleoautomation.pojo.suspectreportservice;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import lombok.Getter;
import lombok.Setter;

@NoArgsConstructor
public class SpeciesMoved {
	
	@Getter @Setter private  int speciesId;
	@Getter @Setter private  String speciesDescription;

}
