package com.expleoautomation.pojo.suspectreportservice;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;

import java.util.List;

import lombok.Getter;
import lombok.Setter;

@NoArgsConstructor
public class OtherHerds {
	
	@Getter @Setter private  String herdId;
	@Getter @Setter private  String species;
	@Getter @Setter private  int quantity;
	@Getter @Setter private  String keeper;
	@Getter @Setter private  String activityStatus;
}
