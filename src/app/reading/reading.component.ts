import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TestService } from '../services/index';

@Component({
  selector: 'app-reading',
  templateUrl: './reading.component.html',
  styleUrls: ['./reading.component.css']
})
export class ReadingComponent implements OnInit {

  conditionList: String[] = [];
  constructor(private testService: TestService) { }

  @Input()
  public readingForm: FormGroup;

  ngOnInit() {

      this.testService.getConditionTypes().subscribe(
        data => {
          console.log(data);
            this.conditionList = this.conditionList.concat(data);

        },
        error => {

        });
      console.log(this.conditionList);
  }
}
