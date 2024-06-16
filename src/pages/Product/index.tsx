import { useRoutes } from 'react-router-dom';
import ArticleLayout from './components/ProductLayout';
import ArticleList from './components/ProductList';
import ArticleUpsert from './components/ProductUpsert';

const Article = () => {
  const router = useRoutes([
    {
      path: '',
      element: <ArticleLayout />,
      children: [
        {
          path: '',
          element: <ArticleList />,
          index: true,
        },
        {
          path: '/update/:id',
          element: <ArticleUpsert />,
        },
        {
          path: '/create',
          element: <ArticleUpsert />,
        },
      ],
    },
  ]);
  return router;
};

export default Article;
