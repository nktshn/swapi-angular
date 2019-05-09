import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-swapi-resource-item-details',
  templateUrl: './swapi-resource-item-details.component.html',
  styleUrls: ['./swapi-resource-item-details.component.scss']
})
export class SwapiResourceItemDetailsComponent implements OnInit {

  @Input('resourceItem') resourceItem;
  resourceItemModelToDisplay: { label: string, value: object }[] = [];

  constructor() { }

  ngOnInit() {
    
  }

  ngOnChanges(changes) {
    changes['resourceItem'] && (this.resourceItemModelToDisplay = this.mapResourceModel(this.resourceItem));
  }

  mapResourceModel(resourceItem) {
    if (!resourceItem) { return };
    return Object.entries(resourceItem).map(([key, value]) => {
      return {
        label: key,
        value,
      }
    });
  }

}
