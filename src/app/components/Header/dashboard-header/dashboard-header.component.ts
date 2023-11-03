import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { VoiceAudioComponent } from 'src/app/models/voice-audio/voice-audio.component';
import { AuthServiceService } from 'src/app/shared/auth-service.service';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.css']
})
export class DashboardHeaderComponent implements OnInit {
  isOpen = false;
  shopName!: any;
  adminFirstName!: any;
  adminLastName!: any;

  constructor(
    public auth: AuthServiceService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.shopName = localStorage.getItem('shopName');
    this.adminFirstName = localStorage.getItem('adminFirstName');
    this.adminLastName = localStorage.getItem('adminLastName');
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  openVoiceComponent() {
    this.dialog.open(VoiceAudioComponent)
  }

  logout() {
    this.auth.signOutApp();
  }

}
