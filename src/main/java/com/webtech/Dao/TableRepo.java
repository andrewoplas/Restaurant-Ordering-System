package com.webtech.Dao;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Repository;

import com.google.appengine.api.datastore.Entity;
import com.jmethods.catatumbo.EntityQueryRequest;
import com.jmethods.catatumbo.QueryResponse;
import com.webtech.Model.Menu;
import com.webtech.Model.Table;

@Repository
public class TableRepo implements REPOSITORY<Table> {

	@Override
	public Table create(Table obj) {
		// TODO Auto-generated method stub
		Table insertTable = null;
		try {
			insertTable = em.insert(obj);	
		} catch (Exception ex) {
			System.out.println("INSERTDAO: " + ex.getMessage());
		}
		return insertTable;
	}

	@Override
	public void update(Table obj) {
		// TODO Auto-generated method stub
		
		try {
			em.update(obj);
		} catch (Exception ex) {
			System.out.println("INSERTDAO: " + ex.getMessage());
		}
	}

	@Override
	public boolean delete(String id) {
		// TODO Auto-generated method stub
		try {
			em.delete(Menu.class, id);
			return true;
		} catch (Exception ex) {
			System.out.println("INSERTDAO: " + ex.getMessage());
			return false;
		}
	}

	@Override
	public List<Table> getItems() {
		// TODO Auto-generated method stub
		EntityQueryRequest request = em.createEntityQueryRequest("SELECT * FROM Table");
		QueryResponse<Table> response = em.executeEntityQueryRequest(Table.class, request);
		List<Table> obj = response.getResults();
		return obj;
	}

	@Override
	public Table getItem(String id) {
		// TODO Auto-generated method stub
		return em.load(Table.class, id);
	}

	@Override
	public Table entityToObject(Entity entity) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean itemExist(long id) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public Optional<Long> addObject(Table obj) {
		// TODO Auto-generated method stub
		obj = em.insert(obj);
        return Optional.of(Long.parseLong(obj.getId()));
	}

}
