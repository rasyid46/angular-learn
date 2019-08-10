import { Component, OnInit, Output , EventEmitter} from '@angular/core';
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() featuredSelected = new EventEmitter<string>();
  onSelect(feature: string){
    console.log(feature);
    this.featuredSelected.emit(feature);
  }
  ngOnInit() {
  }
}
