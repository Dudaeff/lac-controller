import { Wrapper } from './Layout.styled';

const Layout = ({ children }) => {
  return (
    <main>
      <Wrapper>{children}</Wrapper>
    </main>
  );
};

export { Layout };
