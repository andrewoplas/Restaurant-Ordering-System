package com.webtech.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.webtech.Model.Order;
import com.webtech.Service.OrderService;

@RestController
@RequestMapping("/")
public class OrderController extends BaseController implements CONTROLLER<Order> {
	
	@Autowired
	OrderService service;
	
	@CrossOrigin
    @PostMapping(path = "/order", produces = MediaType.APPLICATION_JSON_VALUE)
	@Override
	public Order create(Order obj) {
		// TODO Auto-generated method stub
		return service.create(obj);
	}
	
	@CrossOrigin
    @RequestMapping(path = "/order", method = RequestMethod.PUT, produces = MediaType.APPLICATION_JSON_VALUE)
	@Override
	public void update(Order obj) {
		// TODO Auto-generated method stub
		service.update(obj);
	}
	
	@CrossOrigin
    @DeleteMapping(path = "/delete-order/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
	@Override
	public boolean delete(@PathVariable(name = "id", required = true) String id) {
		System.out.println("DELETE");
		return service.delete(id);
	}
	
	@CrossOrigin
	@GetMapping(path = "/get-all-orders", produces = MediaType.APPLICATION_JSON_VALUE)
	@Override
	public List<Order> getItems() {
		return service.getItems();
	}
	
	@CrossOrigin
    @RequestMapping(path = "/order/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	@Override
	public Order getItem(@PathVariable(name = "id", required = true)String id) {
		return service.getItem(id);
	}

}
