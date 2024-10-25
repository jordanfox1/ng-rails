class Api::V1::ArticleController < ApplicationController
  def index
    articles = Article.all()
    render json: articles, status: 200
  end

  def show
    article = Article.find_by(id: params[:id])

    if !article
      render json: { error: "Article not found" }
      return
    end

    render json: article, status: 200
  end

  def new
    article = Article.new
  end

  def create
    article = Article.new(title: article_params[:title], body: article_params[:body], author: article_params[:author])
    if article.save
      render json: article, status: 200
      return
    end

    render json: { error: "could not create article" }
  end

  def update
    article = Article.find(params[:id])
    if article
      article.update(title: params[:title], body: params[:body], author: params[:author])
      render json: "article was updated successfully", status: 200
      return
    end

    render json: { error: "could update article" }
  end

  def destroy
    article = Article.find(params[:id])
    if article
      article.destroy
      render json: "article was deleted successfully", status: 200
      return
    end

    render json: { error: "could delete article" }
  end

  private def article_params
    params.require(:article).permit(:title, :body, :author)
  end
end
