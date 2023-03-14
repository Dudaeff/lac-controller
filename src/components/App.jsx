import { Layout } from './Layout/Layout';
import { Controller } from './Controller/Controller';

const App = () => {
  return (
    <Layout>
      {/* {error && (
        <h1>
          Whoops... Something wetn wrong.{' '}
          <strong>Error: {error.message}</strong>
        </h1>
      )} */}
      <Controller />
    </Layout>
  );
};

export { App };
