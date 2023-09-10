import React from "react";
import { graphql, PageProps } from "gatsby";
import Layout from "../components/_App/layout"
import Navbar from "../components/_App/Navbar"
import Footer from "../components/_App/Footer"

// Define a type for your GraphQL query response
interface ArticleQueryData {
  directus: {
    articles: [{      
        id: string;
        title: string;
        body: string;
      }];
    };
  
}

const IndexPage: React.FC<PageProps<ArticleQueryData>> = ({ data }) => {
  const articles = data.directus.articles;
  return (
    <Layout>
    
      
    <Navbar />

    <section className="about-area ptb-100">
        <div className="container-fluid">
          <div className="row align-items-center"></div> 

    <div>
      <h1>Articles</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>{article.title}:{article.body}</li>
        ))}
      </ul>
    </div>
</div>
</section>
    <Footer />
    </Layout>
  );
};

export const query = graphql`
  query {
    directus {
      articles {
         
          id
          title
          body
        
      }
    }
  }
`;

export default IndexPage;
