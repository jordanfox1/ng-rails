import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs'
import { z } from "zod";


const articleSchema = z.object({
  author: z.string().nullable(),
  title: z.string().nullable(),
  body: z.string().nullable()
})

export type Article = z.infer<typeof articleSchema>

const isArticle = (value: unknown): value is Article => {
  if (articleSchema.parse(value)) {
    return true
  }

  return false
}

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  constructor(private http: HttpClient) { }

  private readonly url = "http://127.0.0.1:3000"

  private listArticlesApi(): Observable<unknown> {
    return this.http.get(`${this.url}/api/v1/articles`)
  }

  public async listArticles(): Promise<Article[]> {
    const articleResult = await firstValueFrom(this.listArticlesApi())
    if (!Array.isArray(articleResult)) {
      throw new Error("invalid result from articles api")
    }

    if (!articleResult.every(article => isArticle(article))) {
      throw new Error("invalid result from articles api")
    }

    return articleResult;
  }

  addArticle() { }

  findArticle() { }

  updateArticle() { }

  deleteArticle() { }

}
