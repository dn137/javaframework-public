package com.expleoautomation.pojo.suspectreportservice;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;

import java.util.List;

import lombok.Getter;
import lombok.Setter;

@NoArgsConstructor
public class Herd {
	
	@Getter @Setter private  Object herdId;
	@Getter @Setter private  String indexHerdId;
	@Getter @Setter private  Object farmId;
	@Getter @Setter private  String keeperName;
	@Getter @Setter private  String creameryCode;
	@Getter @Setter private  String creameryName;
	@Getter @Setter private  String address;
	@Getter @Setter private  String eircode;
	@Getter @Setter private  String contactNumber;
	@Getter @Setter private  String contactNumber2;
	@Getter @Setter private  List<AssociatedHerds> associatedHerds;
}
