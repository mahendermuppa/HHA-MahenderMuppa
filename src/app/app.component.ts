import { Component } from '@angular/core';

interface State {
  
  region:string;
  region_code:string;
  perio: string;
        atleast_one_measure: string;
        immunization_measure: string;
        reportable_lab_results_measure: string;
        syndromic_surveillance_measure: string;
        registry_measure: string;
        stage_2_hospitals_all_measures: string;
        stage_1_hospitals_all_measures: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hha3';
  name = 'Angular';
    
  states: State[] = [
      {
        region: "Alabama",
        region_code: "AL",
        perio: "2015",
        atleast_one_measure: "0.9",
        immunization_measure: "0.73",
        reportable_lab_results_measure: "0.1",
        syndromic_surveillance_measure: "0.16",
        registry_measure: "",
        stage_2_hospitals_all_measures: "0",
        stage_1_hospitals_all_measures: "0"
      },{
        region: "Alaska",
        region_code: "AK",
        perio: "2013",
        atleast_one_measure: "0.9",
        immunization_measure: "0.73",
        reportable_lab_results_measure: "0.1",
        syndromic_surveillance_measure: "0.16",
        registry_measure: "",
        stage_2_hospitals_all_measures: "0",
        stage_1_hospitals_all_measures: "0"
      },{
        region: "California",
        region_code: "CA",
        perio: "2013",
        atleast_one_measure: "0.9",
        immunization_measure: "0.73",
        reportable_lab_results_measure: "0.1",
        syndromic_surveillance_measure: "0.16",
        registry_measure: "",
        stage_2_hospitals_all_measures: "0",
        stage_1_hospitals_all_measures: "0"
      },{
        region: "Texas",
        region_code: "TX",
        perio: "2013",
        atleast_one_measure: "0.9",
        immunization_measure: "0.73",
        reportable_lab_results_measure: "0.1",
        syndromic_surveillance_measure: "0.16",
        registry_measure: "",
        stage_2_hospitals_all_measures: "0",
        stage_1_hospitals_all_measures: "0"
      },{
        region: "New York",
        region_code: "NY",
        perio: "2013",
        atleast_one_measure: "0.9",
        immunization_measure: "0.73",
        reportable_lab_results_measure: "0.1",
        syndromic_surveillance_measure: "0.16",
        registry_measure: "",
        stage_2_hospitals_all_measures: "0",
        stage_1_hospitals_all_measures: "0"
      },{
        region: "Florida",
        region_code: "FL",
        perio: "2013",
        atleast_one_measure: "0.9",
        immunization_measure: "0.73",
        reportable_lab_results_measure: "0.1",
        syndromic_surveillance_measure: "0.16",
        registry_measure: "",
        stage_2_hospitals_all_measures: "0",
        stage_1_hospitals_all_measures: "0"
      }
  ]
  single: State[];
  multi: any[];

  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor() {
    //Object.assign(this, { single })
  }

  onSelect(event) {
    console.log(event);
  }


}
