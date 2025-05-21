import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BudgetItem } from 'src/shared/models/budget-item.model';


@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.scss']
})
export class AddItemFormComponent implements OnInit {

  @Input() item: BudgetItem = new BudgetItem('', 0);
  @Output() formSubmit: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();
  
  isNewItem: boolean = false; 
  
  constructor() { }

  ngOnInit() {
    if(this.item){
      //implies that existing item obj was passed into item
      // hence it is not a new item
      this.isNewItem = false;
    } else{
      this.isNewItem = true;
      this.item = new BudgetItem('', 0);
    }
  }
  onSubmit(form: NgForm){
    //form.value (amt and descriptn )obtained from UI is sent to
    //formSubmit which is listened by either income section or exp section 
    //i.e the entered content is transfered to required section(income or exp)
    this.formSubmit.emit(form.value); 
    form.reset(); // to reset (disable) the ADD button again
  }

}
