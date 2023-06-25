import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
export const MainDetails = styled.main`
  max-width: 1400px;
  padding: 50px 100px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  gap: 50px;
  flex-direction: column;
  background-color: black;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
`;
export const IMG = styled.img`
  height: auto;
  width: 400px;
  border-radius: 6px;
  box-shadow: 0px 7px 7px #40e6e1, 0px 7px 7px #40e6e1, 0px 3px 9px #40e6e1;
  // box-shadow: 0px 5px 4px rgba(46, 47, 66, 0.08),
  // 0px 4px 4px rgba(46, 47, 66, 0.16),
  // 0px 4px 10px rgba(46, 47, 66, 0.08),
  // 0px 4px 10px rgba(46, 47, 66, 0.08);
`;

export const ContainerInfo = styled.div`
  // display: flex;
  // gap: 50px;
`;
export const TitleDetail = styled.h1`
  color: white;
  font-size: 52px;
  font-weight: 700;
  padding-top: 20px;
  padding-bottom: 20px;
`;
export const UserScore = styled.p`
  color: white;
  font-size: 25px;
  font-weight: 500;
`;
export const Span = styled.span`
  color: white;
  font-size: 30px;
  font-weight: 500;
`;
export const TitleOverview = styled.h2`
  color: white;
  padding-top: 40px;
  font-size: 30px;
  font-weight: 600;
`;
export const POverview = styled.p`
  color: white;
  width: 677px;
  font-size: 24px;
  font-weight: 400;
`;
export const TitleGenres = styled.h3`
  color: white;
  font-size: 24px;
  font-weight: 600;
  padding-top: 40px;
  padding-bottom: 20px;
`;
export const GenresList = styled.ul`
  display: flex;
  gap: 20px;
`;
export const GenresP = styled.p`
  color: white;
  font-size: 20px;
  font-weight: 500;
`;
//============================================================
export const LinkList = styled.ul`
  height: 70px;
  display: flex;
  gap: 30px;
  align-items: center;
  justify-content: center;
`;
export const CastItem = styled.li``;
export const CastLink = styled(Link)`
  font-size: 30px;
  color: white;
  font-weight: 700;
`;
export const ReviewsItem = styled.li``;
export const ReviewsLink = styled(Link)`
  font-size: 30px;
  color: white;
  font-weight: 700;
`;
