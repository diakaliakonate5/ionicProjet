import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NavigationExtras, Router } from '@angular/router';




@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
public formData: FormGroup;
public apprenants: any;
constructor(private fb: FormBuilder,private http: HttpClient,private router:Router){ 
  this.formData = this.fb.group({
    login: ['', Validators.required],
    password: ['', Validators.required]
  });
//   this.http.get("http://localhost:8080/api/listApprenants").subscribe(
//    data =>{
//      this.apprenants = data
// }
//   )


}
ngOnInit(){
}

getFormData(){
  this.http.get("http://localhost:8080/api/verification?login="+this.formData.value.login+"&password="+this.formData.value.password).subscribe(
    login => {
      console.log(login)
      if(login)
      {
        let navigationExtras: NavigationExtras = {queryParams: {login: this.formData.value.login}}
        this.router.navigate(['/home'],navigationExtras)

      } else{
       alert("login ou mot de passe incorecte")}
      }
    
  )
 
}

}


