import { Injectable } from '@angular/core';
import {Topic} from './types/topic';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private topics: Topic[];

  constructor() {
    this.initTopics();
  }

  public getTopis(): Topic[] {
    return this.topics.filter(topic => !topic.liked && !topic.disliked);
  }

  public likeTopic(id: string): void {
    let topic = this.topics.find(topic => topic.id === id);
    topic.liked = true;
  }
  public dislikeTopic(id: string): void {
    let topic = this.topics.find(topic => topic.id === id);
    topic.disliked = true;
  }

  public getTopic(index: number | string): Topic {
    return this.topics[index];
  }

  private initTopics() {
    this.topics = [
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
      },
      {
        id: '3',
        description: "Bergsteigen über 4000 Meter über Meer, am liebsten im Himmalaya",
        image: "https://www.bergwelten.com/files/article/images/mauritius-Himalaya-0_0.jpg?output-format=jpg&output-quality=60&downsize=1200px:*",
        label: "Bergsteigen"
      }, {
        id: '4',
        description: "Alles mögliche mit Microsoft Excel",
        image: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE2sxJ0?ver=3b55&q=90&m=2&h=768&w=1024&b=%23FFFFFFFF&aim=true",
        label: "Excel"
      },
      {
        id: '5',
        description: "Bergsteigen über 4000 Meter über Meer, am liebsten im Himmalaya",
        image: "https://www.bergwelten.com/files/article/images/mauritius-Himalaya-0_0.jpg?output-format=jpg&output-quality=60&downsize=1200px:*",
        label: "Bergsteigen"
      }, {
        id: '6',
        description: "Alles mögliche mit Microsoft Excel",
        image: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE2sxJ0?ver=3b55&q=90&m=2&h=768&w=1024&b=%23FFFFFFFF&aim=true",
        label: "Excel"
      }
    ];
  }
}
