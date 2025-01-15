import { Component, OnInit } from '@angular/core';
import { MultimediaService } from '../services/multimedia.service';

@Component({

  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  query: string = '';
  results: any[] = [];
  sortAscending: boolean = true;

  constructor(private multimediaService: MultimediaService) {}

  ngOnInit(): void {}

  onSearch() {
    this.multimediaService.search(this.query).subscribe((data) => {
      this.results = data.collection.items;
    });
  }

  sortByTitle() {
    this.results.sort((a, b) => {
      if (this.sortAscending) {
        return a.data[0].title.localeCompare(b.data[0].title);
      } else {
        return b.data[0].title.localeCompare(a.data[0].title);
      }
    });
    this.sortAscending = !this.sortAscending;
  }
}
