export interface Project {
  id: string;
  name: string;
  customer: string;
  projectManager: string;
  date: Date;
  description: string;
  position: {
    _latitude: number;
    _longitude: number;
  };
  images: string[];
  dataUrl: string;
  dataVersion: number;
  active: boolean;
}
