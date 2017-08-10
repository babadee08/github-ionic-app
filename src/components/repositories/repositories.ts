import { Repository } from './../../models/repository.interface';
import { Component, Input } from '@angular/core';

/**
 * Generated class for the RepositoriesComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'repositories',
  templateUrl: 'repositories.html'
})
export class RepositoriesComponent {

  /*text: string;

  constructor() {
    console.log('Hello RepositoriesComponent Component');
    this.text = 'Hello World';
  }*/

  @Input() repository: Repository;

}
