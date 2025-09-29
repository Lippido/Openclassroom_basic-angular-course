import { Component, signal } from "@angular/core";
import { FaceSnapListComponent } from "./face-snap-list/face-snap-list.component";
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.html",
  styleUrl: "./app.scss",
  imports: [FaceSnapListComponent, HeaderComponent],
})
export class App {
  protected readonly title = signal("Open Classroom");
}
