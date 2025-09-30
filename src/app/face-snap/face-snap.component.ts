import { Component, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { TitleCasePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-face-snap',
  imports: [TitleCasePipe],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss',
})
export class FaceSnapComponent {
  snapButtonText!: string;
  userhasSnapped!: boolean;
  @Input() faceSnap!: FaceSnap;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.snapButtonText = 'Oh snap !';
    this.userhasSnapped = false;
  }

  onViewFaceSnap() {
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
    console.log(`facesnaps/${this.faceSnap.id}`);
  }
}
