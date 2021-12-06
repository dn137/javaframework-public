package com.expleoautomation.pojo.suspectreportservice;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import lombok.Getter;
import lombok.Setter;

@NoArgsConstructor
public class PremisesFragments {
	
	@Getter @Setter private  Object premisesFragmentsId;
	@Getter @Setter private  String fragmentNo;
	private  int xCoordinate;
    private  int yCoordinate;
	@Getter @Setter private  String address;
	@Getter @Setter private  String eircode;
	@Getter @Setter private  Object locSameRegFlag;
	
	public int getxCoordinate()
	{
		return this.xCoordinate;
		
	}
	
	public void setxCoordinate(int num)
	{
		this.xCoordinate = num;
		
	}
	
	public int getyCoordinate()
	{
		return this.yCoordinate;
		
	}
	
	public void setyCoordinate(int num)
	{
		this.yCoordinate = num;
		
	}
	

}
