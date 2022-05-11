import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'Emp-Dir';
  private static Profiles_data = [];
  isFormOpen : boolean= false;
  constructor() {}

    empForm = new FormGroup({
      firstName : new FormControl("",[
        Validators.required,
        Validators.minLength(3)]),

      lastName : new FormControl('',[
        Validators.required,
        Validators.minLength(3)]),

      preferredName : new FormControl('',[
        Validators.required,
        Validators.minLength(3)]),

      email:new FormControl('',[
        Validators.required,
        Validators.email]),

      jobTitle: new FormControl('',[
        Validators.required]),

      office: new FormControl('',[
        Validators.required]),

      department: new FormControl('',[
        Validators.required]),

      phoneNo: new FormControl('',[
        Validators.required,
        Validators.minLength(3)]),

      skypeId: new FormControl('',[
        Validators.required,
        Validators.minLength(3)])
    });
  
  toggleAddEmpForm(){
    this.isFormOpen = ! this.isFormOpen;
    this.empForm.reset();
  }

  storeSubmissionDetails(){
    var fname = this.empForm.get('firstName')?.value;
    var lname = this.empForm.get('lastName')?.value;
    var pname = this.empForm.get('preferredName')?.value;
    var email = this.empForm.get('email')?.value;
    var job = this.empForm.get('jobTitle')?.value;
    var office = this.empForm.get('office')?.value;
    var dept = this.empForm.get('department')?.value;
    var phone = this.empForm.get('phoneNo')?.value;
    var skype = this.empForm.get('skypeId')?.value;
    AppComponent.Profiles_data.push([fname, lname, pname, email, job, office, dept, phone, skype ]);
    console.log(AppComponent.Profiles_data[0]);
    var len = AppComponent.Profiles_data.length;
    console.log(len);
    this.createEmployeeCard(len-1);
    this.toggleAddEmpForm();
  }

  createEmployeeCard(i: number){
    let profile = AppComponent.Profiles_data[i];
    console.log(profile);
    var name = profile[0]+" "+profile[1];
    
    var job_title = profile[4];
    var dept = AppComponent.Profiles_data[i][6];

    var div_profile = document.createElement('div');
    div_profile.className = ("personal-profile");

    var div_img = document.createElement('div');
    div_img.className = ("profile-img");

    var div_ed =  document.createElement('div');
    div_ed.className = ("emp-details");
    
    var div_name = document.createElement('div');
    div_name.className = ("name"); 
    div_name.textContent = name;

    var div_job = document.createElement('div');
    div_job.className=("job-title")
    div_job.textContent = (job_title);

    var div_dept = document.createElement('div');
    div_dept.className = ("department");
    div_dept.textContent = (dept+" Department");

    var div_icons = document.createElement('div');
    div_icons.className = ("icons");

    var ph_img = document.createElement('div');ph_img.setAttribute("src","assets/phone.png");
    var mail_img = document.createElement('div');mail_img.setAttribute("src","assets/mail.png");
    var msg_img = document.createElement('div');msg_img.setAttribute("src","assets/msg.png");
    var rating_img = document.createElement('div');rating_img.setAttribute("src","assets/rating.png");
    var like_img = document.createElement('div');like_img.setAttribute("src","assets/like.png");

    div_icons.append(ph_img, mail_img, msg_img, rating_img, like_img);
    div_ed.append(div_name, div_job, div_dept, div_icons);

    var profiles_section = document.getElementById("profiles-sec");
    profiles_section?.appendChild(div_profile);
  }

  get firstName(){
    return this.empForm.get('firstName');

  }
  get lastName(){
    return this.empForm.get('lastName');

  }

  get email(){
    return this.empForm.get('email');

  }
}
