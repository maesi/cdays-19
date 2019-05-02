import { Component, OnInit } from '@angular/core';
import {StorageService} from "../storage.service";
import {ActivatedRoute} from "@angular/router";
import {Topic} from "../types/topic";

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {

  topic: Topic;

  constructor(private storageService: StorageService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.topic = this.storageService.getTopis()[params.get('index')];
    });
  }


}
