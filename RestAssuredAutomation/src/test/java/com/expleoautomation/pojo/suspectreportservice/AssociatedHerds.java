package com.expleoautomation.pojo.suspectreportservice;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import lombok.Getter;
import lombok.Setter;

@NoArgsConstructor
public class AssociatedHerds {
	
	@Getter @Setter private  Object associatedHerdsId;
	@Getter @Setter private  String indexHerdId;
	@Getter @Setter private  int speciesId;
	@Getter @Setter private  String keeperName;
	@Getter @Setter private  String activityStatus;
	@Getter @Setter private  String reason;
	@Getter @Setter private  String dateOfAssociation;
	@Getter @Setter private  String comment;

}
