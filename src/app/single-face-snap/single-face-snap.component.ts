import { Component, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapService } from '../services/face-snaps.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { TitleCasePipe, NgClass, NgStyle, DatePipe } from '@angular/common';

@Component({
  selector: 'app-single-face-snap',
  imports: [TitleCasePipe, NgClass, NgStyle, DatePipe, RouterLink],
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.scss',
})
export class SingleFaceSnapComponent {
  snapButtonText!: string;
  userhasSnapped!: boolean;
  @Input() faceSnap!: FaceSnap;

  constructor(
    private faceSnapService: FaceSnapService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.prepareInterface();
    this.getFaceSnap();
  }

  private prepareInterface() {
    this.snapButtonText = 'Oh Snap !';
    this.userhasSnapped = false;
  }

  private getFaceSnap(): void {
    const faceSnapId = this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapService.getFaceSnapById(faceSnapId);
  }

  onSnap(): void {
    if (this.userhasSnapped) {
      this.unsnap();
    } else {
      this.snap();
    }
  }

  snap(): void {
    this.faceSnapService.snapFaceSanpById(this.faceSnap.id, 'snap');
    this.snapButtonText = 'Oops, unSnap !';
    this.userhasSnapped = true;
  }

  unsnap(): void {
    this.faceSnapService.snapFaceSanpById(this.faceSnap.id, 'unsnap');
    this.snapButtonText = 'Oh snap !';
    this.userhasSnapped = false;
  }
}
