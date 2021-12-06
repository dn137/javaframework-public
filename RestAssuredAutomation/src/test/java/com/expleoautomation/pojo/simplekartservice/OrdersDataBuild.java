package com.expleoautomation.pojo.simplekartservice;

import java.util.ArrayList;
import java.util.List;
import lombok.NoArgsConstructor;

@NoArgsConstructor
public class OrdersDataBuild {
	
	public Orders addOrders()
	{
		Orders orders = new Orders();
		orders.setAddress("14 north wall quay, Dublin , Ireland");

		Items items = new Items();
		items.setItemId(16249);
		items.setName("computer chairs");
		items.setPrice(15);
		items.setDescription("ergonomics office chairs");
	   	
		List<Items> itemsList =new ArrayList<Items>();
	   	itemsList.add(items);
	   	orders.setItems(itemsList);
		return orders;
		
		
	}

}