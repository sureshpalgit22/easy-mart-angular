import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'easy-mart-ui';

  successMessage: string;
  errorMessage: string;
  warningMessage: string;

  isSuccess: boolean;
  isError: boolean;
  isWarning: boolean;

  public setSuccessMessage(message)
  {
    this.successMessage = message;
    this.isSuccess = true;
    setTimeout(()=>{
      this.isSuccess = false;

    },6000);

  }

  public setErrorMessage(message)
  {
    this.errorMessage=message;
    this.isError=true;
    setTimeout(()=>{
      this.isError=false;

    },6000)
  }


  public setWarningMessage(message: string) {
    this.warningMessage = message;
    this.isWarning = true;
    setTimeout(() => {
      this.isWarning = false;
    }, 6000);
  }

}
