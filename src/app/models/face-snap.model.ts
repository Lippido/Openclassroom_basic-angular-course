import { SnapType } from "./snap-type.type";

export class FaceSnap {
  location?: string;
  id: string;

  constructor(
    public title: string,
    public description: string,
    public imageUrl: string,
    public createdDate: Date,
    public snaps: number,
  ) {
    this.id = crypto.randomUUID().substring(0, 8);
  }

  addSnap(): void {
    this.snaps++;
  }

  removeSnap(): void {
    this.snaps--;
  }

  setLocation(_location: string): void {
    this.location = _location;
  }

  withLocation(location: string): FaceSnap {
    this.setLocation(location);
    return this;
  }

  snap(snapType: SnapType) {
    if (snapType === "snap") {
      this.addSnap();
    }
    if (snapType === "unsnap") {
      this.removeSnap();
    }
  }
}
