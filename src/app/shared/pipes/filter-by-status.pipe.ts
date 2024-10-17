import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByStatus'
})
export class FilterByStatusPipe implements PipeTransform {
  transform(characters: any[], status: string): any[] {
    if (!characters || !status) return characters;

    return characters.filter(character => character.status === status);
  }
}
