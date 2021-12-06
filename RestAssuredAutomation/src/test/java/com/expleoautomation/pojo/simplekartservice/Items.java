package com.expleoautomation.pojo.simplekartservice;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
public class Items {
	
	@Getter @Setter private  Object itemId;
	@Getter @Setter private  String name;
	@Getter @Setter private  Object price;
	@Getter @Setter private  String description;

}