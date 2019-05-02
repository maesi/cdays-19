import {Injectable} from '@angular/core';
import {Topic} from './types/topic';
import {Notifikation, NotifikationTyp} from './types/notifikation';
import {BehaviorSubject, Observable} from 'rxjs';
import {Meeting} from './types/meeting';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private topics: Topic[];
  private meetings: Meeting[];
  private notifikationen: Notifikation[];
  private notifikationCount: BehaviorSubject<number>;

  constructor() {
    this.initTopics();
    this.initMeetings();
    this.initNotifikationen();
  }

  public getNotifikationen(): Notifikation[] {
    return this.notifikationen;
  }

  public getNotifikationCount(): Observable<number> {
    return this.notifikationCount.asObservable();
  }

  public resetNotifikationCount(): void {
    this.notifikationCount.next(0);
  }

  public getTopis(): Topic[] {
    return this.topics.filter(topic => !topic.liked && !topic.disliked);
  }

  public likeTopic(id: number): void {
    let topic = this.topics.find(topic => topic.id === id);
    topic.liked = true;
  }
  public dislikeTopic(id: number): void {
    let topic = this.topics.find(topic => topic.id === id);
    topic.disliked = true;
  }

  public getTopic(index: number): Topic {
    return this.topics[index];
  }

  public getFirstLikedTopic(): Topic {
    return this.topics.find(topic => topic.liked);
  }

  public addNotifikation(notifikation: Notifikation): void {
    this.notifikationen.push(notifikation);
    this.notifikationCount.next(this.notifikationCount.value + 1);
  }

  public getNotifikationId(): number {
    return this.notifikationen.length + 1;
  }

  public addMeeting(meeting: Meeting): void {
    this.meetings.push(meeting);
  }

  public getMeeting(id: number): Meeting {
    return this.meetings.find(meeting => meeting.id === id);
  }

  public getMeetingId(): number {
    return this.meetings.length + 1;
  }

  private initTopics() {
    this.topics = [
      {
        id: 1,
        description: "Bergsteigen über 4000 Meter über Meer, am liebsten im Himmalaya",
        image: "https://www.bergwelten.com/files/article/images/mauritius-Himalaya-0_0.jpg?output-format=jpg&output-quality=60&downsize=1200px:*",
        label: "Bergsteigen"
      }, {
        id: 2,
        description: "Alles mögliche mit Microsoft Excel",
        image: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE2sxJ0?ver=3b55&q=90&m=2&h=768&w=1024&b=%23FFFFFFFF&aim=true",
        label: "Excel"
      },
      {
        id: 3,
        description: "Bergsteigen über 4000 Meter über Meer, am liebsten im Himmalaya",
        image: "https://www.bergwelten.com/files/article/images/mauritius-Himalaya-0_0.jpg?output-format=jpg&output-quality=60&downsize=1200px:*",
        label: "Bergsteigen"
      }, {
        id: 4,
        description: "Alles mögliche mit Microsoft Excel",
        image: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE2sxJ0?ver=3b55&q=90&m=2&h=768&w=1024&b=%23FFFFFFFF&aim=true",
        label: "Excel"
      },
      {
        id: 5,
        description: "Bergsteigen über 4000 Meter über Meer, am liebsten im Himmalaya",
        image: "https://www.bergwelten.com/files/article/images/mauritius-Himalaya-0_0.jpg?output-format=jpg&output-quality=60&downsize=1200px:*",
        label: "Bergsteigen"
      }, {
        id: 6,
        description: "Alles mögliche mit Microsoft Excel",
        image: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE2sxJ0?ver=3b55&q=90&m=2&h=768&w=1024&b=%23FFFFFFFF&aim=true",
        label: "Excel"
      }
    ];
  }

  private initMeetings(): void {
    this.meetings = [];
  }

  private initNotifikationen(): void {
    this.notifikationen = [];
    this.notifikationCount = new BehaviorSubject<number>(this.notifikationen.length);
  }
}
