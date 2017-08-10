import { User } from './../../models/user.interface';
import { Component, Input } from '@angular/core';

/**
 * Generated class for the SearchResultComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'search-result',
  templateUrl: 'search-result.html'
})
export class SearchResultComponent {

  /*text: string;

  constructor() {
    console.log('Hello SearchResultComponent Component');
    this.text = 'Hello World';
  }*/

  @Input() user: User

}
