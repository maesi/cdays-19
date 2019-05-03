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
    return this.notifikationen.sort((a, b) => b.id - a.id);
  }

  public getNotifikationCount(): Observable<number> {
    return this.notifikationCount.asObservable();
  }

  public readNotifikation(id: number): void {
    const notifikation =  this.notifikationen.find(not => not.id === id);
    notifikation.read = true;
    this.updateNotifkationCount();
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
    this.updateNotifkationCount();
  }

  private updateNotifkationCount(): void {
    this.notifikationCount.next(this.notifikationen.filter(not => !not.read).length);
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
    let i = 1;
    this.topics = [
      {
        id: i++,
        description: "Wer hätte Interesse sich über Segeln und Segelturns zu unterhalten?",
        image: "https://anasail.com/wp-content/uploads/2017/11/IMG_0707-600x600.jpg",
        label: "Segeln"
      },
      {
        id: i++,
        description: "Rund um Rum",
        image: "https://www.hooky.co.uk/wp-content/uploads/luggen.jpg",
        label: "Rum"
      },
      {
        id: i++,
        description: "Bist du auch dabei?",
        image: "https://www.loufmeter.ch/wp-content/uploads/2019/03/2019_Kaleidoskop_web-e1552419999814-450x450.jpg",
        label: "Mode"
      },
      {
        id: i++,
        description: "Egal ob Porsche, Ferrari oder Audi TT hauptsache schnell",
        image: "https://cdn.bringatrailer.com/wp-content/uploads/2018/11/1985_porsche_930_turbo_1541633844cffc4ab67DSCN6067-e1542984602107-940x707.jpg",
        label: "Schnelle Autos"
      },
      {
        id: i++,
        description: "Velotouren: Austausch zu den eindrücklichsten Velotouren in der Schweiz und Europa",
        image: "http://www.velo-touren.ch/Bilder/191%20gr.jpg",
        label: "Velofahren"
      },
      {
        id: i++,
        description: "Wär doch was?",
        image: "https://static01.nyt.com/images/2017/03/31/well/yoga-for-strength/yoga-for-strength-jumbo.jpg",
        label: "Yoga"
      },
      {
        id: i++,
        description: "Was wäre die Welt ohne die Kunst",
        image: "https://www.ziehn-dickmeis.de/wordpress/wp-content/uploads/2017/10/Haley-Zebras.jpg",
        label: "Kunst"
      },
      {
        id: i++,
        description: "Wer hat Interesse sich über Nachhaltigkeit in der allgemein und/oder in der Mobiliar auszutauschen?",
        image: "https://www.alnatura.de/~/media/Images/Content/Ueber%20uns/Nachhaltigkeit/Nachhaltigkeit_Lemniskate_mittig.jpg",
        label: "Nachhaltigkeit"
      },
      {
        id: i++,
        description: "Die Sonnenstube der Schweiz",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Wappen_Tessin_matt.svg/1200px-Wappen_Tessin_matt.svg.png",
        label: "Tessin"
      },
      {
        id: i++,
        description: "Judo und Japan",
        image: "https://previews.123rf.com/images/airindizain/airindizain1706/airindizain170600006/80557004-judo-vector-set-kimono-and-throws-characters-of-the-word-judo-.jpg",
        label: "Judo"
      },
      {
        id: i++,
        description: "Rund ums urban gardening",
        image: "https://blog.gls.de/wp-content/uploads/2018/10/URBANgardening-header-1440x680.jpg?is-pending-load=1",
        label: "Gärtnern"
      },
      {
        id: i++,
        description: "Rund ums urban gardening",
        image: "https://blog.gls.de/wp-content/uploads/2018/10/URBANgardening-header-1440x680.jpg?is-pending-load=1",
        label: "Gärtnern"
      },
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
