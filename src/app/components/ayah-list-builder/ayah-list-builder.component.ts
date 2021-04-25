import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { chunk, range } from 'lodash';
import { AyahRange } from 'src/app/core/models';

@Component({
  selector: 'nq-ayah-list-builder',
  templateUrl: './ayah-list-builder.component.html',
  styleUrls: ['./ayah-list-builder.component.scss'],
})
export class AyahListBuilderComponent implements OnChanges {
  @Input('range') range: AyahRange;
  private totalAyahs = [];
  public ayahsToRender = [];
  private appendingAyahs: boolean;

  @ViewChild('observer') bottomObserver: ElementRef;

  constructor() {}

  appendAyahs() {
    if (this.totalAyahs.length && !this.appendingAyahs) {
      this.appendingAyahs = true;
      this.ayahsToRender = [...this.ayahsToRender, ...this.totalAyahs[0]];
      this.totalAyahs.shift();
      this.appendingAyahs = false;
    }
  }

  ngOnChanges() {
    this.ayahsToRender = [];
    this.totalAyahs = chunk(range(this.range.start, this.range.end + 1), 10);
    this.appendAyahs();
  }

  upperSectionVisible = true;
  intersectionOptions = { rootMargin: '1500px' };

  observer = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        this.appendAyahs();
      }
    });
  }, this.intersectionOptions);

  ngAfterViewInit() {
    this.observer.observe(this.bottomObserver.nativeElement);
  }
}