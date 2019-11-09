import { Component, OnInit } from '@angular/core';
import { UsersService} from '../services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  users: any;
  constructor(private userService: UsersService) { }

  ngOnInit() {

    this.userService.getUsers().subscribe(
    data => {
      this.users = data;
      this.users.data.map(
        item => {
          console.log(item);
          item.fullName = item.first_name + ' ' + item.last_name;
      });
      console.log(data);
  });

  }

}
