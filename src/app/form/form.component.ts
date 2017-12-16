import { Component, OnInit } from '@angular/core';
import { CarouselService } from '../carousel/carousel.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})

export class FormComponent implements OnInit {
  name = "";
  link = "";
  companies = [];
  id = 0;

  formItems = {
    item: [{
      name: "United States of America",
      company: [{
        name: "Axiom",
        link: "http://www.acxiom.com.au/about-acxiom/privacy/australia-privacy-policy",
        description: "TBD"
      },
      {
        name: "Epsilon",
        link: "https://www.epsilon.com/en_US/consumer-information/consumer-preference-center.html",
        description: "TBD"
      },
      {
        name: "Experian",
        link: "http://www.experian.com.au/legal/optout.html",
        description: "TBD"
      },
      {
        name: "Oracle Data Cloud",
        link: "http://eu.datalogix.com/uk-privacy/",
        description: "TBD"
      },
      {
        name: "TransUnion",
        link: "https://solutions.transunion.com/facebook-opt-out",
        description: "TBD"
      },
      {
        name: "WPP",
        link: "https://www.i-behavior.com/opt-out/",
        description: "TBD"
      },
      {
        name: "TruePeopleSearch",
        link: "https://www.truepeoplesearch.com/removal",
        description: "TBD"
      },
      {
        name: "FamilyTreeNow",
        link: "https://www.familytreenow.com/optout",
        description: "TBD"
      }]
    },
    {
      name: "United Kingdom",
      company: [{
        name: "Axiom",
        link: "http://www.acxiom.com.au/about-acxiom/privacy/australia-privacy-policy",
        description: "TBD"
      },
      {
        name: "Experian",
        link: "http://www.experian.com.au/legal/optout.html",
        description: "TBD"
      },
      {
        name: "Oracle Data Cloud",
        link: "http://eu.datalogix.com/uk-privacy/",
        description: "TBD"
      }]
    },
    {
      name: "Australia",
      company: [{
        name: "Axiom",
        link: "http://www.acxiom.com.au/about-acxiom/privacy/australia-privacy-policy",
        description: "TBD"
      },
      {
        name: "Experian",
        link: "http://www.experian.com.au/legal/optout.html",
        description: "TBD"
      },
      {
        name: "Greater Data",
        link: "http://greaterdata.com.au/unsubscribe/",
        description: "TBD"
      },
      {
        name: "Quantium",
        link: "https://www.quantium.com/opt-out/facebook",
        description: "TBD"
      }]
    },
    {
      name: "Germany",
      company: [{
        name: "Axiom",
        link: "http://www.acxiom.com.au/about-acxiom/privacy/australia-privacy-policy",
        description: "TBD"
      }]
    },
    {
      name: "France",
      company: [{
        name: "Axiom",
        link: "http://www.acxiom.com.au/about-acxiom/privacy/australia-privacy-policy",
        description: "TBD"
      }]
    },
    {
      name: "Brazil",
      company: [{
        name: "Experian",
        link: "http://www.experian.com.au/legal/optout.html",
        description: "TBD"
      }]
    }
    ]
  }
  public arrayOfKeys;
  constructor(private carouselservice: CarouselService) {
    this.id = this.carouselservice.current()
    this.name = this.formItems.item[this.id].name;
    this.companies = this.formItems.item[this.id].company;
  }

  ngOnInit() {
  }

}
