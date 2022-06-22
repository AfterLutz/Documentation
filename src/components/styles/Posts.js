import styled from '@emotion/styled';

export const StyledHeading = styled('h1')`
  font-size: 32px;
  line-height: 1.5;
  font-weight: 500;
  //border-left: 2px solid #1ed3c6;
  padding: 0 16px;
  flex: 1;
  margin-top: 0;
  padding-top: 0;
  color: ${(props) => props.theme.colors.heading};
`;

export const Edit = styled('div')`
  padding: 1rem 1.5rem;
  text-align: right;

  a {
    font-size: 14px;
    font-weight: 500;
    line-height: 1em;
    text-decoration: none;
    color: #555;
    border: 1px solid rgb(211, 220, 228);
    cursor: pointer;
    border-radius: 3px;
    transition: all 0.2s ease-out 0s;
    text-decoration: none;
    color: rgb(36, 42, 49);
    background-color: rgb(255, 255, 255);
    box-shadow: rgba(116, 129, 141, 0.1) 0px 1px 1px 0px;
    height: 30px;
    padding: 5px 16px;
    &:hover {
      background-color: rgb(245, 247, 249);
    }
  }
`;

export const StyledMainWrapper = styled.div`
  max-width: 850px;
  color: ${(props) => props.theme.colors.text};
  padding-top: 20px;

  ul,
  ol {
    -webkit-padding-start: 40px;
    -moz-padding-start: 40px;
    -o-padding-start: 40px;
    margin: 24px 0px;
    padding: 0px 0px 0px 2em;
    list-style: '⇒ ' inside none;

    li {
      font-size: 16px;
      line-height: 1.8;
      font-weight: 400;
    }
  }

  a {
    transition: color 0.15s;
    color: ${(props) => props.theme.colors.link};
  }

  code {
    padding: 2px 6px;
    font-size: 0.9375em;
    font-family: Fira Code, monospace;
    font-weight: 550;
    background: ${(props) => props.theme.colors.background};
  }

  hr {
    margin-bottom: 30px;
    margin-top: 20px;
  }

  @media (max-width: 1007px) {
    padding: 0 15px;
  }
`;

export const StyledMainWrapperIndex = styled.div`
  max-width: 850px;
  color: ${(props) => props.theme.colors.text};
  padding-left: 50px;

  ul,
  ol {
    -webkit-padding-start: 40px;
    -moz-padding-start: 40px;
    -o-padding-start: 40px;
    margin: 15px 0px;
    padding: 0px 0px 0px 2em;
    list-style: '⇒ ' inside none;

    li {
      font-size: 16px;
      line-height: 1.8;
      font-weight: 400;
    }
  }

  a {
    transition: color 0.15s;
    color: ${(props) => props.theme.colors.link};
  }
  //code {
  //
  //  font-size: 16px;
  //  text-align: left;
  //}
  code {
    padding: 2px 6px;
    font-size: 0.9375em;
    font-family: Fira Code, monospace;
    font-weight: 550;
    background: ${(props) => props.theme.colors.background};
  }

  @media (max-width: 1007px) {
    padding: 0 15px;
  }
`;
