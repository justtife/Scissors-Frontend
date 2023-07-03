import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UrlServiceService } from 'src/app/services/url-service.service';
@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.scss'],
})
export class RedirectComponent implements OnInit {
  ngOnInit(): void {
    this.redirect();
  }
  routeSegments: any;
  constructor(
    private route: Router,
    private http: UrlServiceService,
    private activatedRoute: ActivatedRoute
  ) {}
  redirect() {
    this.routeSegments = this.activatedRoute.snapshot.url.map(
      (segment: any) => segment.path
    );
    const firstSegment = this.routeSegments[0];
    console.log(firstSegment);
    this.http.getURL(firstSegment).subscribe(
      (response) => {
        setTimeout(() => {
          window.location.href = response;
        }, 3000);
      },
      (error) => {
        setTimeout(() => {
          this.route.navigate(['not-found']);
        }, 3000);
      }
    );
  }
}
