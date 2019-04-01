import { Component, OnInit } from '@angular/core';
import {TranslateService } from '@ngx-translate/core'
import Language from '../config/config'

@Component({
  selector: 'app-translation',
  templateUrl: './translation.component.html',
  styleUrls: ['./translation.component.css']
})

export class TranslationComponent implements OnInit {
  public activeLang = Language.spanish
  
  constructor(private translateService: TranslateService) {
    this.translateService.setDefaultLang(this.activeLang)
    
   }

  ngOnInit() {

  }


  public changeLang(lang:Language){
    this.activeLang = lang
    this.translateService.use(lang)
  }

}
