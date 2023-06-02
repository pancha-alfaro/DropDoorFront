import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/users';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css'],
})
export class DataComponent implements OnInit {
  constructor(public backendService: BackendService) {}

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.backendService.getAllUsers().subscribe(
      (users: any) => {
        this.backendService.user = users;
        console.log(this.backendService.user);
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }

  addUser(form: NgForm) {
    if (form.value._id) {
      this.backendService.updateUser(form.value).subscribe(
        (res) => {
          this.getAllUsers();
          form.reset();
        },
        (err) => console.log(err)
      );
    } else {
      this.backendService.createUser(form.value).subscribe(
        (res) => {
          this.getAllUsers();
          form.reset();
        },
        (err) => console.log(err)
      );
    }
  }

  deleteUser(id: string) {
    if (confirm('¿Seguro de eliminar?')) {
      this.backendService.deleteUser(id).subscribe(
        (res) => {
          this.getAllUsers();
        },
        (err) => console.log(err)
      );
    }
  }

  editUser(user: User) {
    this.backendService.selectedUser = user;
  }

  resetForm(form: NgForm) {
    form.reset();
  }
}
