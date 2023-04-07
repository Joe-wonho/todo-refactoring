import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CustomedLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  &:hover,
  &:focus {
    cursor: pointer;
  }
  &:active {
    color: inherit;
  }
`;

const LinkTag = ({ url, children }) => <CustomedLink to={url}>{children}</CustomedLink>;

export default LinkTag;
