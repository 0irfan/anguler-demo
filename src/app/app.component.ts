import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApplicantService } from './applicant.service'; 
import { CommonModule } from '@angular/common'; 
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
file: any;
resume: any;
formData: FormData = new FormData();
parsed_data: any ;

constructor(
  private applicantService: ApplicantService, 
) {}

ngOnInit(): void {

  

}
// File selection and uploading logic
public onParseResume(target: EventTarget | null): void {
  const event = target as HTMLInputElement;
  if (event.files) {
    this.resume = event.files[0]
    this.uploadResume();
  }
}

objectKeys = Object.keys;
isArray(value: any): boolean {     return Array.isArray(value); }
isObject(value: any): boolean {     return value !== null && typeof value === 'object' && !this.isArray(value); }

  


uploadResume(): void {
  console.log(this.resume, "resume");  // Check the selected file


  this.formData = new FormData();
  this.formData.append('file', this.resume);  // Append the file to FormData

  // Call the service to upload the resume
  this.applicantService.parseResume(this.formData).subscribe(
    (res: any) => {
      if (res.data) {
        this.parsed_data = res.data.parsed_data;
        console.log(res.data.parsed_data, "data");  // Log the response data
      }
    },
    (error: any) => {
      console.error('Error uploading resume:', error);  // Handle error
    }
  );
}
}

