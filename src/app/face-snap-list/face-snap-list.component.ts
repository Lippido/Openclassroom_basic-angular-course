import { Component } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";
import { FaceSnapComponent } from "../face-snap/face-snap.component";
import { FaceSnapService } from "../services/face-snaps.service";

@Component({
  selector: "app-face-snap-list",
  imports: [FaceSnapComponent],
  templateUrl: "./face-snap-list.component.html",
  styleUrl: "./face-snap-list.component.scss",
})
export class FaceSnapListComponent {
  faceSnaps!: FaceSnap[];

  constructor(private faceSnapService: FaceSnapService) {}

  ngOnInit(): void {
    this.faceSnaps = this.faceSnapService.getFaceSnaps();
  }
}
