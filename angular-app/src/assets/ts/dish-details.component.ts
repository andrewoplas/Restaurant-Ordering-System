import { Component, OnInit } from '@angular/core';
import { MenuItem } from '@models/MenuItem';
import swal from 'sweetalert2';
import { OrderService } from '@services/order.service';
import { ActivatedRoute } from '@angular/router';
import { MenuItemService } from '@services/menu-item.service';

@Component({
  selector: 'app-dish-details',
  templateUrl: '../html/dish-details.component.html',
  styleUrls: ['../scss/dish-details.component.scss']
})
export class DishDetailsComponent implements OnInit {
  id: number;
  menuItem: MenuItem;
  quantity: number;

  constructor(
    private orderService: OrderService,
    private menuItemService: MenuItemService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(params => 
      this.id = params['id']
    )
  }

  ngOnInit() {
    this.quantity = 1;
    
    this.menuItemService.getMenuItem(this.id).subscribe(
			data => {
        if(data != null) {
          this.menuItem = data;
				} else {
          swal({
            title: "Ooops!",
            text: "There was an error during the process. Menu Item that you try go find might not exists!",
            type: "error",
            confirmButtonText: "Try Again",
            confirmButtonColor: "#A40020"
          });
        }
      },
      error => { 
        this.displayError(error);
      }
		); 
  }

  increaseQuantity() {
    if(this.quantity < this.menuItem.servings)
      this.quantity++;
  }

  decreaseQuantity() {
    if(this.quantity > 1) {
      this.quantity--;
    }
  }

  addToCart() {
    this.orderService.addToCart(this.menuItem, this.quantity);
		
		swal({
			title: "Success",
			text: "Successfully added " + this.quantity + " servings of  " + this.menuItem.name + " to your order",
			type: "success",
			confirmButtonText: "Close",
			confirmButtonColor: "#FBA62F"
		});
  }

  displayError(error) {
    swal({
      title: error.title,
      text: error.message,
      type: "error",
      confirmButtonText: "Got it!",
      confirmButtonColor: "#A40020"
    });
  }
}
