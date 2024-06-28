import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  toggle = false;

  onClickToggle() {
    this.toggle = !this.toggle;
    console.log(this.toggle);
  }
}
