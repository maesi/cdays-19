import {Component, OnInit} from '@angular/core';
import {StorageService} from '../storage.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Topic} from '../types/topic';
import {NotifikationTyp} from '../types/notifikation';
import {Meeting} from '../types/meeting';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {

  topic: Topic;
  meeting: Meeting;
  createMode: boolean;

  constructor(private storageService: StorageService, private route: ActivatedRoute, private router: Router) {
    this.createMode = this.router.url.endsWith('create');
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = parseInt(params.get('id'));
      if(this.createMode) {
        this.topic = this.storageService.getTopic(id);
      } else {
        this.meeting = this.storageService.getMeeting(id);
        this.topic = this.meeting.topic;
      }
    });
  }

  create() {
    const meeting = <Meeting>{
      id: this.storageService.getMeetingId(),
      ort: 'Nyon',
      datum: '2019-05-05',
      participate: true,
      created: true,
      topic: this.topic
    };
    this.storageService.addMeeting(meeting);
    if(meeting.id === 1) {
      setTimeout(() => {
        const meeting = <Meeting>{
          id: this.storageService.getMeetingId(),
          ort: 'Bern',
          datum: '2019-05-12',
          participate: false,
          created: false,
          topic: this.storageService.getFirstLikedTopic()
        };
        this.storageService.addMeeting(meeting);
        this.storageService.addNotifikation({
          id: this.storageService.getNotifikationId(),
          typ: NotifikationTyp.EVENT,
          read: false,
          relation: meeting
        });
      }, 5000);
    }
    this.router.navigate(['/']);
  }

  participate(): void {
    this.meeting.participate = true;
    setTimeout(() => {
      this.storageService.addNotifikation({
        id: this.storageService.getNotifikationId(),
        typ: NotifikationTyp.PARTIPICATE,
        read: false,
        relation: this.storageService.getMeeting(1)
      });
    }, 3000);
    this.router.navigate(['/notifications']);
  }

  notParticipate(): void {
    this.router.navigate(['/notifications']);
  }


}
