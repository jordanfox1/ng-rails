import { Component } from '@angular/core';
import { Article, ArticleService } from '../../../services/article.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list',
  standalone: true,
  providers: [HttpClient, ArticleService],
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  constructor(private svc: ArticleService) { }
  articles: Article[] | undefined;

  async ngOnInit() {
    this.articles = await this.svc.listArticles()
    console.log(this.articles)
  }

}
