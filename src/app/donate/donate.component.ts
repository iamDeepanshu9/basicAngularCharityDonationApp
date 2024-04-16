import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { DonationService } from '../donation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.scss'],
})
export class DonateComponent implements OnInit {
  donationForm = this.fb.group({
    name: ['', [Validators.required]],
    amount: ['', [Validators.required, Validators.min(5)]],
  });

  constructor(
    private fb: FormBuilder,
    private donationService: DonationService,
    private router: Router
  ) {}
  ngOnInit(): void {}

  // In donate.component.ts
  onSubmit(): void {
    if (this.donationForm.valid) {
      this.donationService.postDonation(this.donationForm.value).subscribe({
        next: (response) => {
          console.log('Donation successful', response);
          this.router.navigate(['/thank-you']);
        },
        error: (error) => {
          console.error('There was an error!', error);
        },
      });
    }
  }
}
