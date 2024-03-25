import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortTaskHistoriesByDateCreated'
})
export class SortTaskHistoriesByDateCreatedPipe implements PipeTransform {
  transform(taskHistories: any[]): any[] {
    if (!taskHistories) {
      return [];
    }
    // Sort task histories by dateCreated in descending order
    return taskHistories.slice().sort((a, b) => new Date(b.dateCreated).getTime() - new Date(a.dateCreated).getTime());
  }
}
