import { Component, OnInit } from '@angular/core';
import { OpinionsbackService } from 'src/app/services/opinionsback.service';
import { NgForm } from '@angular/forms';
import { Opinion } from 'src/app/models/opinions';

@Component({
  selector: 'app-opinions',
  templateUrl: './opinions.component.html',
  styleUrls: ['./opinions.component.css']
})
export class OpinionsComponent implements OnInit {
  constructor (public opinionsbackService : OpinionsbackService ) {}

  ngOnInit(): void {
    this.getAllOpinions();
  }

  getAllOpinions() {
    this.opinionsbackService.getAllOpinions().subscribe(
      (opinion: any) => {
        this.opinionsbackService.opinion = opinion;
        console.log(this.opinionsbackService.opinion);
      },
      (error) => {
        console.error('Error fetching opinion:', error);
      }
    );
  }

  addOpinion(form: NgForm) {
    if (form.value._id) {
      this.opinionsbackService.updateOpinion(form.value).subscribe(
        (res) => {
          this.getAllOpinions();
          form.reset();
        },
        (err) => console.log(err)
      );
    } else {
      this.opinionsbackService.createOpinion(form.value).subscribe(
        (res) => {
          this.getAllOpinions();
          form.reset();
        },
        (err) => console.log(err)
      );
    }
  }

  deleteOpinion(id: string) {
    if (confirm('¿Seguro de eliminar?')) {
      this.opinionsbackService.deleteOpinion(id).subscribe(
        (res) => {
          this.getAllOpinions();
        },
        (err) => console.log(err)
      );
    }
  }

  editOpinion(opinion: Opinion) {
    this.opinionsbackService.selectedOpinion = opinion;
  }

  resetForm(form: NgForm) {
    form.reset();
  }

}