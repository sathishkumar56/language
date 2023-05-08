import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ScrollSpyService } from 'ng-spy';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title!: string;
  emailId!: string;
  constructor(private spyService:ScrollSpyService,
    public translate: TranslateService
  ) {
    translate.addLangs(['en', 'es', 'fr']);
    translate.setDefaultLang('en');
  }
  translateLanguageTo(lang: string) {
    this.translate.use(lang);
 
  }
    getTitleString() {
      this.translate.get(['TITLE', 'USER_INFO.EMAIL_ADDRESS'])
        .subscribe(translations => {
          this.title = translations['TITLE'];
          this.emailId = translations['USER_INFO.EMAIL_ADDRESS'];
        });
    }

    ngAfterViewInit() {
      this.spyService.spy({ thresholdBottom: 50 });
    }
  
  }

