import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnDestroy, Inject, HostListener } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class NavbarComponent implements OnDestroy {
  check: boolean;

  constructor(
    @Inject (DOCUMENT) private document: Document
  ) { }

  @HostListener("document:scroll", [])
  onScroll() {
    const offset = this.document.documentElement.scrollTop ||
      this.document.body.scrollTop || 0;
    offset > 130 ? this.check = true : this.check = false;
  }

  ngOnDestroy(): void {
  }
}
