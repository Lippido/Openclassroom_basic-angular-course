import { Component, signal } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.html",
  styleUrl: "./app.scss",
  imports: [RouterOutlet, HeaderComponent],
})
export class App {
  protected readonly title = signal("Open Classroom");
}
