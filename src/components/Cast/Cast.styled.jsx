import styled from '@emotion/styled';

export const CastList = styled.ul`
  display: flex;
  gap: 30px;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const IMG = styled.img`
  height: 200px;
  width: 180px;
  box-shadow: 0px 5px 4px rgba(46, 47, 66, 0.08),
    0px 4px 4px rgba(46, 47, 66, 0.16), 0px 4px 10px rgba(46, 47, 66, 0.08),
    0px 4px 10px rgba(46, 47, 66, 0.08);
`;

export const CastItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 270px;
  width: 180px;
  box-shadow: 0px 5px 4px rgba(46, 47, 66, 0.08),
    0px 4px 4px rgba(46, 47, 66, 0.16), 0px 4px 10px rgba(46, 47, 66, 0.08),
    0px 4px 10px rgba(46, 47, 66, 0.08);
`;

export const CastTitle = styled.h4`
  padding-top: 15px;
  font-size: 15px;
  color: white;
`;
export const CastP = styled.p`
  padding-top: 15px;
  font-size: 10px;
  color: white;
`;
