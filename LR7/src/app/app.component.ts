import { Component } from '@angular/core';
import { UserRequest } from './user-request';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lab7';
  public userData: UserRequest = new UserRequest();

  emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  phoneRegister = /^(\+380)(50|66|67|98|97|96|68|39|63|93|99|95){1}[0-9]{7}$/;
  totalRegister = /^[0-9]$/;

  nameErr = '';
  emailErr = '';
  phoneErr = '';
  totalErr = '';
  txtErr = '';

  checkData()
  {
    this.nameErr = '';
    this.emailErr = '';
    this.totalErr = '';
    this.phoneErr = '';
    this.txtErr = '';
    let check = true;

    
    if(this.userData.email==='')
    {

      this.emailErr = "Заповніть";
      check=false;

    }
    else if(!this.emailRegex.test(this.userData.email))
    {

      this.emailErr = "Помилка";
      check=false;

    }

    if(this.userData.phone==='')
    {

      this.phoneErr = "Заповніть";
      check=false;

    }
    else if(!this.phoneRegister.test(this.userData.phone))
    {

      this.phoneErr = "Помилка";
      check=false;

    }
    
    if(this.userData.name==='')
    {

      this.nameErr = "Заповніть";
      check=false;

    }

    if(this.userData.total === '')
    {
      this.totalErr = "Заповніть"
      check=false;
    }
    else if(!this.totalRegister.test(this.totalErr))
    {
      this.totalErr = "Помилка"
      check=false;
    }
    if(this.userData.txtmsg === '')
    {
      this.txtErr = "Заповніть";
      check=false;
    }
    
    if(check)
    {
      this.userData = new UserRequest();
      alert("Відправлено і cплачено");
    }
  }

}
