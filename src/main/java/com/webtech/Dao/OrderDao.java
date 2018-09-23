package com.webtech.Dao;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Repository;

import com.google.appengine.api.datastore.Entity;
import com.jmethods.catatumbo.EntityQueryRequest;
import com.jmethods.catatumbo.QueryResponse;
import com.webtech.Model.Order;

@Repository
public class OrderDao implements REPOSITORY<Order> {
	
	@Override
	public Order create(Order obj) {
		return em.insert(obj);
	}

	@Override
	public void update(Order obj) {
		em.update(obj);
	}

	@Override
	public boolean delete(String id) {
		em.delete(Order.class, Long.parseLong(id));
		return true;
	}
	
	public List<Order> getItems() {
		EntityQueryRequest request = em.createEntityQueryRequest("SELECT * FROM `Order`");
		QueryResponse<Order> response = em.executeEntityQueryRequest(Order.class, request);
		List<Order> obj = response.getResults();
		System.out.println("Return: " + obj.size());
		return obj;
	}

	@Override
	public Order getItem(String id) {
		return em.load(Order.class, Long.parseLong(id));
	}

	@Override
	public Order entityToObject(Entity entity) {
		return null;
	}

	@Override
	public boolean itemExist(long id) {
		return getItem(Long.toString(id)) != null;
	}

	//@Override
	public Optional<Long> addObject(Order obj) {
        return null;
	}

}
