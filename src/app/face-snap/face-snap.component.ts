import { Component, Input } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";
import { DatePipe, NgClass, NgStyle, TitleCasePipe } from "@angular/common";
import { FaceSnapService } from "../services/face-snaps.service";

@Component({
  selector: "app-face-snap",
  imports: [NgStyle, NgClass, TitleCasePipe, DatePipe],
  templateUrl: "./face-snap.component.html",
  styleUrl: "./face-snap.component.scss",
})
export class FaceSnapComponent {
  snapButtonText!: string;
  userhasSnapped!: boolean;
  @Input() faceSnap!: FaceSnap;

  constructor(private faceSnapService: FaceSnapService) {}

  ngOnInit(): void {
    this.snapButtonText = "Oh snap !";
    this.userhasSnapped = false;
  }

  onSnap(): void {
    if (this.userhasSnapped) {
      this.unsnap();
    } else {
      this.snap();
    }
  }

  snap(): void {
    this.faceSnapService.snapFaceSanpById(this.faceSnap.id, "snap");
    this.snapButtonText = "Oops, unSnap !";
    this.userhasSnapped = true;
  }

  unsnap(): void {
    this.faceSnapService.snapFaceSanpById(this.faceSnap.id, "unsnap");
    this.snapButtonText = "Oh snap !";
    this.userhasSnapped = false;
  }
}
