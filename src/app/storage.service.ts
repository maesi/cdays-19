import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  public getTopis() {
    return [
      {
        id: '1',
        description: "Bergsteigen über 4000 Meter über Meer, am liebsten im Himmalaya",
        image: "https://www.bergwelten.com/files/article/images/mauritius-Himalaya-0_0.jpg?output-format=jpg&output-quality=60&downsize=1200px:*",
        label: "Bergsteigen"
      }, {
        id: '2',
        description: "Alles mögliche mit Microsoft Excel",
        image: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE2sxJ0?ver=3b55&q=90&m=2&h=768&w=1024&b=%23FFFFFFFF&aim=true",
        label: "Excel"
      }, {
        id: '3',
        description: "Alles mögliche mit Microsoft Excel",
        image: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE2sxJ0?ver=3b55&q=90&m=2&h=768&w=1024&b=%23FFFFFFFF&aim=true",
        label: "Excel"
      }, {
        id: '4',
        description: "Alles mögliche mit Microsoft Excel",
        image: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE2sxJ0?ver=3b55&q=90&m=2&h=768&w=1024&b=%23FFFFFFFF&aim=true",
        label: "Excel"
      }, {
        id: '5',
        description: "Alles mögliche mit Microsoft Excel",
        image: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE2sxJ0?ver=3b55&q=90&m=2&h=768&w=1024&b=%23FFFFFFFF&aim=true",
        label: "Excel"
      }, {
        id: '6',
        description: "Alles mögliche mit Microsoft Excel",
        image: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE2sxJ0?ver=3b55&q=90&m=2&h=768&w=1024&b=%23FFFFFFFF&aim=true",
        label: "Excel"
      }
    ];
  }
}
