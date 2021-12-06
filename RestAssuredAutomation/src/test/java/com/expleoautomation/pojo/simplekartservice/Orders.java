package com.expleoautomation.pojo.simplekartservice;

import java.util.List;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
public class Orders {
	
	@Getter @Setter private  String address;
	@Getter @Setter private  List<Items> items;
}