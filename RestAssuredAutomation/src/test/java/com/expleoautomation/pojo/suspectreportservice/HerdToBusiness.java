package com.expleoautomation.pojo.suspectreportservice;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
public class HerdToBusiness {
	
	@Getter @Setter private  Object herdToBusinessId;
	@Getter @Setter private  String roleType;
	@Getter @Setter private  String businessCode;
	@Getter @Setter private  String businessName;
	@Getter @Setter private  String businessReason;
	@Getter @Setter private  String comment;


}