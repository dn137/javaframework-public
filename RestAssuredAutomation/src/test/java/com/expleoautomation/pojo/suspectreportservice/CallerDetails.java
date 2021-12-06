package com.expleoautomation.pojo.suspectreportservice;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import lombok.Getter;
import lombok.Setter;

@NoArgsConstructor
public class CallerDetails {
	
	@Getter @Setter private  int reporterId;
	@Getter @Setter private  String reportedByOthers;
	@Getter @Setter private  String dafmNumber;
	@Getter @Setter private  String name;
	@Getter @Setter private  String contactNumber;
	@Getter @Setter private  String eircode;
	@Getter @Setter private  String address;
	@Getter @Setter private  int reportMethodId;
	@Getter @Setter private  int versionNum;
	@Getter @Setter private  String lastUpdatedBy;
	@Getter @Setter private  String lastUpdatedDate;
	

}